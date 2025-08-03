import Image from "next/image";
import styles from "./page.module.css";
import ArticleBanner from "@/components/ArticleBanner";
import FeaturedBanner from "@/components/FeaturedBanner";

export default function Home() {
  return (
    <main id="main" style={{ position: "relative", background: "#212529" }}>
      <ArticleBanner />
      <FeaturedBanner />
    </main>
  );
}
