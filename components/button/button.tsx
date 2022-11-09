"use client";
import styles from "./button.module.scss";
import { MouseEventHandler } from "react";

interface ButtonProps {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            {label}
        </button>
    );
}
