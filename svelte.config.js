import vercel from '@sveltejs/adapter-vercel';
import node from '@sveltejs/adapter-node';

const dockerBuild = process.env.DOCKER_BUILD;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: dockerBuild
      ? node()
      : vercel({
          runtime: 'nodejs20.x'  // ✅ Vercel now requires at least Node 20 for functions
        }),
  }
};

export default config;
