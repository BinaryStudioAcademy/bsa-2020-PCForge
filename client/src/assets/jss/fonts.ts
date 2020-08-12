import LatoBlack from 'assets/fonts/Lato/latoblack.ttf';
import LatoBlackItalic from 'assets/fonts/Lato/latoblackitalic.ttf';
import LatoBold from 'assets/fonts/Lato/latobold.ttf';
import LatoBoldItalic from 'assets/fonts/Lato/latobolditalic.ttf';
import LatoItalic from 'assets/fonts/Lato/latoitalic.ttf';
import LatoLight from 'assets/fonts/Lato/latolight.ttf';
import LatoLightItalic from 'assets/fonts/Lato/latolightitalic.ttf';
import LatoRegular from 'assets/fonts/Lato/latoregular.ttf';
import LatoThin from 'assets/fonts/Lato/latothin.ttf';
import LatoThinItalic from 'assets/fonts/Lato/latothinitalic.ttf';

export const latoBlack = {
  fontFamily: 'Lato',
  fontWeight: 900,
  fontStyle: 'normal',
  src: `
    local('Lato Black'),
    local('Lato-Black'),
    url(${LatoBlack}) format('truetype')
  `,
};

export const latoBlackItalic = {
  fontFamily: 'Lato',
  fontWeight: 900,
  fontStyle: 'italic',
  src: `
    local('Lato Black Italic'),
    local('Lato-BlackItalic'),
    url(${LatoBlackItalic}) format('truetype')
  `,
};

export const latoBold = {
  fontFamily: 'Lato',
  fontWeight: 700,
  fontStyle: 'normal',
  src: `
    local('Lato Bold'),
    local('Lato-Bold'),
    url(${LatoBold}) format('truetype')
  `,
};

export const latoBoldItalic = {
  fontFamily: 'Lato',
  fontWeight: 700,
  fontStyle: 'italic',
  src: `
    local('Lato Bold Italic'),
    local('Lato-BoldItalic'),
    url(${LatoBoldItalic}) format('truetype')
  `,
};

export const latoItalic = {
  fontFamily: 'Lato',
  fontWeight: 400,
  fontStyle: 'italic',
  src: `
    local('Lato Italic'),
    local('Lato-Italic'),
    url(${LatoItalic}) format('truetype')
  `,
};

export const latoLight = {
  fontFamily: 'Lato',
  fontWeight: 300,
  fontStyle: 'normal',
  src: `
    local('Lato Light'),
    local('Lato-Light'),
    url(${LatoLight}) format('truetype')
  `,
};

export const latoLightItalic = {
  fontFamily: 'Lato',
  fontWeight: 300,
  fontStyle: 'italic',
  src: `
    local('Lato'),
    local('Lato-LightItalic'),
    url(${LatoLightItalic}) format('truetype')
  `,
};

export const latoRegular = {
  fontFamily: 'Lato',
  fontWeight: 400,
  fontStyle: 'normal',
  src: `
    local('Lato Regular'),
    local('Lato-Regular'),
    url(${LatoRegular}) format('truetype')
  `,
};

export const latoThin = {
  fontFamily: 'Lato',
  fontWeight: 200,
  fontStyle: 'normal',
  src: `
    local('Lato Thin'),
    local('Lato-Thin'),
    url(${LatoThin}) format('truetype')
  `,
};

export const latoThinItalic = {
  fontFamily: 'Lato',
  fontWeight: 200,
  fontStyle: 'italic',
  src: `
    local('Lato'),
    local('Lato-ThinItalic'),
    url(${LatoThinItalic}) format('truetype')
  `,
};
