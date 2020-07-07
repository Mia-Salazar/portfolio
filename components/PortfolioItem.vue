<template>
  <article class="portfolio-item" :class="{ 'portfolio-item--visible': portfolio.visible }">
    <a class="portfolio-item__image-container" :href="`${portfolio.link}`"  :class="{ 'portfolio-item__image-container--active': portfolio.clicked }">
      <img class="portfolio-item__image" :src="(`images/${portfolio.image}`)" alt=""/>
      <figcaption class="portfolio-item__tech">{{portfolio.tech}}</figcaption>
    </a>
    <div class="portfolio-item__more-info">
      <button class="portfolio-item__button" @click="portfolio.clicked = !portfolio.clicked">Tecnologías</button>
      <a class="portfolio-item__button portfolio-item__button--link" :href="`${portfolio.link}`">Visitar</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: ['portfolio']
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';

.portfolio-item {
  display: none;
  padding: 1.25rem 0;

  &--visible {
    display: block;
  }

  @media (min-width: 768px){
    padding: 0.75rem;
    width: 50%;
  }

  @media (min-width: 1024px){
    padding: 1.25rem;
  }

  &__image-container {
    width:100%;
    height: 150px;
    position: relative;
    display:block;
    background-color: $black;
    transition: all .5s;
    overflow: hidden;
    border: 5px solid $black;
    border-bottom: none;

    @media (min-width: 575px){
      height: 300px;
    }

    @media (min-width: 768px){
      height: 150px;
    }

    @media (min-width: 1024px){
      height: 250px;
    }

    &:hover, &--active{
      background-color: $pink;

      .portfolio-item__tech {
        position:absolute;
      }

      .portfolio-item__image{
        opacity: 0.1;
      }
    }
  }

  &__tech {
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 2.5rem;
    color: $white;
  }

  &__image {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    @media (min-width: 575px){
      width: 100%;
    }
  }

  &__more-info {
    display: flex;
    flex-direction: column;

    @media (min-width: 375px){
      flex-direction: row;
    }
  }

  &__button {
    width: 100%;
    padding: 1.25rem 0;
    color: $white;
    background-color: $black;
    appearance: none;
    border: none;
    text-align: center;
    border-top: 1px solid $white;

    @media (min-width: 375px){
      border-top: none;
    }

    @media (min-width: 768px){
      padding: 0.75rem 0;
      width: 50%;
    }

    &:hover{
      background-color: $pink;
    }

    &--link{
      @media (min-width: 375px){
        border-left: 1px solid $white;
      }
    }
  }
}
</style>
