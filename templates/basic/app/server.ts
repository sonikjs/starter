import { createApp } from 'sonik/default'
import { serveStatic } from 'hono/cloudflare-pages'
import { showRoutes } from "hono/dev"

const app = createApp()
app.use('/static/*', serveStatic())

showRoutes(app)

export default app
