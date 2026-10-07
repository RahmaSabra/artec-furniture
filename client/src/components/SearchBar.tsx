import { useTranslation } from "react-i18next";
import magnifier from "../assets/icons/magnifier.svg";

export default function SearchBar() {
  const { t } = useTranslation();
  return (
    <form className="flex flex-row items-center justify-between bg-gray-100 rounded-full w-2/3 h-6 px-2 md:w-1/2 ">
      <input
        type="search"
        placeholder={t("search.placeholder")}
        className="w-full bg-transparent outline-none text-[10px] text-black placeholder:text-gray-400 font-extralight"
      />
      <button>
        <img src={magnifier} alt="magnifier icon" width={12} />
      </button>
    </form>
  );
}
