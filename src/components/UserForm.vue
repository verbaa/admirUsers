<template>
  <form @submit.prevent="submit">
    <input :class="$v.form.name.$error ? 'is-invalid' : '' " type="text" placeholder="Name*"
           v-model.trim="form.name">
    <input :class="$v.form.phone.$error ? 'is-invalid' : '' " type="text" placeholder="Phone*"
           v-model.trim="form.phone">
    <input :class="$v.form.email.$error ? 'is-invalid' : '' " type="text" placeholder="Email*"
           v-model.trim="form.email">
    <button type="submit">Add User</button>
  </form>
</template>

<script>

import axios from 'axios';
import {mapMutations} from 'vuex';
import {validationMixin} from 'vuelidate';
import {required, minLength, email} from 'vuelidate/lib/validators'

export default {

  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
      }
    }
  },
  validations: {
    form: {
      name: {required, minLength: minLength(3)},
      phone: {required},
      email: {required, email},
    }
  },

  methods: {
    ...mapMutations(['createUser']),
    submit() {
      this.$v.form.$touch()
      {
        if (this.$v.form.$error) {
          console.log("Error")
        } else {
          axios.post('https://5f59fc01b121580016cae0c5.mockapi.io/users', {
            name: this.form.name,
            phone: this.form.phone,
            email: this.form.email,
            id: Date.now()
          })
        }
      }
    },
  },
}

</script>

<style scoped>

input {
  display: block;
  width: 100%;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 10px;
}

.is-invalid {
  border: 1px solid red;
}
</style>