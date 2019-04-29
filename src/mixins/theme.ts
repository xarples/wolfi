import { WolfiTheme } from '../../types';

const defaultTheme: WolfiTheme = {
  colors: {
    error: '#B00020',
    primary: '#2962FF',
    primaryLight: '#E7E9FF',
    primaryDark: '#0001C0',
    secondary: '#F5F5F5',
    secondaryLight: '#FAFAFA',
    secondaryDark: '#212121',
    surface: '#FFFFFF',
    surfaceLight: '#FFFFFF',
    surfaceDark: '#F5F5F5',
    background: '#FAFBFC',
    onPrimary: '#FFFFFF',
    onPrimaryLight: '#000000',
    onPrimaryDark: '#FFFFFF',
    onSecondary: '#000000',
    onSecondaryLight: '#000000',
    onSecondaryDark: '#FFFFFF',
    onSurface: '#000000',
    onSurfaceLight: '#000000',
    onSurfaceDark: '#000000',
    onBackground: '#000000',
    onBackgroundLight: '#000000',
    onBackgroundDark: '#000000',
  },
  corner: {
    radius: '4px',
  },
  typography: {
    family: 'Roboto',
    variants: {
      h1: {
        fontWeight: 'light',
        fontSize: '96px',
        letterSpacing: '-1.5px',
        case: 'initial',
      },
      h2: {
        fontWeight: 'light',
        fontSize: '60px',
        letterSpacing: '-0.5px',
        case: 'initial',
      },
      h3: {
        fontWeight: 'regular',
        fontSize: '48px',
        letterSpacing: '0',
        case: 'initial',
      },
      h4: {
        fontWeight: 'regular',
        fontSize: '34px',
        letterSpacing: '0.25px',
        case: 'initial',
      },
      h5: {
        fontWeight: 'regular',
        fontSize: '24px',
        letterSpacing: '0',
        case: 'initial',
      },
      h6: {
        fontWeight: 'medium',
        fontSize: '20px',
        letterSpacing: '0.15px',
        case: 'initial',
      },
      subtitle1: {
        fontWeight: 'regular',
        fontSize: '16px',
        letterSpacing: '0.15px',
        case: 'initial',
      },
      subtitle2: {
        fontWeight: 'medium',
        fontSize: '14px',
        letterSpacing: '0.1px',
        case: 'initial',
      },
      body1: {
        fontWeight: 'regular',
        fontSize: '16px',
        letterSpacing: '0.5px',
        case: 'initial',
      },
      body2: {
        fontWeight: 'regular',
        fontSize: '14px',
        letterSpacing: '0.25px',
        case: 'initial',
      },
      button: {
        fontWeight: 'medium',
        fontSize: '14px',
        letterSpacing: '1.25px',
        case: 'uppercase',
      },
      caption: {
        fontWeight: 'regular',
        fontSize: '12px',
        letterSpacing: '0.4px',
        case: 'initial',
      },
      overline: {
        fontWeight: 'regular',
        fontSize: '10px',
        letterSpacing: '1.5px',
        case: 'uppercase',
      },
    },
  },
  elevations: {
    // tslint:disable: max-line-length
    '0dp': '0 0 0 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12)',
    '1dp': '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
    '2dp': '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)',
    '3dp': '0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12)',
    '4dp': '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
    '5dp': '0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12)',
    '6dp': '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
    '7dp': '0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12)',
    '8dp': '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
    '9dp': '0 5px 6px -3px rgba(0,0,0,.2), 0 9px 12px 1px rgba(0,0,0,.14), 0 3px 16px 2px rgba(0,0,0,.12)',
    '10dp': '0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12)',
    '11dp': '0 6px 7px -4px rgba(0,0,0,.2), 0 11px 15px 1px rgba(0,0,0,.14), 0 4px 20px 3px rgba(0,0,0,.12)',
    '12dp': '0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12)',
    '13dp': '0 7px 8px -4px rgba(0,0,0,.2), 0 13px 19px 2px rgba(0,0,0,.14), 0 5px 24px 4px rgba(0,0,0,.12)',
    '14dp': '0 7px 9px -4px rgba(0,0,0,.2), 0 14px 21px 2px rgba(0,0,0,.14), 0 5px 26px 4px rgba(0,0,0,.12)',
    '15dp': '0 8px 9px -5px rgba(0,0,0,.2), 0 15px 22px 2px rgba(0,0,0,.14), 0 6px 28px 5px rgba(0,0,0,.12)',
    '16dp': '0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12)',
    '17dp': '0 8px 11px -5px rgba(0,0,0,.2), 0 17px 26px 2px rgba(0,0,0,.14), 0 6px 32px 5px rgba(0,0,0,.12)',
    '18dp': '0 9px 11px -5px rgba(0,0,0,.2), 0 18px 28px 2px rgba(0,0,0,.14), 0 7px 34px 6px rgba(0,0,0,.12)',
    '19dp': '0 9px 12px -6px rgba(0,0,0,.2), 0 19px 29px 2px rgba(0,0,0,.14), 0 7px 36px 6px rgba(0,0,0,.12)',
    '20dp': '0 10px 13px -6px rgba(0,0,0,.2), 0 20px 31px 3px rgba(0,0,0,.14), 0 8px 38px 7px rgba(0,0,0,.12)',
    '21dp': '0 10px 13px -6px rgba(0,0,0,.2), 0 21px 33px 3px rgba(0,0,0,.14), 0 8px 40px 7px rgba(0,0,0,.12)',
    '22dp': '0 10px 14px -6px rgba(0,0,0,.2), 0 22px 35px 3px rgba(0,0,0,.14), 0 8px 42px 7px rgba(0,0,0,.12)',
    '23dp': '0 11px 14px -7px rgba(0,0,0,.2), 0 23px 36px 3px rgba(0,0,0,.14), 0 9px 44px 8px rgba(0,0,0,.12)',
    '24dp': '0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)',
  },
};

export default function theme(theme: WolfiTheme = {}): WolfiTheme {
  return {
    ...defaultTheme,
    ...theme,
  };
}
