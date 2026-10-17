import LangSwitcher from "./LangSwitcher";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#88ba47] h-80">
      <div className="flex flex-row justify-between px-4">
        <SocialLinks />
        <LangSwitcher />
      </div>
    </footer>
  );
}
