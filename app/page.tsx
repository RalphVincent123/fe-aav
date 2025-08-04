import Image from "next/image";
import styles from "./page.module.css";
import ArticleBanner from "@/components/ArticleBanner";
import FeaturedBanner from "@/components/FeaturedBanner";
import SliderBanner from "@/components/SliderBanner";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main id="main" style={{ position: "relative" }}>
      <ArticleBanner />
      <FeaturedBanner />
      <div style={{ background: "black", width: "100%" }}>
        <SliderBanner />
      </div>
    </main>
  );
}
