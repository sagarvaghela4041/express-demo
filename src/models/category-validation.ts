import 'reflect-metadata';
import { IsBoolean, IsString, Length, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CategoryFieldDTO {
    @IsString()
    @Length(1, 20)
    name: string;

    @IsString({ each: true })
    values: string[];

    constructor(fields: CategoryFieldDTO) {
        this.name = fields.name;
        this.values = fields.values;
    }
}

export class CategoryDTO {

    @IsString()
    @Length(4, 20)
    name: string;

    @IsBoolean()
    active: boolean;

    @IsString()
    image: string;

    @ValidateNested()
    @Type(() => CategoryFieldDTO)
    fields: CategoryFieldDTO[];

    constructor(category: CategoryDTO) {
        this.name = category.name;
        this.active = category.active;
        this.image = category.image;
        this.fields = category.fields.map((fields: CategoryFieldDTO) => new CategoryFieldDTO(fields));
    }

}