PastelWallet Fullnode is a z-Addr first, Sapling compatible wallet and full node for pasteld that runs on Linux, Windows and macOS.

[Contributing Guidelines](./docs/CONTRIBUTING.md)

# Installation

### Getting started

Download the release binary for your OS from the releases page, unzip it and double click on the exectable to start.

## pasteld

PastelWallet needs a Pastel node running pasteld. If you already have a pasteld node running, PastelWallet will connect to it.

If you don't have one, PastelWallet will start its embedded pasteld node.

Additionally, if this is the first time you're running PastelWallet or a pasteld daemon, PastelWallet will download the Pastel params (~777 MB) and configure `pastel.conf` for you.

## Compiling from source

PastelWallet is written in Electron/Javascript and can be build from source.

```
git clone https://github.com/RivieraMedia/pastel-wallet-upgrade.git
cd pastel-wallet-upgrade

yarn install
yarn make
```

The resulting binaries would be located at `out` folder. Please note that `yarn make` will create installers only for the OS where it's executed.

#### Prerequisites

You need to have the following software installed before you can build Pastelwallet Fullnode

- Nodejs v12.16.1 or higher - https://nodejs.org
- Yarn - https://yarnpkg.com

To start in development mode, run

```
yarn start
```

To contribute to the source, please read [CONTRIBUTING.md](https://github.com/RivieraMedia/pastel-wallet-upgrade/blob/master/docs/CONTRIBUTING.md).
