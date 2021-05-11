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
    constructor(orderDetailsRepository, userService) {
        this.orderDetailsRepository = orderDetailsRepository;
        this.userService = userService;
    }
    create(createOrderDetailDto) {
        return 'This action adds a new orderDetail';
    }
    findAll() {
        return `This action returns all orderDetails`;
    }
    findOne(id) {
    }
    update(id, updateOrderDetailDto) {
        return `This action updates a #${id} orderDetail`;
    }
    remove(id) {
        return `This action removes a #${id} orderDetail`;
    }
};
OrderDetailsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(order_detail_entity_1.OrderDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], OrderDetailsService);
exports.OrderDetailsService = OrderDetailsService;
//# sourceMappingURL=order-details.service.js.map