/*
ABYT
2017
*/

// iniatilizing socket.io-client
var socket = io();
var vm = new Vue({
  el: '#app',
  data: {
    Name:'Yasin'
    liveRooms: {
      Alg1 : true;
      Geo : true;
    }
  },

  methods: {
    addroom: function(roomname){
      Vue.set(vm.liveRooms, roomname, true);
    }

    makeroom: function(roomname) {
      socket.emit('newRoomName', roomname);
    }
  }

});
