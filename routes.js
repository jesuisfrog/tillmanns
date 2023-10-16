// This file was added by edgio init.
// You should commit this file to source control.
import { Router, edgioRoutes } from '@edgio/core'

export default new Router()

  .get('/:path*', ({ serveStatic }) => serveStatic('src/:path*'))
  .get('/', ({ serveStatic }) => serveStatic('src/index.html'))

  // plugin enabling basic Edgio functionality
  .use(edgioRoutes)
