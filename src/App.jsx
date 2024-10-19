import { useState, useEffect, useRef } from "react";
import Celebration from "./components/Celebration";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";
import Apologize from "./components/Apologize";

const SECTION = {
  CELEBRATION: "celebration",
  APOLOGIZE: "apologize",
};

const MainPage = () => {
  const { height, width } = useWindowSize();

  const [activeSection, setActiveSection] = useState(SECTION.CELEBRATION);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionCelebrationRef = useRef(null);
  const sectionApologizeRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      if (isScrolling) return;

      setIsScrolling(true);
      if (event.deltaY > 0 && activeSection === SECTION.CELEBRATION) {
        setActiveSection(SECTION.APOLOGIZE);
        sectionApologizeRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (event.deltaY < 0 && activeSection === SECTION.APOLOGIZE) {
        setActiveSection(SECTION.CELEBRATION);
        sectionCelebrationRef.current.scrollIntoView({ behavior: "smooth" });
      }

      setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeSection, isScrolling]);

  return (
    <div className="h-screen overflow-hidden">
      <ReactConfetti
        opacity={0.5}
        width={width}
        height={height}
        tweenDuration={20000}
        recycle={activeSection === SECTION.CELEBRATION}
      />
      <section
        ref={sectionCelebrationRef}
        className="h-screen bg-rose-50 flex items-center justify-center"
      >
        <Celebration />
      </section>
      <section
        ref={sectionApologizeRef}
        className="h-screen bg-white flex items-center justify-center"
      >
        <Apologize />
      </section>
    </div>
  );
};

export default MainPage;
