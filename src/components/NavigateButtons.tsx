import { useEffect, useState, useRef } from "react";
import { useClickOutside } from "./useClickOutside";
import { Events, animateScroll as scroll } from "react-scroll";
import Menu from "./Menu";

function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navigateButtons = () => {
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
      window.addEventListener("scroll", navigateButtons);

      return () => {
        window.removeEventListener("scroll", navigateButtons);
      };
    }
  }, [lastScrollY]);

  useClickOutside(
    menuRef,
    [buttonRef],
    () => {
      setIsOpen(false);
    },
    isOpen
  );

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    Events.scrollEvent.register("end", () => {
      setIsOpen(false);
    });

    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div>
      <button
        onClick={handleScrollToTop}
        className={`${
          isShow ? "flex" : "hidden"
        } z-50 w-[45px] h-[45px] border border-1 border-gray-500 rounded-lg fixed left-[12px] bottom-[12px] hover:border-white active:border-0`}
      >
        <svg
          className="cursor-pointer w-full h-full hover:fill-white hover:stroke-white"
          fill="#71717A"
          stroke="#71717A"
          viewBox="-8.5 0 32 32"
        >
          <path d="M13.72 17.68c-.2 0-.44-.08-.6-.24L7.28 11.6l-5.84 5.84c-.32.32-.84.32-1.2 0-.32-.32-.32-.84 0-1.2L6.68 9.8c.32-.32.88-.32 1.2 0l6.44 6.44c.32.32.32.84 0 1.2-.16.16-.4.24-.6.24zm0 4.76c-.2 0-.44-.08-.6-.24l-5.84-5.88-5.84 5.88c-.32.32-.84.32-1.2 0-.32-.32-.32-.84 0-1.2l6.44-6.44c.32-.32.88-.32 1.2 0L14.32 21c.32.32.32.84 0 1.2-.16.16-.4.24-.6.24z" />
        </svg>
      </button>
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((prevIsOpen) => !prevIsOpen);
        }}
        className={`${
          isShow ? "flex lg:hidden" : "hidden"
        } z-50 w-[45px] h-[45px] border border-1 border-gray-500 rounded-lg fixed right-[12px] bottom-[12px] hover:border-white`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#71717A"
          stroke="#71717A"
          viewBox="0 0 21 21"
          className="cursor-pointer w-full h-full hover:fill-white hover:stroke-white"
        >
          <g fill="none">
            <path d="M16.5 15.5v-10c0-1.1045695-.8954305-2-2-2h-8c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2zM7.5 7.5h6M7.5 10.5h6M7.5 13.5h6" />
          </g>
        </svg>
      </button>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} menuRef={menuRef} />
    </div>
  );
}

export default SideBar;
