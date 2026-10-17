import { useTranslation } from "react-i18next";
import globe from "../assets/icons/globe.svg";

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = async () => {
    const newLanguage = i18n.language === "ar" ? "en" : "ar";

    await i18n.changeLanguage(newLanguage);
    document.documentElement.lang = newLanguage;
  };

  return (
    <button
      className="flex flex-row justify-center items-center gap-1 border border-white rounded-full py-1 px-1.5 cursor-pointer"
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
