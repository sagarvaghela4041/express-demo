import 'reflect-metadata';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';

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

export class PorductDTO {

    @IsString()
    title: string;

    @ValidateNested({ each: true })
    @Type(() => ProductVendorDTO)
    vendors: ProductVendorDTO[];

    @IsArray()
    @IsString({ each: true })
    images: string[];

    constructor(product: PorductDTO) {
        this.title = product.title;
        this.vendors = product.vendors.map((productVendor: ProductVendorDTO) => new ProductVendorDTO(productVendor));
        this.images = product.images;
    }
}