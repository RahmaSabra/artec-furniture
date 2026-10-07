import LangSwitcher from "./LangSwitcher";
import fb from "../assets/icons/facebook.svg";
import wa from "../assets/icons/whatsapp.svg";
import mail from "../assets/icons/mail.svg";

export default function UtilityBar() {
  return (
    <div
      dir="ltr"
      className="flex flex-row items-center justify-between bg-[#88ba47] w-full py-2 px-4"
    >
      <LangSwitcher />

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
    </div>
  );
}
