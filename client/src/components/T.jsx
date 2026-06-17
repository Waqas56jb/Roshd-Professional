/**
 * Bilingual text helper. Renders BOTH language spans exactly like the original
 * markup (`<span class="en">…</span><span class="ar">…</span>`); the legacy CSS
 * (`html[data-lang] .en/.ar`) hides whichever is inactive. This keeps the DOM
 * and the rendered text byte-identical to index.html.
 */
export function T({ en, ar }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ar">{ar}</span>
    </>
  );
}

export default T;
