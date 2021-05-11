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
exports.OrderDetail = void 0;
const order_entity_1 = require("../../order/entities/order.entity");
const typeorm_1 = require("typeorm");
let OrderDetail = class OrderDetail {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderId", void 0);
__decorate([
    typeorm_1.Column({ default: '0' }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "productId", void 0);
__decorate([
    typeorm_1.Column({ default: '10' }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime", default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], OrderDetail.prototype, "orderDate", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime' }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderShippingDate", void 0);
__decorate([
    typeorm_1.Column({ default: 10, type: 'decimal', precision: 2 }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "totalAmount", void 0);
__decorate([
    typeorm_1.Column({ default: 'pending' }),
    __metadata("design:type", String)
], OrderDetail.prototype, "orderStatus", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_entity_1.Order, (order) => order.orderId),
    __metadata("design:type", Array)
], OrderDetail.prototype, "order", void 0);
OrderDetail = __decorate([
    typeorm_1.Entity({ name: 'orderdetails' })
], OrderDetail);
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=order-detail.entity.js.map