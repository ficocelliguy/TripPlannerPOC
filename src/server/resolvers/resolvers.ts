import { prisma } from "../data/database.js";

export const resolvers = {
  Data: {
    id: (parent: any) => parent.id,
    name: (parent: any) => parent.name,
  },

  Query: {
    allData: () => {
      return prisma.data.findMany({
        take: 50,
      });
    },
    data: (parent: any, args: any) => {
      return prisma.data.findFirst({
        where: { id: +args.id },
      });
    },
  },

  Mutation: {
    registerData: (parent: any, args: any) => {
      return prisma.data.create({
        data: {
          name: args.name,
        },
      });
    },
    updateData: (parent: any, args: any) => {
      return prisma.data.update({
        where: {
          id: +args.id,
        },
        data: {
          name: args.name,
        },
      });
    },
  },
};
