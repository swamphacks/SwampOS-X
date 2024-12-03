interface Sponsor {
	name: string;
	icon: string;
}

interface Tiers {
	Gold?: Sponsor[];
	Silver?: Sponsor[];
	Bronze?: Sponsor[];
}

export const sponsors: Tiers = {
	Gold: [
		{
			name: 'NextEra Energy',
			icon: 'Placeholder'
		}
	]
};
