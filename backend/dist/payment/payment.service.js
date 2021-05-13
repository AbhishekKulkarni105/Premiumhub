"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const user_service_1 = require("../auth/user/user.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("../order/entities/order.entity");
const typeorm_2 = require("typeorm");
const payment_entity_1 = require("./entities/payment.entity");
const product_service_1 = require("../product/product.service");
const order_service_1 = require("../order/order.service");
let PaymentService = class PaymentService {
    constructor(paymentRepository, userService, productService, orderService) {
        this.paymentRepository = paymentRepository;
        this.userService = userService;
        this.productService = productService;
        this.orderService = orderService;
    }
    async create(userId, productId, orderId, createPaymentDto) {
        const user = await this.userService.findById(userId);
        const product = await this.productService.findOne(productId);
        const order = await this.orderService.findOne(orderId);
        const { Amount, Date, status } = createPaymentDto;
        return this.paymentRepository.save({
            payAmount: Amount,
            paymentDate: Date,
            paymentStatus: status,
            userId: user,
            productId: product,
            orderId: order
        });
    }
    async findAll(userId) {
        const user = await this.userService.findById(userId);
        return this.paymentRepository.find({ where: { userId: user } });
    }
    findOne(id) {
        return this.paymentRepository.findOne(id).then((data) => {
            if (!data)
                throw new common_1.NotFoundException();
            return data;
        });
    }
    async update(id, updatePaymentDto) {
        return this.paymentRepository.update({ paymentId: id }, {
            payAmount: updatePaymentDto.Amount,
            paymentDate: updatePaymentDto.Date,
            paymentStatus: updatePaymentDto.status
        }).then((data) => {
            if (!data)
                throw new common_1.NotFoundException();
            return;
        });
    }
    remove(id) {
        return this.paymentRepository.delete({ paymentId: id });
    }
};
PaymentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService, product_service_1.ProductService, order_service_1.OrderService])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map