import jsonServer from 'json-server'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = jsonServer.create()
const router = jsonServer.router(join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({
  static: join(__dirname, 'dist'),
  fallback: join(__dirname, 'dist/index.html'),
})

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use body-parser
server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.get('/api/health', (req, res) => {
  res.json({ status: 'UP' })
})

// Prefix all JSON Server routes with /api
server.use('/api', router)

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {})
