var vm = new Vue({
  el: '#app',
  data: {
    // eth-btc
    asksList: [],
    bidsList: [],
    // eth-eos
    eosAsksList: [],
    eosBidsList: [],
    eosEthAsksPrice: 0,
    eosEthBidsPrice: 0,
    // eos-bny
    eosBncAsksList: [],
    eosBncBidsList: [],
    eosBncAsksPrice: 0,
    eosBncBidsPrice: 0,
    // eth-bny
    ethBncAsksList: [],
    ethBncBidsList: [],
    ethBncAsksPrice: 0,
    ethBncBidsPrice: 0,
    // big-eos
    bigEosAsksList: [],
    bigEosBidsList: [],
    bigEosAsksPrice: 0,
    bigEosBidsPrice: 0,
    // eos-btc
    eosBtcAsksList: [],
    eosBtcBidsList: [],
    eosBtcAsksPrice: 0,
    eosBtcBidsPrice: 0,
    // btc-big
    bigBtcAsksList: [],
    bigBtcBidsList: [],
    bigBtcAsksPrice: 0,
    bigBtcBidsPrice: 0,
    // dew-btc
    dewBtcAsksList: [],
    dewBtcBidsList: [],
    dewBtcAsksPrice: 0,
    dewBtcBidsPrice: 0,
    // dew-eos
    dewEosAsksList: [],
    dewEosBidsList: [],
    dewEosAsksPrice: 0,
    dewEosBidsPrice: 0,
    // eth-btc-eos-eth
    ethNet: 0,
    antiEthNet: 0,
    // eth-btc-eos-eth
    bigNet: 0,
    antiBigNet: 0,
    // eth-btc-eos-eth
    dewNet: 0,
    antiDewNet: 0,
    ethActive: false,
    ethAct: false,
    bigActive: false,
    bigAct: false,
    dewActive: false,
    dewAct: false
  },
  methods: {
    fetchData() {
      // eth-btc
      axios.get('https://api.big.one/markets/ETH-BTC/book').then(function(response) {
        vm.asksList = response.data.data.asks.slice(0, 2)
        vm.bidsList = response.data.data.bids.slice(0, 2)
      })

      // eth-eos
      axios.get('https://api.big.one/markets/ETH-EOS/book').then(function(response) {
        vm.eosAsksList = response.data.data.asks.slice(0, 2)
        vm.eosBidsList = response.data.data.bids.slice(0, 2)
        vm.eosEthAsksPrice = vm.eosAsksList[0].price
        vm.eosEthBidsPrice = vm.eosBidsList[0].price
        // console.log(vm.eosAsksList)
      })

      // eos-bnc
      axios.get('https://api.big.one/markets/EOS-BNC/book').then(function(response) {
        vm.eosBncAsksList = response.data.data.asks.slice(0, 2)
        vm.eosBncBidsList = response.data.data.bids.slice(0, 2)
        vm.eosBncAsksPrice = vm.eosBncAsksList[0].price
        vm.eosBncBidsPrice = vm.eosBncBidsList[0].price
      })
      // bnc-eth

      axios.get('https://api.big.one/markets/ETH-BNC/book').then(function(response) {
        vm.ethBncAsksList = response.data.data.asks.slice(0, 2)
        vm.ethBncBidsList = response.data.data.bids.slice(0, 2)
        vm.ethBncAsksPrice = vm.ethBncAsksList[0].price
        vm.ethBncBidsPrice = vm.ethBncBidsList[0].price
        //  console.log(vm.ethBncAsksPrice);
      })

      // big-eos
      axios.get('https://api.big.one/markets/BIG-EOS/book').then(function(response) {
        vm.bigEosAsksList = response.data.data.asks.slice(0, 2)
        vm.bigEosBidsList = response.data.data.bids.slice(0, 2)
        vm.bigEosAsksPrice = vm.bigEosAsksList[0].price
        vm.bigEosBidsPrice = vm.bigEosBidsList[0].price
      })

      // eos-btc
      axios.get('https://api.big.one/markets/EOS-BTC/book').then(function(response) {
        vm.eosBtcAsksList = response.data.data.asks.slice(0, 2)
        vm.eosBtcBidsList = response.data.data.bids.slice(0, 2)
        vm.eosBtcAsksPrice = vm.eosBtcAsksList[0].price
        vm.eosBtcBidsPrice = vm.eosBtcBidsList[0].price
      })
      // big-btc
      axios.get('https://api.big.one/markets/BIG-BTC/book').then(function(response) {
        vm.bigBtcAsksList = response.data.data.asks.slice(0, 2)
        vm.bigBtcBidsList = response.data.data.bids.slice(0, 2)
        vm.bigBtcAsksPrice = vm.bigBtcAsksList[0].price
        vm.bigBtcBidsPrice = vm.bigBtcBidsList[0].price
      })
      // dew-btc
      axios.get('https://api.big.one/markets/DEW-BTC/book').then(function(response) {
        vm.dewBtcAsksList = response.data.data.asks.slice(0, 2)
        vm.dewBtcBidsList = response.data.data.bids.slice(0, 2)
        vm.dewBtcAsksPrice = vm.dewBtcAsksList[0].price
        vm.dewBtcBidsPrice = vm.dewBtcBidsList[0].price
      })
      // dew-eos
      axios.get('https://api.big.one/markets/DEW-EOS/book').then(function(response) {
        vm.dewEosAsksList = response.data.data.asks.slice(0, 2)
        vm.dewEosBidsList = response.data.data.bids.slice(0, 2)
        vm.dewEosAsksPrice = vm.dewEosAsksList[0].price
        vm.dewEosBidsPrice = vm.dewEosBidsList[0].price
      })

      vm.ethNet = antiNet(vm.eosEthBidsPrice, vm.eosBncBidsPrice, vm.ethBncAsksPrice)
      vm.antiEthNet = net(vm.ethBncBidsPrice, vm.eosBncAsksPrice, vm.eosEthAsksPrice)

      vm.bigNet = antiNet(vm.bigEosBidsPrice, vm.eosBtcBidsPrice, vm.bigBtcAsksPrice)
      vm.antiBigNet = net(vm.bigBtcBidsPrice, vm.eosBtcAsksPrice, vm.bigEosAsksPrice)

      vm.dewNet = antiNet(vm.dewEosBidsPrice, vm.eosBtcBidsPrice, vm.dewBtcAsksPrice)
      vm.antiDewNet = net(vm.dewBtcBidsPrice, vm.eosBtcAsksPrice, vm.dewEosAsksPrice)

      vm.ethActive = Boolean(vm.ethNet.split("%")[0] > 0)
      vm.ethAct = Boolean(vm.antiEthNet.split("%")[0] > 0)

      vm.bigActive = Boolean(vm.bigNet.split("%")[0] > 0)
      vm.bigAct = Boolean(vm.antiBigNet.split("%")[0] > 0)

      vm.dewActive = Boolean(vm.dewNet.split("%")[0] > 0)
      vm.dewAct = Boolean(vm.antiDewNet.split("%")[0] > 0)

      function net(x, y, z) {
        return Math.round((x / y / z - 1) * 1000) / 10 + '%'
      }
      function antiNet(x, y, z) {
        return Math.round((x * y / z - 1) * 1000) / 10 + '%'
      }
    }
  }
});
// vm.fetchData()
setInterval(function() {
  vm.fetchData()
  // var netLi = []
  // console.log(1);
}, 1000)
// setInterval(vm.fetchData ,2000)
