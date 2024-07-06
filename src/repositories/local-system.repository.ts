import fs from 'fs';



export class LocalSystemRepository {

    save(outputPath: string, base: string, outputmessage: string) : boolean {
        try {
            fs.mkdirSync(outputPath, { recursive: true});
            fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputmessage);
            return true;
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}