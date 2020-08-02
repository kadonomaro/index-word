export function stringToArray(string) {
	if (typeof string === 'string') {
		return string.replace(/\s+/g,'').split(',');
	}
	return string;
}
