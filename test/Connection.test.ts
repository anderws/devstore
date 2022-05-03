import Connection from "../src/Connection";

test("Deve retornar dados do banco de dados", async  function(){
    const connection = new Connection();
    const items = await connection.query("select * from item", []);
    expect(items).toHaveLength(1);
});