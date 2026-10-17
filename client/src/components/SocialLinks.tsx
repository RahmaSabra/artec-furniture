import fb from "../assets/icons/facebook.svg";
import wa from "../assets/icons/whatsapp.svg";
import mail from "../assets/icons/mail.svg";

export default function SocialLinks() {
  return (
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
  );
}
