import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { BaseModel } from './base.model';

export class Discussion extends BaseModel {
    @ApiProperty({ 
        format: 'faker: datatype.boolean', 
        description: "Marks if a discussion is answered or not" })
    @IsBoolean()
    public answered: boolean

    @ApiProperty({ 
        format: 'faker: datatype.boolean', 
        description: "Marks if a discussion is private or not" })
    @IsBoolean()
    public private: boolean

    @ApiProperty({ 
        format: 'faker: datatype.string', 
        description: "Title of the discussion" })
    @IsString()
    public title: string

    @ApiProperty({ 
        format: 'faker: datatype.string', 
        description: "Description of the discussion" })
    @IsString()
    public description: string

    @ApiProperty({ 
        format: 'faker: datatype.string', 
        description: "What is content?" })
    @IsString()
    public content: string
    
    constructor(title: string, description: string, content: string, _private: boolean, answered: boolean) {
        super()
        this.title = title
        this.description = description
        this.content = content
        this.private = _private
        this.answered = answered
    }

}
