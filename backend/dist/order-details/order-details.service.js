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
exports.OrderDetailsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../auth/user/user.service");
const order_service_1 = require("../order/order.service");
const product_service_1 = require("../product/product.service");
const typeorm_2 = require("typeorm");
const order_detail_entity_1 = require("./entities/order-detail.entity");
let OrderDetailsService = class OrderDetailsService {
    constructor(orderDetailrepository, userService, orderService, productService) {
        this.orderDetailrepository = orderDetailrepository;
        this.userService = userService;
        this.orderService = orderService;
        this.productService = productService;
    }
    async create(userId, productid, orderId, createOrderDetailDto) {
        const user = await this.userService.findById(userId);
        const order = await this.orderService.findOne(orderId);
        const product = await this.productService.findOne(productid);
        const { Amount, qty } = createOrderDetailDto;
        return this.orderDetailrepository.save({
            orderAmount: Amount,
            orderQty: qty,
            userId: user,
            orderId: order,
            productId: product
        });
    }
    async findAll(userId) {
        const user = await this.userService.findById(userId);
        return this.orderDetailrepository.find({ where: { userId: user } });
    }
    findOne(id) {
        return this.orderDetailrepository.findOne(id).then((data) => {
            if (!data)
                throw new common_1.NotFoundException();
            return data;
        });
    }
    async update(id, updateOrderDetailDto) {
        return this.orderDetailrepository.update({ orderDetailId: id }, {
            orderAmount: updateOrderDetailDto.Amount,
            orderQty: updateOrderDetailDto.qty
        }).then((data) => {
            if (!data)
                throw new common_1.NotFoundException();
            return data;
        });
    }
    remove(id) {
        return this.orderDetailrepository.delete({ orderDetailId: id });
    }
};
OrderDetailsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(order_detail_entity_1.OrderDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository, user_service_1.UserService, order_service_1.OrderService, product_service_1.ProductService])
], OrderDetailsService);
exports.OrderDetailsService = OrderDetailsService;
//# sourceMappingURL=order-details.service.js.map