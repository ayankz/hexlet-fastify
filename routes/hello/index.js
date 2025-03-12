export default async function (fastify) {
    fastify.get('/', async function (req, res) {
        const name = req.query.name;
        return name ? `Hello ${name}` : 'Hello, World!'
    })
  }
  