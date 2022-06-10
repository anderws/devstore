import GetItems from "../src/GetItems";
import ItemRepositoryDatabase from "../src/ItemRepositoryDatabase";
import PgPromiseConnectionAdapter from "../src/PgPromiseConnectionAdapter";

test("Deve retornar itens do Banco de Dados",async function(){
    const connection = new PgPromiseConnectionAdapter();
    const itemRepository = new ItemRepositoryDatabase(connection);
    const items = await itemRepository.list();
    expect(items).toHaveLength(3);
});