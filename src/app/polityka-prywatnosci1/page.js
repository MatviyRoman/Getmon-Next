import Image from "next/image";
import styles from "../page.module.css"; // You can customize this to your layout

export const metadata = {
    title: "Polityka Prywatności - Getmon.pl",
    description: "Zapoznaj się z polityką prywatności na stronie Getmon.pl",
};

export default function PrivacyPolicy() {
    return (
        <>
            <div className={styles.page}>
                <main className={styles.main}>
                    <h1>Polityka Prywatności</h1>
                    <p>
                        Witaj na stronie polityki prywatności Getmon.pl. Twoja prywatność jest dla nas ważna, dlatego chcemy Cię poinformować, jak gromadzimy, przetwarzamy i przechowujemy Twoje dane osobowe.
                    </p>
                    <h2>1. Gromadzenie Danych</h2>
                    <p>
                        W procesie korzystania z naszej strony internetowej mogą być zbierane różne dane, takie jak dane kontaktowe, dane dotyczące lokalizacji, dane przeglądarki internetowej, itp.
                    </p>
                    <h2>2. Przechowywanie Danych</h2>
                    <p>
                        Twoje dane są przechowywane w sposób bezpieczny i nie będą udostępniane osobom trzecim, chyba że jest to wymagane przez prawo.
                    </p>
                    <h2>3. Pliki Cookies</h2>
                    <p>
                        Strona używa plików cookies, aby poprawić Twoje doświadczenia. Możesz zarządzać ustawieniami cookies w swojej przeglądarce.
                    </p>

                    <div className={styles.ctas}>
                        <a
                            className={styles.primary}
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Powróć do strony głównej
                        </a>
                    </div>
                </main>
                <footer className={styles.footer}>
                    <a
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/file.svg"
                            alt="File icon"
                            width={16}
                            height={16}
                        />
                        Learn
                    </a>
                </footer>
            </div>
        </>
    );
}
