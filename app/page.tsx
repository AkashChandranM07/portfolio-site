import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* Central Content */}
      <div className="max-w-3xl flex flex-col items-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
          <span className="flex h-2 w-2 rounded-full bg-cyan-500 mr-3 animate-pulse"></span>
          Under Construction
        </div>
        
        <h1 className="text-4xl font-bold sm:text-5xl text-white tracking-tight leading-tight mb-6">
          A portfolio is being built by <br className="hidden sm:block" />
          <span className="text-cyan-400">Akash Chandran Mayilvaganan</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
          A Salesforce Developer who builds agents from the ground up.
        </p>
      </div>

      {/* Footer with LinkedIn */}
      <div className="absolute bottom-12 flex flex-col items-center">
        <a 
          href="https://www.linkedin.com/in/akash-chandran"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 hover:text-cyan-400 transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
          </svg>
        </a>
      </div>

    </main>
  );
}