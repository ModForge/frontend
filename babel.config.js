// module.exports = {
//   env: {
//     development: {
//       plugins: [
//         '@babel/plugin-transform-runtime',
//         '@babel/plugin-syntax-dynamic-import',
//       ],
//       presets: ['@babel/preset-react'],
//     },
//     production: {
//       plugins: [],
//       presets: ['@babel/preset-react'],
//     },
//   },
// }
module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: [
      '@babel/preset-env',
      // Enable development transform of React with new automatic runtime
      [
        '@babel/preset-react',
        { development: !api.env('production'), runtime: 'automatic' },
      ],
    ],
    // Applies the react-refresh Babel plugin on non-production modes only
    ...(!api.env('production') && {
      plugins: [require('react-refresh/babel'), 'macros'],
    }),
    plugins: ['macros'],
  }
}
