import { reactive } from "@vue/composition-api"
import { WolfiPluginOptions } from "wolfi"

export default function useTheme(customTheme: WolfiPluginOptions) {
  let mainTheme: WolfiPluginOptions = {
    colors: {
      primary: "#5e72e4",
      info: "#11cdef",
      success: "#2dce89",
      danger: "#f5365c",
      warning: "#fb6340",
      default: "#3c4d69",
      secondary: "#f4f5f7",
      gray1: "#f6f9fc",
      gray2: "#e9ecef",
      gray3: "#e3e3e3",
      gray4: "#ced4da",
      gray5: "#adb5bd",
      gray6: "#6c757d",
      gray7: "#525f7f",
      gray8: "#32325d",
      gray9: "#212529"
    }
  }

  if (customTheme) {
    mainTheme = { ...mainTheme, ...customTheme }
  }

  const theme = reactive(mainTheme)

  return theme
}
