import fs from 'node:fs';
import path from 'node:path';

export default class GeneratePreDefinedBase {

    generateCertificationsJson(fileFolder, dataFolder) {
        console.log(fileFolder)
        const directory = path.join(process.cwd(), fileFolder ? fileFolder : 'public/data', dataFolder);
        const outputFile = path.join(directory, 'list.json');

        if (!fs.existsSync(directory)) {
            console.error(`❌ Diretório não encontrado: ${directory}`);
            return;
        }

        const files = fs.readdirSync(directory).filter(file => file.endsWith('.md'));

        return {
            directory,
            files,
            outputFile
        }
    }

}