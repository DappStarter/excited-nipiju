require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth rifle come harvest father equal giant'; 
let testAccounts = [
"0xaa5c778abc81507dd9a9cb39d3b56d754c0e147ac78605fe1bcd460486d63a7d",
"0x25606fa9e8d1bd49876c484051a974548db9ed0c810a03739e8ba7440ba060a2",
"0xdba3df94ac9b6c52e1f89e90b335dc0cfe0b35768292b826dc6a901d3dbc9fcf",
"0xb08c14d9761df359bc1a157f2539e71886b09cade5ea46a4f939dfa79ccec64d",
"0xd25d501046b3b8ce7bd6ba5f2057ff646042d7e8efa5ee0f1250ec18aa9358c6",
"0xbaac1f3439d1f91000e56ae1f4b59915572bc47c6973795434dced5d3811c2e0",
"0xfb6aae3c2bd025aa0c0fa0406e63d36a306c1f8e9ef6789073de161e47168e5e",
"0x10c3cfcb81b6a8d46c2b86b733425b0b1883754202a57e9fa44fada1a66cf5a0",
"0xf5e554b309d908c2a6a1ea0c7fb09275c72f39979117d59721027f5c8b678760",
"0x6d3f49c2aa7a2e2d84b4c806450c98e8a29299e748ddced0e0d12780a3d88b3b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
