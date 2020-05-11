import {uglify} from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/lib/EasyEdit.jsx',
  external: ['react', 'prop-types'],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    postcss({
      plugins: [],
      minimize: true
    }),
    uglify()
  ],
  output: {
    exports: 'named',
    format: 'umd',
    name: 'react-easy-edit',
    globals: {
      react: "React",
      "prop-types": "PropTypes"
    }
  }
};
