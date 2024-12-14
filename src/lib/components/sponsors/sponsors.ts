interface Sponsor {
	name: string;
	icon: string;
	url: string;
}

interface Tiers {
	Tier3?: Sponsor[];
	Tier2?: Sponsor[];
	Tier1?: Sponsor[];
	Food?: Sponsor[];
}

export const sponsors: Tiers = {
	Tier3: [
		{
			name: 'NextEra Energy',
			icon: 'assets/sponsors/nextera.png',
			url: 'https://www.nexteraenergy.com/'
		}
	],
	Tier1: [
		{
			name: 'Mathworks',
			icon: 'assets/sponsors/mathworks.png',
			url: 'https://www.mathworks.com/'
		}
	],
	Food: [
		{
			name: '4Rivers',
			icon: 'assets/sponsors/4rivers.png',
			url: 'https://4riverssmokehouse.com/'
		},
		{
			name: "Domino's",
			icon: 'assets/sponsors/dominos.png',
			url: 'https://www.dominos.com/'
		},
		{
			name: 'UpperCrust',
			icon: 'assets/sponsors/uppercrust.png',
			url: 'https://www.uppercrustgnv.com/'
		},
		{
			name: "Satchel's Pizza",
			icon: 'assets/sponsors/satchels.png',
			url: 'https://www.satchelspizza.com/'
		}
	]
};
