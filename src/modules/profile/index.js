import LayoutProfile from './components/view';
import Head from 'next/head';

export default function Profile() {
  return (
		<>
			<Head><title>Profile</title></Head>
			<LayoutProfile />
		</>
    );
}
