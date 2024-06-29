import { Header } from "@/components/header";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Header>
        <div className="flex items-center gap-4">
          <span className="text-half-white">Have an account?</span>

          <Link
            href="/sign-in"
            className="text-white flex items-center gap-1.5"
          >
            <LogOut />

            <span>Login</span>
          </Link>
        </div>
      </Header>
    </>
  );
}
