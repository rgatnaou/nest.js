import { IsEnum, MinLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name: string;
    @IsEnum(["nunchucks" , "stars"],{message: "use correct weapon!"})
    weapon: "nunchucks" | "stars"
}