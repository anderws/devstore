import ItemRepository from "./ItemRepository";
import Order from "./Order";

export default class PlaceOrder{

    constructor(readonly itemRepository: ItemRepository){

    }

    async execute(input: Input): Promise<Output>{
        const order = new Order(input.cpf);
        for(const orderItem of input.orderItems){
            const item = await this.itemRepository.get(orderItem.idItem);
            order.addItem(item, orderItem.quantity);
        }
        const total = order.getTotal();
        return {
            total
        }
    }
}

type Input = {
    cpf: string,
    orderItems: { idItem: number, quantity: number }[],
    coupon?: string
}

type Output = {
    total: number
}