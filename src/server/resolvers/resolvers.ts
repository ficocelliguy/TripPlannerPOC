import { prisma } from "../data/database.js";

export const resolvers = {
  Point: {
    id: (parent: any): string => parent.id,
    lat: (parent: any): string => parent.lat,
    lng: (parent: any): string => parent.lng,
  },

  Location: {
    id: (parent: any): string => parent.id,
    pointId: (parent: any): string => parent.pointId,
    name: (parent: any): string => parent.name,
    description: (parent: any): string => parent.description,
    url: (parent: any): string => parent.url,
    image: (parent: any): string => parent.image,
  },

  Query: {
    allPoints: async () => {
      return prisma.point.findMany({
        take: 50,
      });
    },
    point: async (parent: any, args: any) => {
      return prisma.point.findFirst({
        where: { id: +args.id },
      });
    },
    allLocations: async () => {
      return prisma.location.findMany({
        take: 50,
      });
    },
    location: async (parent: any, args: any) => {
      const location = await prisma.location.findFirst({
        where: { id: +args.id },
      });
      const point = await prisma.point.findFirst({
        where: { id: location?.pointId },
      });
      return {
        ...location,
        point,
      };
    },
  },

  Mutation: {
    registerPoint: async (parent: any, args: any) => {
      return prisma.point.create({
        data: {
          lat: args.lat,
          lng: args.lng,
        },
      });
    },
    updatePoint: async (parent: any, args: any) => {
      return prisma.point.update({
        where: {
          id: +args.id,
        },
        data: {
          lat: args.lat,
          lng: args.lng,
        },
      });
    },
    registerLocation: async (
      parent: any,
      args: {
        pointId: string | number;
        name: string;
        description: string;
        url: string;
        image: string;
        id: string | number;
      }
    ) => {
      return prisma.location.create({
        data: {
          pointId: +args.pointId,
          name: args.name,
          description: args.description,
          url: args.url,
          image: args.image,
        },
      });
    },
    updateLocation: async (parent: any, args: any) => {
      return prisma.location.update({
        where: {
          id: +args.id,
        },
        data: {
          pointId: args.pointId,
          name: args.name,
          description: args.description,
          url: args.url,
          image: args.image,
        },
      });
    },
  },
};
