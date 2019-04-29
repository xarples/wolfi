import Vue, { PluginFunction, PluginObject, VueConstructor } from 'vue'

interface FontVariant {
  fontWeight?: string,
  fontSize?: string,
  letterSpacing?: string,
  case?: string
}

export interface WolfiTheme {
  colors?: {
    error?: string,
    primary?: string,
    primaryLight?: string,
    primaryDark?: string,
    secondary?: string,
    secondaryLight?: string,
    secondaryDark?: string,
    surface?: string,
    surfaceLight?: string,
    surfaceDark?: string,
    background?: string,
    onPrimary?: string,
    onPrimaryLight?: string,
    onPrimaryDark?: string,
    onSecondary?: string,
    onSecondaryLight?: string,
    onSecondaryDark?: string,
    onSurface?: string,
    onSurfaceLight?: string,
    onSurfaceDark?: string,
    onBackground?: string,
    onBackgroundLight?: string,
    onBackgroundDark?: string,
  },
  corner?: {
    radius?: string,
  },
  typography?: {
    family?: 'Roboto',
    variants?: {
      h1?: FontVariant,
      h2?: FontVariant,
      h3?: FontVariant,
      h4?: FontVariant,
      h5?: FontVariant,
      h6?: FontVariant,
      subtitle1?: FontVariant,
      subtitle2?: FontVariant,
      body1?: FontVariant,
      body2?: FontVariant,
      button?: FontVariant,
      caption?: FontVariant,
      overline?: FontVariant,
    }
  },
  elevations?: {
    '0dp'?: string,
    '1dp'?: string,
    '2dp'?: string,
    '3dp'?: string,
    '4dp'?: string,
    '5dp'?: string,
    '6dp'?: string,
    '7dp'?: string,
    '8dp'?: string,
    '9dp'?: string,
    '10dp'?: string,
    '11dp'?: string,
    '12dp'?: string,
    '13dp'?: string,
    '14dp'?: string,
    '15dp'?: string,
    '16dp'?: string,
    '17dp'?: string,
    '18dp'?: string,
    '19dp'?: string,
    '20dp'?: string,
    '21dp'?: string,
    '22dp'?: string,
    '23dp'?: string,
    '24dp'?: string,
  }
}

export interface WolfiOptions {
  theme?: WolfiTheme
}

export interface Wolfi {
  install: PluginFunction<WolfiOptions>
}

export interface WolfiObject extends Vue {
  theme: WolfiTheme
}

declare module 'vue/types/vue' {
  export interface Vue {
    $wolfi: WolfiObject
  }
}

declare global {
  export interface Window {
    Vue: VueConstructor
  }
}
