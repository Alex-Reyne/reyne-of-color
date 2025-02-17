import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.home}>
			<main className={styles.main}>
				{/* <div className={styles.logo}> */}
				<Image
					src={'/Reyne of Color Logo - overlay.png'}
					alt='Reyne of Color Logo'
					width={500}
					height={500}
				/>
				{/* </div> */}
			</main>
			<div className={styles.heroimage}>
				<Image src={'/hero.jpg'} alt='hero image' width={500} height={500} />
			</div>
		</div>
	);
}
