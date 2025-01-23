"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-emerald-700">
              SocialScope
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-emerald-700 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-emerald-700 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/admin"
              className="text-gray-600 hover:text-emerald-700 transition-colors"
            >
              Admin
            </Link>
            <Link href="/login">
              <button className="px-4 py-2 bg-zinc-700 rounded-full">
                Login
              </button>
            </Link>
            <button className="px-4 py-2 bg-zinc-700 rounded-full">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
