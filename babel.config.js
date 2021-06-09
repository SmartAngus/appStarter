module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@/components': './src/components',
          '@/pages': './src/pages',
          '@/models': './src/models',
          '@/navigator': './src/navigator',
          '@/services': './src/services',
          '@/utils': './src/utils',
          '@/icons': './src/icons',
          '@/config': './src/config',
        },
      },
    ],
  ],
};
