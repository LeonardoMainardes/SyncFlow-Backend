import swagger from "@fastify/swagger"
import swaggerUI from "@fastify/swagger-ui"
import Fastify from "fastify"

export const app = Fastify({
  logger: true,
})

await app.register(swagger, {
  openapi: {
    info: {
      title: "SyncFlow API",
      description: "Documentação da API",
      version: "1.0.0",
    },
  },
})

await app.register(swaggerUI, {
  routePrefix: "/docs",
})

app.get(
  "/health",
  {
    schema: {
      description: "Health check",
      tags: ["Health"],
      response: {
        200: {
          type: "object",
          properties: {
            status: { type: "string" },
          },
        },
      },
    },
  },
  async () => {
    return { status: "ok" }
  },
)
