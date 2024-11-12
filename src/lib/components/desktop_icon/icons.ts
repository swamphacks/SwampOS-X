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
	website: '/assets/applications/website.png',
	blank_file: '/assets/system/blank_file.png',
	color_sw_pro: '/assets/system/color_sw_pro.png',
	folder_panels: '/assets/system/folder_panels.png',
	hard_drive: '/assets/system/hard_drive.png',
	internet_search: '/assets/system/internet_search.png',
	log: '/assets/system/log.png',
	quicktime_movie: '/assets/system/quicktime_movie.png',
	system_folder: '/assets/system/system_folder.png',
	url_access: '/assets/system/url_access.png',
	clipboard: '/assets/system/clipboard.png',
	csw_6000_series: '/assets/system/csw_6000_series.png',
	font_file: '/assets/system/font_file.png',
	hard_drive_shared_finder: '/assets/system/hard_drive_shared_finder.png',
	internet_setup: '/assets/system/internet_setup.png',
	map_tcp_file: '/assets/system/map_tcp_file.png',
	register_with_apple: '/assets/system/register_with_apple.png',
	teach_text: '/assets/system/teach_text.png',
	color_profile: '/assets/system/color_profile.png',
	drive_setup: '/assets/system/drive_setup.png',
	font_suitcase: '/assets/system/font_suitcase.png',
	hard_drive_shared: '/assets/system/hard_drive_shared.png',
	itunes_playlist: '/assets/system/itunes_playlist.png',
	notepad_file: '/assets/system/notepad_file.png',
	screen: '/assets/system/screen.png',
	text_file: '/assets/system/text_file.png',
	color_sw_1500: '/assets/system/color_sw_1500.png',
	edit: '/assets/system/edit.png',
	hard_drive_external: '/assets/system/hard_drive_external.png',
	help: '/assets/system/help.png',
	itunes_plugin: '/assets/system/itunes_plugin.png',
	pdf: '/assets/system/pdf.png',
	setup_assistant: '/assets/system/setup_assistant.png',
	trash_empty: '/assets/system/trash_empty.png',
	color_sw_2500: '/assets/system/color_sw_2500.png',
	floppy_disk: '/assets/system/floppy_disk.png',
	hard_drive_finder: '/assets/system/hard_drive_finder.png',
	internet_browse: '/assets/system/internet_browse.png',
	language_file: '/assets/system/language_file.png',
	question: '/assets/system/question.png',
	sound_settings: '/assets/system/sound_settings.png',
	trash_full: '/assets/system/trash_full.png',
	gud_logo: '/assets/desktop/gud-logo.png',
	speakers: '/assets/desktop/speakers.png',
	faq: '/assets/desktop/faq.png'
} as const;

// Create a type for the keys of the icons object
export type IconName = keyof typeof icons;

// Export the icons object
export default icons;