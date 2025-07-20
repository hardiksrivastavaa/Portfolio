
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const useAOS = (options = {}) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            mirror: false,
            ...options, // allow overriding defaults
        });
    }, []);
};

export default useAOS;
