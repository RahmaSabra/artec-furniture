import { useTranslation } from "react-i18next";
import logo from "../assets/artec-logo.avif";
import SearchBar from "./SearchBar";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex flex-row items-center gap-4 my-3 mx-4 ">
      <img src={logo} alt="artec brand logo" width={60} />
      <nav className="hidden gap-8 text-xs font-light md:flex md:flex-row">
        <a href="/">{t("nav.home")}</a>
        <a href="/about">{t("nav.about")}</a>
        <a href="/products">{t("nav.products")}</a>
        <a href="/contact">{t("nav.contact")}</a>
      </nav>
      <SearchBar />
    </header>
  );
}
