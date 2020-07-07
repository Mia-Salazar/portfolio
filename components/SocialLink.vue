<template>
  <div class="footer__social-item-container">
    <div v-for="(icon, index) in icons" :key="index" class="footer__social-item">
      <a :href="`${icon.link}`" class="footer__link" aria-label="Sígueme en redes sociales"><i :class="'fa-' + icon.icon" class="fab footer__social-icon"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialLink',
  data: () => ({
    icons: [
      { icon: 'github', link: 'https://github.com/Mia-Salazar' },
      { icon: 'codepen', link: 'https://codepen.io/MiaSalazar' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/miasalazar/' },
      { icon: 'medium', link: 'https://medium.com/@marasalazar' },
    ],
  }),
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';

.footer {
  &__social-icon {
    color:  $white;
    font-size: 1.7rem;
    transition: 600ms;

    &:hover {
      color: $pink;
      font-size: 2rem;
      transform: rotate(-30deg)
    }
  }

  &__social-item-container {
    display: flex;
  }

  &__social-item {
    margin-right: 1.3rem;
  }
}
</style>
