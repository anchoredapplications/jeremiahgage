"use client"
import styles from './Footer.module.scss'
require('dotenv').config()

export default function Landing() {
    return (
        <section className={styles.footer}> 
            © {new Date().getFullYear()}; Jeremiah Gage | {process.env.NEXT_PUBLIC_VERSION_NUMBER}
        </section>
    );
}
