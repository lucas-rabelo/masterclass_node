import { prisma } from "../../lib/prisma"

class GetMemoryService
{
    async execute(id: string) {
        const memory = await prisma.memory.findUniqueOrThrow({
            where: {
                id
            }
        })

        return memory
    }
}

export { GetMemoryService }