const plugin = {}

plugin.install = (Vue, options = { theme: {} }) => {
  const defaultTheme = {
    colors: {
      primary: '#11a8ab',
      secondary: '#394264',
      white: '#fff'
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
          weight: 'regular',
          letterSpacing: '0'
        },
        headline4: {
          size: '34px',
          weight: 'regular',
          letterSpacing: '0.25px'
        },
        headline5: {
          size: '24px',
          weight: 'regular',
          letterSpacing: '0'
        },
        headline6: {
          size: '20px',
          weight: 'regular',
          letterSpacing: '0.15px'
        },
        subtitle1: {
          size: '16px',
          weight: 'regular',
          letterSpacing: '0.15px'
        },
        subtitle2: {
          size: '14px',
          weight: 'regular',
          letterSpacing: '0.1px'
        },
        body1: {
          size: '16px',
          weight: 'regular',
          letterSpacing: '0.5px'
        },
        body2: {
          size: '14px',
          weight: 'regular',
          letterSpacing: '0.25px'
        },
        button: {
          size: '14px',
          weight: 'regular',
          letterSpacing: '1.25px'
        },
        caption: {
          size: '12px',
          weight: 'regular',
          letterSpacing: '0.4px'
        },
        overline: {
          size: '10px',
          weight: 'regular',
          letterSpacing: '1.5px'
        }
      }
    },
    components: {
      buttons: {
        default: {
          primary: {
            color: '#fff'
          },
          secondary: {
            color: '#fff'
          }
        },
        outline: {
          primary: {
            color: '#11a8ab'
          },
          secondary: {
            color: '#394264'
          }
        },
        font: {
          sizes: {
            small: '12px',
            medium: '13px',
            large: '14px',
            block: '14px'
          }
        },
        sizes: {
          small: '28px',
          medium: '36px',
          large: '44px',
          block: '44px'
        }
      },
      list: {
        sizes: {
          1: {
            height: '48px'
          },
          2: {
            height: '72px'
          }
        }
      }
    }
  }

  Vue.prototype.$wolfiTheme = Object.assign(defaultTheme, options.theme)
}

export default plugin
