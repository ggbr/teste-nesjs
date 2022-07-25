import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 25})
    brand: string;

    @Column({ length: 25})
    color: string; // onde dev ser salvo o CNPJ

    @Column({ length: 7})
    plate: string;

    @Column('int')
    type: number;

}
