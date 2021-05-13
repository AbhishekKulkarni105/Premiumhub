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
exports.OrderDetailsController = void 0;
const common_1 = require("@nestjs/common");
const order_details_service_1 = require("./order-details.service");
const create_order_detail_dto_1 = require("./dto/create-order-detail.dto");
const update_order_detail_dto_1 = require("./dto/update-order-detail.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/jwt.guard");
let OrderDetailsController = class OrderDetailsController {
    constructor(orderDetailsService) {
        this.orderDetailsService = orderDetailsService;
    }
    create(req, createOrderDetailDto) {
        return this.orderDetailsService.create(req.user.userId, req.body.productId, req.body.orderId, createOrderDetailDto);
    }
    findAll(req) {
        return this.orderDetailsService.findAll(req.user.userId);
    }
    findOne(id) {
        return this.orderDetailsService.findOne(+id);
    }
    update(id, updateOrderDetailDto) {
        return this.orderDetailsService.update(+id, updateOrderDetailDto);
    }
    remove(id) {
        return this.orderDetailsService.remove(+id);
    }
};
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is Created' }),
    swagger_1.ApiOkResponse({ description: 'OrderDetail Data Created for ID' }),
    common_1.Post(),
    __param(0, common_1.Request()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_order_detail_dto_1.CreateOrderDetailDto]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "create", null);
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is Found' }),
    swagger_1.ApiOkResponse({ description: 'OrderDetail Data Found' }),
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is found For ID' }),
    swagger_1.ApiOkResponse({ description: 'OrderDetail Data Found for ID' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is Updated' }),
    swagger_1.ApiOkResponse({ description: 'OrderDetail Data Updated for ID' }),
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_detail_dto_1.UpdateOrderDetailDto]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "update", null);
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is Deleted' }),
    swagger_1.ApiOkResponse({ description: 'orderDetail Data Deleted for ID' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderDetailsController.prototype, "remove", null);
OrderDetailsController = __decorate([
    swagger_1.ApiTags('OrderDetail'),
    common_1.Controller('order-details'),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [order_details_service_1.OrderDetailsService])
], OrderDetailsController);
exports.OrderDetailsController = OrderDetailsController;
//# sourceMappingURL=order-details.controller.js.map