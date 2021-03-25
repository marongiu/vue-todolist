var app = new Vue ({
  el: '#root',
  data: {
    text: '', // valore input
    todositem: [ // array todo esempi
      {
        item: "Fare spesa"
      },
      {
        item: "Portare il cane fuori"
      },
      {
        item: "Finire esercizio di Boolean"
      }
    ]
  },
  methods: {
    add: function () {
      // se oggetto che vado ad inserire a una lunghezza maggiore ad 1
      if (this.text.length >= 1) {
        // creo un nuovo oggetto da pushare in todositem
        let newitem = {
            // this.text è il value dell'input
          item: this.text
        }
        // lo pusho in todositem
        this.todositem.push(newitem)
        // dopo averlo pushato reimposto il valore come default ''
        this.text = ''
      }
    }
  }

});
