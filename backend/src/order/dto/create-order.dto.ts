import { ApiProperty } from '@nestjs/swagger';
export class CreateOrderDto {
    @ApiProperty({ example: 'product name' })
    amount: number;

    @ApiProperty()
    OSDate: number;

}

