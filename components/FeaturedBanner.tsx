import styles from "@/styles/featuredBanner.module.scss";
import logo from "@/public/logo/img1.jpg";
import Image from "next/image";
export default function FeaturedBanner() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.imageWrapper}>
          <Image
            src={logo}
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Welcome to Our Platform</h2>
          <p className={styles.subtitle}>Discover amazing features and deals</p>
          <a href="/explore" className={styles.cta}>
            Explore Now
          </a>
        </div>
      </div>
    </>
  );
}
