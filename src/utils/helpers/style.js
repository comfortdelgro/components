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

// export function styleAllSides(name, value) {
//   const values = (typeof value === 'string')
//                     ? Array(4).fill(value)
//                     : value;
//   return {
//     [`${name}TopStyle`]: values[0],
//     [`${name}RightStyle`]: values[1],
//     [`${name}BottomStyle`]: values[2],
//     [`${name}LeftStyle`]: values[3],
//   };
// }

// export function widthAllSides(name, value) {
//   const values = (typeof value === 'string')
//                     ? Array(4).fill(value)
//                     : value;
//   return {
//     [`${name}TopWidth`]: values[0],
//     [`${name}RightWidth`]: values[1],
//     [`${name}BottomWidth`]: values[2],
//     [`${name}LeftWidth`]: values[3],
//   };
// }

// export function colorAllSides(name, value) {
//   const values = (typeof value === 'string')
//                     ? Array(4).fill(value)
//                     : value;
//   return {
//     [`${name}TopColor`]: values[0],
//     [`${name}RightColor`]: values[1],
//     [`${name}BottomColor`]: values[2],
//     [`${name}LeftColor`]: values[3],
//   };
// }

export function margin(value) {
  return applyToAllSides("margin", "",value.split(" "));
}

export function padding(value) {
  return applyToAllSides("padding", "",value.split(" "));
}

export function border(value) {
  const prefix = "border";
  const values = value.split(" ");
  return {
    ...applyToAllSides(prefix, "Width", values[0]),
    ...applyToAllSides(prefix, "Style", values[1]),
    ...applyToAllSides(prefix, "Color", values[2]),
  }
}

export function borderWithoutColors(value) {
  const prefix = "border";
  const values = value.split(" ");
  return {
    ...applyToAllSides(prefix, "Width", values[0]),
    ...applyToAllSides(prefix, "Style", values[1]),
  }
}

export function borderRadius(value) {
  return applyToAllCorners("border", "Radius", value);
}

export function noBorder() {
  const prefix = "border";
  return {
    ...applyToAllSides(prefix, "width",0),
    ...applyToAllSides(prefix, "style", "none"),
  }
}