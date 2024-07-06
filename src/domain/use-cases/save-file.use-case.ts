import { LocalSystemRepository } from "../../repositories/local-system.repository";
import fs from 'fs';

export interface SaveFileOptions {
    fileContent: string,
    fileDestination?: string,
    fileName?: string
}

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;


}






export class SaveFile implements SaveFileUseCase {

    //Inyectar el repositorio donde vamos a grabar la informacion
    constructor(
        // repository : LocalSystemRepository
        //repository: StorageRepository
    ){}


    // execute(options: SaveFileOptions) : boolean {
    execute({
        fileContent,
        fileDestination= 'outputs',
        fileName
    } : SaveFileOptions) : boolean {

        // repository.save(fileDestination);
        // console.log('FIle created');

        // return true;


        
    try {
        fs.mkdirSync(fileDestination, { recursive: true });
        fs.writeFileSync(`${fileDestination}/${ fileName }.txt`, fileContent );
        return true;
        
      } catch (error) {
        console.error(error);
        return false;
      }
    }



}