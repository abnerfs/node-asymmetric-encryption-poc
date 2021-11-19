import { generateKeyPairSync } from 'crypto';
import fs from 'fs';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    }
});

if (!fs.existsSync('./keys')) {
    fs.mkdirSync('./keys');
}

fs.writeFileSync('./keys/mykey', privateKey, 'utf8');
fs.writeFileSync('./keys/mykey.pub', publicKey, 'utf8');

console.log(privateKey);
console.log(publicKey);

