import { IsEmail, IsPhoneNumber, IsString, Length, ValidateNested } from 'class-validator';

export class AddressDTO {
    @IsString()
    @Length(4, 20)
    line1: string;

    @IsString()
    @Length(4, 20)
    line2: string;

    @IsString()
    @Length(4, 20)
    city: string;

    @IsString()
    @Length(4, 20)
    state: string;

    @IsString()
    @Length(4, 20)
    zip: string;

    constructor(address: AddressDTO) {
        this.line1 = address.line1;
        this.line2 = address.line2;
        this.city = address.city;
        this.state = address.state;
        this.zip = address.zip;
    }
}

export class VendorDTO {
    @IsString()
    @Length(4, 20)
    name: string;

    @IsEmail()
    email: string;

    @Length(10, 13)
    phone_number: string;

    @ValidateNested()
    address: AddressDTO;

    constructor(vendor: VendorDTO) {
        this.name = vendor.name;
        this.email = vendor.email;
        this.phone_number = vendor.phone_number;
        this.address = vendor.address;
    }

}
