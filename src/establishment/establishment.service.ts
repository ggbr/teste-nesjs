import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { Establishment } from './entities/establishment.entity';

@Injectable()
export class EstablishmentService {
  constructor(
    @Inject('ESTABLISHMENT_REPOSITORY')
    private establishmentRepository: Repository<Establishment>,
  ) {}


  
  create(createEstablishmentDto: CreateEstablishmentDto) {
    return  this.establishmentRepository.save(createEstablishmentDto);

  }

  findAll() {
    return this.establishmentRepository.find();
  }

  findOne(id: number) {
    return this.establishmentRepository.findOne({where: {id: id}});

  }

  update(id: number, updateEstablishmentDto: UpdateEstablishmentDto) {
    return this.establishmentRepository.update(id,updateEstablishmentDto)

  }


}
