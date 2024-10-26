import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Read and transform index.html
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);

      // Load the server entry point and render HTML
      const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
      const appHtml = await render(url);

      // Inject rendered HTML into the template
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      // Send the response
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

createServer();
