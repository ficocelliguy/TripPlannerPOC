import { prisma } from "../data/database.js";

type point = {
  id: string;
  lat: string;
  lng: string;
};

type location = {
  id: string;
  point: point;
  name: string;
  description: string;
  url: string;
  image: string;
};

export const resolvers = {
  point: {
    id: (parent: any): string => parent.id,
    lat: (parent: any): string => parent.lat,
    lng: (parent: any): string => parent.lng,
    location: (parent: any): location[] => parent.locations,
  },

  location: {
    id: (parent: any): string => parent.id,
    point: (parent: any): point => parent.point,
    pointId: (parent: any): string => parent.pointId,
    name: (parent: any): string => parent.name,
    description: (parent: any): string => parent.description,
    url: (parent: any): string => parent.url,
    image: (parent: any): string => parent.image,
  },

  Query: {
    allPoints: async () => {
      return prisma.point.findMany({
        take: 200,
        include: { location: true },
      });
    },
    point: async (parent: any, args: any) => {
      return prisma.point.findFirst({
        where: { id: +args.id },
        include: { location: true },
      });
    },
    /*
     * Look up and map the point data onto the location response, instead of only returning the point id
     */
    allLocations: async () => {
      return prisma.location.findMany({
        take: 200,
        include: { point: { include: { location: true } } },
      });
    },
    location: async (parent: any, args: any) => {
      return prisma.location.findFirst({
        where: { id: +args.id },
        include: { point: { include: { location: true } } },
      });
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
        include: { point: { include: { location: true } } },
      });
    },
    updateLocation: async (parent: any, args: any) => {
      return prisma.location.update({
        where: {
          id: +args.id,
        },
        data: {
          pointId: +args.pointId,
          name: args.name,
          description: args.description,
          url: args.url,
          image: args.image,
        },
        include: { point: { include: { location: true } } },
      });
    },
  },
};

// TODO: makeExecutableSchema
