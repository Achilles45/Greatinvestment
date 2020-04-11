<template>
  <div class="signup">
      <!-- <Navbar /> -->
      <div class="form__wrapper">
         <div class="text">
              <div class="logo pb-4">
               <router-link to="/" class="logo"><img src="../assets/images/logo.png" class="logo-img" alt=""></router-link>
               <hr>
           </div>
              <h3>Create a free Account</h3>
          <p>It's very simple and fast to complete</p>
         </div>
          <form @submit.prevent="register()">
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                           <label for="">First Name *</label>
                          <input type="text" class="form-control" placeholder="First Name" v-model="first_name">
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                           <label for="">Last Name *</label>
                          <input type="text" class="form-control" placeholder="Last Name" v-model="last_name">
                      </div>
                  </div>
              </div>
                <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                           <label for="">Email Address *</label>
                          <input type="email" class="form-control" placeholder="example@gmail.com" v-model="email">
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                           <label for="">Phone Number *</label>
                          <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone">
                      </div>
                  </div>
              </div>
              <div class="form-group">
                  <label for="">Select your investment plan *</label>
                  <select class="form-control" id="inlineFormCustomSelect" v-model="plan">
                             <option selected>Select Investment Plan</option>
                            <option value="30,000">&#8358;30,000 to &#8358;45,000</option>
                            <option value="40,000">&#8358;40,000 to &#8358;60,000</option>
                            <option value="50,000">&#8358;50,000 to &#8358;75,000</option>
                            <option value="60,000">&#8358;60,000 to &#8358;90,000</option>
                            <option value="70,000">&#8358;70,000 to &#8358;105,000</option>
                            <option value="80,000">&#8358;80,000 to &#8358;120,000</option>
                            <option value="90,000">&#8358;90,000 to &#8358;135,000</option>
                            <option value="100,000">&#8358;100,000 to &#8358;150,000</option>
                            <option value="120,000">&#8358;120,000 to &#8358;180,000</option>
                            <option value="200,000">&#8358;200,000 to &#8358;600,000</option>
                            <option value="300,000">&#8358;300,000 to &#8358;900,000</option>
                            <option value="4000,000">&#8358;400,000 to &#8358;1,200,000</option>
                            <option value="5000,000">&#8358;5000,000 to &#8358;1,500,000</option>
                         </select>
              </div>
              <div class="row">
                  <div class="col-md-6">
                       <label for="">Password</label>
                      <input type="password" class="form-control" placeholder="Password" v-model="password">
                  </div>
                   <div class="col-md-6">
                       <label for="">Repeat Password</label>
                      <input type="password" class="form-control" placeholder="Repeat Password" v-model="repeat_password">
                  </div>
              </div><br>
              <small>By clicking the create account button, you agree to our terms and conditions</small><br><br>
              <div v-if="err" class="alert alert-danger">
                  {{ err }}
              </div>
              <button type="submit" class="account__btn">Create Account</button>
              <div class="bottom__text text-center">
                  <p>Already have an account? <router-link to="/signin" class="login_link">Login</router-link></p>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue';
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
data(){
    return{
        first_name:null,
        last_name: null,
        email:null,
        phone:null,
        plan:null,
        password:null,
        repeat_password:null,
        err:null
    }
},
methods:{
    register(){
        //Check if the form has been filled
        if(!this.first_name || !this.last_name || !this.email || !this.phone || !this.plan || !this.password || !this.repeat_password){
            this.err = 'Error. Please fill out the form first'
        }else if(this.password != this.repeat_password){
            this.err = 'Error. Your passwords do not match'
        }else{
            //Sign up the user and create a record for the user in firestore
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred=>{
             db.collection('users').add({
                first_name:this.first_name,
                last_name:this.last_name,
                phone:this.phone,
                email:this.email,
                plan:this.plan,
                user_id:cred.user.uid
             })
              this.$router.push({name: 'dashboard'})
              console.log('Registration was successful')
            })
            .catch(err=>{
                this.err = err.message
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
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .form__wrapper{
        background: #fff;
        max-width: 550px;
        margin:  3rem 1rem;
        padding: 3rem 2rem;
        border-radius: 4px;
        .text{
            padding-bottom: 2rem;
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