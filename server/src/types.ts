// import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Redis } from "ioredis";

export type MyContext = {
    // em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;  // 這是mikroorm才要
    redis: Redis;
    req: Request & { session: Express.Session };
    res: Response;
};
