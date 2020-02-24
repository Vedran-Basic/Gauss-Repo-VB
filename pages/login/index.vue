<template>
  <div class="login-card">
    <v-card class="mx-auto"
            style="max-width: 500px;">
      <v-toolbar color="black"
                 cards
                 dark
                 flat>
        <v-spacer></v-spacer>
        <v-card-title class="title font-weight-regular">Log in</v-card-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form ref="form"
              v-model="form"
              class="pa-4 pt-6">
        <v-text-field v-model="email"
                      :rules="[rules.email]"
                      filled
                      color="deep-purple"
                      label="Email address"
                      type="email"
                      ></v-text-field>
        <v-text-field v-model="password"
                      :rules="[rules.password, rules.length(8)]"
                      filled
                      color="deep-purple"
                      label="Password"
                      style="min-height: 96px"
                      type="password"></v-text-field>

      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="signUp">
          Sign up
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="!form"
               :loading="isLoading"
               class="white--text"
               color="deep-purple accent-4"
               depressed>Log in</v-btn>
      </v-card-actions>
      <v-dialog v-model="dialog"
                absolute
                max-width="400"
                persistent>
        <v-card>
          <v-card-title class="headline grey lighten-3">Legal</v-card-title>
          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>
<script>
  export default {
    layout: 'login',
    data() {
      return{
        dialog: false,
        email: undefined,
        form: false,
        isLoading: false,
        password: undefined,
        rules: {
          email: v => (v || '').match(/@/) || 'Please enter a valid email',
          length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
          password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) || 'Password must contain an upper case letter, a numeric character, and a special character',
          required: v => !!v || 'This field is required'
        }
      }
    },
    methods:{
      async signUp(){
        try{
          const response = axios.create({
            method: 'post',
            url: 'http://127.0.0.1:3333/api/auth/register',
            data:{
	            "email":"wega.baso2",
	            "password":"12345678"
            }
          });
          console.log({response})
        }
        catch(err){
          console.log(err)
          this.error=error
        }
      }
    }
  }
</script>
<style scoped>
  .login-card{
    align-self:center;
  }
</style>
