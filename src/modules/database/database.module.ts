import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LibroEntity } from '../libreria/entity/libro-entity./libro-entity.';
import { LibreriaModule } from '../libreria/libreria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'libreria',
      entities: [LibroEntity],
      synchronize: true,
    }),
    LibreriaModule,
  ],
})
export class DatabaseModule {
  constructor(private readonly connection: Connection) {}
}
