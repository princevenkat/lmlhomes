const isGithubPages = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isGithubPages ? '/lmlhomes' : '',
  assetPrefix: isGithubPages ? '/lmlhomes' : '',
  images: {
    unoptimized: true, // Disable Next.js Image Optimization
  },
};
