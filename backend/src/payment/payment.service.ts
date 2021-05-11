import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';
import { Like, Repository } from 'typeorm';
import { OrderService } from 'src/order/order.service';


@Injectable()
export class PaymentService {

  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
    private orderService: OrderService
  ) { }

  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentRepository.save({
      paymentAmount: createPaymentDto.amount
    });
  }

  findAll() {
    return this.paymentRepository.find();
  }

  findOne(id: number) {
    return this.paymentRepository.findOne(id)
      .then((data) => {
        if (!data) throw new NotFoundException();
      });
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
