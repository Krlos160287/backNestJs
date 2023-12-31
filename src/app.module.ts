import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { LibreriaModule } from './modules/libreria/libreria.module';

@Module({
  imports: [DatabaseModule, LibreriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
