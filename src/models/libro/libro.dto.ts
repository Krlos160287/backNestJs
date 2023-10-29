/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class LibroDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;
  
  @IsString()
  @IsNotEmpty()
  autor: string;
  
  @IsString()
  @IsNotEmpty()
  publish_data: string;
  
  @IsString()
  @IsNotEmpty()
  categoria: string;
}
