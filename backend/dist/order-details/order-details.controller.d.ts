import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
export declare class OrderDetailsController {
    private readonly orderDetailsService;
    constructor(orderDetailsService: OrderDetailsService);
    create(createOrderDetailDto: CreateOrderDetailDto): string;
    findAll(): string;
    findOne(id: string): void;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): string;
    remove(id: string): string;
}