var app = new Vue({
  el: '#sub',
  data: {
    subBtnLabel: 'Subscribe',
    email: '',
  },
  computed: {
    cannotSubmit() {
        return ! this.isValidEmail;
    },
    isValidEmail() {
        return this.validEmail(this.email);
    },
    classesOnValidation() {
        return [this.isValidEmail ? 'fas fa-check is-valid' : 'fas fa-exclamation is-invalid']; 
    }
  },
  methods: {
    validEmail: function (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    },

    subClicked: function () {
      this.subBtnLabel = 'Subscribed!'
      this.isBtnDisabled = true;
    }
  }
})