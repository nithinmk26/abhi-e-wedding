import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace <REPO_NAME> with your GitHub repository name for correct asset paths when deploying.
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment set base to '/<REPO_NAME>/'.
  // The repository in this workspace is named `abhi-e-wedding`, so use that.
  // When deploying to a custom domain, set base to '/' instead.
  base: '/abhi-e-wedding/'
});
