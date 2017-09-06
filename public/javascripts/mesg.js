
var vma = new Vue({
  el: '.js-componenta',
  data: {
    text: 'init'
  }
})

var vmb = new Vue({
  el: '.js-componentb',
  data: {
    text: 'init'
  }
})
var vmc = new Vue({
  el: '.js-componentc',
  data: {
    text: 'init'
  }
})
var vmd = new Vue({
  el: '.js-componentd',
  data: {
    text: 'init'
  }
})

// var func = function ($) {
//   console.log('紅茶オレ')
//   $.ajax({
//     // stick/Blendy
//     url: '/sti',
//     type: 'GET',
//     data: { aaa: '34' },
//     dataType: 'json',
//     timeout: 120000,
//     success: function (result) {
//       console.log('ajax get success')
//       console.log(JSON.stringify(result.data))
//       vma.text = result.data["a"]
//       vmb.text = result.data["b"]
//       vmc.text = result.data["c"]
//       vmd.text = result.data["d"]
//     },
//     error: function (XMLHttpRequest, textStatus, errorThrown) {
//       console.log('ajax get faile')
//     }
//   });
// }

var func = function ($) {
  console.log('紅茶オレ')
  $.ajax({
    // stick/Blendy
    url: '/sti',
    type: 'GET',
    data: { aaa: '34' },
    dataType: 'json',
    timeout: 120000,
    success: function (result) {
      console.log('ajax get success')
      console.log(JSON.stringify(result.data))
      bianli.divNo = result.data
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log('ajax get faile')
    }
  });
}

var bianli = new Vue({
  el: '.js-component06',
  data: {
    divNo : []
  }
});

console.log(1111)

func(jQuery)

new Vue({
  el: '.js-component05',
  data: {
    show_text: ''
  }
});

var i=0
new Vue({
  el: '.vue_onclick_p',
  data: {
    vue_onclick_text : "" ,
    text : ""
  },
  methods: {
    output : function(){
      i++
      this.text = parseInt(this.vue_onclick_text)+i
    }
  }
})

function text_clear(obj){
  obj.valie=""
  i=0
}




