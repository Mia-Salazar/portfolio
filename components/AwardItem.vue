<template>
  <div class="awards__list">
		<article v-for="(award, index) in awards" :key="index" :class="`award-item award-item__${index}`">
			<a :href="`${award.link}`" rel="nofollow noopener noreferrer" target="_blank">
				<h3 class="award-item__heading">{{award.title}}</h3>
				<img class="award-item__img" :src="(`images/${award.image}`)" />
			</a>
		</article>
  </div>
</template>

<script>
export default {
  name: 'AwardItem',
  
  data: () => ({
    awards: [
			{ title: 'Artículo científico', link: 'http://www.revistacomunicacion.org/pdf/n16/Articulos/A3_GarciaRosales_Analisis_semiotica_profunda_propaganda_Corea.pdf', image: 'corea-2018.png' },
			{ title: 'Artículo científico', link: 'http://www.revistacomunicacion.org/pdf/n14/Articulos/A5_Salazar-Garcia-Rosales-Analisis-de-los-elementos-estetico-expresivos-en-la-propaganda-de-Corea-del-Sur-y-Corea-del-Norte.pdf', image: 'corea-2015.png' },
			{ title: 'Premio relato breve', link: 'https://twitter.com/AJNaurenia/status/675077654589083650', image: 'naurenia.jpg' },
			{ title: 'Artículo Medium', link: 'https://medium.com/@marasalazar/developers-nightmare-web-accessibility-52b9a6890403', image: 'ratio.png' },
			{ title: 'Artículo periódico', link: 'https://sevilla.abc.es/pasionensevilla/actualidad/noticias/a-la-macarena-de-miami-le-cantan-hasta-saetas-85816-1448531812.html', image: 'pasion.png' },
			{ title: 'Artículo Medium', link: 'https://medium.com/@marasalazar/why-icomoon-why-15c2d78ec96e', image: 'icomoon.png' },
			{ title: 'Artículo Medium', link: 'https://medium.com/@marasalazar/how-to-structure-css-in-vue-like-a-pro-5475749cf5eae', image: 'tailwind.png' },
			{ title: 'Artículo Medium', link: 'https://medium.com/@marasalazar/c%C3%B3mo-dar-soporte-a-ie-y-no-morir-en-el-intento-7049dcbbf43f', image: 'death.png' }
    ],
  }),
}
</script>

<style scoped lang="scss">
@import '../assets/stylesheets/_application.scss';
.award-item{
	width:9.375rem;
	height: 9.375rem;
	position: relative;
	display:block;
	margin: 7.5rem auto;
	padding:0;
	background-color: $black;
	text-align:center;
	transform: rotate(45deg);
	transition: transform  0.1s cubic-bezier(0, 1.8, 1, 1.8);
	overflow: hidden;

	@media (min-width:425px){
		width:200px;
		height: 200px;
	}

	@media (min-width: 768px){
		width:9.375rem;
		height: 9.375rem;
		margin: 3.125rem;
	}

	a {
		cursor:pointer;
	}

	&__0{
		@media (min-width:1100px){
			position: absolute;
			top: -4rem;
    		left: calc(50% - 125px);
		}

	}

	&__1 {
		@media (min-width: 1100px){
			position: absolute;
    		top: 12%;
    		left: 17%;
		}
	}

	&__2{
		@media (min-width: 768px){
			position: absolute;
			top: -7.813rem;
			left: calc(50% - 125px);
		}

		@media (min-width: 1100px){
			top: 12%;
			right: 17%;
    		left: unset;
		}
	}

	&__3{
		@media (min-width: 768px) {
			position: absolute;
			top: 7.813rem;
			left: calc(50% - 125px);
		}

		@media (min-width: 1100px){
			position: absolute;
			top: 34%;
			left: 0;
		}
	}

	&__4{
		@media (min-width: 1100px){
			position: absolute;
			top: 34%;
			left: calc(50% - 125px);
		}
	}

	&__5{
		@media (min-width:1100px){
			margin-right: -5.125rem;
		}

		@media (min-width: 1100px){
			position: absolute;
			top: 34%;
			right: 18%;
		}
	}

	&__6{
		@media (min-width: 768px) and (max-width: 1099px){
			position: absolute;
			left: calc(50% - 125px);
    		top: 23.5rem;
		}

		@media (min-width: 1100px){
			position: absolute;
			top: 57%;
			left: 17%;
		}
	}

	&__7{
		@media (min-width: 768px) and (max-width: 1099px){
			left: calc(-50% + 125px);
		}

		@media (min-width: 1100px){
				position: absolute;
				top: 57%;
				right: 17%;
		}
	}

	&__img {
		display: none;
	}

	&:hover{
		img {
			width: 175%;
			height: 175%;
			display: block;
			position: absolute;
			top: -25%;
			left: -25%;
			z-index: -1;
			transform: rotate(-45deg);
		}

		h3 {
			display: none;
		}
	}

	&__heading {
		position: absolute;
		top: 50%;
		margin: 0;
		padding:1.25rem;
		color:$white;
		overflow:hidden;
		transform: translateY(-50%) rotate(-45deg);
		font-size:1.5rem;
		
		@media (min-width: 768px){
			margin:0;
		}
	}
}

</style>