"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsModule = void 0;
const product_service_1 = require("./../product/product.service");
const common_1 = require("@nestjs/common");
const order_details_service_1 = require("./order-details.service");
const order_details_controller_1 = require("./order-details.controller");
const typeorm_1 = require("@nestjs/typeorm");
const order_detail_entity_1 = require("./entities/order-detail.entity");
const order_entity_1 = require("../order/entities/order.entity");
const order_service_1 = require("../order/order.service");
const product_entity_1 = require("../product/entities/product.entity");
let OrderDetailsModule = class OrderDetailsModule {
};
OrderDetailsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_detail_entity_1.OrderDetail, order_entity_1.Order, product_entity_1.Product])],
        controllers: [order_details_controller_1.OrderDetailsController],
        providers: [order_details_service_1.OrderDetailsService, order_service_1.OrderService, product_service_1.ProductService]
    })
], OrderDetailsModule);
exports.OrderDetailsModule = OrderDetailsModule;
//# sourceMappingURL=order-details.module.js.map