import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {

  constructor(
    @Inject('VEHICLE_REPOSITORY')
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicleRepository.save(createVehicleDto);
  }

  findAll() {
    return this.vehicleRepository.find();
  }

  findOne(id: number) {
    return this.vehicleRepository.findOne({ where: {id: id}});
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleRepository.update(id, updateVehicleDto);
  }


}
