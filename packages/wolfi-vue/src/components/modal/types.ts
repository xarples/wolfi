import { Ref } from "@vue/composition-api"

export type Size = "default" | "sm" | "md" | "lg"

export interface Context {
  isShow: Ref<boolean>
  toggleIsShow: () => void
}
