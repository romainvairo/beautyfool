/**
 * format a string
 * @param {String} format
 * @param  {Array} args
 * @returns {String}
 */
export const stringFormatter = (format, ...args) => {
  args = args || [];

  const regex = /((?<!\{)\{[0-9]*\})|(\{[0-9]*\}(?!\}))/;

  const matches = format.match(new RegExp(regex, 'g'));

  if (!matches) {
    return format;
  }

	for(let i = 0; i < matches.length; i++) {
		const match = format.match(regex);

		const formatStart = format.substring(0, match.index);
		const formatEnd = format.substring(match.index + match[0].length, format.length);

		const index = match[0].match(/[0-9]+/) || i;

		format = formatStart + args[+index] + formatEnd;
  }

	return format.replace(/\{(\{[0-9]*\})\}/g, '$1');
}
