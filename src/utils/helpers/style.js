/**
 * Apply given params to all (4) sides
 * of an element.
 * 
 * @param {string} prefix
 * @param {string} postfix 
 * @param {array|string} value
 * @returns {object}
 */
export function applyToAllSides(prefix, postfix, value) {
  const values = (typeof value === 'string')
                    ? Array(4).fill(value)
                    : value;
  return {
    [`${prefix}Top${postfix}`]: values[0],
    [`${prefix}Right${postfix}`]: values[1],
    [`${prefix}Bottom${postfix}`]: values[2],
    [`${prefix}Left${postfix}`]: values[3],
  };
}

/**
 * Apply given params to all (4) corners
 * of an element.
 * @param {string} prefix
 * @param {string} postfix 
 * @param {array|string} value
 * @returns {object}
 */
export function applyToAllCorners(prefix, postfix,value) {
  const values = (typeof value === 'string')
                    ? Array(4).fill(value)
                    : value;
  return {
    [`${prefix}TopLeft${postfix}`]: values[0],
    [`${prefix}TopRight${postfix}`]: values[1],
    [`${prefix}BottomLeft${postfix}`]: values[2],
    [`${prefix}BottomRight${postfix}`]: values[3],
  };
}

export function styleObjToStyleStr(obj) {
  let str = '';
  for (const key in obj) {
    if (str.length !== 0) {
      str += "\n";
    }
    str += `${kebabize(key)}: ${obj[key]};`
  }
  return str;
};

/**
 * Convert camelCase string to kebab-case string
 * Credit: https://stackoverflow.com/a/67243723/6887746
 * 
 * @param {string} str 
 * @returns {string}
 */
export function kebabize(str) {
  return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
}

/**
 * Expand given margin style string
 * to array.
 * 
 * @param {string} value
 * @returns {object}
 */
export function margin(value) {
  return applyToAllSides("margin", "",value.split(" "));
}

/**
 * Expand given padding style string
 * to array and apply it to all sides.
 * 
 * @param {string} value 
 * @returns {object}
 */
export function padding(value) {
  const values = value.split(" ");
  if (values.length < 4) {
    throw new Error(`Shorthened padding style is not allowed. padding: ${values}`);
  }
  return applyToAllSides("padding", "", values);
}

/**
 * Expand given border style string
 * to array and apply it to all sides.
 * 
 * @param {string} value 
 * @returns {object}
 */
export function border(value) {
  const prefix = "border";
  const values = value.split(" ");
  return {
    ...applyToAllSides(prefix, "Width", values[0]),
    ...applyToAllSides(prefix, "Style", values[1]),
    ...applyToAllSides(prefix, "Color", values[2]),
  }
}

/**
 * Expand given border style string 
 * (withour border-color value)
 * to array  and apply it to all sides.
 * 
 * @param {string} value 
 * @returns {object}
 */
export function borderWithoutColors(value) {
  const prefix = "border";
  const values = value.split(" ");
  return {
    ...applyToAllSides(prefix, "Width", values[0]),
    ...applyToAllSides(prefix, "Style", values[1]),
  }
}

/**
 * Expand given border color style string
 * to array and apply it to all sides.
 * 
 * @param {string} value 
 * @returns {object}
 */
export function borderColors(value) {
  return applyToAllSides("border", "Color", value);
}

/**
 * Expend given border-raduis value to
 * array which apply it to all corners.
 * 
 * @param {string} value 
 * @returns {object}
 */
export function borderRadius(value) {
  return applyToAllCorners("border", "Radius", value);
}

/**
 * Unset border to all four sides
 * 
 * @returns {object}
 */
export function noBorder() {
  const prefix = "border";
  return {
    ...applyToAllSides(prefix, "width",0),
    ...applyToAllSides(prefix, "style", "none"),
  }
}

/**
 * Unset padding to all four sides
 * 
 * @returns {object}
 */
export function noPadding() {
  return applyToAllSides("padding", "", "unset");
}