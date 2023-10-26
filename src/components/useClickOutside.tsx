import React, { useEffect } from 'react';

export const useClickOutside = (
  ref: React.MutableRefObject<HTMLElement | undefined | null>,
  excludeRefs: React.MutableRefObject<HTMLElement | undefined | null>[],
  callback: () => void,
  isOpen: boolean
) => {
  const handleClick = (e: MouseEvent) => {
    const isClickInsideRef = ref.current && ref.current.contains(e.target as Node);
    const isClickInsideExcludedRefs = excludeRefs.some((excludeRef) =>
      excludeRef.current && excludeRef.current.contains(e.target as Node)
    );

    if (!isClickInsideRef && !isClickInsideExcludedRefs && isOpen) {
      callback();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      callback();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mouseup", handleClick);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mouseup", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mouseup", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);
};