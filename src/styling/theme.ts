const getSpacingAndSpacingInverse = (spacing: {
  [key: number]: string
}): { [key: string]: string } =>
  Object.entries(spacing).reduce(
    (acc, [key, value]) => ({ ...acc, [`-${key}`]: `-${value}`, [key]: value }),
    {},
  )

const theme = {
  typography: {
    size: {
      coefficient: 1.3333,
      base: 16,
    },
    family: {
      heading: `'Poppins', sans-serif`,
      default: `'Open Sans', sans-serif`,
    },
  },
  colors: {
    primary: '#536DFE',
    grey: '#F9F9F9',
    heading: '#262626',
    bodyText: '#666666',
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  spacing: getSpacingAndSpacingInverse({
    0: '0px',
    1: '6px',
    2: '12px',
    3: '18px',
    4: '24px',
    5: '30px',
    6: '36px',
    7: '42px',
    8: '48px',
    9: '54px',
    10: '60px',
  }),
}

export default theme
