/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Import 'useRouter' from 'next/router', not 'next/navigation'
import Alert from '@/components/Alert';

const SignIn = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const { email, password } = userInfo;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });
        if (res?.error) return setError(res.error);
        router.replace("/");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Log in</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {error ? (
                                    <div className="mb-3">
                                        <Alert value={error} />
                                    </div>
                                ) : null}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        value={email}
                                        name='email'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        onChange={handleChange}
                                        value={password}
                                        name='password'
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p className="mb-0">Belum punya akun? <Link href="/auth/signUp">Daftar akun disini</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
