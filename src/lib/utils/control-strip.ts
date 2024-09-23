export interface ControlStripAppInfo {
	name: string;
	src: string;
	url?: string;
}

export const reverse = <T>(arr: Array<T>, start: number, end: number) => {
	while (start < end) {
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start++;
		end--;
	}
};

export const rotate = <T>(arr: Array<T>, k: number): Array<T> => {
	// normalize k
	k = ((k % arr.length) + arr.length) % arr.length;

	reverse(arr, 0, arr.length - 1);
	reverse(arr, 0, k - 1);
	reverse(arr, k, arr.length - 1);

	return arr;
};
