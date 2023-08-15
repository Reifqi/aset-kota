"use client";
import React from 'react';
import Link from 'next/link';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';


const SignUp = () => {
    const [busy, setBusy] = useState(false);
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = userInfo;

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        setBusy(true);
        e.preventDefault();
        const res = await fetch('/api/auth/users', {
            method: 'POST',
            body: JSON.stringify(userInfo),
        }).then((res) => res.json());
        console.log(res);
        setBusy(false);
        router.replace("/auth/signIn");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Sign Up</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                        onChange={handleChange}
                                        value={name}
                                        name='name'
                                    />
                                </div>
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
                                <button type="submit" className="btn btn-primary" disabled={busy} style={{ opacity: busy ? 0.5 : 1 }}>Sign Up</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p className="mb-0">Sudah punya akun? <Link href="/auth/signIn">Log in disini</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
