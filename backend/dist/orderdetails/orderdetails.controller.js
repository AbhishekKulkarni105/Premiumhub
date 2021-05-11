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
exports.OrderdetailsController = void 0;
const common_1 = require("@nestjs/common");
const orderdetails_service_1 = require("./orderdetails.service");
const create_orderdetail_dto_1 = require("./dto/create-orderdetail.dto");
const update_orderdetail_dto_1 = require("./dto/update-orderdetail.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/jwt.guard");
let OrderdetailsController = class OrderdetailsController {
    constructor(orderdetailsService) {
        this.orderdetailsService = orderdetailsService;
    }
    create(req, createOrderdetailDto) {
        console.log(req);
        return this.orderdetailsService.create(req.user.userId, req.body.prodId, req.body.orderId, createOrderdetailDto);
    }
    findAll(req) {
        return this.orderdetailsService.findAll(req.userId, req.body.orderId);
    }
    findOne(id) {
        return this.orderdetailsService.findOne(+id);
    }
    update(id, updateOrderdetailDto) {
        return this.orderdetailsService.update(+id, updateOrderdetailDto);
    }
    remove(id) {
        return this.orderdetailsService.remove(+id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Request()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_orderdetail_dto_1.CreateOrderdetailDto]),
    __metadata("design:returntype", void 0)
], OrderdetailsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderdetailsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderdetailsController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_orderdetail_dto_1.UpdateOrderdetailDto]),
    __metadata("design:returntype", void 0)
], OrderdetailsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderdetailsController.prototype, "remove", null);
OrderdetailsController = __decorate([
    swagger_1.ApiTags('Orderdetails'),
    common_1.Controller('orderdetail'),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [orderdetails_service_1.OrderdetailsService])
], OrderdetailsController);
exports.OrderdetailsController = OrderdetailsController;
//# sourceMappingURL=orderdetails.controller.js.map