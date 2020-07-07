<template>
  <section class="contact box">
    <h2>Contáctame</h2>
    <p
      class="contact__text"
    >Como superheroína siempre estoy salvando el mundo de aquí para allá, pero si conoces alguna injusticia por la que deba intervenir, no dudes en contactar conmigo.</p>
    <p class="contact__text">La justicia, y el código bien hecho, nunca duermen.</p>
    <h3 class="contact__title">¿Cómo cambiamos el mundo?</h3>
    <div class="contact__wrapper">
      <form class="contact__form" action="https://formspree.io/maria.sgr@gmail.com" method="POST">
        <label class="contact__label" for="name">¿Quién eres?</label>
        <input
          id="name"
          placeholder="Escribe tu nombre"
          class="contact__input"
          type="text"
          name="_replyto"
          required
        />
        <label class="contact__label" for="mail">¿Dónde te respondo?</label>
        <input
          id="mail"
          placeholder="Escribe tu mail"
          class="contact__input"
          type="email"
          name="_replyto"
          required
        />
        <label class="contact__label" for="textarea">¿Qué me quieres contar?</label>
        <textarea
          id="textarea"
          class="contact__textarea"
          name="message"
          placeholder="Dime cosas bonitas"
          required
        ></textarea>
        <input class="contact__button" type="submit" value="Enviar" />
      </form>
      <figure class="contact__img-container">
        <img class="contact__img" src="@/assets/images/signal.svg" alt="Bat-signal" />
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';

.contact {
  display: flex;
  flex-direction: column;

  &__wrapper {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__img-container {
    width: 100%;

    @media (max-width: 767px){
      padding: 2rem;
    }

    @media (min-width: 768px) {
      width: 45%;
    }
  }

  &__img {
    width: 100%;
  }

  /*Form*/
  &__form {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      width: 45%;
    }
  }

  &__button {
    width: 10rem;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    padding: 0.9rem 0;
    background-color: $pink;
    color: $white;
    font-weight: bold;
    appearance: none;
    border: none;
  }

  &__title {
    width: 18rem;
    margin-bottom: 1.75rem;

    @media (max-width: 767px){
      font-size: 1rem;
    }

    &:after {
      display: block;
      content: '';
      width: 100%;
      height: 4px;
      margin-top: 0.3rem;
      background-color: $pink;
      
      @media (max-width: 768px){
        width: 80%;
      }
    }
  }

  &__social,
  &__contact {
    @media (min-width: 768px) {
      width: 40%;
    }
  }

  &__textarea,
  &__input {
    width: 100%;
    height: 3rem;
    margin-bottom: 1.4rem;
    padding: 0.8rem;
    color: $gray-accesibility;
    border: 2px solid $black;
    font-size: 0.7rem;
  }

  &__textarea {
    resize: none;
    padding: 1rem;
    height: 5rem;
    overflow: visible;
  }

  &__label {
    visibility: 0;
    height: 0;
  }
}
</style>
