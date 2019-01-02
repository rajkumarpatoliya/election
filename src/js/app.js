App = {
  web3Provider: null,
  contracts: {},
  account:'0x0',

  init: async () => {
    return App.initWeb3();
  },
  initWeb3: () => {
    if(typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(App.web3Provider);

    } else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: () => {
    $.getJSON('Election.json', (election) => {
      App.contracts.Election = TruffleContract(election);
      App.contracts.Election.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: () => {
    let electionInstance;
    let loader = $("#loader");
    let content = $("#content");
  },
};