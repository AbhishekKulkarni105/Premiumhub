import { UserService } from 'src/auth/user/user.service';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetail } from './entities/order-detail.entity';
export declare class OrderDetailsService {
    private orderDetailsRepository;
    private userService;
    constructor(orderDetailsRepository: Repository<OrderDetail>, userService: UserService);
    create(createOrderDetailDto: CreateOrderDetailDto): string;
    findAll(): string;
    findOne(id: number): void;
    update(id: number, updateOrderDetailDto: UpdateOrderDetailDto): string;
    remove(id: number): string;
}
