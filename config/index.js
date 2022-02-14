const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000/' : 'https://meet-ups-791nk11o7-ap211unitech.vercel.app';