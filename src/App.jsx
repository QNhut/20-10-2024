import { useState, useEffect, useRef, useCallback } from "react";
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
  const sectionCelebrationRef = useRef(null);
  const sectionApologizeRef = useRef(null);
  const isScrollingRef = useRef(false);
  const touchStartRef = useRef(0);

  const handleScroll = useCallback((event) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;

    if (event.deltaY > 0 && activeSection === SECTION.CELEBRATION) {
      setActiveSection(SECTION.APOLOGIZE);
      sectionApologizeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (event.deltaY < 0 && activeSection === SECTION.APOLOGIZE) {
      setActiveSection(SECTION.CELEBRATION);
      sectionCelebrationRef.current.scrollIntoView({ behavior: "smooth" });
    }

    requestAnimationFrame(() => {
      isScrollingRef.current = false;
    });
  }, [activeSection]);

  const handleTouchStart = useCallback((event) => {
    isScrollingRef.current = false; // reset when touch starts
    touchStartRef.current = event.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((event) => {
    if (isScrollingRef.current) return;

    const touchEndY = event.changedTouches[0].clientY;
    const deltaY = touchStartRef.current - touchEndY;

    isScrollingRef.current = true;
    if (deltaY > 0 && activeSection === SECTION.CELEBRATION) {
      setActiveSection(SECTION.APOLOGIZE);
      sectionApologizeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (deltaY < 0 && activeSection === SECTION.APOLOGIZE) {
      setActiveSection(SECTION.CELEBRATION);
      sectionCelebrationRef.current.scrollIntoView({ behavior: "smooth" });
    }

    requestAnimationFrame(() => {
      isScrollingRef.current = false;
    });
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleScroll, handleTouchStart, handleTouchEnd]);

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
