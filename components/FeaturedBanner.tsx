import styles from "@/styles/featuredBanner.module.scss";
import logo from "@/public/logo/img1.jpg";
import Image from "next/image";
export default function FeaturedBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.raise}>
        <span className={styles.section}>Top News</span>
      </div>
      <div className={styles.card}>
        <Image src={logo} alt="asdad" className={styles.images} />
        <div className={styles.content}>
          <span className={styles.title}>Card One</span>
          <br />
          <span className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            error veniam quam reprehenderit saepe quae corporis. Aliquid tempora
            ea incidunt debitis dolorem. Aliquam, nihil? Quibusdam illo iste
            distinctio pariatur soluta?
          </span>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={logo} alt="asdad" className={styles.images} />
        <div className={styles.content}>
          <span className={styles.title}>Card One</span>
          <br />
          <span className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            error veniam quam reprehenderit saepe quae corporis. Aliquid tempora
            ea incidunt debitis dolorem. Aliquam, nihil? Quibusdam illo iste
            distinctio pariatur soluta?
          </span>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={logo} alt="asdad" className={styles.images} />
        <div className={styles.content}>
          <span className={styles.title}>Card Ones</span>
          <br />
          <span className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            error veniam quam reprehenderit saepe quae corporis. Aliquid tempora
            ea incidunt debitis dolorem. Aliquam, nihil? Quibusdam illo iste
            distinctio pariatur soluta?
          </span>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={logo} alt="asdad" className={styles.images} />
        <div className={styles.content}>
          <span className={styles.title}>Card One</span>
          <br />
          <span className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            error veniam quam reprehenderit saepe quae corporis. Aliquid tempora
            ea incidunt debitis dolorem. Aliquam, nihil? Quibusdam illo iste
            distinctio pariatur soluta?
          </span>
        </div>
      </div>
    </div>
  );
}
