import { prisma } from "../../lib/prisma";

class DeleteMemoryService
{
    async execute(id: string) {
        await prisma.memory.delete({
            where: {
                id
            }
        })

        return;
    }

}

export { DeleteMemoryService }