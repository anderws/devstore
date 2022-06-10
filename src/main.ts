import express from 'express';
import Dimension from './Dimension';
import ExpressAdapter from './ExpressAdapter';
import GetItems from './GetItems';
import Item from './Item';
import ItemRepositoryDatabase from './ItemRepositoryDatabase';
import ItemRepositoryMemory from './ItemRepositoryMemory';
import PgPromiseConnectionAdapter from './PgPromiseConnectionAdapter';
const http = new ExpressAdapter();

const connection = new PgPromiseConnectionAdapter();
const itemRepository = new ItemRepositoryDatabase(connection);

http.on("get", "/items", async function(params: any, body: any){
    const getItems = new GetItems(itemRepository);
    const output = await getItems.execute();
    return output;
});

http.listen(3000);