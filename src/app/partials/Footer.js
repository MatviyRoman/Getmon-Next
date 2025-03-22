export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} GetMon. Усі права захищено.
                </p>
                <nav className="mt-4">
                    <ul className="flex justify-center space-x-6 text-sm">
                        <li>
                            <a href="/about" className="hover:underline">
                                Про нас
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:underline">
                                Політика конфіденційності
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Контакти
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
