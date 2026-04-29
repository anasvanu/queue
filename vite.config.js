import { defineConfig } from 'vite';

export default defineConfig(() => {
  const repo = process.env.GITHUB_REPOSITORY;
  const base = repo ? `/${repo.split('/')[1]}/` : '/';
  
  return {
    base: base,
  };
});
