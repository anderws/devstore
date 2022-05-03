import pgp from 'pg-promise';

export default class Connection{
    pgp: any;

    constructor(){
        this.pgp = pgp()("postgres://postgres:postgres@localhost:5432/devstore");
    }

    query(statement: string, parameters: any){
        return this.pgp.query(statement, parameters);
    }
}