const icons: { [key: string]: string } = {
	adobe_illustrator: '/assets/applications/adobe_illustrator_5.5.png',
	key_caps: '/assets/applications/key_caps.png',
	adobe_photoshop_5_0: '/assets/applications/adobe_photoshop_5.0.png',
	mail: '/assets/applications/mail.png',
	apple_file_security: '/assets/applications/apple_file_security.png',
	internet_explorer: '/assets/applications/microsoft_internet_explorer.png',
	fm_radio: '/assets/applications/apple_fm_radio.png',
	notepad: '/assets/applications/notepad.png',
	apple_share_prep: '/assets/applications/apple_share_prep.png',
	quicktime_player: '/assets/applications/quicktime_player.png',
	apple_verifier: '/assets/applications/apple_verifier.png',
	scrapbook: '/assets/applications/scrapbook.png',
	calculator: '/assets/applications/calculator.png',
	script_editor: '/assets/applications/script_editor.png',
	disk_copy: '/assets/applications/disk_copy.png',
	sherlock_2_0: '/assets/applications/sherlock_2.0.png',
	disk_first_aid: '/assets/applications/disk_first_aid.png',
	stickies: '/assets/applications/stickies.png',
	graphing_calculator: '/assets/applications/graphing_calculator.png',
	stuffit_expander: '/assets/applications/stuffit_expander.png',
	itunes: '/assets/applications/itunes.png',
	website: '/assets/applications/website.png'
} as const;

// Create a type for the keys of the icons object
export type IconName = keyof typeof icons;

// Export the icons object
export default icons;
