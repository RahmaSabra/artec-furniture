import Home from "./pages/Home";
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();
  document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = i18n.language;

  return (
    <>
      <Home />
    </>
  );
}
