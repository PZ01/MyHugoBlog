var app = new Vue({
  el: '#sub',
  data: {
    subBtnLabel: 'Subscribe',
    isBtnDisabled: false,
  },
  methods: {
    subClicked: function () {
      this.subBtnLabel = 'Subscribed!'
      this.isBtnDisabled = true;
    }
  }
})