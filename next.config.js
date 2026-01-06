/** @type {import('next').NextConfig} */
const config = {
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				hostname: "*",
			},
		],
	},
	typedRoutes: false,
	
	// 1. Force Standalone mode
	output: "standalone",

	// 2. EXCLUSION RULES (Moved to Root Level for Next.js 16+)
	outputFileTracingExcludes: {
		"*": [
			"node_modules/@swc/core-linux-x64-gnu",
			"node_modules/@swc/core-linux-x64-musl",
			"node_modules/@esbuild/linux-x64",
			"node_modules/terser",
			"node_modules/webpack",
			"node_modules/watchpack",
			"node_modules/next/dist/compiled/@next/font",
            // Add these extra heavy ones just in case
            "node_modules/@next/swc-linux-x64-gnu", 
            "node_modules/@next/swc-linux-x64-musl"
		],
	},
    
    // (Optional) If you have any other experimental features, keep them here
	experimental: {},
};

export default config;
