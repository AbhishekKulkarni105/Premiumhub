"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderdetailsModule = void 0;
const common_1 = require("@nestjs/common");
const orderdetails_service_1 = require("./orderdetails.service");
const orderdetails_controller_1 = require("./orderdetails.controller");
const orderdetail_entity_1 = require("./entities/orderdetail.entity");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("../orders/entities/order.entity");
const product_entity_1 = require("../product/entities/product.entity");
const orders_service_1 = require("../orders/orders.service");
const product_service_1 = require("../product/product.service");
let OrderdetailsModule = class OrderdetailsModule {
};
OrderdetailsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([orderdetail_entity_1.Orderdetail, order_entity_1.Order, product_entity_1.Product])],
        controllers: [orderdetails_controller_1.OrderdetailsController],
        providers: [orderdetails_service_1.OrderdetailsService, orders_service_1.OrdersService, product_service_1.ProductService]
    })
], OrderdetailsModule);
exports.OrderdetailsModule = OrderdetailsModule;
//# sourceMappingURL=orderdetails.module.js.map