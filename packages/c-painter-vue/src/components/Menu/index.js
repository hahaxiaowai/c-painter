import Menu from './src/index.vue';

export default {
  install(app) {
    app.component('Menu', Menu);
  },
};
export { Menu };
