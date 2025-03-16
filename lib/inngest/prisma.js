import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

if(process.env.NODE_ENV !== 'production') {
    globalThis.prisma = db;
    console.log('Prisma client is available globally');
}

// globalThis.prisma : This global variable ensures that the Prisma client is available globally in development mode. This is useful for debugging and testing purposes.
// db : This is the Prisma client instance that you will use to interact with the database. You will use this instance to perform CRUD operations on the database.