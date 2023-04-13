"use client"

import { useState } from "react"

const RegisterForm = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <form className="flex flex-col items-center" onSubmit={ handleSubmit }>
            <label className="px-0 py-1 text-left text-primary" htmlFor="full name">
                Full name
            </label>
            <input
                className="mx-0 my-2 rounded border-2 border-primary p-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
                placeholder="Full Name"
            />
            <label className="px-0 py-1 text-left text-primary" htmlFor="email">
                Email
            </label>
            <input
                className="mx-0 my-2 rounded border-2 border-primary p-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="youremail@email.com"
                id="email"
                name="email"
            />
            <label className="px-0 py-1 text-left text-primary" htmlFor="password">
                Password
            </label>
            <input
                className="mx-0 my-2 rounded border-2 border-primary p-4"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
            />
            <button className="px-20 py-1 rounded-sm border-primary bg-secondary text-white">
                Register
            </button>
        </form>
    )
}

export default RegisterForm