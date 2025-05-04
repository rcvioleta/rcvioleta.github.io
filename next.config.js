/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["s.pngkit.com"],
	},
	reactStrictMode: true,
	env: {
		GA_MEASUREMENT_ID: "G-WS3D59E1ZR",
	},
};

module.exports = nextConfig;
