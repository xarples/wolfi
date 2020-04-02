import { Ref } from "@vue/composition-api"

export type Align = "left" | "right"

export interface Context {
  isShow: Ref<boolean>
  toggleIsShow: () => void
}
