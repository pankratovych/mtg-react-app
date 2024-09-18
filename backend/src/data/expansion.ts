import prisma from '../client';
import { Request, Response } from 'express';

/**
 * Return list of all expansion
 */
export const getAllExpansions = async (req: Request, res: Response) => {
    const expansions = await prisma.expansion.findMany({
      select: {
        id: true,
        name: true,
        shortName: true,
        image: true
      },
    });
    return res.send({
      status: 'success',
      data: expansions,
    });
};

/**
 * Return one expansion
 */
 export const get = async (req: Request, res: Response) => {
    const id = req.params.id!;

    const expansion = await prisma.expansion.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            shortName: true,
            image: true
        }     
    });
    return res.send({
        status: 'success',
        data: expansion,
    });
};

