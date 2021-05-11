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
exports.OrderdetailsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../auth/user/user.service");
const orders_service_1 = require("../orders/orders.service");
const product_service_1 = require("../product/product.service");
const typeorm_2 = require("typeorm");
const orderdetail_entity_1 = require("./entities/orderdetail.entity");
let OrderdetailsService = class OrderdetailsService {
    constructor(orderDetailRepository, userService, productService, orderService) {
        this.orderDetailRepository = orderDetailRepository;
        this.userService = userService;
        this.productService = productService;
        this.orderService = orderService;
    }
    async create(uid, pid, oid, createOrderdetailDto) {
        const user = await this.userService.findById(uid);
        const product = await this.productService.findOne(pid);
        const order = await this.orderService.findOne(uid, oid);
        const { quantity, amount } = createOrderdetailDto;
        return this.orderDetailRepository.save({
            quantity: quantity,
            itemAmount: amount,
            orderShippingDate: new Date().toISOString(),
            orderDate: new Date().toISOString(),
            user: user,
            productId: product,
            orderId: order,
        });
    }
    findAll(uid, oid) {
        return this.orderDetailRepository.find({
            where: { orderId: oid }
        }).then((data) => {
            if (data.length == 0)
                throw new common_1.NotFoundException();
            return data;
        });
    }
    findOne(id) {
        return `This action returns a #${id} orderdetail`;
    }
    update(id, updateOrderdetailDto) {
        return `This action updates a #${id} orderdetail`;
    }
    remove(id) {
        return `This action removes a #${id} orderdetail`;
    }
};
OrderdetailsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(orderdetail_entity_1.Orderdetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository, user_service_1.UserService, product_service_1.ProductService, orders_service_1.OrdersService])
], OrderdetailsService);
exports.OrderdetailsService = OrderdetailsService;
//# sourceMappingURL=orderdetails.service.js.map