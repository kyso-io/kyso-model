import { ApiProperty } from '@nestjs/swagger';

/**
 * TODO: Decide if we need this
 */
export class BaseRole {
    @ApiProperty()
    public id: string;

    @ApiProperty()
    public type: string;

    constructor(id: string, type: string) {
        this.id = id
        this.type = type
    }
}
