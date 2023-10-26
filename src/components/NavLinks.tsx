import { useEffect } from "react";

interface NavLinksProps {
  isAssa: boolean;
  setIsAssa: (value: boolean) => void;
  isOutlaw: boolean;
  setIsOutlaw: (value: boolean) => void;
  isSub: boolean;
  setIsSub: (value: boolean) => void;
}

export default function NavLinks(props: NavLinksProps) {
  const { isAssa, setIsAssa, isOutlaw, setIsOutlaw, isSub, setIsSub } = props;

  useEffect(() => {
    if (window.location.pathname === "/assassination") {
      setIsAssa(true);
    } else if (window.location.pathname === "/outlaw") {
      setIsOutlaw(true);
    } else if (window.location.pathname === "/subtlety") {
      setIsSub(true);
    }
  }, []);

  return (
    <ul className="list-none hidden md:flex md:justify-center gap-[4px] lg:gap-[30px]">
      <li className="w-full max-w-[150px] h-[35px]">
        <a
          href="/"
          className="group flex items-center justify-center w-full h-full rounded-md hover:opacity-80"
        >
          <span className="text-[18px] leading-normal bg-left-bottom bg-gradient-to-r from-hover to-hover bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Главная
          </span>
        </a>
      </li>
      <li className="w-full max-w-[150px] h-[35px]">
        <a
          href="/assassination"
          className={`group flex items-center justify-center w-full h-full rounded-md hover:opacity-80 ${
            isAssa ? "text-assa neon-green" : ""
          }`}
        >
          <span className="text-[18px] leading-normal bg-left-bottom bg-gradient-to-r from-hover to-hover bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Ликвидация
          </span>
        </a>
      </li>
      <li className="w-full max-w-[150px] h-[35px]">
        <a
          href="/outlaw"
          className={`group flex items-center justify-center w-full h-full rounded-md hover:opacity-80 ${
            isOutlaw ? "text-outlaw neon-red" : ""
          }`}
        >
          <span className="text-[18px] leading-normal bg-left-bottom bg-gradient-to-r from-hover to-hover bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Головорез
          </span>
        </a>
      </li>
      <li className="w-full max-w-[150px] h-[35px]">
        <a
          href="/subtlety"
          className={`group flex items-center justify-center w-full h-full rounded-md hover:opacity-80 ${
            isSub ? "text-sub neon-purple" : ""
          }`}
        >
          <span className="text-[18px] leading-normal bg-left-bottom bg-gradient-to-r from-hover to-hover bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Скрытность
          </span>
        </a>
      </li>
    </ul>
  );
}
