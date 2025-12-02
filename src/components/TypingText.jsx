import { useEffect, useRef } from "react";
import { animate, stagger, splitText } from "animejs";

export default function TypingText({ text, className }) {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Split the text into individual characters
    const { chars } = splitText(titleRef.current, {
      words: false,
      chars: true
    });

    animate(chars, {
      opacity: [0, 1],
      translateY: ["1rem", "0rem"],
      delay: stagger(70),
      duration: 400,
      easing: "easeOutQuad"
    });
  }, []);

  return <h1 ref={titleRef} className={className}>{text}</h1>;
}