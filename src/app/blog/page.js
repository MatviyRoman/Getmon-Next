import Navbar from "../components/Navbar";

export const metadata = {
    title: "Блог GetMon – Корисні статті про моніторинг",
    description: "Читайте найновіші статті про моніторинг та аналіз даних...",
};

export default function Blog() {
    return (
    <>
        <Navbar />
        <h1>Блог</h1>
    </>
    );
}