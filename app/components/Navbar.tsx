"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          CODE <span className="text-cyan-400">HEIST</span>
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#">About</a>
          <a href="#">Timeline</a>
          <a href="#">Contact</a>
          <Link href="/">Home</Link>
          <Link href="/Register">Register</Link>
          <Link
            href="/Rules"
            className={
              pathname === "/Rules"
                ? "text-cyan-400 font-semibold"
                : "text-gray-300"
            }
          >
            Rules
          </Link>
          <Link
            href="/Login"
            className={
              pathname === "/Login"
                ? "text-cyan-400 font-semibold"
                : "text-gray-300"
            }
          >
            Login
          </Link>
          <Link
            href="/contest"
            className={
              pathname === "/contest"
                ? "text-cyan-400 font-semibold"
                : "text-gray-300"
            }
          >
            Contest
          </Link>
        </div>
      </div>
    </nav>
  );
}