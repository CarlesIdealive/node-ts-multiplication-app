import { yarg as argv } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";


( async() => {
    await main();
    console.log('fin del programa');
    
})();



async function main() {
    //OBTE DEL YARN ELS PARAMETRES
    const { 
        b: base, 
        l:limit, 
        s:showTable, 
        n:fileName, 
        d:fileDestination
    } = argv;

    //EXECUTA EL SERVIDOR DE LA APLICACIO - S'ENCARREGA DEL FUNCIONAMENT
    ServerApp.run({ base, limit, showTable, fileName, fileDestination });

    
}