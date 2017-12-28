var vm = new Vue({
  el: '#app',
  data: {
    asksList: [],
    bidsList: []
  },
  methods: {
    fetchData () {
      axios.get('https://api.big.one/markets/ETH-BTC/book')
        .then(function(response) {

           vm.asksList = response.data.data.asks.slice(0,4)
           vm.bidsList = response.data.data.bids.slice(0,4)
           console.log(vm.asksList)
           console.log(vm.bidsList)
        })
    }
  }
});

vm.fetchData();
