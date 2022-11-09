import styles from "./navbar.module.scss";
import Image from "next/image";
import logo from "Public/logo.png";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.branding}>
                <Image
                    className={styles.logo}
                    alt="Logo"
                    src={logo}
                    placeholder="empty"
                />
                VoxelCore Studios
            </div>
        </nav>
    );
}
