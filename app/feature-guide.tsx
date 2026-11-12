import Link from "next/link";

type GuideStep = {
  title: string;
  body: string;
};

type GuideQuestion = {
  question: string;
  answer: string;
};

type GuideLink = {
  href: string;
  label: string;
};

type FeatureGuideProps = {
  eyebrow: string;
  title: string;
  introduction: string[];
  steps: GuideStep[];
  questions: GuideQuestion[];
  links: GuideLink[];
};

export default function FeatureGuide({
  eyebrow,
  title,
  introduction,
  steps,
  questions,
  links,
}: FeatureGuideProps) {
  return (
    <section className="mt-20 border-t border-[var(--line)] pt-10" aria-labelledby={`${eyebrow.toLowerCase().replaceAll(" ", "-")}-guide`}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,.85fr)]">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
            {eyebrow}
          </div>
          <h2 id={`${eyebrow.toLowerCase().replaceAll(" ", "-")}-guide`} className="mt-3 max-w-[680px] text-[30px] font-semibold leading-tight sm:text-[36px]">
            {title}
          </h2>
          <div className="mt-5 max-w-[720px] space-y-4 text-[14px] leading-7 text-[var(--secondary)]">
            {introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[34px_1fr] gap-3 py-5">
              <span className="font-mono text-[11px] font-semibold text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[14px] font-semibold">{step.title}</h3>
                <p className="mt-1 text-[12px] leading-5 text-[var(--secondary)]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 grid gap-x-10 gap-y-7 border-t border-[var(--line)] pt-8 md:grid-cols-2">
        {questions.map((item) => (
          <div key={item.question}>
            <h3 className="text-[14px] font-semibold">{item.question}</h3>
            <p className="mt-2 text-[13px] leading-6 text-[var(--secondary)]">{item.answer}</p>
          </div>
        ))}
      </div>

      <nav aria-label={`${eyebrow} related pages`} className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--line)] pt-6 text-[12px] font-semibold">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-[var(--accent)] hover:underline">
            {link.label} <span aria-hidden="true">→</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
