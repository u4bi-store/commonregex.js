import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default { 
    entry: './src/app.js', 
    dest: './dist/commonregex.js', 
    format: 'umd',
    moduleName: 'commonregex',
    // sourceMap: 'inline',
    plugins: [
        uglify({}, minify),
    ]
};