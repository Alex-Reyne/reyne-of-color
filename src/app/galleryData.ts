export interface Category {
	key: string;
	label: string;
	/** Default price for all models in this category (in CAD). Omit for "All". */
	price?: number;
}

export interface ImageSet {
	name: string;
	category: string;
	images: string[];
	/**
	 * Optional per-model price override (in CAD).
	 * When set, this takes precedence over the category default price.
	 */
	price?: number;
	/** Mark this model as sold / out of stock. */
	sold?: boolean;
}

export const CATEGORIES: Category[] = [
	{key: 'all', label: 'All'},
	{key: 'competition-models', label: 'Competition', price: 250},
	{key: 'dark-souls', label: 'Dark Souls', price: 80},
	{key: 'display-models', label: 'Display Models', price: 200},
	{key: 'dnd-minis', label: 'D&D Minis', price: 50},
	{key: 'keycaps', label: 'Keycaps', price: 50},
];

/** Returns the effective display price for a set (model override → category default → undefined). */
export function getEffectivePrice(set: ImageSet): number | undefined {
	if (set.price !== undefined) return set.price;
	const cat = CATEGORIES.find(c => c.key === set.category);
	return cat?.price;
}

export const ALL_SETS: ImageSet[] = [
	// ── Competition Models ──────────────────────────────────────────────────────
	{
		name: 'Beyond the Wall',
		category: 'competition-models',
		images: [
			'/gamecon-images/competition-models/Beyond-The-Wall/AMCP9198.jpg',
			'/gamecon-images/competition-models/Beyond-The-Wall/AMCP9200.jpg',
			'/gamecon-images/competition-models/Beyond-The-Wall/AMCP9201.jpg',
			'/gamecon-images/competition-models/Beyond-The-Wall/AMCP9204.jpg',
			'/gamecon-images/competition-models/Beyond-The-Wall/AMCP9205.jpg',
			'/gamecon-images/competition-models/Beyond-The-Wall/AMCP9207.jpg',
			'/gamecon-images/competition-models/Beyond-The-Wall/AMCP9210.jpg',
			'/gamecon-images/competition-models/Beyond-The-Wall/AMCP9211.jpg',
			'/gamecon-images/competition-models/Beyond-The-Wall/AMCP9214.jpg',
		],
	},
	{
		name: 'Divine Victory',
		category: 'competition-models',
		price: 100,
		images: [
			'/gamecon-images/competition-models/Divine-Victory/AMCP3016-2.jpg',
			'/gamecon-images/competition-models/Divine-Victory/AMCP3017-2.jpg',
			'/gamecon-images/competition-models/Divine-Victory/AMCP3020-2.jpg',
			'/gamecon-images/competition-models/Divine-Victory/AMCP3021-2.jpg',
		],
	},
	{
		name: 'Forever Mine',
		category: 'competition-models',
		images: [
			'/gamecon-images/competition-models/Forever-Mine/AMCP5466.jpg',
			'/gamecon-images/competition-models/Forever-Mine/AMCP5458.jpg',
			'/gamecon-images/competition-models/Forever-Mine/AMCP5460.jpg',
			'/gamecon-images/competition-models/Forever-Mine/AMCP5461.jpg',
			'/gamecon-images/competition-models/Forever-Mine/AMCP5462.jpg',
			'/gamecon-images/competition-models/Forever-Mine/AMCP5463.jpg',
		],
	},
	{
		name: 'High Priestess',
		category: 'competition-models',
		price: 150,
		images: [
			'/gamecon-images/competition-models/High-Priestess/AMCP5554.jpg',
			'/gamecon-images/competition-models/High-Priestess/AMCP5556.jpg',
			'/gamecon-images/competition-models/High-Priestess/AMCP5558.jpg',
		],
	},
	{
		name: 'Nameless Hero',
		category: 'competition-models',
		images: [
			'/gamecon-images/competition-models/Nameless-Hero/AMCP7753.jpg',
			'/gamecon-images/competition-models/Nameless-Hero/AMCP7754.jpg',
			'/gamecon-images/competition-models/Nameless-Hero/AMCP7755.jpg',
			'/gamecon-images/competition-models/Nameless-Hero/AMCP7756.jpg',
			'/gamecon-images/competition-models/Nameless-Hero/AMCP7757.jpg',
			'/gamecon-images/competition-models/Nameless-Hero/AMCP7773.jpg',
		],
	},
	{
		name: 'Ork Commando',
		category: 'competition-models',
		price: 100,
		images: [
			'/gamecon-images/competition-models/Ork-Commando/AMCP6283.jpg',
			'/gamecon-images/competition-models/Ork-Commando/AMCP6286.jpg',
			'/gamecon-images/competition-models/Ork-Commando/AMCP6288.jpg',
			'/gamecon-images/competition-models/Ork-Commando/AMCP6289.jpg',
			'/gamecon-images/competition-models/Ork-Commando/AMCP6290.jpg',
		],
	},

	// ── Dark Souls / Elden Ring ─────────────────────────────────────────────────
	{
		name: 'Artorias',
		category: 'dark-souls',
		images: [
			'/gamecon-images/dark-souls/Artorias/Artorias 01.jpg',
			'/gamecon-images/dark-souls/Artorias/Artorias 02.jpg',
			'/gamecon-images/dark-souls/Artorias/Artorias 03.jpg',
			'/gamecon-images/dark-souls/Artorias/Artorias 04.jpg',
			'/gamecon-images/dark-souls/Artorias/Artorias 05.jpg',
			'/gamecon-images/dark-souls/Artorias/Artorias 06.jpg',
		],
	},
	{
		name: 'Blaidd',
		category: 'dark-souls',
		images: [
			'/gamecon-images/dark-souls/Blaidd/AMCP8813.jpg',
			'/gamecon-images/dark-souls/Blaidd/AMCP8814.jpg',
			'/gamecon-images/dark-souls/Blaidd/AMCP8815.jpg',
			'/gamecon-images/dark-souls/Blaidd/AMCP8816.jpg',
			'/gamecon-images/dark-souls/Blaidd/AMCP8817.jpg',
		],
	},
	{
		name: 'Firekeeper',
		category: 'dark-souls',
		images: [
			'/gamecon-images/dark-souls/Firekeeper/AMCP6242.jpg',
			'/gamecon-images/dark-souls/Firekeeper/AMCP6243.jpg',
			'/gamecon-images/dark-souls/Firekeeper/AMCP6244.jpg',
			'/gamecon-images/dark-souls/Firekeeper/AMCP6245.jpg',
		],
	},
	{
		name: 'Malenia',
		category: 'dark-souls',
		images: [
			'/gamecon-images/dark-souls/Malenia/AMCP3425.jpg',
			'/gamecon-images/dark-souls/Malenia/AMCP3426.jpg',
			'/gamecon-images/dark-souls/Malenia/AMCP3427.jpg',
			'/gamecon-images/dark-souls/Malenia/AMCP3428.jpg',
			'/gamecon-images/dark-souls/Malenia/AMCP3429.jpg',
			'/gamecon-images/dark-souls/Malenia/AMCP3430.jpg',
		],
	},
	{
		name: 'Solaire',
		category: 'dark-souls',
		price: 50,
		images: [
			'/gamecon-images/dark-souls/Solaire/AMCP6246.jpg',
			'/gamecon-images/dark-souls/Solaire/AMCP6247.jpg',
			'/gamecon-images/dark-souls/Solaire/AMCP6248.jpg',
		],
	},

	// ── Display Models ──────────────────────────────────────────────────────────
	{
		name: '2B',
		category: 'display-models',
		price: 150,
		images: [
			'/gamecon-images/display-models/2B/AMCP1845.jpg',
			'/gamecon-images/display-models/2B/AMCP1846.jpg',
			'/gamecon-images/display-models/2B/AMCP1847.jpg',
			'/gamecon-images/display-models/2B/AMCP1848.jpg',
			'/gamecon-images/display-models/2B/AMCP1855.jpg',
			'/gamecon-images/display-models/2B/AMCP1859.jpg',
		],
	},
	{
		name: 'Lamp Master',
		category: 'display-models',
		price: 150,
		images: [
			'/gamecon-images/display-models/LampMaster/AMCP3056.jpg',
			'/gamecon-images/display-models/LampMaster/AMCP3057.jpg',
			'/gamecon-images/display-models/LampMaster/AMCP3058.jpg',
			'/gamecon-images/display-models/LampMaster/AMCP3059.jpg',
			'/gamecon-images/display-models/LampMaster/AMCP3062.jpg',
		],
	},
	{
		name: 'Link',
		category: 'display-models',
		price: 150,
		images: [
			'/gamecon-images/display-models/Link/AMCP2150.jpg',
			'/gamecon-images/display-models/Link/AMCP2151.jpg',
			'/gamecon-images/display-models/Link/AMCP2152.jpg',
			'/gamecon-images/display-models/Link/AMCP2153.jpg',
			'/gamecon-images/display-models/Link/AMCP2154.jpg',
			'/gamecon-images/display-models/Link/AMCP2155.jpg',
		],
	},
	{
		name: 'Booette',
		category: 'display-models',
		price: 80,
		images: [
			'/gamecon-images/display-models/booette/AMCP7297.jpg',
			'/gamecon-images/display-models/booette/AMCP7299.jpg',
			'/gamecon-images/display-models/booette/AMCP7300.jpg',
			'/gamecon-images/display-models/booette/AMCP7303.jpg',
			'/gamecon-images/display-models/booette/AMCP7308.jpg',
		],
	},
	{
		name: 'Spider-Gwen',
		category: 'display-models',
		sold: true,
		images: [
			'/gamecon-images/display-models/Spider Gwen/AMCP8806.jpg',
			'/gamecon-images/display-models/Spider Gwen/AMCP8807.jpg',
			'/gamecon-images/display-models/Spider Gwen/AMCP8808.jpg',
			'/gamecon-images/display-models/Spider Gwen/AMCP8809.jpg',
			'/gamecon-images/display-models/Spider Gwen/AMCP8810.jpg',
			'/gamecon-images/display-models/Spider Gwen/AMCP8812.jpg',
		],
	},
	{
		name: 'Lady of the Grove',
		category: 'display-models',
		price: 100,
		images: [
			'/gamecon-images/display-models/Lady-of-the-grove/AMCP4888.jpg',
			'/gamecon-images/display-models/Lady-of-the-grove/AMCP4889.jpg',
			'/gamecon-images/display-models/Lady-of-the-grove/AMCP4890.jpg',
			'/gamecon-images/display-models/Lady-of-the-grove/AMCP4901.jpg',
			'/gamecon-images/display-models/Lady-of-the-grove/AMCP4902.jpg',
		],
	},
	{
		name: 'Leafeon',
		category: 'display-models',
		sold: true,
		images: [
			'/gamecon-images/display-models/Leafeon/AMCP6241-Enhanced-NR.jpg',
			'/gamecon-images/display-models/Leafeon/AMCP6238-Enhanced-NR.jpg',
			'/gamecon-images/display-models/Leafeon/AMCP6239-Enhanced-NR.jpg',
		],
	},

	// ── D&D Minis ───────────────────────────────────────────────────────────────
	{
		name: 'Android Monk',
		category: 'dnd-minis',
		price: 100,
		images: [
			'/gamecon-images/dnd-minis/Android Monk/AMCP3402.jpg',
			'/gamecon-images/dnd-minis/Android Monk/AMCP3403.jpg',
			'/gamecon-images/dnd-minis/Android Monk/AMCP3404.jpg',
			'/gamecon-images/dnd-minis/Android Monk/AMCP3405.jpg',
		],
	},
	{
		name: 'Dwarf Artificer',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Dwarf Artificer/AMCP5479.jpg',
			'/gamecon-images/dnd-minis/Dwarf Artificer/AMCP5480.jpg',
			'/gamecon-images/dnd-minis/Dwarf Artificer/AMCP5482.jpg',
			'/gamecon-images/dnd-minis/Dwarf Artificer/AMCP5484.jpg',
			'/gamecon-images/dnd-minis/Dwarf Artificer/AMCP5485.jpg',
		],
	},
	{
		name: 'Dwarf Gunslinger',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Dwarf Gunslinger/AMCP3323.jpg',
			'/gamecon-images/dnd-minis/Dwarf Gunslinger/AMCP3324.jpg',
		],
	},
	{
		name: 'Dwarf Ranger',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Dwarf Ranger/AMCP3326.jpg',
			'/gamecon-images/dnd-minis/Dwarf Ranger/AMCP3327.jpg',
		],
	},
	{
		name: 'Elf Psychic',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Elf Psychic/AMCP3332.jpg',
			'/gamecon-images/dnd-minis/Elf Psychic/AMCP3333.jpg',
		],
	},
	{
		name: 'Elf Rogue',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Elf Rogue/AMCP3337.jpg',
			'/gamecon-images/dnd-minis/Elf Rogue/AMCP3338.jpg',
		],
	},
	{
		name: 'Gnome Summoner',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Gnome Summoner/AMCP3075.jpg',
			'/gamecon-images/dnd-minis/Gnome Summoner/AMCP3076.jpg',
		],
	},
	{
		name: 'Half-Orc Inventor',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Half Orc Inventor/AMCP3073.jpg',
			'/gamecon-images/dnd-minis/Half Orc Inventor/AMCP3074.jpg',
		],
	},
	{
		name: 'Half-Elf Magus',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Half-Elf Magus/AMCP3360.jpg',
			'/gamecon-images/dnd-minis/Half-Elf Magus/AMCP3361.jpg',
		],
	},
	{
		name: 'Half-Orc Ranger Vindicator',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Half-Orc Ranger Vindicator/AMCP3362.jpg',
			'/gamecon-images/dnd-minis/Half-Orc Ranger Vindicator/AMCP3363.jpg',
		],
	},
	{
		name: 'Human Animist',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Human Animist/AMCP3366.jpg',
			'/gamecon-images/dnd-minis/Human Animist/AMCP3367.jpg',
		],
	},
	{
		name: 'Human Barbarian',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Human Barbarian/AMCP3328.jpg',
			'/gamecon-images/dnd-minis/Human Barbarian/AMCP3329.jpg',
		],
	},
	{
		name: 'Human Exemplar',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Human Exemplar/AMCP3321.jpg',
			'/gamecon-images/dnd-minis/Human Exemplar/AMCP3322.jpg',
		],
	},
	{
		name: 'Human Fighter',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Human Fighter/AMCP3345.jpg',
			'/gamecon-images/dnd-minis/Human Fighter/AMCP3346.jpg',
		],
	},
	{
		name: 'Human Shifter',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Human Shifter/AMCP3368.jpg',
			'/gamecon-images/dnd-minis/Human Shifter/AMCP3369.jpg',
		],
	},
	{
		name: 'Human Sorceress',
		category: 'dnd-minis',
		price: 75,
		images: [
			'/gamecon-images/dnd-minis/Human Sorceress/AMCP3339.jpg',
			'/gamecon-images/dnd-minis/Human Sorceress/AMCP3340.jpg',
		],
	},
	{
		name: 'Human Summoner',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Human Summoner/AMCP3068.jpg',
			'/gamecon-images/dnd-minis/Human Summoner/AMCP3069.jpg',
			'/gamecon-images/dnd-minis/Human Summoner/AMCP3070.jpg',
			'/gamecon-images/dnd-minis/Human Summoner/AMCP3071.jpg',
		],
	},
	{
		name: 'Human Witch',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Human Witch/AMCP3343.jpg',
			'/gamecon-images/dnd-minis/Human Witch/AMCP3344.jpg',
		],
	},
	{
		name: 'KDM Firebender',
		category: 'dnd-minis',
		price: 75,
		images: [
			'/gamecon-images/dnd-minis/KDM Firebender/AMCP6355.jpg',
			'/gamecon-images/dnd-minis/KDM Firebender/AMCP6342.jpg',
			'/gamecon-images/dnd-minis/KDM Firebender/AMCP6348.jpg',
			'/gamecon-images/dnd-minis/KDM Firebender/AMCP6350.jpg',
		],
	},
	{
		name: 'KDM Ranger',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/KDM Ranger/AMCP3399.jpg',
			'/gamecon-images/dnd-minis/KDM Ranger/AMCP3400.jpg',
			'/gamecon-images/dnd-minis/KDM Ranger/AMCP3401.jpg',
		],
	},
	{
		name: 'Orc Shamman',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Orc Shamman/AMCP5486.jpg',
			'/gamecon-images/dnd-minis/Orc Shamman/AMCP5488.jpg',
			'/gamecon-images/dnd-minis/Orc Shamman/AMCP5490.jpg',
			'/gamecon-images/dnd-minis/Orc Shamman/AMCP5492.jpg',
			'/gamecon-images/dnd-minis/Orc Shamman/AMCP5497.jpg',
		],
	},
	{
		name: 'Orc Warpriest',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Orc Warpriest/AMCP3064.jpg',
			'/gamecon-images/dnd-minis/Orc Warpriest/AMCP3065.jpg',
			'/gamecon-images/dnd-minis/Orc Warpriest/AMCP3066.jpg',
		],
	},
	{
		name: 'Tengu Oracle',
		category: 'dnd-minis',
		images: [
			'/gamecon-images/dnd-minis/Tengu Oracle/AMCP3335.jpg',
			'/gamecon-images/dnd-minis/Tengu Oracle/AMCP3336.jpg',
		],
	},

	// ── Keycaps ─────────────────────────────────────────────────────────────────
	{
		name: 'Bulbasaur',
		category: 'keycaps',
		images: [
			'/gamecon-images/Keycaps/Bulbasaur/AMCP3378.jpg',
			'/gamecon-images/Keycaps/Bulbasaur/AMCP3397.jpg',
		],
	},
	{
		name: 'Charmander',
		category: 'keycaps',
		images: [
			'/gamecon-images/Keycaps/Charmander/AMCP3377.jpg',
			'/gamecon-images/Keycaps/Charmander/AMCP3394.jpg',
		],
	},
	{
		name: 'Hollow Knight',
		category: 'keycaps',
		images: [
			'/gamecon-images/Keycaps/Hollow Knight/AMCP3381.jpg',
			'/gamecon-images/Keycaps/Hollow Knight/AMCP3395.jpg',
		],
	},
	{
		name: 'Kirby',
		category: 'keycaps',
		images: [
			'/gamecon-images/Keycaps/Kirby/AMCP3388.jpg',
			'/gamecon-images/Keycaps/Kirby/AMCP3389.jpg',
		],
	},
	{
		name: 'Luna',
		category: 'keycaps',
		images: [
			'/gamecon-images/Keycaps/Luna/AMCP3380.jpg',
			'/gamecon-images/Keycaps/Luna/AMCP3393.jpg',
		],
	},
	{
		name: 'Meme Dragons',
		category: 'keycaps',
		images: [
			'/gamecon-images/Keycaps/Meme Dragons/AMCP3387.jpg',
			'/gamecon-images/Keycaps/Meme Dragons/AMCP3390.jpg',
		],
	},
	{
		name: 'Pikachu',
		category: 'keycaps',
		images: [
			'/gamecon-images/Keycaps/Pikachu/AMCP3384.jpg',
			'/gamecon-images/Keycaps/Pikachu/AMCP3398.jpg',
		],
	},
	{
		name: 'Squirtle',
		category: 'keycaps',
		images: [
			'/gamecon-images/Keycaps/Squirtle/AMCP3376.jpg',
			'/gamecon-images/Keycaps/Squirtle/AMCP3396.jpg',
		],
	},
	{
		name: 'Toothless',
		category: 'keycaps',
		images: [
			'/gamecon-images/Keycaps/Toothless/AMCP3386.jpg',
			'/gamecon-images/Keycaps/Toothless/AMCP3392.jpg',
		],
	},
];
