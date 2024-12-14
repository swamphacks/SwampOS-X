import type { Position } from './windows';

export interface DesktopIconProps {
	icon_name: string;
	label: string;
	id: string;
	pos: Position;
}

export const generateIconPositions = (
	icons: Omit<DesktopIconProps, 'pos'>[],
	windowWidth: number,
	windowHeight: number,
	iconSize: number = 60,
	padding: number = 40,
	beginningXOffset: number = 30,
	rightMargin: number = 120
): DesktopIconProps[] => {
	const maxIconsPerColumn = Math.floor(windowHeight / (iconSize + padding + 20)); // Calcuklate how many icons can fit in a column

	// Position declarations
	let currentX = windowWidth - rightMargin;
	let currentY = beginningXOffset;
	let itemsInCurrentColumn = 0;

	return icons.map((icon) => {
		// Check if column is filled up. If so, move to the next column.
		if (itemsInCurrentColumn >= maxIconsPerColumn) {
			currentX -= iconSize + padding - 10;
			currentY = beginningXOffset;
			itemsInCurrentColumn = 0;
		}

		const position: Position = {
			x: currentX,
			y: currentY
		};

		currentY += padding + iconSize;
		itemsInCurrentColumn++;

		return {
			...icon,
			pos: position
		};
	});
};
