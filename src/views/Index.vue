<template>
  <div class="home">
    <Navbar />
    <Banner />
    <Intro />
    <Process />
    <Pricing />
    <AppBanner />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Intro from '@/components/Intro.vue'
import Process from '@/components/Process.vue'
import Pricing from '@/components/Pricing.vue'
import AppBanner from '@/components/AppBanner.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Navbar,
    Banner,
    Intro,
    Process,
    Pricing,
    AppBanner,
    Footer
  }
}
</script>
