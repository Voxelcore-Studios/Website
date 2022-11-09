import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "Public/logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={`container ${styles.footer}`}>
            <Image
                className={styles.logo}
                alt="Logo"
                src={logo}
                placeholder="empty"
            />
            <div>
                <div className={styles.social}>
                    <Link href="https://youtube.com/@VoxelCore">YOUTUBE</Link>
                </div>
                <div className={styles.social}>
                    <Link href="https://www.instagram.com/voxelcorestudios">
                        INSTAGRAM
                    </Link>
                </div>
                <div className={styles.social}>
                    <Link href="https://twitter.com/voxelcorestudio">
                        TWITTER
                    </Link>
                </div>
            </div>
            <div className={styles.legal}>
                <p>&copy; {new Date().getFullYear()} VOXELCORE STUDIOS</p>
            </div>
        </footer>
    );
}
