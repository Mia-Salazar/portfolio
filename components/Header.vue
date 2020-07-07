<template>
  <header class="header">
    <router-link to="/" class="header__container" aria-label="Vuelve a la home">
      <h1 class="header__name"></h1>
    </router-link>
    <router-link to="/" class="header__container" aria-label="Vuelve a la home">
      <h2 class="header__name header__surname"></h2>
    </router-link>
    <h3 class="header__subtitle"></h3>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';

.header {
  padding: 3rem 0;
  font-family: 'Francois One', sans-serif;

  @media (min-with: 768px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  &__name {
    position: relative;
    left: -1.688rem;
    width: max-content;
    margin: auto;
    padding: 0 1.5rem;
    transform: rotate(-10deg);
    color: $black;
    border: 0.3rem solid $black;
    background-color: $white;
    -webkit-box-shadow: -0.75rem 0.6875rem 0 0 rgba(207, 52, 118, 1);
    -moz-box-shadow: -0.75rem 0.6875rem 0 0 rgba(207, 52, 118, 1);
    box-shadow: -0.75rem 0.6875rem 0 0 rgba(207, 52, 118, 1);
    font-size: 4rem;

    &:after {
      content: 'Mia';
    }

    &:hover {
      transform: scale(1.1, 1.1) rotate(0deg);
      background-color: $black;
      color: $white;

      &:after {
        content: 'Miss';
      }
    }

    @media (min-width: 768px) {
      border: 0.5rem solid $black;
      -webkit-box-shadow: -1.25rem 0.8125rem 0 3px rgba(207, 52, 118, 1);
      -moz-box-shadow: -1.25rem 0.8125rem 0 3px rgba(207, 52, 118, 1);
      box-shadow: -1.25rem 0.8125rem 0 3px rgba(207, 52, 118, 1);
      font-size: 8rem;
    }
  }

  &__surname {
    left: auto;
    margin-top: 1.5rem;

    &:after {
      color: $black;
      content: 'Salazar';
    }

    &:hover {
      &:after {
        content: '!important';
        color: $white;
      }
    }
  }

  &__subtitle {
    width: 9.375rem;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 3.5rem;
    background-color: $pink;
    color: $white;
    font-size: 1.5rem;

    &:after {
      content: '· Front-end ·';
    }

    @media (min-width: 768px) {
      width: 21.875rem;
      margin-top: 5rem;
      font-size: 3rem;
    }

    &:hover {
      color: $black;

      &:after {
        content: '· Superhero ·';
      }
    }
  }

  &__container {
    position: relative;
    z-index: 2;
  }
}
</style>
