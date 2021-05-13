import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(req: any, createPaymentDto: CreatePaymentDto): Promise<{
        payAmount: number;
        paymentDate: Date;
        paymentStatus: string;
        userId: import("../auth/entities/user.entity").UserEntity;
        productId: import("../product/entities/product.entity").Product;
        orderId: import("../order/entities/order.entity").Order;
    } & import("./entities/payment.entity").Payment>;
    findAll(req: any): Promise<import("./entities/payment.entity").Payment[]>;
    findOne(req: any, id: string): Promise<import("./entities/payment.entity").Payment>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<void>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
