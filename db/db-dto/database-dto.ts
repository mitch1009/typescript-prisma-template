export interface DatabaseDto {
    connect (): DatabaseCofig;
    testDB (): ResponseData;
}

export interface ResponseData {
    message: string
    success: boolean;
}
export interface DatabaseCofig {
    host: string
    user: string
    password: string
    database: string
    url?: string
}