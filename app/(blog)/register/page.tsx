import type { NextPage } from "next"
import Link from "next/link"
import RegisterForm from "./components/register-form"

export const metadata = {
  title: 'Register :: Crimson Blog',
  description: 'Register to be able to add your own posts.',
}

const Register: NextPage = () => (
    <div className="flex flex-col items-center justify-center border-2 border-primary p-20">
        <RegisterForm />
        <Link href="/login" className="bg-none py-2 text-primary underline">
            Already have an account? Log in here.
        </Link>
    </div>
)

export default Register