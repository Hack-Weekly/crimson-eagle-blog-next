import type { NextPage } from "next"
import Link from "next/link"
import LoginForm from "./components/login-form"

export const metadata = {
  title: 'Login :: Crimson Blog',
  description: 'Log in to add or modify your posts.',
}

const Login: NextPage = () => (
    <div className="flex flex-col items-center justify-center border-2 border-primary p-20">
        <LoginForm />
        <Link href="/register" className="bg-none py-2 text-primary underline">
            Don&apos;t have an account? Register here.
        </Link>
    </div>
)

export default Login