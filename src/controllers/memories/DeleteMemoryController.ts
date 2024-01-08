import { FastifyRequest } from "fastify"
import { z } from "zod"
import { DeleteMemoryService } from "../../services/memories/DeleteMemoryService"

class DeleteMemoryController {
    async handle(request: FastifyRequest) {
        const paramsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchema.parse(request.params)

        new DeleteMemoryService().execute(id);

        return;
    }    
}

export { DeleteMemoryController }