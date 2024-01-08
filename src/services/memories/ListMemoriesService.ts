import { prisma } from "../../lib/prisma"

class ListMemoriesService
{
    async execute() {
        const memories = await prisma.memory.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        })

        return memories;
    }
}

export { ListMemoriesService }