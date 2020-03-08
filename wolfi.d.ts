import Vue, { PluginFunction, VueConstructor } from "vue"

interface InstallFunction extends PluginFunction<WolfiPluginOptions> {
  installed?: boolean
}

export interface WolfiPlugin {
  install: InstallFunction
}

export interface WolfiPluginOptions {
  colors: {
    primary: string
    info: string
    success: string
    danger: string
    warning: string
    default: string
    secondary: string
    gray1: string
    gray2: string
    gray3: string
    gray4: string
    gray5: string
    gray6: string
    gray7: string
    gray8: string
    gray9: string
    white: string
    transparent: string
  }
}

interface Wolfi extends Vue, WolfiPluginOptions {}

declare module "vue/types/vue" {
  interface Vue {
    $wolfi: Wolfi
  }
}

export const WAlert: VueConstructor<Vue>
export const WBadge: VueConstructor<Vue>
export const WButton: VueConstructor<Vue>
export const WCard: VueConstructor<Vue>
export const WCardBody: VueConstructor<Vue>
export const WCardCategory: VueConstructor<Vue>
export const WCardDescription: VueConstructor<Vue>
export const WCardFooter: VueConstructor<Vue>
export const WCardImage: VueConstructor<Vue>
export const WCardTitle: VueConstructor<Vue>
export const WCollapse: VueConstructor<Vue>
export const WCollapseItem: VueConstructor<Vue>
export const WCheckbox: VueConstructor<Vue>
export const WDropdown: VueConstructor<Vue>
export const WDropdownItem: VueConstructor<Vue>
export const WDropdownList: VueConstructor<Vue>
export const WDropdownTrigger: VueConstructor<Vue>
export const WIcon: VueConstructor<Vue>
export const WInput: VueConstructor<Vue>
export const WModal: VueConstructor<Vue>
export const WModalBody: VueConstructor<Vue>
export const WModalContent: VueConstructor<Vue>
export const WModalFooter: VueConstructor<Vue>
export const WModalHeader: VueConstructor<Vue>
export const WModalTitle: VueConstructor<Vue>
export const WModalTrigger: VueConstructor<Vue>
export const WRadio: VueConstructor<Vue>
export const WText: VueConstructor<Vue>
export const WTextarea: VueConstructor<Vue>

export default WolfiPlugin
