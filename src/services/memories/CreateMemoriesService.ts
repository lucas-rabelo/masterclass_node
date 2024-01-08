import { prisma } from "../../lib/prisma"

class CreateMemoriesService {
    async execute(content: string, coverUrl: string, isPublic: boolean) {
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

export { CreateMemoriesService }