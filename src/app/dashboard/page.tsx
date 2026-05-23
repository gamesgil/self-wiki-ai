import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">Dashboard</p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Project dashboard</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="secondary">Overview</Button>
            <Button>New item</Button>
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
