"use client";
import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';

export default function AuthProfileMenu() {
  const { data, status } = useSession();

  const isAuth = status === 'authenticated';
  const userRole = data?.user?.role || '';

  return (
    <>
      {isAuth ? (
        <div className="d-flex align-items-center">
          <span
            className={userRole === 'admin' ? "me-2 text-success" : "me-2"}
            style={{ fontWeight: userRole === 'admin' ? "bold" : "normal" }}
          >
            Welcome, {data?.user?.name}
          </span>
          {userRole === 'admin' && (
            <Link href="/dashboard" className="btn btn-outline-dark btn-sm me-2">
              Dashboard
            </Link>
          )}
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
      ) : (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/auth/signIn" className='nav-link'>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/auth/signUp" className='nav-link'>
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
