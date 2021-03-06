/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks : {
    ganache : {
      host : 'localhost',
      port : 7545,    // By default Ganache runs on this port.
      network_id : 5777 // network_id for ganache is 5777. However, by keeping * as value you can run this node on  any network
    }
  }
};
