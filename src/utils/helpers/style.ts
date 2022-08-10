/**
 * Apply given params to all (4) sides
 * of an element.
 */
export function applyToAllSides(
  prefix: string,
  postfix: string,
  value: string | string[],
) {
  const values = typeof value === 'string' ? Array(4).fill(value) : value
  return {
    [`${prefix}Top${postfix}`]: values[0],
    [`${prefix}Right${postfix}`]: values[1],
    [`${prefix}Bottom${postfix}`]: values[2],
    [`${prefix}Left${postfix}`]: values[3],
  }
}

/**
 * Apply given params to all (4) corners
 * of an element.
 */
export function applyToAllCorners(
  prefix: string,
  postfix: string,
  value: string | string[],
) {
  const values = typeof value === 'string' ? Array(4).fill(value) : value
  return {
    [`${prefix}TopLeft${postfix}`]: values[0],
    [`${prefix}TopRight${postfix}`]: values[1],
    [`${prefix}BottomLeft${postfix}`]: values[2],
    [`${prefix}BottomRight${postfix}`]: values[3],
  }
}

export function styleObjToStyleStr(obj: Record<string, unknown>) {
  let str = ''
  for (const key in obj) {
    if (str.length !== 0) {
      str += '\n'
    }
    str += `${kebabize(key)}: ${obj[key]};`
  }
  return str
}

/**
 * Convert camelCase string to kebab-case string
 * Credit: https://stackoverflow.com/a/67243723/6887746
 */
export function kebabize(str: string) {
  return str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
  )
}

/**
 * Expand given margin style string
 * to array.
 */
export function margin(value: string) {
  return applyToAllSides('margin', '', value.split(' '))
}

/**
 * Expand given padding style string
 * to array and apply it to all sides.
 */
export function padding(value: string) {
  const values = value.split(' ')
  if (values.length < 4) {
    throw new Error(
      `Shorthened padding style is not allowed. padding: ${values}`,
    )
  }
  return applyToAllSides('padding', '', values)
}

/**
 * Expand given border style string
 * to array and apply it to all sides.
 */
export function border(value: string) {
  const prefix = 'border'
  const values = value.split(' ')
  return {
    ...applyToAllSides(prefix, 'Width', values[0]),
    ...applyToAllSides(prefix, 'Style', values[1]),
    ...applyToAllSides(prefix, 'Color', values[2]),
  }
}

/**
 * Expand given border style string
 * (withour border-color value)
 * to array  and apply it to all sides.
 */
export function borderWithoutColors(value: string) {
  const prefix = 'border'
  const values = value.split(' ')
  return {
    ...applyToAllSides(prefix, 'Width', values[0]),
    ...applyToAllSides(prefix, 'Style', values[1]),
  }
}

/**
 * Expand given border color style string
 * to array and apply it to all sides.
 */
export function borderColors(value: string) {
  return applyToAllSides('border', 'Color', value)
}

/**
 * Expend given border-raduis value to
 * array which apply it to all corners.
 */
export function borderRadius(value: string) {
  return applyToAllCorners('border', 'Radius', value)
}

/**
 * Unset border to all four sides
 */
export function noBorder() {
  const prefix = 'border'
  return {
    ...applyToAllSides(prefix, 'width', '0'),
    ...applyToAllSides(prefix, 'style', 'none'),
  }
}

/**
 * Unset padding to all four sides
 */
export function noPadding() {
  return applyToAllSides('padding', '', 'unset')
}
