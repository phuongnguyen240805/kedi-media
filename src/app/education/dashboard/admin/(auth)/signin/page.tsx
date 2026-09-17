import SignInForm from "@/features/education/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | Kedi - Next.js Dashboard Template",
  description: "This is Next.js Signin Page Kedi Dashboard Template",
};

export default function SignIn() {
  return <SignInForm />;
}
