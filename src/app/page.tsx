import Image from 'next/image';
import styles from './page.module.css';
import Button from './button/button';
import FeaturedCard from './featured-card/FeaturedCard';
import TextCard from './text-card/TextCard';

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
					<FeaturedCard
						image='/nameless-hero-painting.jpg'
						title='Leafeon'
						description='The Nameless Hero was painted for the GCC (GamecCon Canada) 2025 contest. Though it didnt end up placing, it is one of my proudest works.'
					/>
					<FeaturedCard
						image='/beyond-the-wall-painting.jpg'
						title='Leafeon'
						description='Beyond the wall, painted for the 2025 Spooky Spectacular contest ar Red Claw Gaming in Edmonton, AB.'
					/>
					<FeaturedCard
						image='/the-high-priestess-painting.jpg'
						imagePosition='top'
						title='Leafeon'
						description='The High Priestess is one of my favourite models. Inspired by tarot, this model was a blast to paint and great practice for gold NMM and silky gold cloth.'
					/>
					<FeaturedCard
						image='/forever-mine-painting.jpg'
						title='Forever Mine'
						description='Painted for the Reds Choice Spooky Spectacular contest in Edmonton, AB'
						badgeType='second'
						badgeSubtitle='Reds Choice'
					/>
					<FeaturedCard
						image='/hero.jpg'
						title='Ork Commando'
						description='An old pewter ork model painted for the Reds Choice Throwback contest in Edmonton, AB'
						badgeType='first'
						badgeSubtitle='Reds Choice'
					/>
					<FeaturedCard
						image='/leafeon-painting.jpg'
						title='Leafeon'
						description='Leafeon was painted for my partner and now sits on a shelf in our bedroom watching over us.'
						badgeType='featured'
						badgeSubtitle='NomNom Magazine'
					/>
				</div>
			</section>

			<section className={styles.textCardsSection}>
				<h2 className={styles.sectionHeading}>THE LEDGER</h2>
				<div className={styles.textCardsGrid}>
					<TextCard
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M12 2L2 7l10 5 10-5-10-5z' />
								<path d='M2 17l10 5 10-5' />
								<path d='M2 12l10 5 10-5' />
							</svg>
						}
						heading='Custom Details'
						paragraph='Every commission gets meticulous attention to detail, from crisp highlights to subtle weathering.'
					/>
					<TextCard
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<circle cx='12' cy='12' r='10' />
								<polyline points='12 6 12 12 16 14' />
							</svg>
						}
						heading='Reasonable Timelines'
						paragraph='I work at a steady pace to ensure quality without rushing. Most commissions are completed within 2-4 weeks.'
					/>
					<TextCard
						icon={
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
							</svg>
						}
						heading='Passion for the Hobby'
						paragraph='As a fellow gamer and collector, I understand the love for these miniatures and treat each one as if it were my own.'
					/>
				</div>
			</section>
		</div>
	);
}
