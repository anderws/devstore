import Cpf from "./Cpf";
import OrderItem from "./OrdemItem";
import Item from "./Item";
import Coupon from "./Coupon";
import Freight from "./Freight";

export default class Order {
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon?: Coupon;
    freight = new Freight();

    constructor(cpf: string, readonly date: Date = new Date()){
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    addItem(item: Item, quantity: number){
        this.freight.addItem(item, quantity);
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    }

    addCoupon(coupon: Coupon){
        if (!coupon.isExpired(this.date)){
            this.coupon = coupon;
        }
    }

    getFreight(){
        return this.freight.getTotal();
    }

    getTotal(){
        let total = this.orderItems.reduce((total, ordemItem) => {
            total += ordemItem.getTotal();
            return total;
        }, 0);
        if(this.coupon) total -= this.coupon.calculateDiscount(total);
        total += this.freight.getTotal();
        return total;
    }
}