import { FastifyRequest } from "fastify";
import { z } from "zod";
import { AlterMemoriesService } from "../../services/memories/AlterMemoriesService";

class AlterMemoryController {
    async handle(request: FastifyRequest) {
        const paramsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchema.parse(request.params)

        const bodySchema = z.object({
            content: z.string(),
            coverUrl: z.string(),
            isPublic: z.coerce.boolean().default(false)
        })

        const { content, coverUrl, isPublic } = bodySchema.parse(request.body)

        const memory = new AlterMemoriesService().execute(id, content, coverUrl, isPublic)

        return memory;
    }
}

export { AlterMemoryController }