<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img1.png', style="width: 400px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-8
        p La armonización en cuanto a las normas, los procedimientos y el lenguaje a nivel de aduanas, es fundamental cuando se va a llevar a cabo negociaciones comerciales. Esto permitirá dar prontitud y claridad en los diferentes procesos que enmarcan el comercio exterior, además de desarrollar excelentes vínculos con nuestros socios internacionales, dando soporte de veracidad y confianza en nuestro país de origen, lo cual eventualmente aumentará los ingresos no sólo de nuestra empresa, sino del país. Sé que cada uno de los temas vistos en este componente serán provechosos en su vida profesional.
        p #[b ¡Muchos éxitos en este proceso de aprendizaje!]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
