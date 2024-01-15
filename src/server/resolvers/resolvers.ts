import { prisma } from "../data/database.js";

export const resolvers = {
  Point: {
    id: (parent: any): string => parent.id,
    lat: (parent: any): string => parent.lat,
    lng: (parent: any): string => parent.lng,
  },

  Location: {
    id: (parent: any): string => parent.id,
    point: (parent: any): string => parent.point,
    name: (parent: any): string => parent.name,
    description: (parent: any): string => parent.description,
    url: (parent: any): string => parent.url,
    image: (parent: any): string => parent.image,
  },

  Query: {
    allPoints: async () => {
      return prisma.point.findMany({
        take: 200,
      });
    },
    point: async (parent: any, args: any) => {
      return prisma.point.findFirst({
        where: { id: +args.id },
      });
    },
    /*
     * Look up and map the point data onto the location response, instead of only returning the point id
     */
    allLocations: async () => {
      const locations = await prisma.location.findMany({
        take: 200,
      });
      const points = await prisma.point.findMany({
        take: 200,
      });
      return locations.map(loc => ({
          ...loc,
          point: points.find(p => p.id === loc.pointId),
        }));
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
      const newLocation = await prisma.location.create({
        data: {
          pointId: +args.pointId,
          name: args.name,
          description: args.description,
          url: args.url,
          image: args.image,
        },
      });
      const point = await prisma.point.findFirst({
        where: { id: newLocation?.pointId },
      });
      return {
        ...newLocation,
        point
      }
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
