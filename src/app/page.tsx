import Image from 'next/image';
import styles from './page.module.css';
import Button from './button/button';

export default function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.hero}>
				<main className={styles.main}>
					<h1 className={styles.heroHeading}>
						Magic and Might, <br />
						<div className={styles.heroLineTwo}>Painted to Life.</div>
					</h1>
					<h2 className={styles.heroSubheading}>
						MINIATURE PAINTING FOR GAMERS, COLLECTORS,
						<br />
						WIZARDS, AND WARRIORS.
					</h2>
					<Button variant={'primary'}>REQUEST A COMMISSION</Button>
					{/* <div className={styles.logo}> */}
					{/* <Image
						src={'/Reyne-of-Color-Logo.png'}
						alt='Reyne of Color Logo'
						width={500}
						height={500}
					/> */}
					{/* </div> */}
				</main>
				<div className={styles.heroImage}>
					{/* <Image
						src={'/Nameless-Hero-Hero-Image.jpg'}
						alt='hero image'
						width={500}
						height={500}
					/> */}
				</div>
			</div>
		</div>
	);
}
