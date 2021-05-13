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
exports.PaymentController = void 0;
const jwt_guard_1 = require("../auth/jwt.guard");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const payment_service_1 = require("./payment.service");
const create_payment_dto_1 = require("./dto/create-payment.dto");
const update_payment_dto_1 = require("./dto/update-payment.dto");
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    create(req, createPaymentDto) {
        return this.paymentService.create(req.user.userId, req.body.productId, req.body.orderId, createPaymentDto);
    }
    findAll(req) {
        return this.paymentService.findAll(req.user.usrId);
    }
    findOne(req, id) {
        return this.paymentService.findOne(+id);
    }
    update(id, updatePaymentDto) {
        return this.paymentService.update(+id, updatePaymentDto);
    }
    remove(id) {
        return this.paymentService.remove(+id);
    }
};
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is Created...  😿' }),
    swagger_1.ApiOkResponse({ description: 'Payment Data Created... 😺' }),
    common_1.Post(),
    __param(0, common_1.Request()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_payment_dto_1.CreatePaymentDto]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "create", null);
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is Found' }),
    swagger_1.ApiOkResponse({ description: 'All Payment Data found' }),
    common_1.Get(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is found for ID' }),
    swagger_1.ApiOkResponse({ description: 'Payment Data found for ID' }),
    common_1.Get(':id'),
    __param(0, common_1.Request()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is Updated' }),
    swagger_1.ApiOkResponse({ description: 'Payment Data Updated for ID' }),
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_payment_dto_1.UpdatePaymentDto]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "update", null);
__decorate([
    swagger_1.ApiNotFoundResponse({ description: 'No data is Deleted' }),
    swagger_1.ApiOkResponse({ description: 'Payment Data Deleted for ID' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "remove", null);
PaymentController = __decorate([
    swagger_1.ApiTags('payment'),
    common_1.Controller('payment'),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map