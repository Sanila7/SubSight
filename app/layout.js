import "./globals.css";
import './fanta.css'
import Head from "./Head";
import Link from "next/link";
import GoTo from "@/components/GoTo";
import { AuthProvider } from "@/context/AuthContext";


export const metadata = {
    title: "SubSight · The Subscription Tracker",
    description: "Track your subscription analytics"
};

export default function RootLayout ({ children }) {
    const header = (
        <header>
            <div>
                <Link href={'/'}>
                    <h1 className="text-gradient">SubSight</h1>
                </Link>
                <p>A Subscription Tracker</p>
            </div>
            <GoTo />
        </header>
    )

    const footer = (
        <footer>
            <div className="hard-line" />
            <div className="footer-content">
                <div>
                    <div>
                       <h4>SubSight</h4> 
                       <p>|</p>
                       <button disabled>Install app</button>
                    </div>
                    <p className="copyright"> Copyright 2025

                    </p>
                </div>
                <div>
                    <p>Facing issues? <a>Get help</a></p>
                    <p>Suggestions for improvement? <a>Share feedback</a></p>
                    <div>
                        <Link href={'/privacy'}>Privacy Policy</Link>
                        <Link href={'/tos'}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )

    return (
        <html lang="en">
            <Head />
            <AuthProvider>

            
            <body >
                {header}
                <div className="full-name" />
                <main>
                    {children}
                </main>
                {footer}
            </body>
            </AuthProvider>
        </html>
    );
}