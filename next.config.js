/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
      plugins: [
        [
            "swc-plugin-coverage-instrument",
            { 
                coverageVariable: "__coverage__",
                instrumentLog:
                {
                    level: 'info',
                    enableTrace: true,
                },
            },
        ]
      ]
    },
}

module.exports = nextConfig
