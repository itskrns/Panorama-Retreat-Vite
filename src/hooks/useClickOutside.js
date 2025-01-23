import { useEffect, useRef } from "react";

export default function useClickOutside(action, capturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) action();
      }

      document.addEventListener("click", handleClick, capturing);

      return () =>
        document.removeEventListener("click", handleClick, capturing);
    },
    [action, capturing]
  );

  return ref;
}
