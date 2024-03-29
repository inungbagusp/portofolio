import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600;700;900&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/icon/logo.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }
}
  