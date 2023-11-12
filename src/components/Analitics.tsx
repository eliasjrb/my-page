import Script from 'next/script';

export default function SuaPagina() {
  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Q1T1K7B0KS"
        async
      />
      <Script
        strategy="afterInteractive"
        id="gtag-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-Q1T1K7B0KS');
          `,
        }}
      />
    </div>
  );
}