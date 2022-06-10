import GetItems from "../../src/application/GetItems";
import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import PgPromiseConnectionAdapter from "../../src/infra/database/PgPromiseConnectionAdapter";

test("Deve retornar itens do Banco de Dados",async function(){
    const connection = new PgPromiseConnectionAdapter();
    const itemRepository = new ItemRepositoryDatabase(connection);
    const items = await itemRepository.list();
    expect(items).toHaveLength(3);
});