import ItemRepositoryMemory from "./ItemRepositoryMemory";

export default class GetItems{
    constructor(readonly itemRepository: ItemRepositoryMemory){

    }

    async execute(): Promise<Output[]>{
        const items = await this.itemRepository.list();
        const output: Output[] = [];
        for (const item of items) {
            output.push({
                idItem: item.idItem,
                description: item.description,
                price: item.idItem
            });
        }
        return output;
    }
}

type Output = {
    idItem: number,
    description: string,
    price: number
}