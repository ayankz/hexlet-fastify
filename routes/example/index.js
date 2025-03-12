export default async function (fastify, opts) {
  fastify.get('/', async function (req, res) {
    const page = req.originalUrl;
    return typeof page;
  })
}
