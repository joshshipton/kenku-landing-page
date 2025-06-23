"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    try {
      const { error } = await supabase.from("waitlist").insert([{ email }]);
      if (error) {
        setError(true);
      } else {
        setSuccess(true);
        setEmail("");
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b border-gray-200 z-50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-black text-2xl">Kenku 2.0</div>
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#features" className="hover:text-gray-700 transition-colors">Features</a>
            <a href="#tech" className="hover:text-gray-700 transition-colors">Technology</a>
            <a href="#analytics" className="hover:text-gray-700 transition-colors">Analytics</a>
            <a href="#waitlist" className="hover:text-gray-700 transition-colors">Waitlist</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white pt-32 pb-16" id="hero">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 items-center">
          <div>
            <h1 className="text-black font-black text-5xl lg:text-7xl leading-tight mb-4">
              Train Smarter with <span className="text-gray-900">AI-Powered</span> Grappling Insights
            </h1>
            <p className="font-semibold text-xl lg:text-2xl text-gray-700 mb-8">
              Kenku 2.0 revolutionizes your training journal with semantic search, actionable analytics, and an AI coach that learns your game.
            </p>
          </div>
          <div>
            <div className="bg-white border-4 border-black shadow-2xl rounded-2xl p-8 max-w-md mx-auto lg:mx-0">
              <h2 className="text-black font-black text-3xl lg:text-4xl leading-tight mb-2">Get Early Access</h2>
              <p className="font-semibold text-lg lg:text-xl text-gray-700 mb-6">
                Join the Kenku 2.0 beta waitlist and help shape the future of grappling analytics. Limited spots available!
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border-2 border-black bg-transparent text-black placeholder-gray-400 focus:outline-none focus:border-gray-700 rounded"
                    disabled={loading}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 text-lg font-bold hover:bg-gray-900 transition-colors rounded flex items-center justify-center"
                    disabled={loading}
                  >
                    {!loading ? "Join Waitlist" : (
                      <svg className="animate-spin h-5 w-5 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                    )}
                  </button>
                </div>
                {success && <div className="text-green-600 font-semibold">Thank you! You're on the waitlist.</div>}
                {error && <div className="text-red-600 font-semibold">Something went wrong. Please try again.</div>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-gray-50 py-20" id="problem">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-bold text-4xl lg:text-6xl text-black leading-tight">Why settle for static training journals?</h2>
          <p className="font-normal text-base lg:text-lg leading-relaxed text-gray-700">
            Traditional notebooks and apps force you to flip, scroll, and search endlessly. They miss connections, can't analyze your progress, and never adapt to your evolving game. Kenku 2.0 changes everything.
          </p>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-20" id="features">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* Feature 1 */}
          <div className="bg-white border-2 border-black p-8 hover:shadow-lg transition-shadow rounded-xl flex flex-col items-start">
            <svg className="w-12 h-12 mb-4 stroke-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
            <h3 className="font-bold text-xl mb-4">AI Coach</h3>
            <p className="font-normal text-base leading-relaxed text-gray-700">Get personalized suggestions, study plans, and feedback based on your unique training data.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white border-2 border-black p-8 hover:shadow-lg transition-shadow rounded-xl flex flex-col items-start">
            <svg className="w-12 h-12 mb-4 stroke-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
            <h3 className="font-bold text-xl mb-4">Semantic Search</h3>
            <p className="font-normal text-base leading-relaxed text-gray-700">Find any technique, note, or concept instantly with natural language and semantic matching.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white border-2 border-black p-8 hover:shadow-lg transition-shadow rounded-xl flex flex-col items-start">
            <svg className="w-12 h-12 mb-4 stroke-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>
            <h3 className="font-bold text-xl mb-4">Actionable Analytics</h3>
            <p className="font-normal text-base leading-relaxed text-gray-700">Visualize your progress, spot trends, and get insights that drive improvement.</p>
          </div>
          {/* Feature 4 */}
          <div className="bg-white border-2 border-black p-8 hover:shadow-lg transition-shadow rounded-xl flex flex-col items-start">
            <svg className="w-12 h-12 mb-4 stroke-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
            <h3 className="font-bold text-xl mb-4">Notebook Aesthetic</h3>
            <p className="font-normal text-base leading-relaxed text-gray-700">Clean, sharp borders and generous white space for a focused, distraction-free experience.</p>
          </div>
          {/* Feature 5 */}
          <div className="bg-white border-2 border-black p-8 hover:shadow-lg transition-shadow rounded-xl flex flex-col items-start">
            <svg className="w-12 h-12 mb-4 stroke-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 20V4m8 8H4" /></svg>
            <h3 className="font-bold text-xl mb-4">Mobile-First</h3>
            <p className="font-normal text-base leading-relaxed text-gray-700">Designed for every device. Touch-friendly, readable, and lightning fast.</p>
          </div>
          {/* Feature 6 */}
          <div className="bg-white border-2 border-black p-8 hover:shadow-lg transition-shadow rounded-xl flex flex-col items-start">
            <svg className="w-12 h-12 mb-4 stroke-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
            <h3 className="font-bold text-xl mb-4">Beta Community</h3>
            <p className="font-normal text-base leading-relaxed text-gray-700">Shape the future of grappling analytics by joining our early access group.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        &copy; 2025 Kenku. All rights reserved. Built by <a href="https://instagram.com/hiptossjosh" className="underline hover:text-gray-200">@hiptossjosh</a>.
      </footer>
    </>
  );
}
