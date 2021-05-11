import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Like, Repository } from 'typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';
import { UserService } from 'src/auth/user/user.service';
import { ProductService } from 'src/product/product.service';


@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    private userService: UserService,

  ) { }


  async create(id: string, createOrderDto: CreateOrderDto) {
    try {
      const user = await this.userService.findById(id);
      return this.orderRepository.save({
        orderAmount: createOrderDto.amount,
        orderShippingDate: createOrderDto.OSDate,
        user: user
      });
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return
    this.orderRepository.findOne(id)
      .then((data) => {
        console.log(data);
        if (!data) throw new NotFoundException();
        return data;
      });
  }


  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository
      .update(id, {
        orderAmount: updateOrderDto.amount,
        orderShippingDate: updateOrderDto.OSDate,
      })
      .then((data) => {
        return data;
      });
  }

  remove(id: number) {
    return this.orderRepository.delete({ orderId: id });
  }
}
