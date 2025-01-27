'use client';

import Script from 'next/script';

const ConversionTracking = () => {
  return (
    <Script id="conversion-tracking" strategy="afterInteractive">
      {`
        gtag('event', 'conversion', {
          'send_to': 'AW-11562746309/skWBCIXGzogaEMWDxokr'
        });
      `}
    </Script>
  );
};

export default ConversionTracking; 