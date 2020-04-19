<template>
  <div class="pricing" id="pricing">
      <div class="container">
          <div class="row">
              <div class="col-12 text-center text">
                  <h2>Invetment Plans & Pricing</h2>
                  <p>You don't need a lot of money to begin</p>
              </div>
          </div>
          <div class="card__wrapper">
              <div class="card__content card1">
                 <div class="header text-center">
                     <h4>INITIAL INVESTMENT</h4>
                 </div>
                 <div class="body">
                    <h6><i class="fa fa-check-square"></i> &#8358;20,000 to &#8358;32,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"> </i> &#8358;30,000 to &#8358;48,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"> </i> &#8358;40,000 to &#8358;64,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"> </i> &#8358;50,000 to &#8358;80,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"> </i> &#8358;60,000 to &#8358;96,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"> </i> &#8358;70,000 to &#8358;112,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"> </i> &#8358;80,000 to &#8358;128,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"> </i> &#8358;90,000 to &#8358;144,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"> </i> &#8358;100,000 to &#8358;160,000</h6>
                    <small>Kindly note your investment cycle starts counting only when we have confirmed your payment and it takes 4 days to cashout from this plan. Terms and conditions apply</small><br>
                    <div class="button__holder pt-5">
                         <router-link to="/signup" class="card__btn">Choose Plan</router-link>
                    </div>
                 </div>
              </div>
               <!-- <div class="card__content card2">
                 <div class="header text-center">
                     <h4>STANDARD</h4>
                     <h6>&#8358; 100,000</h6>
                 </div>
                 <div class="body">
                    <h6><i class="fa fa-check-square"></i> &nbsp;&nbsp;&nbsp;&nbsp; 24/7 Customer Support</h6>
                    <h6><i class="fa fa-check-square"></i> &nbsp;&nbsp;&nbsp;&nbsp; 25% Return on Investment</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"></i> &nbsp;&nbsp;&nbsp;&nbsp; 15 Days Investment Cycle</h6>
                    <small>Kindly note your investment cycle starts counting only when we have confirmed your payment. Terms and conditions apply</small><br>
                    <div class="button__holder pt-5">
                         <router-link to="/signup" class="card__btn">Choose Plan</router-link>
                    </div>
                 </div>
              </div> -->
               <div class="card__content card3">
                 <div class="header text-center">
                     <h4>PROMO PACKAGE</h4>
                 </div>
                 <div class="body">
                      <h6><i class="fa fa-check-square"></i> &#8358;50,000 to &#8358;160,000</h6>
                    <h6><i class="fa fa-check-square"></i> &#8358;100,000 to &#8358;300,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"></i> &#8358;100,000 to &#8358;320,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"></i> &#8358;200,000 to &#8358;640,000</h6>
                    <h6 class="pb-2"><i class="fa fa-check-square"></i> &#8358;1,000,000 to &#8358;2,600,000</h6>
                    <small>We also have opportunities in US Dollars. Kindly contact admin for more information</small><br>
                    <small>Kindly note your investment cycle starts counting only when we have confirmed your payment nd you can cash out in 24 hours. Terms and conditions apply</small><br>
                  <div class="button__holder pt-5">
                         <router-link to="/signup" class="card__btn">Choose Plan</router-link>
                    </div>
                 </div>
              </div>
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
.pricing{
    padding: 7rem 0;
    background: #f8f9fc;
    .text{
        h2{
        font-weight: 900;
        color: #00093a;
        text-transform: capitalize;
    }
    p{
        color:#1f2441;
        opacity: .7;
        font-size: 1.1rem;
    }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 30px;
        margin-top: 1.5rem;
        padding: 0 0rem;
        .card__content{
            background: #fff;
            border-radius: 4px;
            .body{
                margin-top: 1rem;
                padding: 2rem;
                h6{
                    color: #2b2b2b;
                    font-weight: bold;
                    opacity: .7;
                    font-size: .9rem;
                    line-height: 2;
                }
                small{
                    color:#2b2b2b;
                    font-weight: bold;
                    opacity: .4;
                }
                .card__btn{
                    border: 1px solid $primary-color;
                    text-decoration: none;
                    border-radius: 4px;
                    padding: .7rem 1.2rem;
                    color: $primary-color;
                    font-weight: bold;
                    opacity: .8;
                    transition: all ease-in-out .5s;
                    &:hover{
                        background: $primary-color;
                        color: #fff;
                    }
                }
            }
        }
        .card1{
            .header{
                background: $primary-color;
                color: #fff;
                padding: 1rem 0;
                border-radius: 4px;
               h4{
                   font-weight: bold;
                   opacity: .8;
               }
               h6{
                   font-weight: bold;
               }
            }
        }
        .card2{
            .header{
                background: $primary-color;
                color: #fff;
                padding: 1rem 0;
                border-radius: 4px;
               h4{
                   font-weight: bold;
                   opacity: .8;
               }
               h6{
                   font-weight: bold;
               }
            }
        }
        .card3{
            .header{
                background: $primary-color;
                color: #fff;
                padding: 1rem 0;
                border-radius: 4px;
               h4{
                   font-weight: bold;
                   opacity: .8;
               }
               h6{
                   font-weight: bold;
               }
            }
        }
    }
}
</style>