import prisma from '../client';
import { Request, Response } from 'express';

/**
 * Return list of all cards
 */
export const getAllCards = async (req: Request, res: Response) => {
    const cards = await prisma.card.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        colors: true,
      },
    });
    return res.send({
      status: 'success',
      data: cards,
    });
};

/**
 * Return one card
 */
 export const get = async (req: Request, res: Response) => {
    const id = req.params.id!;

    const product = await prisma.card.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            image: true,
        }     
    });
    return res.send({
        status: 'success',
        data: product,
    });
};

