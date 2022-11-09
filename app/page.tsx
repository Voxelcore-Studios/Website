"use client";

import styles from "Styles/pages/Home.module.scss";
import "Styles/globals.scss";
import Button from "Components/button/button";
import logo from "Public/logo.png";
import Image from "next/image";

export default function Page() {
    const handleClick = () => {
        window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSdj6AyA6vIIjpVD7fZTDWcs1stMMpOH8mHTYH8X_AluMM2gPA/viewform?usp=sf_link",
            "_blank"
        );
    };

    return (
        <div className={`container ${styles.construction}`}>
            <Image
                className={styles.logo}
                alt="Logo"
                src={logo}
                placeholder="empty"
            />
            <h1>UNDER CONSTRUCTION</h1>
            <div className={styles.callToAction}>
                <p>Want to join our team?</p>
                <Button label="WORK WITH US" onClick={handleClick} />
            </div>
        </div>
    );
}
