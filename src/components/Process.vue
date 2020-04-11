<template>
  <div class="process" id="process">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 text-center">
                  <h3>HOW WE MAKE IT POSSIBLE</h3>
              </div>
               <div class="col-md-3"></div>
          </div>
          <div class="row">
              <div class="col-md-7">
                  <img src="../assets/images/img1.jpg" class="img-fluid" alt="">
              </div>
              <div class="col-md-5 pt-5">
                  <div class="content d-flex">
                      <div class="icons">
                          <i class="fa fa-cubes"></i>
                      </div>
                      <div class="text">
                          <h4>Crowdfunding</h4>
                          <p>The company pulls resources from people that subscribe to different investment plans and our fund managers invest same in crypto trading, import and export of agro products and others.</p>
                      </div>
                  </div><br>
                  <div class="content d-flex">
                      <div class="icons">
                          <i class="fa fa-clone"></i>
                      </div>
                      <div class="text">
                          <h4>Maturity & Payout</h4>
                          <p>Our systems is able to track every investor and upon investment maturity, your capital and 60% returns is paid to you. No hidden charges, no story.</p>
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
.process{
    padding: 7rem 0;
    h3{
        font-weight: bolder;
        color: $primary-color;
    }
    .content{
        .icons{
            padding-right: 2rem;
            font-size: 2rem;
            color: $primary-color;
        }
        .text{
            h4{
                font-weight: bold;
                padding-bottom: .5rem;
                color:$primary-color;
            }
            p{
                color: #51556E;
                font-size: .95rem;
                opacity: .8;
                line-height: 1.8;
            }
        }
    }
}
</style>