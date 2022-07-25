/**
 * Apply given params to all (4) sides
 * of an element.
 *
 * @param {string} prefix
 * @param {string} postfix
 * @param {array|string} value
 * @returns {object}
 */
export function applyToAllSides(prefix: string, postfix: string, value: any[] | string): object;
/**
 * Apply given params to all (4) corners
 * of an element.
 * @param {string} prefix
 * @param {string} postfix
 * @param {array|string} value
 * @returns {object}
 */
export function applyToAllCorners(prefix: string, postfix: string, value: any[] | string): object;
export function styleObjToStyleStr(obj: any): string;
/**
 * Convert camelCase string to kebab-case string
 * Credit: https://stackoverflow.com/a/67243723/6887746
 *
 * @param {string} str
 * @returns {string}
 */
export function kebabize(str: string): string;
/**
 * Expand given margin style string
 * to array.
 *
 * @param {string} value
 * @returns {object}
 */
export function margin(value: string): object;
/**
 * Expand given padding style string
 * to array and apply it to all sides.
 *
 * @param {string} value
 * @returns {object}
 */
export function padding(value: string): object;
/**
 * Expand given border style string
 * to array and apply it to all sides.
 *
 * @param {string} value
 * @returns {object}
 */
export function border(value: string): object;
/**
 * Expand given border style string
 * (withour border-color value)
 * to array  and apply it to all sides.
 *
 * @param {string} value
 * @returns {object}
 */
export function borderWithoutColors(value: string): object;
/**
 * Expand given border color style string
 * to array and apply it to all sides.
 *
 * @param {string} value
 * @returns {object}
 */
export function borderColors(value: string): object;
/**
 * Expend given border-raduis value to
 * array which apply it to all corners.
 *
 * @param {string} value
 * @returns {object}
 */
export function borderRadius(value: string): object;
/**
 * Unset border to all four sides
 *
 * @returns {object}
 */
export function noBorder(): object;
/**
 * Unset padding to all four sides
 *
 * @returns {object}
 */
export function noPadding(): object;