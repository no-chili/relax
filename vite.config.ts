import { fileURLToPath, URL } from "url";
import path from "path";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import Inspect from "vite-plugin-inspect";
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue", "vue-router"],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      dts: path.resolve(pathSrc, "auto-imports.d.ts"),
      eslintrc: {
        enabled: false, // 默认false, true启用。生成一次就可以，避免每次工程启动都生成，一旦生成配置文件之后，最好把enable关掉，即改成false。否则这个文件每次会在重新加载的时候重新生成，这会导致eslint有时会找不到这个文件。当需要更新配置文件的时候，再重新打开
        filepath: "./.eslintrc-auto-import.json", // 生成json文件,可以不配置该项，默认就是将生成在根目录
        globalsPropValue: true,
      },
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],

      dts: path.resolve(pathSrc, "components.d.ts"),
    }),

    Icons({
      autoInstall: true,
    }),

    Inspect(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
});
