import { DatabaseCofig, DatabaseDto, ResponseData } from "./db-dto";

export class DatabaseConfigService implements DatabaseDto{
    testDB(): ResponseData {
        throw new Error("Method not implemented.");
    }
    connect(): DatabaseCofig {
        throw new Error("Method not implemented.");
    }

   

}