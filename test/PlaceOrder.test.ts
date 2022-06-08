import Dimension from "../src/Dimension";
import Item from "../src/Item";
import ItemRepositoryMemory from "../src/ItemRepositoryMemory";
import PlaceOrder from "../src/PlaceOrder";

test("Deve fazer um pedido", async function(){
    const itemRepository = new ItemRepositoryMemory();
    itemRepository.save(new Item(1, "Guitarra", 1000, new Dimension(100,30,10),3));
    itemRepository.save(new Item(2, "Amplificador", 5000, new Dimension(50,50,50),20));
    itemRepository.save(new Item(3, "Cabo", 30, new Dimension(10,10,10),1));
    const placeOrder = new PlaceOrder(itemRepository);
    const input = {
        cpf: "129.566.540-98",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 }
        ]
    };
    const output = await placeOrder.execute(input);
    expect(output.total).toBe(6350);
});