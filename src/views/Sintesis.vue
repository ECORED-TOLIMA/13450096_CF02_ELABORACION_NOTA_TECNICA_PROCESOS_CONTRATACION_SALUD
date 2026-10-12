<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 La elaboración y validación de la nota técnica comprende un proceso integral que inicia con la identificación de sus elementos estructurales, como los servicios y procedimientos, los cálculos e indicadores, los costos, las tarifas y los riesgos asociados. Posteriormente, se aborda la construcción y organización de la información de acuerdo con la modalidad de contratación, su integración y consolidación. El proceso continúa con la revisión técnica, jurídica y financiera, seguida de la identificación de desviaciones y la realización de ajustes en tarifas, planificación de servicios y gestión del riesgo. Finalmente, se desarrolla la evaluación y el mejoramiento, mediante la identificación de hallazgos, la formulación y seguimiento de acciones de mejora y la actualización de la nota técnica.

    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src="@/assets/curso/sintesis.svg" alt="Mapa conceptual de la elaboración y validación de la nota técnica. Abarca estructura y elementos, elaboración, revisión y validación, ajustes y seguimiento, y evaluación y mejoramiento, junto con sus respectivos componentes.")

    .row.justify-content-center.mb-0
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p.mb-0 Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
