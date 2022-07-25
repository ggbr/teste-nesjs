export class CreateEstablishmentDto {
    id: number
    name: string;
    document: string; // onde dev ser salvo o CNPJ
    adress: string;
    phone: string;
    number_space_motorcycles: number;
    number_space_car: number;
}
