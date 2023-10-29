import { Module } from '@nestjs/common';
import { LibreriaController } from './controller/libreria/libreria.controller';
import { LibroService } from 'src/services/libreria/libro.service';
import { LibroEntity } from './entity/libro-entity./libro-entity.';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LibroEntity])],
  controllers: [LibreriaController],
  providers: [LibroService],
})
export class LibreriaModule {}
