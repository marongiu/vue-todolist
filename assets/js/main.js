var app = new Vue ({
  el: '#root',
  data: {
    text: '', // valore input
    todositem: [ // array todo esempi
      {
        item: "Fare spesa",
        status: 'todo'
      },
      {
        item: "Portare il cane fuori",
        status: 'todo'
      },
      {
        item: "Finire esercizio di Boolean",
        status: 'todo'
      }
    ],
  },
  // filtro array
  computed: {
    sort: function () {
      let statusCheck = this.todositem.filter((todo) => todo.status == 'check');
      let statusTodo = this.todositem.filter((todo) => todo.status == 'todo');

      return [...statusTodo, ...statusCheck];

    }
  },
  methods: {
    add: function () {
      // se oggetto che vado ad inserire a una lunghezza maggiore ad 1
      if (this.text.length >= 1) {
        // creo un nuovo oggetto da pushare in todositem
        let newitem = {
            // this.text è il value dell'input
          item: this.text,
          status: 'todo'
        }
        // lo pusho in todositem
        this.todositem.push(newitem)
        // dopo averlo pushato reimposto il valore come default ''
        this.text = ''
        console.log(this.todositem.status);
      }
    },
    done: function (i) {
      this.sort[i].status = 'check';
      console.log(i);
    }
  }

});
