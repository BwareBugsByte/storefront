/** @type {import('next').NextConfig} */
const config = {
	images: {
		unoptimized: true, // We don't need Sharp because of this
		remotePatterns: [
			{
				hostname: "*",
			},
		],
	},
	typedRoutes: false,
	
	// Force standalone output
	output: "standalone",

	// AGGRESSIVE EXCLUSIONS
	outputFileTracingExcludes: {
		"*": [
			// Exclude Sharp explicitly (in case it sneaks in via sub-dependencies)
			"**/node_modules/sharp/**/*", 
			"**/node_modules/@img/**/*",
			
			// Exclude Build Tools
			"**/node_modules/@swc/**/*",
			"**/node_modules/@esbuild/**/*",
			"**/node_modules/terser/**/*",
			"**/node_modules/webpack/**/*",
			
			// Exclude Heavy Next.js Internals not needed for runtime
			"**/node_modules/next/dist/compiled/@next/font/**/*",
            "**/node_modules/next/dist/compiled/webpack/**/*",
		],
	},
    
	experimental: {},
};

export default config;
