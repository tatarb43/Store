import { useEffect, useRef, useState, memo } from "react";
import s from "./ClampText.module.css";

function ClampText({
  text,
  lines,
  moreLabel,
  lessLabel = "Свернуть",
  onExpand,
}) {
  const ref = useRef(null);
  const [clamped, setClamped] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      setClamped(el.scrollHeight > el.clientHeight);
    };

    check();

    const observer = new ResizeObserver(check);
    observer.observe(el);

    return () => observer.disconnect();
  }, [text, lines]);

  const handleExpand = () => {
    setExpanded((prev) => !prev);
    onExpand?.(); //модалку
  };

  const showButton = clamped || expanded;


  return (
    <div>
      <p
        ref={ref}
        className={s.clampText + (expanded ? " " + s.expanded : "")}
        style={{
          maxHeight: expanded ? "none" : `${lines * 1.4}em`,
        }}
      >
        {text}
      </p>

      {showButton && 
      (<button className={s.moreBtn} onClick={handleExpand}>
          {expanded ? lessLabel : moreLabel}
      </button>
      )}
      
    </div>
  );
}

export default memo(ClampText);
