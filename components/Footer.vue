<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__social">
        <div class="footer__bubble">
          <p class="footer__bubble-text">¡Sígueme!</p>
        </div>
        <div class="footer__bubble-shadow"></div>
        <SocialLink/>
      </div>
      <div class="footer__contact">
        <h3 class="footer__contact-title">¿Qué me quieres contar?</h3>
        <form class="footer__form" action="https://formspree.io/maria.sgr@gmail.com" method="POST">
          <label class="footer__label" for="mail">¿Quién eres?</label>
          <input
            id="mail"
            placeholder="Escribe tu mail"
            class="footer__mail"
            type="email"
            name="_replyto"
            required
          >
          <label class="footer__label" for="textarea">¿Qué me quieres contar?</label>
          <textarea
            id="textarea"
            class="footer__textarea"
            name="message"
            placeholder="Dime cosas bonitas"
            required
          ></textarea>
          <input class="footer__button" type="submit" value="Enviar">
        </form>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__text">© 2019 Mia Salazar</p>
      <p class="footer__text">maria.sgr@gmail.com</p>
    </div>
  </footer>
</template>

<script>
import SocialLink from '@/components/SocialLink.vue'

export default {
  name: 'Footer',
  components: {
    SocialLink,
  },
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';

.footer {
  margin-top: 6rem;
  background-color: $black;
  color: $white;

  @media (min-width: 768px){
    margin-top: 8rem;
  }

  &:hover {
    .footer__bubble, .footer__bubble-shadow, .footer__button {
      animation-name: shaking;
      animation-duration: 1s;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 3rem;
    display: block;
    position: relative;
    top: -0.9rem;
    transform: skewY(-1deg);
    border-top: 10px solid $pink;
    background-color: $black;
  }

  &__text {
    padding-bottom: 1rem;
    font-size: 0.8rem;
    font-weight: 300;
  }

  &__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 1rem 0.5rem;
  }

  &__top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem 0;

    @media (min-width: 765px) {
      flex-direction: row-reverse;
    }
  }

  /*RRSS*/

  &__bubble,
  &__bubble-shadow {
    width: 15.63rem;
    height: 8.75rem;
    position: relative;
    margin-left: 4rem;
    border-radius: 50%;
    background-color: $white;
    z-index: $z-index2;

    @media (min-width: 768px) {
      margin-left: 0;
    }

    &:before {
      display: block;
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      bottom: -1.938rem;
      left: 2.375rem;
      border-left: 0.5rem solid transparent;
      border-right: 1.563rem solid transparent;
      border-top: 3.125rem solid $white;
      transform: rotate(37deg);
      z-index: $z-index2;
    }
  }

  &__bubble-shadow {
    position: absolute;
    bottom: 5.375rem;
    background-color: $pink;
    z-index: $z-index1;

    @media (min-width: 768px) {
      bottom: 8.375rem;
    }

    &:before {
      border-top: 3.125rem solid $pink;
      z-index: $z-index1;
    }
  }

  &__bubble-text {
    display: flex;
    justify-content: center;
    margin: 0;
    padding-top: 3.125rem;
    color: $black;
    font-weight: bold;
    font-size: 2.2rem;
  }

  &__social {
    position: relative;
    margin-top: 3rem;

    order: 2;

    @media (min-width: 768px) {
      margin-top: 0;
    }
  }

  &__social-item-container {
    margin-top: 4rem;
  }

  /*Form*/
  &__form {
    display: flex;
    flex-direction: column;
  }

  &__button {
    width: 10rem;
    background-color: $pink;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    padding: 0.9rem 0;
    color: $white;
    font-weight: bold;
    appearance: none;
    border: none;
  }

  &__contact-title {
    width: 15rem;
    margin-bottom: 1.75rem;

    &:after {
      display: block;
      content: '';
      height: 4px;
      width: 100%;
      margin-top: 0.3rem;
      background-color: $pink;
    }
  }

  &__social,
  &__contact {
    @media (min-width: 768px) {
      width: 40%;
    }
  }

  &__textarea,
  &__mail {
    width: 100%;
    height: 3rem;
    margin-bottom: 1.4rem;
    padding: 0.8rem;
    color: $gray-accesibility;
    font-size: 0.7rem;
  }

  &__textarea {
    resize: none;
    padding: 1rem;
    overflow: visible;
  }

  &__label {
    visibility: 0;
    height: 0;
  }
}
</style>
