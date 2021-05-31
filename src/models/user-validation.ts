import { IsDate, IsString, Length, Matches } from 'class-validator';

export class RegistraionDTO {

    @IsString()
    @Length(1, 20)
    first_name: string;

    @IsString()
    @Length(1, 20)
    last_name: string;

    @IsDate()
    date_of_birth: Date;

    @IsString()
    @Length(10, 13)
    phone: string;

    @IsString()
    @Length(1, 20, { groups: ['credentials'] })
    user_name: string;

    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' })
    @Length(8, 24, { groups: ['credentials'] })
    password: string;

    constructor(user: RegistraionDTO) {
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.date_of_birth = new Date(user.date_of_birth);
        this.phone = user.phone;
        this.user_name = user.user_name;
        this.password = user.password;
    }
}
