import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compiler: {
		styledComponents: true,
	},

	async rewrites() {
		return [
			{
				source: "/dashboard/:path*",
				destination: "/dashboard/:path*",
			},
		];
	},

	env: {
		DOMAIN: process.env.DOMAIN,
	},
};

export default nextConfig;
