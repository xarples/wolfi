import { Ref } from "@vue/composition-api"

export interface Context {
  current: Ref<string>
  setCurrent: (id: string) => void
}
