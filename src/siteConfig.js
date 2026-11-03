//personal details and links — every page reads from this file.
const base = import.meta.env.BASE_URL;

export const site = {
  name: 'Jonathan Dargakis',
  email: 'jmdargakis@loyola.edu',
  socials: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/JonathanDarg',
    instagram: 'https://instagram.com',
    tiktok: 'https://www.tiktok.com/@pugbentobug',
  },
};

// Builds a path to a file in /public that works locally and on GitHub Pages
export const asset = (path) => `${base}${path.replace(/^\//, '')}`;
