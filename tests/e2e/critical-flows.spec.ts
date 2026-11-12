import { expect, test, type Page } from "@playwright/test";

async function expectNoHorizontalOverflow(page: Page) {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
}

async function openTraining(page: Page) {
  await page.goto("/train");
  await expect(page.getByTestId("training-app")).toHaveAttribute(
    "data-ready",
    "true"
  );
  await expect(page.getByTestId("training-board")).toBeVisible();
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    if (!window.sessionStorage.getItem("chessgrind-e2e-cleared")) {
      window.localStorage.clear();
      window.sessionStorage.setItem("chessgrind-e2e-cleared", "true");
    }
  });
  await page.route("**/api/auth/session", (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ user: null }),
    })
  );
});

test("training shows every legal destination and solves the verified first puzzle", async ({ page }) => {
  await openTraining(page);
  await expect(page.getByText("You are Black", { exact: true })).toBeVisible();

  await page.locator('[data-square="e4"] [data-piece="bP"]').click();
  await expect(page.locator('[data-square="e3"] > div')).toHaveCSS(
    "background-image",
    /radial-gradient/
  );

  await page.locator('[data-square="e3"]').click();
  await expect(page.getByText("Well played.", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Next puzzle" })).toBeVisible();
});

test("wrong legal move is rejected and the puzzle remains playable", async ({ page }) => {
  await openTraining(page);
  await page.locator('[data-square="f4"] [data-piece="bR"]').click();
  await expect(page.locator('[data-square="f5"] > div')).toHaveCSS(
    "background-image",
    /radial-gradient/
  );
  await page.locator('[data-square="f5"]').click();
  await expect(page.getByText("Wrong move.", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Skip" })).toBeVisible();
});

test("saved puzzle appears in Grindbook without an account", async ({ page }) => {
  await openTraining(page);
  await page.getByRole("button", { name: "Save to Grindbook" }).click();
  await expect(page.getByRole("button", { name: "Position saved" })).toBeVisible();

  await page.goto("/grindbook");
  await expect(page.getByRole("heading", { name: "My Grindbook" })).toBeVisible();
  await expect(page.getByTestId("grindbook-app")).toHaveAttribute(
    "data-ready",
    "true"
  );
  await expect(page.getByText(/Puzzle CG-0001/)).toBeVisible();
});

test("full game entry point renders and responds", async ({ page }) => {
  await page.goto("/play");
  await expect(page.getByRole("heading", { name: "Play vs Computer" })).toBeVisible();
  await expect(page.locator('[data-square]')).toHaveCount(64);
  await page.getByRole("button", { name: "New Game" }).click();
  await expect(page.locator('[data-square]')).toHaveCount(64);
});

test("account entry point renders both private auth modes", async ({ page }) => {
  await page.goto("/account");
  await expect(page.getByRole("button", { name: "Create account" })).toBeVisible({
    timeout: 15_000,
  });
  await expect(page.getByRole("button", { name: "Sign in" })).toBeVisible();
});

test("critical pages fit the active viewport", async ({ page }) => {
  for (const route of ["/train", "/play", "/grindbook", "/account"]) {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expectNoHorizontalOverflow(page);
  }
});
