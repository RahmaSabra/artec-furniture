import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import LangSwitcher from "./LangSwitcher";
import { categories } from "../data/categories";
import fb from "../assets/icons/facebook.svg";
import wa from "../assets/icons/whatsapp.svg";
import mail from "../assets/icons/mail.svg";
import menu from "../assets/icons/hamburger-menu.svg";

export default function UtilityBar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setIsMenuOpenHandler = () => {
    console.log("clicked");
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-row items-center justify-between bg-[#88ba47] w-full py-2 px-4">
      <button onClick={setIsMenuOpenHandler} className="z-50">
        <img
          src={menu}
          alt="hamburger menu"
          width={15}
          className={isMenuOpen ? "" : "invert"}
        />
      </button>
      <div
        className={clsx(
          "fixed inset-y-0 inset-s-0 w-full bg-[#eee6e6] transition-opacity duration-300 sm:w-1/3",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="pt-10 px-5">
          <h2 className="text-lg pb-1">{t("categories.title")}</h2>
          <ul>
            {categories.map(({ id, slug }) => (
              <li key={id}>
                <a href={`/products/${slug}`} className="text-sm font-light">
                  {t(`categories.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-row gap-2 invert">
        <a href="mailto:artec.furniture@gmail.com">
          <img src={mail} alt="envelope vector" width={15} />
        </a>

        <a href="https://wa.me/201211770708">
          <img src={wa} alt="whatsapp logo" width={15} />
        </a>

        <a href="https://www.facebook.com/profile.php?id=100094231891035&ref=br_rs#">
          <img src={fb} alt="facebook logo" width={15} />
        </a>
      </div>

      <LangSwitcher />
    </div>
  );
}
