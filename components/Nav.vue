<template>
  <nav id="main-navbar" class="nav" rel="header">
    <button
      role="button"
      aria-label="Abrir"
      class="nav__hamburguer"
      :class="{ 'nav__hamburguer--is-open': openMenu }"
      @click="openMenu = !openMenu"
    >
      <span class="nav__hamburguer-icon" :class="{ 'nav__hamburguer-icon--is-open': openMenu }"></span>
      <span class="nav__hamburguer-icon" :class="{ 'nav__hamburguer-icon--is-open': openMenu }"></span>
      <span class="nav__hamburguer-icon" :class="{ 'nav__hamburguer-icon--is-open': openMenu }"></span>
    </button>
    <div class="nav__container" :class="{ 'nav__container--is-open': openMenu }">
      <div class="nav__link-list">
        <div class="nav__link-container" @click="closeMenuMobile">
          <router-link class="nav__link" to="/superpower" >Mis superpoderes</router-link>
        </div>
        <div class="nav__link-container" @click="closeMenuMobile">
          <router-link class="nav__link" to="/portfolio">Portfolio</router-link>
        </div>
        <div class="nav__link-container" @click="closeMenuMobile">
          <router-link class="nav__link" to="/awards">Premios & Publicaciones</router-link>
        </div>
        <div class="nav__link-container" @click="closeMenuMobile">
          <router-link class="nav__link" to="/contact">Contáctame</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      openMenu: false,
    }
  },
  methods: {
    closeMenuMobile(){
      this.openMenu = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';

.nav {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: $z-index4;

  @media (min-width: 992px) {
    position: unset;
    width: 57rem;
    margin: auto;
    line-height: 4.5rem;
  }

  &__container {
    display: none;
    left: -100%;
    transition: opacity 0.5s, left 1s;
    opacity: 0;

    @media (min-width: 992px) {
      display: flex;
      opacity: 1;
    }

    &--is-open {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      border: 4px solid $black;
      opacity: 1;
      background-color: $white;
      z-index: $z-index4;
    }
  }

  &__link-list {
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  &__link-container {
    position: relative;
    margin: 2rem auto;
    padding: 0.5rem;
    border: 4px solid $black;
    -webkit-box-shadow: -0.75rem 0.6875rem 0 0 rgba(207, 52, 118, 1);
    -moz-box-shadow: -0.75rem 0.6875rem 0 0 rgba(207, 52, 118, 1);
    box-shadow: -0.75rem 0.6875rem 0 0 rgba(207, 52, 118, 1);
    color: $black;
    font-family: 'Francois One', sans-serif;
    font-size: 1.8rem;
    font-weight: bold;

    @media (min-width: 992px) {
      margin: auto;
      padding: 0rem 1rem 0.5rem 1rem;
      box-shadow: none;
      background-color: $black;
    }

    &:hover {
      &:before {
        width: calc(100% - 1.5rem);
        background-color: $pink;
      }
    }

    &:before {
      @media (min-width: 992px) {
        transition: 0.3s;
        content: '';
        width: 3rem;
        height: 4px;
        position: absolute;
        top: 3.7rem;
        left: 1rem;
        background-color: $white;
      }
    }
  }

  &__link {
    color: $black;

    @media (min-width:992px){
      color: $white;
    }

    &:visited{
      color: $black;

      @media (min-width:992px){
        color: $white;
      }
    }
  }

  &__hamburguer {
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    border: none;
    border-radius: 50%;
    background-color: $black;
    appearance: none;
    z-index: $z-index5;

    @media (min-width: 992px) {
      display: none;
    }

    &--is-open {
      transform: rotate(50deg);
    }
  }

  &__hamburguer-icon {
    width: 2.4rem;
    height: 0.4rem;
    position: absolute;
    top: 3rem;
    left: 1rem;
    transition: 0.3s;
    background-color: $white;

    &--is-open {
      transform: rotate(90deg);
      top: 2rem;

      &:nth-last-child(2) {
        transform: rotate(180deg);
      }

      &:last-of-type {
        opacity: 0;
      }
    }

    &:nth-last-child(2) {
      top: 2rem;
    }

    &:last-of-type {
      top: 1rem;
    }
  }
}

.nuxt-link-exact-active:before {
  width: calc(100% - 2rem);
  background-color: $pink;
}
</style>
