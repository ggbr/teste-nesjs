import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VehicleProviders } from './vehicles.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [VehiclesController],
  providers: [
     ... VehicleProviders,
     VehiclesService
    ]
})
export class VehiclesModule {}


