<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-4
      img(src="@/assets/curso/temas/intro/img1.png" alt="")
    p.mb-4 Para garantizar una planeación sólida y organizada de los servicios y tecnologías en salud dentro de los acuerdos de voluntades, la nota técnica se convierte en un instrumento indispensable. Su elaboración integra información relacionada con la población objeto, los servicios y procedimientos, las frecuencias de uso, los costos, las tarifas y los riesgos, con el propósito de establecer una proyección técnica y financiera coherente con las condiciones de contratación.

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure.h-100
          img.h-100.w-100.introduccion__imagen(src="@/assets/curso/temas/intro/img2.png" alt="")
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En este componente se abordan los elementos necesarios para elaborar, revisar, validar, ajustar y evaluar una nota técnica, a partir de la organización y análisis de la información disponible. Se desarrollan aspectos relacionados con la identificación y codificación de servicios, los cálculos e indicadores, la estimación de costos, la consideración de los riesgos y la integración de la información según la modalidad de contratación.
        .row
          .col-lg-2.d-none.d-lg-block
            img.introduccion__icono(src="@/assets/curso/temas/intro/img3.svg" alt="")
          .col-lg-10.p-0
            p.mb-0 Asimismo, se estudian los procesos de validación técnica, jurídica y financiera, junto con el seguimiento de resultados, la identificación de desviaciones y hallazgos, y la formulación de acciones de mejora. De esta manera, se fortalecen los elementos requeridos para mantener una nota técnica coherente con las condiciones del acuerdo de voluntades y susceptible de actualización de acuerdo con los resultados de su seguimiento.

    p.mb-4 Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video:
    figure
      .video
        iframe(width="1331" height="749" src="https://www.youtube.com/embed/oi8ak12fGxc" title="Development and Validation of the Technical Note" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
}
</script>

<style lang="sass"></style>
