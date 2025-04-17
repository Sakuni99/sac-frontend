import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface Props {
  chart: string;
}

export default function MermaidChart({ chart }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ startOnLoad: false });
      const id = `mermaid-${Math.floor(Math.random() * 1000000)}`; // Unique ID per render

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        })
        .catch((err) => {
          if (ref.current) {
            ref.current.innerHTML = `<pre class="text-red-500">Mermaid render error: ${err.message}</pre>`;
          }
        });
    }
  }, [chart]);

  return <div ref={ref} className="my-4" />;
}
