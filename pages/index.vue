<template>
  <section class="intro box">
    <h2 class="intro__title">¡Hola!</h2>

    <p
      class="intro__text"
    >Soy Mía Salazar, una front developer en proceso, una apasionada de la maquetación web y una amante del diseño gráfico y web.</p>
    <figure class="intro__logo-container">
      <img class="intro__logo" alt="Logo" src="@/assets/images/Logo-Mia.svg" />
    </figure>
    <p
      class="intro__text"
    >Sin embargo, todo esto es una tapadera, ya que en realidad soy la superheroína Miss !important, la persona que lucha contra los !importants y vela por el buen uso del CSS en el mundo y por el código.</p>
  </section>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';

.intro {
  position: relative;
  width: 90%;
  margin: 0.5rem auto;
  padding: 1rem;
  background-color: $white;
  border: 6px solid $black;

  &:before {
    content: '';
    width: 2rem;
    height: 7rem;
    display: block;
    position: absolute;
    transform: rotate(40deg);
    top: -2rem;
    right: 0;
    background-color: $pink;
  }

  &:after {
    content: '';
    width: 2rem;
    height: 7rem;
    display: block;
    position: absolute;
    transform: rotate(40deg);
    bottom: -2rem;
    right: 0;
    background-color: $pink;
  }

  @media (min-width: 768px) {
    width: 80%;
    margin: 4rem auto 2rem auto;
    padding: 3rem;
  }

  @media (min-width: 992px) {
    width: 90%;
  }

  @media (min-width: 1440px) {
    width: 75%;
  }

  &__text {
    font-size: 1.5rem;
    line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 2rem;
    }

    &--inverse {
      margin: 0;
      color: $white;
      font-size: 2rem;
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 2.5rem;
      }
    }
  }

  &__text-container {
    width: fit-content;
    margin: 1rem 0;
    padding: 0.5rem 0.75rem;
    transform: rotate(-7deg);
    background-color: $black;
    
  }

  &__logo-container {
    @media (min-width: 768px) {
      width: 80%;
      margin: auto;
    }

    @media (min-width: 992px) {
      width: 50%;
    }

    @media (min-width: 1440px) {
      width: 30%;
    }
  }

  &__name {
    font-family: 'Francois One', sans-serif;
  }
}
</style>

