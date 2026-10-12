<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Revisión y validación de la nota técnica

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t3/img1.png" alt="")
      .col-lg-7
        .row.align-items-center.mb-4
          .col-md-2.mb-3.mb-md-0
            img.tema3-icono.d-none.d-lg-block(src="@/assets/curso/temas/t3/img2.svg" alt="")
          .col-md-10
            p.mb-0 La revisión y validación de la nota técnica permite comprobar la coherencia, consistencia y suficiencia de la información utilizada para sustentar las proyecciones de servicios y tecnologías en salud. Este proceso parte de la información consolidada y busca identificar posibles inconsistencias en aspectos como la población, los servicios y procedimientos, las frecuencias de uso, los costos, las tarifas y los elementos relacionados con la gestión del riesgo.
        .cajon.color-secundario.p-4
          p.mb-0 La validación comprende tres perspectivas complementarias: técnica, jurídica y financiera. La validación técnica se orienta a comprobar la correspondencia de los datos y cálculos con las condiciones de prestación de los servicios; la jurídica verifica la relación de la nota técnica con las disposiciones aplicables y las condiciones del acuerdo de voluntades; y la financiera analiza la consistencia de los valores proyectados y su sostenibilidad.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante este proceso se revisan, entre otros aspectos, la población considerada, las frecuencias, los códigos de los servicios y tecnologías, las tarifas utilizadas y los documentos que sustentan la información. También se verifica que las condiciones relacionadas con la modalidad de pago, la gestión del riesgo, la auditoría y las obligaciones de las partes sean coherentes con lo establecido en el acuerdo.

    p.mb-0 Los resultados de la revisión permiten identificar inconsistencias, establecer ajustes y documentar los hallazgos encontrados. De esta manera, la validación constituye un paso previo al seguimiento de la ejecución y a la implementación de acciones de mejora cuando sean necesarias.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Validación técnica

    .row.align-items-center.mb-4
      .col-md-2.col-lg-1.mb-3.mb-md-0
        img.tema3-icono.d-none.d-lg-block(src="@/assets/curso/temas/t3/img4.svg" alt="")
      .col-md-10.col-lg-11
        p.mb-0 La validación técnica permite comprobar que la información y los cálculos incluidos en la nota técnica sean coherentes con las condiciones de prestación de los servicios y tecnologías en salud. Este proceso revisa la correspondencia entre la población, las frecuencias de uso, los códigos, las tarifas y los documentos que sustentan la información.

    p.mb-4 Para realizar esta validación, se pueden considerar los siguientes aspectos:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img5.svg" alt="")
        h5.text-center Población
        p.text-center Verificar que la población utilizada en los cálculos corresponda a la población objeto del acuerdo.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img6.svg" alt="")
        h5.text-center Servicios y tecnologías
        p.text-center Comprobar que los servicios incluidos estén correctamente identificados y codificados.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img7.svg" alt="")
        h5.text-center Frecuencias de uso
        p.text-center Revisar que las frecuencias hayan sido calculadas a partir de información histórica pertinente y que guarden correspondencia con la población susceptible.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img8.svg" alt="")
        h5.text-center Cantidades proyectadas
        p.text-center Comprobar la relación entre población, frecuencia y cantidad de servicios estimada.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img9.svg" alt="")
        h5.text-center Costos y tarifas
        p.text-center Verificar que los valores utilizados correspondan a los servicios proyectados y a las referencias o condiciones establecidas.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img10.svg" alt="")
        h5.text-center Soportes
        p.text-center Comprobar que los datos y cálculos cuenten con la documentación que permita sustentar su origen y trazabilidad.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img11.svg" alt="")
        h5.text-center Coherencia interna
        p.text-center Verificar que no existan inconsistencias entre los diferentes componentes de la nota técnica.

    p.mb-0 La validación técnica permite identificar inconsistencias antes de la consolidación definitiva de la nota técnica. Los resultados obtenidos deben documentarse para establecer los ajustes que correspondan y facilitar posteriormente las validaciones jurídica y financiera.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Validación jurídica

    p.mb-4 La validación jurídica permite comprobar que la nota técnica sea coherente con el marco normativo aplicable y con las condiciones establecidas en el acuerdo de voluntades. Este proceso busca identificar posibles inconsistencias relacionadas con las obligaciones de las partes, la modalidad de pago, la gestión del riesgo y las condiciones de prestación de los servicios.

    p.mb-4 Para realizar esta validación, se revisan aspectos como:

    .row.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t3/img12.png" alt="")
      .col-lg-8
        LineaTiempoD.color-secundario
          p.mb-0(numero="1" titulo="Condiciones del acuerdo de voluntades") Verificar que la nota técnica sea coherente con las cláusulas y condiciones establecidas entre las partes.
          p.mb-0(numero="2" titulo="Marco normativo") Comprobar que su contenido considere las disposiciones aplicables a los acuerdos de voluntades y a la modalidad de contratación.
          p.mb-0(numero="3" titulo="Modalidad de pago") Verificar que la modalidad establecida sea consistente con la estructura y las proyecciones de la nota técnica.
          p.mb-0(numero="4" titulo="Gestión del riesgo") Revisar las condiciones relacionadas con la distribución y gestión de los riesgos.
          p.mb-0(numero="5" titulo="Auditoría") Comprobar que se encuentren definidas las condiciones y mecanismos de auditoría relacionados con la ejecución del acuerdo.
          p.mb-0(numero="6" titulo="Habilitación") Verificar que las partes y los servicios involucrados cumplan las condiciones de habilitación correspondientes.
          p.mb-0(numero="7" titulo="Acceso a la información y solución de controversias") Revisar las condiciones relacionadas con el intercambio de información y los mecanismos establecidos para atender posibles diferencias entre las partes.

    .row.justify-content-center.align-items-center.mb-0
      .col-md-2.col-lg-1.mb-3.mb-md-0
        img.tema3-icono.d-none.d-lg-block(src="@/assets/curso/temas/t3/img13.svg" alt="")
      .col-md-10.col-lg-9
        .cajon.color-primario.p-4
          p.mb-0 La validación jurídica permite documentar los aspectos que requieren aclaración o ajuste antes de la consolidación definitiva de la nota técnica. Los resultados deben integrarse con los hallazgos de las validaciones técnica y financiera para establecer las acciones correspondientes.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Validación financiera

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t3/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La validación financiera permite comprobar la consistencia de los valores económicos incluidos en la nota técnica y determinar si las proyecciones realizadas guardan correspondencia con los servicios y tecnologías que serán objeto del acuerdo. Este proceso considera los costos, las tarifas, las cantidades proyectadas y el valor total estimado.

    p.mb-4 Para realizar esta validación, se revisan aspectos como:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img15.svg" alt="")
        h5.text-center Cantidades proyectadas
        p.text-center Verificar que correspondan a las frecuencias de uso y a la población considerada.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img16.svg" alt="")
        h5.text-center Costos unitarios
        p.text-center Comprobar que los valores utilizados correspondan a los servicios o tecnologías identificados.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img17.svg" alt="")
        h5.text-center Tarifas
        p.text-center Revisar la fuente y pertinencia de las tarifas utilizadas para establecer los valores proyectados.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img18.svg" alt="")
        h5.text-center Valor total
        p.text-center Comprobar las operaciones realizadas y la correspondencia entre cantidades, valores unitarios y totales.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img19.svg" alt="")
        h5.text-center Sostenibilidad
        p.text-center Analizar si los valores proyectados guardan relación con los recursos necesarios para la ejecución del acuerdo.
      .tarjeta.BGTARG.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src="@/assets/curso/temas/t3/img20.svg" alt="")
        h5.text-center Coherencia financiera
        p.text-center Verificar que los valores consolidados sean consistentes con la modalidad de contratación y las condiciones económicas establecidas.

    p.mb-0 La validación financiera permite identificar diferencias, errores de cálculo o valores que requieran revisión antes de consolidar la nota técnica. Los resultados deben documentarse junto con los hallazgos de las validaciones técnica y jurídica, de manera que puedan establecerse los ajustes correspondientes.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido
      h2 3.4 Consolidación de resultados de la validación

    p.mb-4 La consolidación de los resultados permite integrar los hallazgos identificados durante las validaciones técnica, jurídica y financiera, con el propósito de establecer el estado de la nota técnica y determinar los aspectos que requieren corrección, aclaración o ajuste. Este proceso facilita que las observaciones queden documentadas y puedan ser atendidas antes de finalizar la nota técnica.

    p.mb-4 Para organizar los resultados, se puede utilizar una matriz que relacione el aspecto revisado, el tipo de validación, el hallazgo identificado y la acción requerida:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 5.
      span Consolidación de hallazgos y acciones derivadas de la validación de la nota técnica
    .tabla-a.color-acento-contenido.tema3-tabla.mb-4
      table
        thead
          tr
            th Aspecto revisado
            th Tipo de validación
            th Hallazgo
            th Acción requerida
        tbody
          tr
            td Población y frecuencias
            td Técnica
            td Inconsistencia entre la población y la frecuencia utilizada.
            td Revisar y ajustar el cálculo.
          tr
            td Servicios y códigos
            td Técnica
            td Código no corresponde al servicio identificado.
            td Verificar y actualizar el código.
          tr
            td Condiciones del acuerdo
            td Jurídica
            td Información que requiere ajuste frente a lo pactado.
            td Revisar y ajustar de acuerdo con el acuerdo de voluntades.
          tr
            td Tarifas y costos
            td Financiera
            td Diferencia en el valor utilizado.
            td Verificar la fuente y recalcular
          tr
            td Valor proyectado
            td Financiera
            td Inconsistencia en el cálculo total.
            td Corregir las operaciones y consolidar nuevamente.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-2.col-lg-1.mb-3.mb-md-0
        img.tema3-icono.d-none.d-lg-block(src="@/assets/curso/temas/t3/img21.svg" alt="")
      .col-md-10.col-lg-9
        p.mb-0 Una vez registrados los hallazgos, se deben establecer las acciones necesarias para atenderlos, indicando, cuando corresponda, el responsable y el estado de cada acción. La documentación de estos resultados facilita el seguimiento de los ajustes y permite conservar la trazabilidad del proceso de validación.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La consolidación constituye así un punto de transición entre la revisión de la nota técnica y su ajuste, ya que los resultados obtenidos sirven como insumo para corregir las inconsistencias identificadas y fortalecer la información antes de su seguimiento y evaluación.
</template>

<script>
export default {
  name: 'Tema3',
}
</script>

<style lang="sass"></style>
