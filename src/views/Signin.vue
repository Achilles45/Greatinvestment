<template>
  <div class="signup">
      <!-- <Navbar /> -->
      <div class="form__wrapper">
         <div class="text">
             <!-- <div class="logo pb-4">
               <router-link to="/" class="logo"><img src="../assets/images/logo.png" class="logo-img" alt=""></router-link>
               <hr>
           </div> -->
              <h3>Welcome Back!</h3>
          <p>Signin to continue</p>
         </div>
          <form @submit.prevent="login()">
             <div class="form-group">
                 <label for="">Email Address</label>
                 <input type="email" class="form-control" placeholder="example@gmail.com" v-model="email">
             </div>
              <div class="form-group">
                 <label for="">Password</label>
                 <input type="password" class="form-control" placeholder="Your password" v-model="password">
             </div>
             <div v-if="err" class="alert alert-danger">
                 {{ err }}
             </div>
              <button type="submit" class="account__btn">Sign In</button>
              <div class="bottom__text text-center">
                  <p>Yet to have an account? <router-link to="/signup" class="login_link">Create Account</router-link></p>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue';
import firebase from 'firebase';
export default {
data(){
    return{
        email:null,
        password: null,
        err:null
    }
},
methods:{
    login(){
        //Check if the form has been filled out
        if(!this.email || !this.password){
            this.err = 'Please provide your credentials'
        }else{
            //Sign in the user to his/her dahboard
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((cred) =>{
                   this.$router.push({name: 'dashboard'})
                   console.log('Successful')
               }).catch(err =>{
                   this.err = 'Your credentials did not match. Please try again'
               })
        }
    }
}
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.signup{
    background: $primary-color;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .form__wrapper{
        background: #fff;
        max-width: 550px;
        margin:  3rem 2rem;
        padding: 3rem 2rem;
        border-radius: 4px;
        .text{
            padding-bottom: 1rem;
            h3{
                font-weight: bold;
            }
            p{
                color: #627081;
                font-size: .9rem;
            }
        }
        form{
            label{
                color: #627081;
                font-weight: bold;
                font-size: .8rem;
            }
            input, select{
                height: 3rem;
                box-shadow: none;
                &::placeholder{
                    font-size: .9rem;
                }
            }
            small{
                color: #627081;
                font-weight: bold;
                padding: .5rem 0;
                opacity: .8;
            }
            .account__btn{
                background: $primary-color;
                border: none;
                height: 3.2rem;
                border-radius: 3px;
                color:#fff;
                width: 100%;
                font-size: .9rem;
            }
            .bottom__text{
                padding-top: 1rem;
                p{
                    color: #627081;
                    font-size: .9rem;
                    font-weight: 400;
                    opacity: .8;
                }
               a{
                   color: $primary-color;
                   font-weight: bolder;
               }
            }
        }
    }
}
</style>