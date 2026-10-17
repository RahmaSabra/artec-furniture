import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import LangSwitcher from "./LangSwitcher";
import SocialLinks from "./SocialLinks";
import { categories } from "../data/categories";
import menu from "../assets/icons/hamburger-menu.svg";

export default function UtilityBar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setIsMenuOpenHandler = () => {
    console.log("clicked");
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-row items-center justify-between bg-[#88ba47] w-full py-1 px-4">
      <button onClick={setIsMenuOpenHandler} className="z-50 cursor-pointer">
        <img
          src={menu}
          alt="hamburger menu"
          width={16}
          className={isMenuOpen ? "" : "invert"}
        />
      </button>
      <div
        className={clsx(
          "fixed inset-y-0 inset-s-0 z-40 w-full bg-[#eee6e6] transition-opacity duration-300 sm:w-1/3",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="pt-10 px-5">
          <h2 className="text-lg pb-1">{t("categories.title")}</h2>
          <ul>
            {categories.map(({ id, slug }) => (
              <li key={id}>
                <a
                  href={`/products/${slug}`}
                  className="text-sm font-light transition-colors duration-300 ease-in-out hover:text-[#96795d]"
                >
                  {t(`categories.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <SocialLinks />
      <LangSwitcher />
    </div>
  );
}
