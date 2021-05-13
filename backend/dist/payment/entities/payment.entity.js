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
exports.Payment = void 0;
const user_entity_1 = require("../../auth/entities/user.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const typeorm_1 = require("typeorm");
let Payment = class Payment {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Payment.prototype, "paymentId", void 0);
__decorate([
    typeorm_1.Column({ default: 'pending' }),
    __metadata("design:type", String)
], Payment.prototype, "paymentStatus", void 0);
__decorate([
    typeorm_1.Column({ default: 0, type: 'decimal', precision: 10 }),
    __metadata("design:type", Number)
], Payment.prototype, "payAmount", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Payment.prototype, "paymentDate", void 0);
__decorate([
    typeorm_1.ManyToOne(() => product_entity_1.Product, (product) => product.productId),
    typeorm_1.JoinColumn({ name: 'productId' }),
    __metadata("design:type", product_entity_1.Product)
], Payment.prototype, "productId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => order_entity_1.Order, (order) => order.orderId),
    typeorm_1.JoinColumn({ name: 'orderId' }),
    __metadata("design:type", order_entity_1.Order)
], Payment.prototype, "orderId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (userEntity) => userEntity.userId),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], Payment.prototype, "userId", void 0);
Payment = __decorate([
    typeorm_1.Entity({ name: 'payment' })
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.entity.js.map