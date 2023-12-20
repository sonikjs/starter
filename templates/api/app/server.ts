import { createApp } from 'sonik/default'
import { showRoutes } from "hono/dev"

const app = createApp()

showRoutes(app)

export default app
