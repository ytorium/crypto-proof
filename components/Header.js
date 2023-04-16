import Head from 'next/head'

function addAppJsonLd() {
    return {
        __html: `{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Crypto Proof",
          "description": "Cryptographic Proof of NFT Endorsement",
          "url": "https://crypto-proof.vercel.app",
          "applicationCategory": "Social Media",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          },
        }
        `,
    };
}

export default function Header() {
    return (
            <Head>
                <title>Crypto Proof</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
                <link rel="apple-touch-icon" href="/cover-image.png" />
                <link rel="icon" href="/favicon.ico" />

                {/* Primary Meta Tags */}
                <meta
                    name="title"
                    content="Cryptographic Proof of NFT Endorsement"
                />
                <meta
                    name="description"
                    content="Cryptographic Proof of NFT Endorsement"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Cryptographic Proof of NFT Endorsement"
                />
                <meta
                    property="og:description"
                    content="Cryptographic Proof of NFT Endorsement"
                />
                <meta
                    property="og:image"
                    content="https://crypto-proof.vercel.app/cover-image.png"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:title"
                    content="Cryptographic Proof of NFT Endorsement"
                />
                <meta
                    property="twitter:description"
                    content="Cryptographic Proof of NFT Endorsement"
                />
                <meta
                    property="twitter:image"
                    content="https://crypto-proof.vercel.app/cover-image.png"
                />
                <meta name="google-site-verification" content="7X7mA-zdieQs5Sl4sBkZeZEnGGpQNauPStp1fgcA0vM" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={addAppJsonLd()}
                    key="app-jsonld"
                />
            </Head>
    )
}
