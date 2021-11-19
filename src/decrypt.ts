import { privateDecrypt } from 'crypto';
import fs from 'fs';

if (!fs.existsSync('./keys/mykey')) {
    console.log('Private key not found, run generate-keypair first')
    process.exit(0);
}

const privateKey = fs.readFileSync('./keys/mykey', 'utf8');

const message = process.argv[2];
if (!message) {
    console.log('Usage: decrypt <message>')
    process.exit(0);
}

const decryptedData = privateDecrypt(privateKey, Buffer.from(message, 'base64'));
console.log(decryptedData.toString());