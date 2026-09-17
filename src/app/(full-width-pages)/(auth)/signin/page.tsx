import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Đăng nhập | Kedi.Media",
  description: "Đăng nhập Kedi.Media",
};

export default function SignIn() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <SignInForm />
    </Suspense>
  );
}
