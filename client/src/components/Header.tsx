import { useTranslation } from "react-i18next";
import SearchBar from "./SearchBar";
import logo from "../assets/artec-logo.avif";
import heart from "../assets/icons/heart.svg";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex flex-row justify-center items-center gap-4 my-3 mx-2 md:gap-7">
      <img src={logo} alt="artec brand logo" width={60} />

      <nav>
        <ul className="hidden gap-8 text-xs font-light md:flex md:flex-row">
          <li>
            <a href="/">{t("nav.home")}</a>
          </li>
          <li>
            <a href="/about">{t("nav.about")}</a>
          </li>
          <li>
            <a href="/products">{t("nav.products")}</a>
          </li>
          <li>
            <a href="/contact">{t("nav.contact")}</a>
          </li>
        </ul>
      </nav>

      <SearchBar />

      <a
        href="/favorites"
        className="bg-gray-100 flex items-center gap-2 rounded-full px-1.5 py-1.5"
      >
        <img src={heart} alt="heart icon" width={10} />
      </a>
    </header>
  );
}
