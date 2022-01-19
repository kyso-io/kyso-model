import { ApiProperty } from '@nestjs/swagger';

export class ActionWithPayload<T> {
    @ApiProperty()
    public payload: T | null;

    constructor(payload: T) {
        this.payload = payload
    }
}
