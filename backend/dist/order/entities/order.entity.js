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
const user_entity_1 = require("../../auth/entities/user.entity");
const payment_entity_1 = require("../../payment/entities/payment.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const typeorm_1 = require("typeorm");
let Order = class Order {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Order.prototype, "orderId", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Order.prototype, "orderAmount", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Order.prototype, "orderDate", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime', nullable: false }),
    __metadata("design:type", Date)
], Order.prototype, "orderShippingDate", void 0);
__decorate([
    typeorm_1.Column({ default: 'pending' }),
    __metadata("design:type", String)
], Order.prototype, "orderStatus", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.userId),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], Order.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => payment_entity_1.Payment, (payment) => payment.paymentId),
    __metadata("design:type", payment_entity_1.Payment)
], Order.prototype, "payment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => product_entity_1.Product, (product) => product.productId),
    __metadata("design:type", Array)
], Order.prototype, "product", void 0);
Order = __decorate([
    typeorm_1.Entity({ name: 'orders' })
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map