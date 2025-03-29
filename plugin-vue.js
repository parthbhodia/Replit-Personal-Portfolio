// This script dynamically adds Vue support to the Vite configuration
const vuePlugin = require('@vitejs/plugin-vue');

module.exports = function() {
  return vuePlugin();
};