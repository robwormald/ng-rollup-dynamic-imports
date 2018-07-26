import buildOptimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin';
import nodeResolve from 'rollup-plugin-node-resolve';
export default [
	{
		input: ['./build/packages/index.js'],
		output: {
			dir: './public',
			format: 'esm'
		},
    experimentalCodeSplitting: true,
    experimentalDynamicImports: true,
    treeshake:true,
    plugins: [
      nodeResolve({
        module: true
      })
    ]
	}
]
