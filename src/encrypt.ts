import { publicEncrypt } from 'crypto';
import fs from 'fs';

if (!fs.existsSync('./keys/mykey.pub')) {
    console.log('Public key not found, run generate-keypair first')
    process.exit(0);
}

const publicKey = fs.readFileSync('./keys/mykey.pub', 'utf8');

const message = process.argv[2];
if (!message) {
    console.log('Usage: encrypt <message>')
    process.exit(0);
}

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));
console.log(encryptedData.toString('base64'));