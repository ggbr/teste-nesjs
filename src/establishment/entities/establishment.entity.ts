import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Establishment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 120})
    name: string;

    @Column({ length: 14})
    document: string; // onde dev ser salvo o CNPJ

    @Column({ length: 120})
    adress: string;
    @Column({ length: 15})
    phone: string;

    @Column('int')
    number_space_motorcycles: number;
    @Column('int')
    number_space_car: number;
}