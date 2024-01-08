import { FastifyInstance } from "fastify";
import { z } from 'zod';

import { prisma } from "../lib/prisma";

import { CreateMemoryController } from "../controllers/memories/CreateMemoryController";
import { AlterMemoryController } from "../controllers/memories/AlterMemoryController";
import { DeleteMemoryController } from "../controllers/memories/DeleteMemoryController";
import { ListMemoriesController } from "../controllers/memories/ListMemoriesController";
import { GetMemoryController } from "../controllers/memories/GetMemoryController";

export async function memoriesRoutes(app: FastifyInstance) {
    app.get('/memories', new ListMemoriesController().handle)
    app.get('/memorie/:id', new GetMemoryController().handle)
    app.post('/memories', new CreateMemoryController().handle)
    app.put('/memories/:id', new AlterMemoryController().handle)
    app.delete('/memories/:id', new DeleteMemoryController().handle)
}