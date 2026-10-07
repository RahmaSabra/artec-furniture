import { useTranslation } from "react-i18next";
import globe from "../assets/icons/globe.svg";

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  return (
    <button
      className="flex flex-row justify-center items-center gap-1 cursor-pointer"
      onClick={handleLanguageChange}
    >
      <img
        src={globe}
        alt="globe symbol, language change button"
        width={15}
        className="invert"
      />
      <div className="bg-white w-px h-3"></div>
      <p className="text-white text-xs uppercase ">{i18n.language}</p>
    </button>
  );
}
