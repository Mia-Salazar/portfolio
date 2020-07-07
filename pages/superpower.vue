<template>
  <section class="superpower box">
    <h2>Superpoderes</h2>
    <p
      class="superpower__text"
    >Entre mi larga lista de superpoderes están estos lenguajes, tecnologías y skills:</p>

    <div class="superpower__wrapper">
      <ul class="superpower__list">
        <li class="superpower__item" :class="{ 'superpower__item--is-active': customClass }">
          <h3 class="superpower__item-title">HTML5 & CSS3</h3>
          <div class="superpower__item-bar superpower__item-bar--html"></div>
        </li>
        <li class="superpower__item" :class="{ 'superpower__item--is-active': customClass }">
          <h3 class="superpower__item-title">SASS & LESS</h3>
          <div class="superpower__item-bar superpower__item-bar--sass"></div>
        </li>
        <li class="superpower__item" :class="{ 'superpower__item--is-active': customClass }">
          <h3 class="superpower__item-title">Vue.js, React</h3>
          <div class="superpower__item-bar superpower__item-bar--vue"></div>
        </li>
        <li class="superpower__item" :class="{ 'superpower__item--is-active': customClass }">
          <h3 class="superpower__item-title">Responsive Web Design</h3>
          <div class="superpower__item-bar superpower__item-bar--rwd"></div>
        </li>
        <li class="superpower__item" :class="{ 'superpower__item--is-active': customClass }">
          <h3 class="superpower__item-title">Github</h3>
          <div class="superpower__item-bar superpower__item-bar--git"></div>
        </li>
        <li class="superpower__item" :class="{ 'superpower__item--is-active': customClass }">
          <h3 class="superpower__item-title">Javascript & jQuery</h3>
          <div class="superpower__item-bar superpower__item-bar--js"></div>
        </li>
        <li class="superpower__item" :class="{ 'superpower__item--is-active': customClass }">
          <h3 class="superpower__item-title">Bootstrap 4 & Tailwind</h3>
          <div class="superpower__item-bar superpower__item-bar--bootstrap"></div>
        </li>
        <li class="superpower__item" :class="{ 'superpower__item--is-active': customClass }">
          <h3 class="superpower__item-title">Photoshop, Illustrator, inDesign</h3>
          <div class="superpower__item-bar superpower__item-bar--photoshop"></div>
        </li>
        <li class="superpower__item" :class="{ 'superpower__item--is-active': customClass }">
          <h3 class="superpower__item-title">Sketch</h3>
          <div class="superpower__item-bar superpower__item-bar--sketch"></div>
        </li>
      </ul>
      <figure class="superpower__img-container">
        <img class="superpower__img" alt="Decoración tipo comic" src="@/assets/images/gun.svg" />
      </figure>
    </div>
    <p
      class="superpower__text"
    >En mis valores como superhéroe también puedo destacar la Metodología BEM, la Metodología Ágil, el Mobile First y la adoración a Flexbox y a CSS Grid Layout.</p>
    <h2 class="superpower__text">Mi kriptonita</h2>
    <p class="superpower__text">Como todo buen superhéroe, también tengo algunas debilidades.</p>
    <div class="superpower__wrapper">
      <ul class="superpower__weakness-list">
        <li class="superpower__weakness superpower__weakness--choco">Las galletas.</li>
        <li class="superpower__weakness superpower__weakness--sofa">Los sofás.</li>
        <li class="superpower__weakness superpower__weakness--summer">El verano.</li>
        <li class="superpower__weakness superpower__weakness--tay">Taylor Swift.</li>
        <li class="superpower__weakness superpower__weakness-propaganda">
          Corea.
          <span v-click-outside="hide" class="superpower__interrogation" @click="openInfo = !openInfo">what?</span>
          <span
            class="superpower__weakness-info"
            :class="{ 'superpower__weakness-info--is-open': openInfo }"
          >
            ¿Sabías que soy una de las mayores expertas en propaganda en Corea del Sur y Corea del Norte?
            <router-link class="superpower__link" to="/awards">Cuéntame más</router-link>
          </span>
        </li>
      </ul>
      <figure class="superpower__laugh-container">
        <img class="superpower__laugh" alt="Decoración tipo comic" src="@/assets/images/bang.svg" />
      </figure>
    </div>
  </section>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: 'About',
  directives: {
    ClickOutside
  },
  data() {
    return {
      openInfo: false,
      customClass: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.customClass = window.scrollY > 700
    },
    hide () {
      this.openInfo = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';

.superpower {
  &__item {

    &--is-active {
      .superpower__item-bar--html:after {
        content: '99%';
        width: 97%;
      }
      
      .superpower__item-bar--sass:after {
        content: '85%';
        width: 83%;
      }

      .superpower__item-bar--vue:after {
        content: '50%';
        width: 49%;
      }

      .superpower__item-bar--rwd:after {
        content: '99%';
        width: 97%;
      }

      .superpower__item-bar--git:after {
        content: '75%';
        width: 74%;
      }

      .superpower__item-bar--js:after {
        content: '50%';
        width: 50%;
      }

      .superpower__item-bar--bootstrap:after {
        content: '80%';
        width: 80%;
      }

      .superpower__item-bar--photoshop:after {
        content: '99%';
        width: 97%;
      }
      .superpower__item-bar--sketch:after {
        content: '85%';
        width: 84%;
      }
    }
  }

  &__list {
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }
  }

  &__weakness {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 1.25rem;
    font-size: 1.5rem;
    line-height: 1.5;

    &:before {
      position: absolute;
      top: 0.75rem;
      left: -1.25rem;
      display: block;
      content: '';
      height: 0.75rem;
      width: 0.75rem;
      background-color: $pink;
    }
  }

  &__weakness-info {
    display: none;

    &--is-open {
      display: block;
      position: absolute;
      top: 3rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 3px solid $black;
      background-color: $white;
      -webkit-box-shadow: -0.4rem 0.4rem 0 0 rgba(207, 52, 118, 1);
      -moz-box-shadow: -0.4rem 0.4rem 0 0 rgba(207, 52, 118, 1);
      box-shadow: -0.4rem 0.4rem 0 0 rgba(207, 52, 118, 1);
      z-index: $z-index1;

      &:before {
        content: '';
        position: absolute;
        top: -1.5rem;
        left: 5.625rem;
        border-left: 0.75rem solid transparent;
        border-right: 0.75rem solid transparent;
        border-bottom: 1.5rem solid $black;
      }
    }
  }

  &__interrogation {
    position: relative;
    margin-left: 0.25rem;
    padding: 0.25rem 0.5rem 0.15rem 0.5rem;
    color: $white;
    background-color: $black;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
  }

  &__item-bar {
    width: 100%;
    height: 2rem;
    position: relative;
    border: 3px solid $black;
    border-radius: 25px;

    @media (min-width: 768px) {
      height: 2.5rem;
    }

    &:after {
      transition: 0.4s;
      content: '';
      width: 1px;
      height: 1.25rem;
      display: flex;
      position: absolute;
      justify-content: flex-end;
      align-items: center;
      top: 3px;
      left: 4px;
      padding-right: 0.75rem;
      padding-bottom: 4px;
      color: $white;
      font-weight: bold;
      background-color: $pink;
      border-radius: 1.563rem;

      @media (min-width: 768px) {
        height: 1.75rem;
      }
    }
  }

  &__wrapper {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  }

  &__img-container {
    display: none;

    @media (min-width: 768px) {
      width: 50%;
      display: block;
    }
  }

  &__img {
    width: 80%;
    display: flex;
    margin-left: auto;
  }

  &__laugh-container {
    display: none;

    @media (min-width: 768px) {
      width: 60%;
      display: flex;
    }
  }

  &__laugh {
    width: 100%;
  }

  &__weakness-list {
    @media (min-width: 768px) {
      width: 40%;
    }
  }

  &__link {
    color: $pink;
  }
}
</style>
