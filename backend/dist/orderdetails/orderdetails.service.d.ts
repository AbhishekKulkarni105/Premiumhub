import { UserService } from 'src/auth/user/user.service';
import { OrdersService } from 'src/orders/orders.service';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateOrderdetailDto } from './dto/create-orderdetail.dto';
import { UpdateOrderdetailDto } from './dto/update-orderdetail.dto';
import { Orderdetail } from './entities/orderdetail.entity';
export declare class OrderdetailsService {
    private orderDetailRepository;
    private userService;
    private productService;
    private orderService;
    constructor(orderDetailRepository: Repository<Orderdetail>, userService: UserService, productService: ProductService, orderService: OrdersService);
    create(uid: string, pid: number, oid: number, createOrderdetailDto: CreateOrderdetailDto): Promise<{
        quantity: number;
        itemAmount: number;
        orderShippingDate: string;
        orderDate: string;
        user: import("../auth/entities/user.entity").UserEntity;
        productId: import("../product/entities/product.entity").Product;
        orderId: import("../orders/entities/order.entity").Order;
    } & Orderdetail>;
    findAll(uid: string, oid: number): Promise<Orderdetail[]>;
    findOne(id: number): string;
    update(id: number, updateOrderdetailDto: UpdateOrderdetailDto): string;
    remove(id: number): string;
}
