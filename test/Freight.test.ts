import Dimension from "../src/Dimension";
import Freight from "../src/Freight";
import Item from "../src/Item";

test("Deve calcular o frete", function(){
    const freight = new Freight();
    freight.addItem(new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10), 3), 1);    
    freight.addItem(new Item(1, "Aplificador", 5000, new Dimension(50, 50, 50), 20), 1);
    freight.addItem(new Item(1, "Cabo", 30, new Dimension(10, 10, 10), 1), 3);
    const total = freight.getTotal();
    expect(total).toBe(260);
});

test("Deve calcular o frete com preço mínimo", function(){
    const freight = new Freight();
    freight.addItem(new Item(1, "Cabo", 30, new Dimension(10, 10, 10), 0.9), 1);  
    const total = freight.getTotal();
    expect(total).toBe(10);
});