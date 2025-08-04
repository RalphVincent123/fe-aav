"use client";
// hooks/
import { usePrevNextButtons } from "@/hook/CarouselEmblaArrowButton";
import useEmblaCarousel from "embla-carousel-react";

//Icons
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

//Dummy Data
import { ImageData } from "@/libs/Dummydata";

//styles
import styles from "@/styles/Carousel.module.scss";
import Image from "next/image";

export default function SliderBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {ImageData.map((data, i) => (
            <div className={styles.embla__slide} key={i}>
              <Image
                src={data.image}
                alt={data.title}
                className={styles.imgs}
                fill
                priority
              />
              <div className={styles.embla__caption}>
                <div className={styles.category}>{data.category}</div>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.sponsor}>Sponsored | {data.sponsor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.embla__controls}>
        <div className={styles.sectionTitle}>Most Trending topic</div>
        <div className={styles.embla__buttons}>
          <button onClick={onPrevButtonClick} className={styles.embla__button}>
            <GrFormPrevious />
          </button>
          <button onClick={onNextButtonClick} className={styles.embla__button}>
            <GrFormNext />
          </button>
        </div>
      </div>
    </section>
  );
}
