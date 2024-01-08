import { FastifyRequest } from 'fastify';
import { z } from 'zod';

import { prisma } from '../../lib/prisma';

class CreateMemoryController {
    async handle (request: FastifyRequest) {
        const bodySchema = z.object({
            content: z.string(),
            coverUrl: z.string(),
            isPublic: z.coerce.boolean().default(false)
        })

        const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

        const memory = await prisma.memory.create({
            data: {
                content,
                coverUrl,
                isPublic,
                userId: '217280a3-fb92-4088-a5b9-21648f752481'
            }
        })

        return memory
    }
}

export { CreateMemoryController }