export const AUTH_UPDATED_EVENT = "chessgrind-auth-updated";
export const GRINDBOOK_CLOUD_EVENT = "chessgrind-cloud-status";
export const LAST_CLOUD_USER_KEY = "chessgrind-last-cloud-user";

export type AccountUser = {
  id: string;
  handle: string;
  createdAt: string;
};

export type CloudStatus = "guest" | "syncing" | "synced" | "error";

export function notifyAuthUpdated() {
  window.dispatchEvent(new Event(AUTH_UPDATED_EVENT));
}

export function notifyCloudStatus(status: CloudStatus) {
  window.dispatchEvent(
    new CustomEvent(GRINDBOOK_CLOUD_EVENT, { detail: status })
  );
}
