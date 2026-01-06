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
    
	// Cloudflare works best with 'standalone' tracing, which allows us to exclude files
	output: "standalone",

	experimental: {
		// This is the magic part that reduces the file size
		outputFileTracingExcludes: {
			"*": [
				"node_modules/@swc/core-linux-x64-gnu",
				"node_modules/@swc/core-linux-x64-musl",
				"node_modules/@esbuild/linux-x64",
				"node_modules/terser",
				"node_modules/webpack",
				"node_modules/watchpack",
                "node_modules/next/dist/compiled/@next/font"
			],
		},
	},
};

export default config;
