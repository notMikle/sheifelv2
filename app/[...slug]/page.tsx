export default function CatchAll() {
    return (
        <html>
        <head>
            <meta httpEquiv="refresh" content="0; url=/" />
        </head>
        <body />
        </html>
    );
}

export function generateStaticParams() {
    return [
        { slug: ['himchistka-myagkoy-mebeli'] },
        { slug: ['uslugi'] },
        { slug: ['uslugi','himchistka-myagkoy-mebeli'] },
        { slug: ['uslugi','himchistka-kovrovyh-pokrytiy'] },
        { slug: ['uslugi','moyka-fasadov-i-okon', 'moyka-fasadov-zdaniy'] },
        { slug: ['uslugi','moyka-fasadov-i-okon'] },
        { slug: ['uslugi','raboty-s-mramorom'] },
        { slug: ['kontakty'] },
        { slug: ['prays-list'] },
    ];
}