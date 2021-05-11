"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderdetailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_orderdetail_dto_1 = require("./create-orderdetail.dto");
class UpdateOrderdetailDto extends swagger_1.PartialType(create_orderdetail_dto_1.CreateOrderdetailDto) {
}
exports.UpdateOrderdetailDto = UpdateOrderdetailDto;
//# sourceMappingURL=update-orderdetail.dto.js.map