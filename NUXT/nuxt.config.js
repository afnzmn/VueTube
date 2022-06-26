/**** Front's Notes / Don't Remove ****
 *   Data Storage:
 *   localStorage.setItem("key", data)
 *   localStorage.getItem('key')
 *   this.$router.push("PageName");
 */

export default {
  //---   VueTube Stuff   ---//
  env: {
    release: "Unstable",
    appVersion: "dev-local",
  },

  target: "static",
  ssr: false,

  plugins: [
    { src: "~/plugins/youtube", mode: "client" },
    { src: "~/plugins/vuetube", mode: "client" },
    { src: "~/plugins/ryd", mode: "client" },
    { src: "~/plugins/thirdPartyPluginLoader", mode: "client" },
    { src: "~/plugins/language", mode: "client" },
  ],
  generate: {
    dir: "../dist",
  },

  //---   VueTube Debugging   ---//
  server: {
    port: 80, // default: 3000 (Note: Running on ports below 1024 requires root privileges!)
    host: "0.0.0.0", // default: localhost,
    timing: false,
  },

  //---   Default NUXT Stuff   ---//
  head: {
    title: "VueTube",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
  },

  css: [],
  components: true,

  buildModules: ["@nuxtjs/vuetify"],
  modules: [],

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      dark: true,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: "#016a49",
          background: "#ffffff",
        },
        dark: {
          primary: "#7CD6AF",
          background: "#000000",
        },
      },
    },
  },
};
