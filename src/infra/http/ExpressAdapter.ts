import express from "express";
import Http from "./Http";

export default class ExpressAdapter implements Http{
    app: any;

    constructor(){
        this.app = express();
    }

    on(method: string, url: string, calback: Function): void {
        this.app[method](url, async function(req: any, res: any){
            const output =await calback(req.params, req.body);
            res.json(output); 
        });
    }

    listen(port: number): void {
        this.app.listen(port);
    }

}