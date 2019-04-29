import * as components from './components';
import theme from './mixins/theme';
import { Wolfi as WolfiPlugin } from '../types';

const wolfi: WolfiPlugin = {
  // tslint:disable-next-line
  install (Vue, options = {}) {
    if ((this.install as any).installed) return;

    (this.install as any).installed = true;

    Vue.prototype.$wolfi = new Vue({
      data: {
        theme: theme(options.theme),
      },
    });

    Object.keys(components).forEach((componentName) => {
      // @ts-ignore
      Vue.component(componentName, components[componentName]);
    });
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(wolfi);
}

export * from './components';

export default wolfi;
