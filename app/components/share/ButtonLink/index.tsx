import { ButtonLinkPropsType } from "@/app/types/components";
import Link from "next/link";

const ButtonLink: React.FC<ButtonLinkPropsType> = ({ text, href }) => {
  return (
    <Link
      className="rounded-xl bg-blue-400 hover:bg-blue-500 px-6 py-2 inline-block me-2 h-10"
      href={href}
    >
      {text}
    </Link>
  );
};
export default ButtonLink;
