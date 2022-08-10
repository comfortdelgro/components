const secondary = {
  linkBlue: '#009EDA',
  linkBlue20: '#CCECF8',

  orange: '#EF631A',
  orange20: '#FCE0D1',

  red: '#E31617',
  red20: '#F9D0D1',

  yellow: '#FFC107',
  yellow20: '#FFF3CD',

  green: '#159A00',
  green20: '#D0EBCC',
}

const blue = {
  10: '#E6ECF7',
  20: '#CCD9EF',
  40: '#99B3DF',
  60: '#678ECF',
  80: '#3468BF',
  100: '#0142AF',
  120: '#012158',
}

const grey = {
  0: '#FFFFFF',
  20: '#E6E6E6',
  40: '#B4B4B4',
  60: '#757575',
  80: '#3E3E3E',
  100: '#333333',
}

const tint = {
  80: 'gba(51, 51, 51, 0.45)',
}

const background = {
  base: '#FFFFFF',
  sidebar: '#FAFAFA',
  layer1: '#F7F8F9',
}

const neutrals = {
  100: '#25324B',
}

export const colors = {
  primary: {
    cdgBlue: blue[100],
    grey100: grey[100],
    white: grey[0],
  },
  secondary,
  shades: {
    cdgBlue10: blue[10],
    cdgBlue20: blue[20],
    cdgBlue40: blue[40],
    cdgBlue60: blue[60],
    cdgBlue80: blue[80],
    cdgBlue100: blue[100],
    cdgBlue120: blue[120],

    white: grey[0],
    grey10: background.layer1,
    grey20: grey[20],
    grey40: grey[40],
    grey60: grey[60],
    grey100: grey[100],
  },
  tints: {
    tint80: tint[80],
  },
  background,
  neutrals,
  transparent: 'transparent',
}
