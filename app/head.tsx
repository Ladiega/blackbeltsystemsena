export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nagare BJJ",
    url: "https://blackbeltsystem.example.com",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
