import { IsDate, IsString, Length, Matches } from 'class-validator';

export class RegistraionDTO {

    @IsString()
    @Length(1,20)
    firstName: string;

    @IsString()
    @Length(1,20)
    lastName: string;

    @IsDate()
    dateOfBirth: Date;

    @IsString()
    @Length(10,13)
    phone: string;

    @IsString()
    @Length(1,20, {groups:['credentials']})
    userName: string;

    @IsString()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    @Length(8,24, {groups:['credentials']})
    password: string;

    constructor(user: RegistraionDTO){
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.dateOfBirth = new Date(user.dateOfBirth);
        this.phone = user.phone;
        this.userName = user.userName;
        this.password = user.password;
    }
}
