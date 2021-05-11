import { OrderdetailsService } from './orderdetails.service';
import { CreateOrderdetailDto } from './dto/create-orderdetail.dto';
import { UpdateOrderdetailDto } from './dto/update-orderdetail.dto';
export declare class OrderdetailsController {
    private readonly orderdetailsService;
    constructor(orderdetailsService: OrderdetailsService);
    create(req: any, createOrderdetailDto: CreateOrderdetailDto): Promise<{
        quantity: number;
        itemAmount: number;
        orderShippingDate: string;
        orderDate: string;
        user: import("../auth/entities/user.entity").UserEntity;
        productId: import("../product/entities/product.entity").Product;
        orderId: import("../orders/entities/order.entity").Order;
    } & import("./entities/orderdetail.entity").Orderdetail>;
    findAll(req: any): Promise<import("./entities/orderdetail.entity").Orderdetail[]>;
    findOne(id: string): string;
    update(id: string, updateOrderdetailDto: UpdateOrderdetailDto): string;
    remove(id: string): string;
}
