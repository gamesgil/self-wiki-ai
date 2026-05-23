import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 sm:flex-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">Dashboard</p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Project dashboard</h1>
            </div>
            <div className="ml-auto hidden items-center gap-3 sm:flex">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition hover:bg-slate-300"
                aria-label="Toggle theme"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M18.364 18.364l-1.414-1.414M7.05 7.05L5.636 5.636" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </button>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
                AJ
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Menu</h2>
        </aside>
        <div className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Dashboard</h2>
          </section>
        </div>
      </section>
    </main>
  );
}
