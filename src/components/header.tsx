import Image from "next/image";
import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="px-8 py-6 border-b-[1px] border-wut-gray-800 flex justify-between">
      <Image alt="Wut logo" src="/wut.svg" width={50} height={20} />

      {children}
    </header>
  );
}
