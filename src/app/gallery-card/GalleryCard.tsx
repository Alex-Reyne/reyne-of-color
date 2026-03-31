import styles from './gallery-card.module.css';

type BadgeType = 'first' | 'second' | 'third' | 'featured' | null;
type ImagePosition = 'top' | 'center' | 'bottom';

interface GalleryCardProps {
	image: string;
	title: string;
	description: string;
	alt?: string;
	badgeType?: BadgeType;
	badgeSubtitle?: string;
	imagePosition?: ImagePosition;
}

export default function GalleryCard({
	image,
	title,
	description,
	alt = '',
	badgeType = null,
	badgeSubtitle = '',
	imagePosition = 'center',
}: GalleryCardProps) {
	const badgeLabels: Record<string, string> = {
		first: '1st Place',
		second: '2nd Place',
		third: '3rd Place',
		featured: 'Featured In',
	};

	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<img
					src={image}
					alt={alt || title}
					className={`${styles.image} ${styles[imagePosition]}`}
				/>
				{badgeType && (
					<div className={`${styles.badge} ${styles[badgeType]}`}>
						<span className={styles.badgeLabel}>{badgeLabels[badgeType]}</span>
						{badgeSubtitle && (
							<span className={styles.badgeSubtitle}>{badgeSubtitle}</span>
						)}
					</div>
				)}
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
}
