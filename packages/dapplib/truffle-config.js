require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember push inflict entire front taste'; 
let testAccounts = [
"0xdeb38167daca483ae7a378f438df4fed07e08eb892efddc2502c62e60b6e5634",
"0xef040fb05c0d51113590ea247814f487d554f2c41e45f075952cd0b0a8ee4d74",
"0x00eba104cbc26cfaa64658e206c73da5e4f019ad5eb0c0620161a8ef6918157b",
"0xdc8edb3129c7c862f650d82568ff99264f9b60310954ca97b4361652b4bff77e",
"0x70a56d67439c5625a530244e2ba7c808fba503a12c9a1588de29de48e1badc78",
"0x26aec656f1d66caf2fd463a6ba425235700aecb5be3540647409f331fc7992e7",
"0x6a7b0df9f595bb8e9d7d3042ba66a2a85843b4d9ab67186c4e50331a951451b9",
"0xede76f66c9efc73ced763abd181f690929ecb5e616ca786d85764f5c5a0e570a",
"0xa12bfe3fe46f3e074044e4e3134516b8ce37ed3af90ba6f51a5b9efbf249a461",
"0x038be920b75d26353c736e1bc968255bf13d4cf718733ba0b409cedcec0de06c"
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
            version: '^0.8.0'
        }
    }
};

