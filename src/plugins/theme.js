const plugin = {}

plugin.install = (Vue, options = { theme: {} }) => {
  const defaultTheme = {
    colors: {
      primary: '#5f6cd4',
      secondary: '#495268',
      success: '#05d2a5',
      error: '#cf092d',
      warning: '#ffcc5c',
      info: '#81b9c3',
      white: '#fff',
      black: '#000',
      silver: '#FAFBFC'
    },
    fonts: {
      family: 'Roboto, Arial, sans-serif',
      variant: {
        headline1: {
          size: '96px',
          weight: 'light',
          letterSpacing: '-1.5px'
        },
        headline2: {
          size: '60px',
          weight: 'light',
          letterSpacing: '-0.5px'
        },
        headline3: {
          size: '48px',
          weight: 'normal',
          letterSpacing: '0'
        },
        headline4: {
          size: '34px',
          weight: 'normal',
          letterSpacing: '0.25px'
        },
        headline5: {
          size: '24px',
          weight: 'normal',
          letterSpacing: '0'
        },
        headline6: {
          size: '20px',
          weight: 'normal',
          letterSpacing: '0.15px'
        },
        subtitle1: {
          size: '16px',
          weight: 'normal',
          letterSpacing: '0.15px'
        },
        subtitle2: {
          size: '14px',
          weight: 'normal',
          letterSpacing: '0.1px'
        },
        body1: {
          size: '16px',
          weight: 'normal',
          letterSpacing: '0.5px'
        },
        body2: {
          size: '14px',
          weight: 'normal',
          letterSpacing: '0.25px'
        },
        button: {
          size: '14px',
          weight: 'normal',
          letterSpacing: '1.25px'
        },
        caption: {
          size: '12px',
          weight: 'normal',
          letterSpacing: '0.4px'
        },
        overline: {
          size: '10px',
          weight: 'normal',
          letterSpacing: '1.5px'
        }
      }
    },
    components: {
      button: {
        sizes: {
          small: '28px',
          medium: '36px',
          large: '44px'
        }
      },
      list: {
        sizes: {
          1: {
            height: '48px'
          },
          2: {
            height: '64px'
          },
          3: {
            height: '88px'
          }
        }
      }
    }
  }

  Vue.prototype.$wolfiTheme = Object.assign(defaultTheme, options.theme)
}

export default plugin
