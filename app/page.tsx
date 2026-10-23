export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <p className="mb-3 text-sm uppercase tracking-widest text-cyan-400">
        Built by Akash
      </p>
      <h1 className="text-4xl font-bold sm:text-6xl">Akash Chandran</h1>
      <p className="mt-4 max-w-xl text-lg text-slate-300">
        Salesforce developer building grounded AI agents.
      </p>
      <p className="mt-8 text-slate-400">Portfolio launching soon.</p>
      <div className="mt-8 flex gap-6 text-sm">
        <a className="underline hover:text-cyan-400" href="https://www.linkedin.com/in/akash-chandran">LinkedIn</a>
        <a className="underline hover:text-cyan-400" href="https://github.com/AkashChandranM07">GitHub</a>
      </div>
    </main>
  );
}