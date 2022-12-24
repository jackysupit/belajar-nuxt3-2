// import Alert from "bootstrap/js/dist/alert";
import Button from "bootstrap/js/dist/button";
import Carousel from "bootstrap/js/dist/carousel";
import Collapse from "bootstrap/js/dist/collapse";
import Dropdown from "bootstrap/js/dist/dropdown";
import Modal from "bootstrap/js/dist/modal";
// import Offcanvas from "bootstrap/js/dist/offcanvas";
import Popover from "bootstrap/js/dist/popover";
// import ScrollSpy from "bootstrap/js/dist/scrollSpy";
import Tab from "bootstrap/js/dist/tab";
import Toast from "bootstrap/js/dist/toast";
// import Tooltip from "bootstrap/js/dist/tooltip";

// module.exports = {
  //   modules: ['bootstrap-vue/nuxt'],
  //   bootstrapVue: {
    //     // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    //     icons: true
    //   }
    // }
// import BootstrapIconsPlugin from "bootstrap-icons";
// import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
// app.mount("#app");

export default defineNuxtPlugin(() => {
  return {
    provide: {
      bootstrap: {
        // Alert,
        Button,
        Carousel,
        Collapse,
        Dropdown,
        Modal,
        // Offcanvas,
        Popover,
        // ScrollSpy,
        Tab,
        Toast,
        // Tooltip,
      },
    },
  };
});