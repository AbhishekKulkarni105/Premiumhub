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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const product_entity_1 = require("./../../product/entities/product.entity");
const user_entity_1 = require("../../auth/entities/user.entity");
const order_detail_entity_1 = require("../../order-details/entities/order-detail.entity");
const payment_entity_1 = require("../../payment/entities/payment.entity");
const typeorm_1 = require("typeorm");
let Order = class Order {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'integer' }),
    __metadata("design:type", Number)
], Order.prototype, "orderId", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 10 }),
    __metadata("design:type", Number)
], Order.prototype, "orderAmount", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Order.prototype, "orderDate", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "shippingDate", void 0);
__decorate([
    typeorm_1.Column({ default: 'pending' }),
    __metadata("design:type", String)
], Order.prototype, "orderStatus", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (userEntity) => userEntity.userId),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], Order.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => product_entity_1.Product, (product) => product.productId),
    typeorm_1.JoinColumn({ name: 'productId' }),
    __metadata("design:type", product_entity_1.Product)
], Order.prototype, "productId", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_detail_entity_1.OrderDetail, (orderDetail) => orderDetail.orderId),
    __metadata("design:type", Array)
], Order.prototype, "orderDetailId", void 0);
__decorate([
    typeorm_1.OneToMany(() => payment_entity_1.Payment, (payment) => payment.orderId),
    __metadata("design:type", Array)
], Order.prototype, "paymentId", void 0);
Order = __decorate([
    typeorm_1.Entity({ name: 'order' })
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map