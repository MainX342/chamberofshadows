import { useState, useEffect } from "react";
import ReactNode from "react";
import NavLinks from "./NavLinks";
import logo from "../assets/guide/logo.webp";
import assassination from "../assets/guide/menu_icons/assassination.webp";
import outlaw from "../assets/guide/menu_icons/outlaw.webp";
import subtlety from "../assets/guide/menu_icons/subtlety.webp";
type ReactNode = React.ReactNode;

interface NavigateProps {
  children?: ReactNode;
}

export default function Navigate({ children }: NavigateProps) {
  const [isAssa, setIsAssa] = useState<boolean>(false);
  const [isOutlaw, setIsOutlaw] = useState<boolean>(false);
  const [isSub, setIsSub] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 500) {
        if (currentScrollY < lastScrollY) {
          setIsShow(true);
        } else {
          setIsShow(false);
        }
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

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
    <nav
      className={`${
        !isShow
          ? "hidden"
          : "flex justify-between md:grid md:grid-cols-[160px_1fr_160px] lg:grid-cols-[190px_1fr_190px]"
      } select-none relative h-[60px] text-white text-base px-[10px] items-center`}
    >
      <a
        href="/"
        className="flex items-center first:gap-[8px] hover:opacity-80"
      >
        <img
          src={
            isAssa
              ? assassination.src
              : isOutlaw
              ? outlaw.src
              : isSub
              ? subtlety.src
              : logo.src
          }
          className="w-[40px] rounded-xl"
          height={40}
          width={40}
          loading="lazy"
          decoding="async"
          alt="Лого"
        />{" "}
        <span className="text-[18px] leading-normal">Палата теней</span>
      </a>

      <NavLinks
        isAssa={isAssa}
        setIsAssa={setIsAssa}
        isOutlaw={isOutlaw}
        setIsOutlaw={setIsOutlaw}
        isSub={isSub}
        setIsSub={setIsSub}
      />

      {children}
    </nav>
  );
}
