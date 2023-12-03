import { useState, useEffect, useRef } from "react";

export default function () {
  const [height, setHeight] = useState(window.innerHeight);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  });

  return (
    <div ref={ref}>
      <h2>Hello world </h2>
      <h2>Hello world </h2>
      <h2>Height: {height}px </h2>
    </div>
  );
}
