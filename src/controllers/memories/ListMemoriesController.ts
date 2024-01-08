import { ListMemoriesService } from "../../services/memories/ListMemoriesService";

class ListMemoriesController {
    async handle() {
        const memories = new ListMemoriesService().execute();
                
        return (await memories).map(memory => {
            if(memory.content.length > 115) {
                return {
                    id: memory.id,
                    coverUrl: memory.coverUrl,
                    excerpt: memory.content.substring(0, 115).concat('...')
                }
            } else {
                return {
                    id: memory.id,
                    coverUrl: memory.coverUrl,
                    excerpt: memory.content
                }
            }
        })
    }
}

export { ListMemoriesController }