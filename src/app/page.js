import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Montaż klimatyzacji, instalacja anten RTV - Wrocław - Getmon.pl",
  description: "Zajmujemy się montażem anten, alarmu i klimatyzacji na terenie Wrocławia ⭐ Gwarancja ✅ bezpieczeństwo ✅ sprawdź naszą ofertę!",
};


export default function Home() {
  return (
<>
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className={styles.ctas}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
    </>
  );
}
