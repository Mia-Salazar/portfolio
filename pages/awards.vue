<template>
  <section class="awards box">
    <h2>Premios y publicaciones</h2>
    <div class="awards__container">
      <div class="awards__text-container">
        <p class="awards__text">Los superhéroes sacrificados a su causa, suelen recibir premios y reconocimientos por su desempeño.</p>
        <p class="awards__text">Además, como Miss !important velo por el bienestar de todos los pueblos del universo, por lo que tengo diversos intereses además de mi lucha contra los !importants y mi defensa del buen CSS.</p>
        <p class="awards__text">Observa mis medallas y llaves de la ciudad con las que me han obsequiado, y clica en ellas para más información.</p>
      </div>
      <figure class="awards__img-container">
        <img class="awards__img" alt="medalla de honor al superheroe" src="@/assets/images/medal.svg" />
      </figure>
    </div>
    <AwardItem/>
  </section>
</template>

<script>
import AwardItem from '@/components/AwardItem.vue'

export default {
  name: 'Awards',
  components: {
    AwardItem,
  },
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';
.awards {
  &__list {
    @media (min-width: 768px){
      max-width: 749px;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 7.813rem auto 0 auto;
    }

    @media(min-width: 1100px){
      margin-top: 1.5rem;
      max-width: 750px;
    }
  }

  &__container {
    @media (min-width: 992px){
      display: flex;
    }
  }

  &__text-container{
    @media (min-width: 992px){
      width: 65%
    }

    @media (min-width: 1200px){
      width: 60%
    }
  }

  &__img-container{
    display: none;

    @media (min-width: 992px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 35%;
    }

    @media (min-width: 1200px){
      width: 40%;
    }
  }

  &__img {
    @media (min-width: 375px){
      display: flex;
      margin: 0 auto;
      max-width: 300px;
    }
    
    @media (min-width: 1100px){
      max-width: 200px;
    }
  }
}
</style>