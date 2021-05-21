This directory contains the hashes and signatures for PastelWallet

Verify the hashes by running:
sha256sum -c sha256sum-vX.Y.Z.txt

Verify signatures:

1. First, import the public key (Available on GitHub
   at https://github.com/PastelFoundation/pastelwallet/blob/master/static/public_key.asc)
   gpg --import public_key.asc

2. Verify signature
   gpg --verify <filename.sig> <downloaded-filename-to-verify>
