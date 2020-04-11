<template>
  <div class="appbanner">
      <div class="container">
         <div class="row">
             <div class="col-md-1"></div>
             <div class="col-md-10 content">
                 <h2>Create a better future today</h2>
                 <p>Make safe, secured and high returns investment from any device</p>
                         <div class="flex__holder text-center pt-4">
                     <div class="account__link">
                         <router-link to="/signup" class="register__btn app__btn">Create a free Account</router-link>
                     </div>
                     <div class="app__link d-none">
                         <router-link to="/" class="app__btn">Andriod App Coming...</router-link>
                     </div>
                 </div>
             </div>
             <div class="col-md-"></div>
         </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.appbanner{
    padding: 5rem 0;
   .content{
       background: #3D4677;
       color: #fff;
       text-align: center;
       padding: 4.5rem 2rem;
       border-radius: 6px;
       h2{
           font-weight: 700;
           font-size: 32px;
           padding-bottom: 1rem;
           text-transform: capitalize;
       }
       p{
           font-size: .95rem;
           opacity: .8;
           font-weight: 400;
       }
       .flex__holder{
           width: 50%;
           margin: 0rem auto;
       .register__btn, .app__btn{
           text-decoration: none;
           color: $primary-color;
           background: #fff;
           border-radius: 3px;
           padding: 1rem 1.5rem;
           font-size: .9rem;
           font-weight: 400;
       }
       .app__btn{
           background: transparent !important;
           border: 1px solid #fff !important;
           color: #fff !important;
       }
       }
   }
}

@media only screen and (max-width: 600px){
.appbanner{
    padding: 5rem 1.5rem;
    .flex__holder{
        width: 100% !important;
    }
}
}
</style>