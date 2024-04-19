'use client';

import React, { useEffect, useState } from "react";
import { Button } from './Button';
import { redirect } from 'next/navigation';
import Router from "next/router";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

function Login() {
    const [value, setValue] = useState('')
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const { push } = useRouter();

    const submitHandler = (event) => {
        event?.preventDefault();
        console.log("event--->", password, email);
        if (password?.toLowerCase() === "demo" && email?.toLowerCase() === "demo") {
            setValue("true");
            push('/mens');
        }
        else {
            setValue("false");
        }
    }

    const emailHandler = (event) => {
        setEmail(event?.target?.value);

    }
    const passwordHandler = (event) => {
        setPassword(event?.target?.value);
    }

    function NavLink({
        href,
        children,
    }: {
        href: string
        children: React.ReactNode
    }) {
        return (
            <Link
                href={href}
                className="transition hover:text-teal-500 dark:hover:text-teal-400"
            >
                {children}
            </Link>
        )
    }

    return (
        <>
            <form action="#" >
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white-900">
                        Email
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={emailHandler}
                            autoComplete="email"
                            className="block  bg-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white-900">
                        Password
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            onChange={passwordHandler}
                            autoComplete="family-name"
                            className="block  bg-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </form>

            <br />
            <p>Hint: For demo purposes, enter email and password as demo.</p>
            {value === "false" && (
                <p>Please enter correct email and password</p>
            )}
            <button
                type="submit"
                onClick={submitHandler}
                className="block w-75 rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Login
            </button>

            {/* <Button variant="primary" className="mt-4" type="submit">Login</Button> */}

        </>
    );
}
export default Login;