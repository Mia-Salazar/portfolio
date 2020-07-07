<template>
  <div id="app" class="main">
    <Header />
    <Nav />
    <main class="main__wrapper">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Default',
  components: {
    Header,
    Nav,
    Footer,
  },
}
</script>

<style lang="scss">
@import '@/assets/stylesheets/_application.scss';
a {
  text-decoration: none;
}

@font-face { 
  font-family: 'Francois One'; src: url('~@/assets/fonts/FrancoisOne-Regular.ttf'); 
} 

@font-face { 
  font-family: 'Merriweather'; src: url('~@/assets/fonts/Merriweather-Regular.ttf'); 
} 

* {
  box-sizing: border-box;
}

@keyframes shaking {
  0% {
    transform: rotate(-10deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}

@font-face {
  font-family: 'Iconomoon';
  font-style: normal;
  src: url('/font/iconomoon/fonts/iconomoon.woff') format('woff');
}

.main {
  position: relative;
  font-family: 'Merriweather', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-attachment: fixed;
  background-position: left 10%;
  background-color: $white;
  border-left: 10px solid $black;
  border-right: 10px solid $black;
  background-image: url('~@/assets/images/dot.png');
  z-index: $z-index3;
  font-display: auto;

  @media (min-width: 768px) {
    border-left: 1.125rem solid $black;
    border-right: 1.125rem solid $black;
  }

  &:after {
    content: '';
    position: fixed;
    background: $black;
    left: 0;
    right: 0;
    height: 0.8rem;
    z-index: $z-index3;

    @media (min-width: 768px) {
      height: 1.25rem;
    }
  }

  &:before {
    content: '';
    position: fixed;
    background: $black;
    left: 0;
    right: 0;
    height: 0.8rem;
    z-index: $z-index3;

    @media (min-width: 768px) {
      height: 1.25rem;
    }
  }

  &__wrapper {
    margin: 2rem auto;

    @media (min-width: 768px) {
      margin: 4rem auto 2rem auto;
    }
  }

  .box {
    position: relative;
    width: 85%;
    margin: 2rem auto;
    padding: 1rem;
    background-color: $white;
    border: 6px solid $black;

    &:before {
      content: '';
      display: block;
      position: absolute;
      transform: rotate(40deg);
      top: -2rem;
      left: 0;
      height: 7rem;
      width: 2rem;
      background-color: $pink;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      transform: rotate(40deg);
      bottom: -2rem;
      right: 0;
      height: 7rem;
      width: 2rem;
      background-color: $pink;
    }

    @media (min-width: 768px) {
      width: 80%;
      padding: 2rem;
      margin: 4rem auto 2rem auto;
    }
    @media (min-width: 1200px){
      max-width: 57rem;
    }
  }

  h2 {
    transform: rotate(-7deg);
    width: fit-content;
    padding: 0 0.75rem;
    background-color: $black;
    color: $white;
    font-size: 1.875rem;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 1.125rem 0;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }
}
</style>
