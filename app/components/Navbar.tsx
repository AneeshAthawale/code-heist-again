export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          CODE <span className="text-cyan-400">HEIST</span>
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#">About</a>
          <a href="#">Rules</a>
          <a href="#">Timeline</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}