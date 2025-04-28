import styles from "./page.module.css";
import TopSection from "@/components/sections/TopSection";
import ServiceSection from "@/components/sections/ServiceSection";
import StartSection from "@/components/sections/StartSections";
import CounterSection from "@/components/sections/CounterSection";
import ReviewSection from "@/components/sections/ReviewSection";

export const metadata = {
  title: "Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl",
  description: "Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!",
};

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <TopSection />
          <ServiceSection />
          <StartSection />
          <CounterSection />
          <ReviewSection />
        </main>
      </div>
    </>
  );
}
