import { FastifyRequest } from "fastify";
import { z } from "zod";
import { GetMemoryService } from "../../services/memories/GetMemoryService";

class GetMemoryController
{
    async handle(request: FastifyRequest) {
        const paramsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchema.parse(request.params)

        const memory = new GetMemoryService().execute(id)

        return memory
    }
}

export { GetMemoryController }