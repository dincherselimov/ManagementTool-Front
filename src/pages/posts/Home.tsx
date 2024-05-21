import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (

    <section>
    <div className="container">
        <h1>Welcome to the Home Page</h1>
        <div className="button-container">
            <Link href="/login">
            <button className="login-button">Login</button>
            </Link>
            <Link href="/register">
            <button className="register-button">Register</button>
            </Link>
        </div>
        </div>
    </section>
  );
}
