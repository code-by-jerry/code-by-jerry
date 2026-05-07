import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const whatsappProjectHref =
  "https://api.whatsapp.com/send?phone=917092936243&text=Hi%20Jerry%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.&app_absent=0";

export default function BlogArticleCTA({ category }) {
  return (
    <div className="mt-10 overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#4f46e5_100%)] p-6 text-white shadow-[0_28px_72px_-34px_rgba(37,99,235,0.44)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/62">
            {category ? `${category} Project Help` : "Project Help"}
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            Need this kind of system built for your business?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
            Share the workflow, bottleneck, or product idea. I can help you
            shape the right technical direction and turn it into a scalable
            digital system.
          </p>
        </div>

        <div className="grid gap-3 sm:flex sm:flex-wrap lg:justify-end">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_18px_44px_-24px_rgba(255,255,255,0.7)] transition-all hover:-translate-y-1"
          >
            Send Project Details
            <FaArrowRight size={11} />
          </a>
          <a
            href={whatsappProjectHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/8 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:border-white/32 hover:bg-white/12"
          >
            <FaWhatsapp size={14} />
            WhatsApp Jerry
          </a>
        </div>
      </div>
    </div>
  );
}
