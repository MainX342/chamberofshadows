import { assaMenuItems } from "../constants/content";
import { Link } from "react-scroll";

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

export default function Menu(props: MenuProps) {
  const { isOpen, setIsOpen, menuRef } = props;

  return (
    <aside
      ref={menuRef}
      className={`${
        isOpen
          ? "opacity-100 visible [transition:transform_.2s_ease-in-out_.2s,opacity_.2s_ease-in-out_0.2s,visibility_0s] -translate-y-4"
          : "opacity-0 invisible [transition:transform_.2s_ease-in-out_.2s,opacity_.2s_ease-in-out_0.2s,visibility_0s_.5s] translate-y-0"
      } flex flex-col items-center justify-center z-40 fixed bottom-[48px] max-w-clamp_menu w-full right-[12px] text-white bg-menu bg-[length:100%_35px] neon-gray border border-1 border-[#242424] rounded-xl`}
    >
      <nav className="w-full h-full">
        <ul className={`w-full flex flex-col justify-center items-center`}>
          {assaMenuItems.map((item, index) => (
            <li
              key={index}
              className="w-full h-full flex justify-center items-center"
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer w-full h-full flex justify-center items-center hover:opacity-80 hover:translate-x-[2px] text-base"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
