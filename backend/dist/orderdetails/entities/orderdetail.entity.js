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
exports.Orderdetail = void 0;
const typeorm_1 = require("typeorm");
const order_entity_1 = require("../../orders/entities/order.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const user_entity_1 = require("../../auth/entities/user.entity");
let Orderdetail = class Orderdetail {
    constructor() {
        this.orderShippingDate = new Date();
        this.orderDate = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Orderdetail.prototype, "orderDetailId", void 0);
__decorate([
    typeorm_1.Column({ default: 1, type: 'integer' }),
    __metadata("design:type", Number)
], Orderdetail.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ default: 0, type: 'decimal' }),
    __metadata("design:type", Number)
], Orderdetail.prototype, "itemAmount", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Orderdetail.prototype, "orderShippingDate", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime' }),
    __metadata("design:type", Date)
], Orderdetail.prototype, "orderDate", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => order_entity_1.Order, (order) => order.orderId),
    __metadata("design:type", order_entity_1.Order)
], Orderdetail.prototype, "orderId", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => product_entity_1.Product, (product) => product.productId),
    __metadata("design:type", product_entity_1.Product)
], Orderdetail.prototype, "productId", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => user_entity_1.UserEntity, (user) => user.userId),
    __metadata("design:type", user_entity_1.UserEntity)
], Orderdetail.prototype, "user", void 0);
Orderdetail = __decorate([
    typeorm_1.Entity()
], Orderdetail);
exports.Orderdetail = Orderdetail;
//# sourceMappingURL=orderdetail.entity.js.map