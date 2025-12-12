import './globals.css';
export const metadata = {
  title: 'My Product Store | Premium Products Online',
  description: 'Buy high-quality, trending products at the best prices. Fast shipping. Trusted by thousands of customers.',
  keywords: 'premium products, online shopping, fashion, electronics, ecommerce store, quality products',
  authors: [{ name: 'My Product Store Team' }],
  generator: 'Next.js',
  applicationName: 'My Product Store',
  creator: 'My Product Store',
  publisher: 'My Product Store',

  openGraph: {
    title: 'My Product Store | Premium Products Online',
    description: 'Explore the best handpicked products. Affordable prices. Fast delivery.',
    siteName: 'My Product Store',
    url: 'https://yourstore.netlify.app',
    type: 'website',
    images: [
      {
        url: 'https://yourstore.netlify.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Product Store Banner',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shop Now | My Product Store',
    description: 'Premium quality products online. Explore top collections now.',
    images: ['https://yourstore.netlify.app/og-image.jpg'],
    site: '@yourstore',
  },
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/ca671f001f1c1ac07ba12ef439e7e65a?family=Simplon+Norm"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>

      <body style={{ fontFamily: '"Simplon Norm", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
