export interface CreateTableOptions {
    base: number;
    limit?: number;
}

//  INTERFACE QUE DEBE IMPLEMENTAR LA CLASE
export interface CreateTableUseCase {
    execute: ( options: CreateTableOptions)=> string;

}



//CREA LA DATA DEL ARCHIVO
export class CreateTable implements CreateTableUseCase {


    /*
    * DI: Inyectamos como queremos que cree la data
    * DEPENDENCIAS DEL MUNDO EXTERIOR
    * !! FALTARIA AQUI INJECTAR A ON VOLEM GRABAR EL FILE (FPTS, DISK---)
    */
    constructor(){}

    //CADA CASO DE USO TIENE EL METODO EXUCUTE-RUN .. PARA EJECUTAR EL CASO DE USO
    execute( {base, limit = 10}:CreateTableOptions ) : string {
        let outputmessage = '';
    
        for (let i = 1; i<=limit; i++){
            outputmessage += `${base} x ${i} = ${base * i}\n`;
        }   
        
        return outputmessage;
    }

}