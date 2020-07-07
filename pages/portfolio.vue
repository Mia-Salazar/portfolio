<template>
  <section class="portfolio box">
    <h2>Portfolio</h2>
    <p class="portfolio__text">
      A un superhéroe se le conoce más por sus acciones que por sus palabras, más por sus <a href="https://es.reactjs.org/" class="portfolio__link">Reactciones</a> que por sus disfraces y por sus <a href="https://vuejs.org/" class="portfolio__link">Vuenas</a> intenciones más que por sus errores.
    </p>
    <p class="portfolio__text">Escoge lo que quieres bichear.</p>
    <div class="portfolio__filter-container">
      <button class="portfolio__button" :class="{ 'portfolio__button--active': allFilterButton }" @click="filterAll">Ver todo</button>
      <button class="portfolio__button" :class="{ 'portfolio__button--active': vueFilterButton }" @click="filterVue" >Vue/Nuxt</button>
      <button class="portfolio__button" :class="{ 'portfolio__button--active': reactFilterButton }" @click="filterReact" >React</button>
    </div>
    <div class="portfolio__list">
      <PortfolioItem v-for="(portfolio, index) in portfolios" :key="index" :portfolio="portfolio" />
    </div>
  </section>
</template>

<script>
import PortfolioItem from '@/components/PortfolioItem.vue'

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem,
  },
  data() {
    return {
      vueFilterButton: false,
      allFilterButton: true,
      reactFilterButton: false,
      vueList: [],
      reactList: [],
      allList: [],
      portfolios: [
        { link: 'http://teresa-salazar.surge.sh/', tech:'Reactjs, Javascript, CSS3, HTML5, BEM, SASS, Grid, Flexbox, i18n, Classnames, librerías, Formspree, lazy load', image: 'teresa.png', clicked: false, all: true, visible:true, vue: false, react: true },
        { link: 'http://mia-search-movies-project.surge.sh/', tech:'Reactjs, Javascript, Bulma, CSS3, HTML5, CSS3, Flexbox', image: 'movies.png', clicked: false, all: true, visible:true, vue: false, react: true },
        { link: 'https://www.happets.com/', tech:'JavaScript, jQuery, SASS, HTML5, CSS3, Flexbox, Grid, Bootstrap 4', image: 'happets.png', clicked: false, all: true, visible:true, vue: false, react: false },
        { link: 'https://portal.happets.com/', tech:'React, React hooks, Gatsby, storybook, testing, i18n, JavaScript, SASS, HTML5, CSS3, Flexbox, Grid', image: 'happets-2.png', clicked: false, all: true, visible:true, vue: false, react: true },
        { link: 'http://mia-tic-tac-toe.surge.sh/', tech:'React Hooks, styled components, i18n, proptypes, classnames, HTML5, CSS3, SASS', image: 'game.png', clicked: false, all: true, visible:true, vue: false, react: true },
        { link: 'https://www.myfleeet.com/', tech:'Vuejs, Nuxtjs, SASS, jQuery, HTML5, CSS3, Flexbox, metodología BEM, Pug, vue-i18n', image: 'fleeet-landing.png', clicked: false, all: true, visible:true, vue: true, react: false },
        { link: 'https://www.myfleeet.com/client/catalog', tech:'Vuejs, Nuxtjs, SASS, jQuery,HTML5, CSS3, Flexbox,metodología BEM, Pug, vue-i18n', image: 'fleeet-catalog.png', clicked: false, all: true, visible:true, vue: true, react: false },
        { link: 'https://acidtango.com/case-studies/happets', tech:'Tailwind, SASS, Vuejs, Nuxtjs,HTML5, CSS3, Flexbox', image: 'acid.png', clicked: false, all: true, visible:true, vue: true, react: false },
        { link: 'http://xcjgames.com/', tech:'jQuery, Bootstrap 4, HTML5, CSS3, Flexbox, diseño', image: 'xcj.png', clicked: false, all: true, visible:true, vue: false, react: false },
        // { link: 'https://codepen.io/MiaSalazar/full/GxBgRe', alt:'Página de Mia Salazar', tech:'SASS, jQuery,Bootstrap 4, HTML5, CSS3, Flexbox', image: 'old-mia.png', clicked: false, all: true, visible:true, vue: false, react: false }
      ],
    }
  },
  methods: {
    filterVue() {
      this.vueList = this.portfolios.map(function(element){
        if(element.vue === true) {
          element.visible = true;
        } else element.visible = false;
      });
      this.vueFilterButton = true;
      this.reactFilterButton = false;
      this.allFilterButton = false;
    },
    filterReact() {
      this.reactList = this.portfolios.map(function(element){
        if(element.react === true) {
          element.visible = true;
        } else element.visible = false;
      });
      this.vueFilterButton = false;
      this.reactFilterButton = true;
      this.allFilterButton = false;
    },
    filterAll() {
      this.allList = this.portfolios.map(function(element){
        if(element.all === true) {
          element.visible = true;
        } else element.visible = false;
      });
      this.vueFilterButton = false;
      this.reactFilterButton = false;
      this.allFilterButton = true;
    },
  }
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';
.portfolio {
  &__button{
    width: 10rem;
    background-color: $white;
    margin: 0.5rem auto;
    padding: 0.9rem 0;
    color: $black;
    font-weight: bold;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    &:first-of-type {
      @media (min-width: 768px){
        margin-left: 0;
      }
    }

    &:hover, &--active {
      background-color: $black;
      color: $white;
    }

    @media (min-width: 768px){
      width: 6.5rem;
      margin: 0.5rem;
      padding: 0.65rem 0;
    }
  }

  &__filter-container {
    display: flex;
    flex-direction: column;
    margin: 1.5rem auto 0 auto;

    @media (min-width: 768px){
      flex-direction: row;
      margin: 2rem auto 1.25rem auto;
    }
  }

  &__link {
    color:$black;

    &:hover{
      background-color: $pink;
      color: $white;
    }
  }

  &__list {
    width: 100%;
    
    @media (min-width: 768px){
      display: flex;
      flex-wrap: wrap;
      margin: 0;
    }
  }
}
</style>