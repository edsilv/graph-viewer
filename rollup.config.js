import svelte from 'rollup-plugin-svelte';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import tscompile from 'typescript';
import replace from 'rollup-plugin-replace';
import async from 'rollup-plugin-async';
import less from 'rollup-plugin-less';

const plugins = [ 
    typescript({typescript: tscompile}),
    nodeResolve({ 
    	jsnext: true, 
    	main: true,
    	browser: true
    }),
	commonjs(),
	svelte({
		include: ['src/pages/**.html', 'src/components/**.html', 'src/App.html'],
		exclude: 'src/**/*.ts'
	}),
	less({
        include: 'src/assets/less/*.less',
        output: 'dist/bundle.css'
    }),
	async(),
	replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.APP_BASE_PATH': JSON.stringify(process.env.APP_BASE_PATH || ''),
    })
];

if ( process.env.production ) plugins.push( uglify() );

export default {
	entry: 'src/app.ts',
	dest: 'dist/bundle.js',
	format: 'iife',
	plugins,
	sourceMap: true
};
