import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstablishmentModule } from './establishment/establishment.module';
import { VehiclesModule } from './vehicles/vehicles.module';




@Module({
  imports: [ EstablishmentModule, VehiclesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
