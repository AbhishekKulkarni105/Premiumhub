import { UserService } from 'src/auth/user/user.service';
import { Order } from 'src/order/entities/order.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';
import { ProductService } from 'src/product/product.service';
import { OrderService } from 'src/order/order.service';
export declare class PaymentService {
    private paymentRepository;
    private userService;
    private productService;
    private orderService;
    constructor(paymentRepository: Repository<Payment>, userService: UserService, productService: ProductService, orderService: OrderService);
    create(userId: string, productId: number, orderId: number, createPaymentDto: CreatePaymentDto): Promise<{
        payAmount: number;
        paymentDate: Date;
        paymentStatus: string;
        userId: import("../auth/entities/user.entity").UserEntity;
        productId: import("../product/entities/product.entity").Product;
        orderId: Order;
    } & Payment>;
    findAll(userId: string): Promise<Payment[]>;
    findOne(id: number): Promise<Payment>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<void>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
