import { IsBoolean, IsString, Length } from 'class-validator';

export class CategoryDTO {

    @IsString()
    @Length(4,20)
    name: string;

    @IsBoolean()
    active: boolean;

    @IsString()
    image: string;

    constructor(category: CategoryDTO){
        this.name = category.name;
        this.active = category.active;
        this.image = category.image;
    }

}