import styles from "@/styles/ArticleBanner.module.scss";
import Image from "next/image";
import logo from "@/public/logo/img1.jpg";

export default function ArticleBanner() {
  return (
    <div className={styles.banner}>
      <Image src={logo} fill alt="Cover" />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Group of Deer Seen Near Mountain Trail
          </h1>
          <div className={styles.meta}>
            <button className={styles.buttonCta}>Discover More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
