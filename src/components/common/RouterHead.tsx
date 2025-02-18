import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      {/* Title */}
      <title>{head.title || SITE.title}</title>

      {/* Canonical URL */}
      <link rel="canonical" href={String(loc.url)} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {/* Default Metadata (Applied if Not Set by Page) */}
      <meta name="description" content={head.meta.find(m => m.name === 'description')?.content || SITE.description} />
      <meta property="og:title" content={head.meta.find(m => m.property === 'og:title')?.content || SITE.openGraph.title} />
      <meta property="og:description" content={head.meta.find(m => m.property === 'og:description')?.content || SITE.openGraph.description} />
      <meta property="og:image" content={head.meta.find(m => m.property === 'og:image')?.content || SITE.openGraph.image} />
      <meta property="og:url" content={head.meta.find(m => m.property === 'og:url')?.content || SITE.openGraph.url} />
      <meta name="twitter:card" content={head.meta.find(m => m.name === 'twitter:card')?.content || SITE.twitter.cardType} />
      <meta name="twitter:title" content={head.meta.find(m => m.name === 'twitter:title')?.content || SITE.title} />
      <meta name="linkedin:profile" content={SITE.linkedin.profileUrl} />

      {/* Render Dynamic Metadata */}
      {head.meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}

      {head.links.map((l, i) => (
        <link key={i} {...l} />
      ))}

      {head.styles.map((s, i) => (
        <style key={i} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
