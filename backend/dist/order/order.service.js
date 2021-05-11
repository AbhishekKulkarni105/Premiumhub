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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../auth/entities/user.entity");
const user_service_1 = require("../auth/user/user.service");
const product_service_1 = require("../product/product.service");
let OrderService = class OrderService {
    constructor(orderRepository, userService) {
        this.orderRepository = orderRepository;
        this.userService = userService;
    }
    async create(id, createOrderDto) {
        try {
            const user = await this.userService.findById(id);
            return this.orderRepository.save({
                orderAmount: createOrderDto.amount,
                orderShippingDate: createOrderDto.OSDate,
                user: user
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    findAll() {
        return this.orderRepository.find();
    }
    findOne(id) {
        return;
        this.orderRepository.findOne(id)
            .then((data) => {
            console.log(data);
            if (!data)
                throw new common_1.NotFoundException();
            return data;
        });
    }
    update(id, updateOrderDto) {
        return this.orderRepository
            .update(id, {
            orderAmount: updateOrderDto.amount,
            orderShippingDate: updateOrderDto.OSDate,
        })
            .then((data) => {
            return data;
        });
    }
    remove(id) {
        return this.orderRepository.delete({ orderId: id });
    }
};
OrderService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map