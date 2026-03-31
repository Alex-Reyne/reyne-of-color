import Image from 'next/image';
import styles from './page.module.css';
import Button from './button/button';
import GalleryCard from './gallery-card/GalleryCard';

export default function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.heroImage}>
				<img src='/hero-image-bat-screaming.jpg' alt='hero image' />
			</div>
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
						src={'/hero-image-bat-screaming.png'}
						alt='Reyne of Color Logo'
						width={500}
						height={500}
					/> */}
					{/* </div> */}
				</main>
			</div>

			<section className={styles.scriptorium} id='scriptorium'>
				<h2 className={styles.sectionHeading}>THE SCRIPTORIUM</h2>
				<div className={styles.galleryGrid}>
					<GalleryCard
						image='/nameless-hero-painting.jpg'
						title='Leafeon'
						description='The Nameless Hero was painted for the GCC (GamecCon Canada) 2025 contest. Though it didnt end up placing, it is one of my proudest works.'
					/>
					<GalleryCard
						image='/beyond-the-wall-painting.jpg'
						title='Leafeon'
						description='Beyond the wall, painted for the 2025 Spooky Spectacular contest ar Red Claw Gaming in Edmonton, AB.'
					/>
					<GalleryCard
						image='/the-high-priestess-painting.jpg'
						imagePosition='top'
						title='Leafeon'
						description='The High Priestess is one of my favourite models. Inspired by tarot, this model was a blast to paint and great practice for gold NMM and silky gold cloth.'
					/>
					<GalleryCard
						image='/forever-mine-painting.jpg'
						title='Forever Mine'
						description='Painted for the Reds Choice Spooky Spectacular contest in Edmonton, AB'
						badgeType='second'
						badgeSubtitle='Reds Choice'
					/>
					<GalleryCard
						image='/hero.jpg'
						title='Ork Commando'
						description='An old pewter ork model painted for the Reds Choice Throwback contest in Edmonton, AB'
						badgeType='first'
						badgeSubtitle='Reds Choice'
					/>
					<GalleryCard
						image='/leafeon-painting.jpg'
						title='Leafeon'
						description='Leafeon was painted for my partner and now sits on a shelf in our bedroom watching over us.'
						badgeType='featured'
						badgeSubtitle='NomNom Magazine'
					/>
				</div>
			</section>
		</div>
	);
}
