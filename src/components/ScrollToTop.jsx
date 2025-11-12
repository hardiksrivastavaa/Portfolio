// ScrollToTop.jsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, hash } = useLocation();

  // useLayoutEffect to avoid visual jump between route renders
  useLayoutEffect(() => {
    // If there's a hash (#section), try to scroll to that element
    if (hash) {
      // small delay to ensure element exists in DOM
      const id = hash.replace("#", "");
      const el = document.getElementById(id) || document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior });
        return;
      }
    }

    // Otherwise scroll to top of the page
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
}
