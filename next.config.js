const createNextIntlPlugin = require('next-intl/plugin');
 
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
const withNextIntl = createNextIntlPlugin(
    './i18n.ts'
);


module.exports = withNextIntl(nextConfig);
