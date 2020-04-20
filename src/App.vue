<template>
  <div id="app">
    <transition name="animate" enter-active-class="animated flipInY" leave-active-class="animated bounceOut">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
@import './assets/styles/_reset';
@import './assets/styles/_colors';
</style>
