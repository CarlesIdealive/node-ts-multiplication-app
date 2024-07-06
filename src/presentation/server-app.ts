import { CreateTable } from "../domain/use-cases/create-tabla.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
    //SIEMPRE VAN A TENER UN VALOR
    base            : number;
    limit           : number;
    showTable       : boolean;
    fileName        : string;
    fileDestination : string;
}


export class ServerApp {


    static run( {base, limit, showTable, fileName, fileDestination}: RunOptions) {

        console.log('Server runnning...');
        
        //CAS D'US CREATETABLE I CAS D'US SAVEFILE
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile()
            .execute( {
                fileContent: table,
                fileName,
                fileDestination
            } );

        if (showTable) {
            console.log(table);
        }
        
        (wasCreated)
            ? console.log('File Created')
            : console.log('File Not created');
            
            

    }


}