import LayoutHomepage from './components';
import Head from 'next/head';

export default function HomePage() {
    return (
		<>
			<Head><title>Personal Web</title></Head>
			<LayoutHomepage />
		</>
    );
};
