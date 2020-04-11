<template>
   <div class="navbar__wrapper" id="navbar">
    <div class="navbar__content container d-flex justify-content-between align-items-center">
        <div class="navbar__brand pt-1">
            <router-link to="/" class="logo"><h3><i class="fa fa-cubes"></i>&nbsp; Invest</h3></router-link>
        </div>
        <ul class="d-flex justify-content-between pt-3 nav__links">
            <li><a href="#banner" class="link">Home</a></li>
            <li><a href="#features" class="link">Features</a></li>
            <li><a href="#process" class="link">Process</a></li>
            <li><a href="#pricing" class="link">Pricing</a></li>
            <li><a href="#footer" class="link">Contact</a></li>
            <li v-if="!user"><router-link to="/signup" class="link signup">Sign Up</router-link></li>
            <li v-if="!user"><router-link to="/signin" class="link signin">Sign In</router-link></li>
            <li v-if="user" @click="logOut()" class="logout">Logout</li>
        </ul>
         <div @click="showNav()" class="navbar__toggler">
                <i class="fa fa-bars"></i>
            </div>
    </div>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            user:null
        }
    },
    mounted(){
        this.fixNav()
    },
    created(){
        let user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.user = user
            }else{
                this.user = null
            }
        })
    },
    methods:{
         logOut:function(){
           firebase.auth().signOut()
           .then(()=>{
               this.$router.push({name: 'Signin'})
           })
        },
        showNav:function(){
            const navbarToggler = document.querySelector('.navbar__toggler')
            const nav = document.querySelector('.nav__links');
            const navItems = document.querySelectorAll('.link')
            nav.classList.toggle('show__nav');
        },
        fixNav:function(){
             const nav = document.querySelector('.navbar__wrapper');
            window.onscroll = function(){
                if (window.pageYOffset > 120) {
                    nav.classList.add('fix__nav');
                }else{
                    nav.classList.remove('fix__nav');
                }
            }
        },
 },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.navbar__wrapper{
    padding: .5rem 0;
    // background: red;
    .logo-img{
        max-width: 240px;
        height:auto;
    }
    .logo{
        text-decoration: none;
        h3{
            font-weight: 900;
            color: $primary-color;
        }
    }
    ul li .link{
        color: $primary-color;
        text-transform: capitalize;
        margin: 0 1rem;
        font-weight: bold;
        font-size: .9rem;
        opacity: .6;
        text-decoration: none;
    }
    .signin{
        background: transparent;
        padding: .8rem 2rem;
        border-radius: 3px;
        border: 1px solid $primary-color;
    }
    .logout{
        background: transparent;
        // padding: .8rem 2rem;
        opacity: .7;
        margin: 0 1rem;
        font-weight: bold;
        border-radius: 3px;
        // border: 1px solid $primary-color;
        color: $primary-color;
        cursor: pointer;
    }
    .navbar__toggler{
        display: none;
    }
    .fa-bars{
        color: $primary-color;
    }
}

//Fix navigation
.fix__nav{
    position: fixed;
    top: 0; 
    width: 100%;
    z-index: 100;
    background: #fff;
    padding: .8rem 0;
    transition: all ease-in-out .5s;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.17);
}

//Media Queries
@media only screen and (max-width: 990px){
     .logo-link{
         font-size: 1.2rem;
         padding-top: .4rem;
     }
    .nav__links{
        background: $primary-color;
        flex-direction: column;
        position: absolute;
        left:0;
        top: 0;
        z-index: 100;
        width: 70%;
        height:100% !important;
        padding: 3rem 0;
        display: none !important;
        line-height: 5;
        text-align: center;
        li{
            margin-left: 0 !important; 
        }
        .link{
            color: #fff !important;
        }
        .signin{
            border: 1px solid #fff !important;
        }
        // height: calc(100vh - 20%);
    }
    .show__nav{
        display: block !important;
        transition: all ease-in-out .5s;
    }
    .navbar__toggler{
        display: block !important;
        padding-right: 2rem;
        font-size: 1.4rem;
        cursor: pointer;
    }
}
</style>