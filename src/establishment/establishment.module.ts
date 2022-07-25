import { Module } from '@nestjs/common';
import { EstablishmentController } from './establishment.controller';
import { DatabaseModule } from 'src/database/database.module';
import { EstablishmentProviders } from './establishment.providers';
import { EstablishmentService } from './establishment.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EstablishmentController],
  providers: [
     ... EstablishmentProviders,
     EstablishmentService
    ]
})
export class EstablishmentModule {}


