import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function userController(fastify: FastifyInstance) {
  // GET /api/v1/user
  fastify.get("/", async function (
    _request: FastifyRequest,
    reply: FastifyReply
  ) {
    reply.send({
      company: "Ogilvy",
      email: "hoangminh.ho@ogilvy.com",
    });
  });
}
