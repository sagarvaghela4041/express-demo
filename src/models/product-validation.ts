import 'reflect-metadata';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, Length, ValidateNested } from 'class-validator';

export class ProductVendorDTO {

    @IsNumber()
    price: number;

    @IsNumber()
    quantity: number;

    @IsArray()
    @IsNumber({}, { each: true })
    delivery_area_zipcodes: number[];

    constructor(productVendor: ProductVendorDTO) {
        this.price = productVendor.price;
        this.quantity = productVendor.quantity;
        this.delivery_area_zipcodes = productVendor.delivery_area_zipcodes;
    }
}

export class ProductFieldDTO {
    @IsString()
    @Length(1, 20)
    name: string;

    @IsString({ each: true })
    value: string;

    constructor(fields: ProductFieldDTO) {
        this.name = fields.name;
        this.value = fields.value;
    }
}

export class PorductDTO {

    @IsString()
    @Length(4, 20)
    title: string;

    @ValidateNested({ each: true })
    @Type(() => ProductVendorDTO)
    vendors: ProductVendorDTO[];

    @IsArray()
    @IsString({ each: true })
    images: string[];

    @IsString()
    @IsNotEmpty()
    category_id: string;

    @ValidateNested({ each: true })
    @Type(() => ProductFieldDTO)
    fields: ProductFieldDTO[];

    constructor(product: PorductDTO) {
        this.title = product.title;
        this.vendors = product.vendors.map((productVendor: ProductVendorDTO) => new ProductVendorDTO(productVendor));
        this.images = product.images;
        this.category_id = product.category_id;
        this.fields = product.fields.map((fields: ProductFieldDTO) => new ProductFieldDTO(fields));
    }
}