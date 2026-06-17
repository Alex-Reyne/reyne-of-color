import type {Metadata} from 'next';
import {Metamorphous} from 'next/font/google';
import './globals.css';

const metamorphous = Metamorphous({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-metamorphous',
});

export const metadata: Metadata = {
	title: 'Reyne of Color',
	description: 'Custom miniature painting by Alexander Reyne',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={metamorphous.variable}>{children}</body>
		</html>
	);
}
