// TODO: Implement inheritance
export interface MenuItemAction {
	name: string;
	on?: boolean;
	enabled: boolean;
	shortcut?: string;
	action: () => void;
}

export interface MenuItemLink {
	name: string;
	enabled: boolean;
	on?: boolean;
	shortcut?: string;
	url: string;
}

export interface MenuSetting {
	name: string;
	sections: (MenuItemAction | MenuItemLink)[][];
}

export interface AppMenu {
	settings: MenuSetting[];
}

export const DefaultMenu: AppMenu = {
	settings: [
		{
			name: 'File',
			sections: [
				[
					{
						name: 'New Folder',
						enabled: true,
						shortcut: 'cmd n',
						action: () => console.log('New')
					},
					{
						name: 'Open',
						enabled: true,
						shortcut: 'cmd o',
						action: () => console.log('Open')
					},
					{
						name: 'Print',
						enabled: false,
						shortcut: 'cmd p',
						action: () => console.log('Print')
					},
					{
						name: 'Move to Trash',
						enabled: false,
						shortcut: 'cmd backspace',
						action: () => console.log('Backspace')
					},
					{
						name: 'Close All',
						enabled: false,
						shortcut: 'cmd w',
						action: () => console.log('Close All')
					}
				],
				[
					{
						name: 'Duplicate',
						enabled: true,
						shortcut: 'cmd d',
						action: () => console.log('Duplicate')
					},
					{
						name: 'Make Alias',
						enabled: true,
						shortcut: 'cmd m',
						action: () => console.log('Make Alias')
					},
					{
						name: 'Add To Favorites',
						enabled: true,
						action: () => console.log('Add To Favorites')
					},
					{
						name: 'Put Away',
						enabled: false,
						shortcut: 'cmd y',
						action: () => console.log('Put Away')
					},
					{
						name: 'Encrypt',
						enabled: false,
						action: () => console.log('Encrypt')
					}
				],
				[
					{
						name: 'Find...',
						enabled: true,
						shortcut: 'cmd f',
						action: () => console.log('Find')
					},
					{
						name: 'Search Internet...',
						enabled: true,
						shortcut: 'cmd f',
						action: () => console.log('Search Internet')
					},
					{
						name: 'Show Original',
						enabled: false,
						action: () => console.log('Show Original')
					}
				],
				[
					{
						name: 'Page Setup...',
						enabled: true,
						action: () => console.log('Page Setup')
					},
					{
						name: 'Print Window...',
						enabled: true,
						action: () => console.log('Print Window')
					}
				]
			]
		},
		{
			name: 'Edit',
			sections: [
				[
					{
						name: 'Undo',
						enabled: false,
						shortcut: 'cmd z',
						action: () => console.log('Undo')
					}
				],
				[
					{
						name: 'Cut',
						enabled: true,
						shortcut: 'cmd x',
						action: () => console.log('Cut')
					},
					{
						name: 'Copy',
						enabled: true,
						shortcut: 'cmd c',
						action: () => console.log('Copy')
					},
					{
						name: 'Paste',
						enabled: true,
						shortcut: 'cmd v',
						action: () => console.log('Paste')
					},
					{
						name: 'Clear',
						enabled: false,
						action: () => console.log('Clear')
					},
					{
						name: 'Select All',
						enabled: true,
						shortcut: 'cmd a',
						action: () => console.log('Select All')
					}
				],
				[
					{
						name: 'Preferences',
						enabled: true,
						action: () => console.log('Preferences')
					}
				]
			]
		},
		{
			name: 'View',
			sections: [
				[
					{
						name: 'as Icons',
						enabled: true,
						on: true,
						action: () => console.log('as Icons')
					},
					{
						name: 'as Buttons',
						enabled: true,
						on: false,
						action: () => console.log('as Buttons')
					},
					{
						name: 'as List',
						enabled: true,
						on: false,
						action: () => console.log('as List')
					}
				],
				[
					{
						name: 'as Window',
						enabled: true,
						on: true,
						action: () => console.log('as Window')
					},
					{
						name: 'as Pop-up Window',
						enabled: false,
						on: false,
						action: () => console.log('as Pop-up Window')
					},
					{
						name: 'as List',
						enabled: true,
						on: false,
						action: () => console.log('as List')
					}
				],
				[
					{
						name: 'Clean Up',
						enabled: true,
						action: () => console.log('Clean Up')
					},
					{
						name: 'Reset Column Positions',
						enabled: false,
						action: () => console.log('Reset Column Positions')
					}
				],
				[
					{
						name: 'View Options...',
						enabled: true,
						action: () => console.log('View Options')
					}
				]
			]
		},
		{
			name: 'Special',
			sections: [
				[
					{
						name: 'Empty Trash...',
						enabled: false,
						action: () => console.log('Empty Trash')
					}
				],
				[
					{
						name: 'Eject',
						enabled: false,
						action: () => console.log('Eject')
					},
					{
						name: 'Erase Disk...',
						enabled: false,
						action: () => console.log('Erase Disk')
					}
				],
				[
					{
						name: 'Sleep',
						enabled: true,
						action: () => console.log('Sleep')
					},
					{
						name: 'Restart',
						enabled: true,
						action: () => console.log('Restart')
					},
					{
						name: 'Shutdown',
						enabled: true,
						action: () => console.log('Shutdown')
					}
				]
			]
		},
		{
			name: 'Help',
			sections: [
				[
					{
						name: 'Help Center',
						enabled: true,
						action: () => console.log('Help Center')
					}
				],
				[
					{
						name: 'Show Balloons',
						enabled: true,
						action: () => console.log('Show Balloons')
					}
				],
				[
					{
						name: 'Mac Help',
						enabled: true,
						shortcut: 'cmd ?',
						action: () => console.log('Mac Help')
					}
				]
			]
		}
	]
};
