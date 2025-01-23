import React, { useEffect, useRef } from "react";
import { CardDemo } from "@/components/CardDemo";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
export default function Section() {
  const textRef = useRef();

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "words" });

    gsap.fromTo(
      split.words,
      { opacity: 0, willChange: "filter, transform", filter: "blur(8px)" },
      { ease: "sine", opacity: 1, filter: "blur(0px)", stagger: 0.1 }
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="min-h-svh relative">
      <BackgroundBeams />
      <div className="container min-h-svh flex items-center justify-center ">
        <h1 className="text-5xl" ref={textRef}>
          Starter kit for Nextjs and frontend websites
        </h1>
      </div>
    </div>
  );
}
