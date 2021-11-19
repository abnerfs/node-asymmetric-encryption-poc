# Node Asymmetric Encryption POC
Simple program that generates a keypair and does public encryption and private decryption.

# Installation
Clone and install

# Usage

First you need to generate a key pair running the command below, private and public keys will be stored in ./keys directory

```
npm run generate-keypair
```

Now you can encrypt some data using
```
npm run encrypt "my message"
```

Then you can decrypt your data using
```
npm run decrypt "My encrypted message"
```

