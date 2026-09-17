import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký | Kedi.Media",
  description: "Tạo tài khoản Kedi.Media",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
