import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
    return (
     <nav className="h-16 flex items-center justify-between px-4 bg-neutral-900 border-b border-white/15">
        <div className="text-lg font-bold">AppLogo</div>
        <UserButton />
      </nav>
    );
}
