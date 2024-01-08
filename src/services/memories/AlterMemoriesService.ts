import { prisma } from "../../lib/prisma"

class AlterMemoriesService {
    async execute(id: string, content: string, coverUrl: string, isPublic: boolean) {
        const memory = await prisma.memory.update({
            where: {
                id,
            },
            data: {
                content,
                coverUrl,
                isPublic
            }
        }) 

        return memory;
    }
}

export { AlterMemoriesService }