const plugin = {}

plugin.install = (Vue, options = { theme: {} }) => {
  const defaultTheme = {
    buttons: {
      default: {
        primary: {
          color: '#fff',
          background: '#11a8ab'
        },
        secondary: {
          color: '#fff',
          background: '#394264'
        }
      },
      outline: {
        primary: {
          color: '#11a8ab',
          background: 'transparent'
        },
        secondary: {
          color: '#394264',
          background: 'transparent'
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
    }
  }

  Vue.prototype.$wolfiTheme = Object.assign(defaultTheme, options.theme)
}

export default plugin
