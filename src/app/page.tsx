'use client';

import {useState, useEffect, useCallback, useRef, useMemo} from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import {
	ALL_SETS,
	CATEGORIES,
	getEffectivePrice,
	type ImageSet,
} from './galleryData';

export default function Home() {
	// ── Filter / sort state ───────────────────────────────────────────────────
	const [activeCategory, setActiveCategory] = useState<string>('all');
	const [searchQuery, setSearchQuery] = useState<string>('');
	type SortOption = 'default' | 'price-asc' | 'price-desc' | 'category';
	const [sortOption, setSortOption] = useState<SortOption>('default');

	// ── Modal state ───────────────────────────────────────────────────────────
	const [modalSet, setModalSet] = useState<ImageSet | null>(null);
	const [imageIndex, setImageIndex] = useState<number>(0);

	const touchStartX = useRef<number>(0);

	// ── Back-to-top visibility ────────────────────────────────────────────────
	const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

	useEffect(() => {
		const onScroll = () => setShowBackToTop(window.scrollY > 200);
		window.addEventListener('scroll', onScroll, {passive: true});
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollToTop = useCallback(() => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}, []);

	// ── Derived ───────────────────────────────────────────────────────────────
	const filteredSets = useMemo(() => {
		const query = searchQuery.trim().toLowerCase();
		const filtered = ALL_SETS.filter(s => {
			const matchesCategory =
				activeCategory === 'all' || s.category === activeCategory;
			const matchesSearch =
				query === '' || s.name.toLowerCase().includes(query);
			return matchesCategory && matchesSearch;
		});

		if (sortOption === 'price-asc') {
			return [...filtered].sort(
				(a, b) =>
					(getEffectivePrice(a) ?? Infinity) -
					(getEffectivePrice(b) ?? Infinity),
			);
		}
		if (sortOption === 'price-desc') {
			return [...filtered].sort(
				(a, b) =>
					(getEffectivePrice(b) ?? -Infinity) -
					(getEffectivePrice(a) ?? -Infinity),
			);
		}
		if (sortOption === 'category') {
			return [...filtered].sort((a, b) => a.category.localeCompare(b.category));
		}
		return filtered;
	}, [activeCategory, searchQuery, sortOption]);

	// Position of the open set inside the current filtered list
	const modalSetPos = useMemo(
		() => (modalSet ? filteredSets.indexOf(modalSet) : -1),
		[modalSet, filteredSets],
	);

	// ── Modal helpers ─────────────────────────────────────────────────────────
	const closeModal = useCallback(() => setModalSet(null), []);

	const openSet = useCallback((set: ImageSet) => {
		setModalSet(set);
		setImageIndex(0);
	}, []);

	// Navigate images within the current set
	const goToPrevImage = useCallback(() => {
		if (!modalSet) return;
		const len = modalSet.images.length;
		setImageIndex(i => (i - 1 + len) % len);
	}, [modalSet]);

	const goToNextImage = useCallback(() => {
		if (!modalSet) return;
		setImageIndex(i => (i + 1) % modalSet.images.length);
	}, [modalSet]);

	// Navigate between sets (loops)
	const goToPrevSet = useCallback(() => {
		if (filteredSets.length === 0) return;
		const prevPos =
			(modalSetPos - 1 + filteredSets.length) % filteredSets.length;
		openSet(filteredSets[prevPos]);
	}, [modalSetPos, filteredSets, openSet]);

	const goToNextSet = useCallback(() => {
		if (filteredSets.length === 0) return;
		const nextPos = (modalSetPos + 1) % filteredSets.length;
		openSet(filteredSets[nextPos]);
	}, [modalSetPos, filteredSets, openSet]);

	// ── Side-effects ──────────────────────────────────────────────────────────

	// Close modal when category changes
	useEffect(() => {
		setModalSet(null);
	}, [activeCategory]);

	// Keyboard: Esc closes, ← / → navigate images
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (!modalSet) return;
			if (e.key === 'Escape') closeModal();
			if (e.key === 'ArrowLeft') goToPrevImage();
			if (e.key === 'ArrowRight') goToNextImage();
		};
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [modalSet, closeModal, goToPrevImage, goToNextImage]);

	// Lock body scroll while modal is open
	useEffect(() => {
		document.body.style.overflow = modalSet ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [modalSet]);

	// Touch / swipe handlers (left = next image, right = prev image)
	const handleTouchStart = useCallback((e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	}, []);

	const handleTouchEnd = useCallback(
		(e: React.TouchEvent) => {
			const diff = touchStartX.current - e.changedTouches[0].clientX;
			if (Math.abs(diff) > 50) {
				diff > 0 ? goToNextImage() : goToPrevImage();
			}
		},
		[goToNextImage, goToPrevImage],
	);

	// ── Render ────────────────────────────────────────────────────────────────
	return (
		<div className={styles.page}>
			{/* ── Header ── */}
			<header className={styles.header}>
				<Image
					src='/Reyne-of-Color-Logo.png'
					alt='Reyne of Color'
					width={260}
					height={134}
					priority
					className={styles.logo}
				/>
				<nav className={styles.headerNav}>
					<a
						href='https://instagram.com/reyne.of.color'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.link}
					>
						Instagram
					</a>
					<span className={styles.linkDot}>·</span>
					<a href='mailto:creativereyne@gmail.com' className={styles.link}>
						Email
					</a>
					<span className={styles.linkDot}>·</span>
					<a
						href='https://reynedrops.ca'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.link}
					>
						Reyne Drops
					</a>
				</nav>
			</header>

			{/* ── Gallery ── */}
			<main className={styles.main}>
				{/* Search bar */}
				<div className={styles.searchWrapper}>
					<span className={styles.searchIcon}>⌕</span>
					<input
						type='search'
						className={styles.searchInput}
						placeholder='Search models…'
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						aria-label='Search models'
					/>
					{searchQuery && (
						<button
							className={styles.searchClear}
							onClick={() => setSearchQuery('')}
							aria-label='Clear search'
						>
							✕
						</button>
					)}
				</div>

				{/* Category filter buttons + sort */}
				<div className={styles.filtersRow}>
					<div className={styles.categoryFilters} role='tablist'>
						{CATEGORIES.map(cat => (
							<button
								key={cat.key}
								role='tab'
								aria-selected={activeCategory === cat.key}
								className={`${styles.filterBtn} ${activeCategory === cat.key ? styles.filterBtnActive : ''}`}
								onClick={() => setActiveCategory(cat.key)}
							>
								{cat.label}
							</button>
						))}
					</div>

					<div className={styles.sortWrapper}>
						<label htmlFor='sort-select' className={styles.sortLabel}>
							Sort
						</label>
						<select
							id='sort-select'
							className={styles.sortSelect}
							value={sortOption}
							onChange={e => setSortOption(e.target.value as SortOption)}
							aria-label='Sort models'
						>
							<option value='default'>Default</option>
							<option value='price-asc'>Price ↑ Low to High</option>
							<option value='price-desc'>Price ↓ High to Low</option>
							<option value='category'>Category</option>
						</select>
					</div>
				</div>

				{/* No results message */}
				{filteredSets.length === 0 && (
					<p className={styles.noResults}>
						No models found for &ldquo;{searchQuery}&rdquo;
					</p>
				)}

				{/* Image grid — one card per set */}
				<div className={styles.gallery}>
					{filteredSets.map(set => (
						<button
							key={`${set.category}-${set.name}`}
							className={styles.galleryItem}
							onClick={() => openSet(set)}
							aria-label={`View ${set.name}`}
						>
							<Image
								src={set.images[0]}
								alt={set.name}
								fill
								sizes='(max-width: 600px) calc(50vw - 24px), (max-width: 900px) calc(33vw - 24px), calc(25vw - 24px)'
								className={styles.galleryImage}
							/>
							{set.sold && (
								<span className={styles.soldBadge} aria-label='Sold'>
									Sold
								</span>
							)}
							<div className={styles.galleryOverlay}>
								<span className={styles.galleryTitle}>{set.name}</span>
								{getEffectivePrice(set) !== undefined && (
									<span
										className={`${styles.galleryPrice}${set.sold ? ` ${styles.galleryPriceSold}` : ''}`}
									>
										${getEffectivePrice(set)}
									</span>
								)}
							</div>
						</button>
					))}
				</div>
			</main>

			{/* ── Footer ── */}
			<footer className={styles.footer}>
				<p className={styles.copyright}>
					© {new Date().getFullYear()} Reyne of Color
				</p>
			</footer>

			{/* ── Back to top ── */}
			<button
				className={`${styles.backToTop} ${showBackToTop ? styles.backToTopVisible : ''}`}
				onClick={scrollToTop}
				aria-label='Back to top'
			>
				↑
			</button>

			{/* ── Modal ── */}
			{modalSet && (
				<>
					{/* Dark blurred backdrop — click to close */}
					<div className={styles.overlay} onClick={closeModal} />

					<div
						className={styles.modal}
						role='dialog'
						aria-modal='true'
						aria-label={modalSet.name}
					>
						{/* Image viewer box */}
						<div
							className={styles.modalContent}
							onTouchStart={handleTouchStart}
							onTouchEnd={handleTouchEnd}
						>
							{/* Close button */}
							<button
								className={styles.modalCloseBtn}
								onClick={closeModal}
								aria-label='Close'
							>
								✕
							</button>

							{/* Prev image */}
							<button
								className={`${styles.navBtn} ${styles.navBtnPrev}`}
								onClick={goToPrevImage}
								aria-label='Previous photo'
							>
								‹
							</button>

							{/* Image */}
							<div
								className={styles.modalImageWrapper}
								key={`${modalSet.name}-${imageIndex}`}
							>
								<Image
									src={modalSet.images[imageIndex]}
									alt={`${modalSet.name} — photo ${imageIndex + 1}`}
									fill
									sizes='(max-width: 768px) 90vw, 80vw'
									className={styles.modalImage}
									priority
								/>
							</div>

							{/* Next image */}
							<button
								className={`${styles.navBtn} ${styles.navBtnNext}`}
								onClick={goToNextImage}
								aria-label='Next photo'
							>
								›
							</button>
						</div>

						{/* Set title + photo counter + price + sold */}
						<div className={styles.modalMeta}>
							<p className={styles.modalTitle}>{modalSet.name}</p>
							{modalSet.sold && (
								<span className={styles.modalSoldBadge}>Sold</span>
							)}
							{getEffectivePrice(modalSet) !== undefined && (
								<span
									className={`${styles.modalPrice}${modalSet.sold ? ` ${styles.modalPriceSold}` : ''}`}
								>
									${getEffectivePrice(modalSet)}
								</span>
							)}
							{modalSet.images.length > 1 && (
								<span className={styles.imageCounter}>
									{imageIndex + 1} / {modalSet.images.length}
								</span>
							)}
						</div>

						{/* Prev set / Next set */}
						{filteredSets.length > 1 && (
							<div className={styles.setNavigation}>
								<button
									className={styles.setNavBtn}
									onClick={goToPrevSet}
									aria-label='Previous set'
								>
									← Prev
								</button>
								<button
									className={styles.setNavBtn}
									onClick={goToNextSet}
									aria-label='Next set'
								>
									Next →
								</button>
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
}
