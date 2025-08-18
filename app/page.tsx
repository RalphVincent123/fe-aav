import ArticleBanner from "@/components/ArticleBanner";
import FeaturedBanner from "@/components/FeaturedBanner";
import SliderBanner from "@/components/SliderBanner";
import { verifyAuth } from "@/libs/authentication/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect("/login");
  }

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
