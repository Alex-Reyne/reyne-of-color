import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function LandingPage() {
	const NavLink = ({
		href,
		children,
		external,
	}: {
		href: string;
		children: React.ReactNode;
		external?: boolean;
	}) => {
		return (
			<a
				href={href}
				target={external ? '_blank' : '_self'}
				rel='noopener noreferrer'
				className={styles.link}
			>
				{children}
			</a>
		);
	};

	return (
		<>
			{/* ── Header ── */}
			<header className={styles.header}>
				<Image
					src='/Logo-knight-white-trans.png'
					alt='Reyne of Color'
					width={220}
					height={113}
					priority
					className={styles.logo}
				/>
				<nav className={styles.headerNav}>
					<NavLink href='/ledger'>Ledger</NavLink>
					<span className={styles.linkDot}>·</span>
					<NavLink href='/gallery'>Gallery</NavLink>
					<span className={styles.linkDot}>·</span>
					<NavLink href='/commissions'>Commissions</NavLink>
					<span className={styles.linkDot}>·</span>
					<NavLink href='/vault'>Vault</NavLink>
				</nav>
				<button className={styles.primaryBtn}>Inquire</button>
			</header>

			{/* ── Hero ── */}
			<main className={styles.main}>
				<h1 className={styles.title}>
					Magic and Might,
					<br /> Painted to Life.
				</h1>
				<p className={styles.subtitle}>
					Commission a custom piece, explore competition-grade works, or browse
					the gallery of finished models by Alexander Reyne.
				</p>

				<div className={styles.actions}>
					<Link href='/gamecon' className={styles.primaryBtn}>
						View the Gallery
					</Link>
					<a
						href='mailto:creativereyne@gmail.com'
						className={styles.secondaryBtn}
					>
						Request a Commission
					</a>
				</div>
			</main>

			{/* ── Footer ── */}
			<footer className={styles.footer}>
				<span className={styles.footerLinks}>
					<NavLink href='https://instagram.com/reyne.of.color' external>
						Instagram
					</NavLink>
					<span className={styles.linkDot}>·</span>
					<NavLink href='mailto:creativereyne@gmail.com' external>
						Email
					</NavLink>
					<span className={styles.linkDot}>·</span>
					<NavLink href='https://reynedrops.ca' external>
						ReyneDrops
					</NavLink>
				</span>
				<p className={styles.copyright}>
					© {new Date().getFullYear()} Reyne of Color · Painting by Alexander
					Reyne
				</p>
			</footer>
		</>
	);
}
