import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'skip-minification',
          Once(root) {
            root.walkRules(rule => {
              if (rule.source?.input.file?.includes('input.css')) {
                rule.raws.before = '\n';
              }
            });
          },
        },
      ],
    },
  },
});
