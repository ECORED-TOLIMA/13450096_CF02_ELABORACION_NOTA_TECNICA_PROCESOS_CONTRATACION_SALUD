<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ajustes y seguimiento de la nota técnica

    figure.mb-4
      img(src="@/assets/curso/temas/t4/img1.png" alt="")

    p.mb-4 Los ajustes y el seguimiento permiten comprobar el comportamiento de las variables consideradas en la nota técnica durante la ejecución del acuerdo de voluntades y establecer las modificaciones que sean necesarias. Este proceso parte de la comparación entre los valores proyectados y los resultados observados en aspectos como la población, la utilización de servicios y tecnologías, las frecuencias, los costos y los valores económicos.

    .tema4-panel.mb-4
      .row.g-0.align-items-stretch
        .col-lg-5
          img.tema4-panel__imagen(src="@/assets/curso/temas/t4/img2.png" alt="")
        .col-lg-7
          .p-4.h-100.d-flex.align-items-center
            .row.align-items-center
              .col-md-2.mb-4
                img.tema4-icono.d-none.d-lg-block(src="@/assets/curso/temas/t4/img3.svg" alt="")
              .col-md-12
                p El seguimiento permite identificar variaciones o desviaciones que puedan estar relacionadas con cambios en la población, la red de prestadores, la cobertura, las condiciones de salud o situaciones que afecten la prestación de los servicios. Entre los factores que pueden incidir en estas variaciones se encuentran los eventos de fuerza mayor, las modificaciones en la red de prestadores, los cambios en la cobertura y las variaciones en el comportamiento de la morbilidad.
                p.mb-0 A partir de los resultados del seguimiento pueden establecerse ajustes en las tarifas, la planificación de los servicios, las proyecciones y los elementos relacionados con la gestión del riesgo. Estos ajustes deben sustentarse en la información obtenida durante la ejecución y conservar la trazabilidad de las modificaciones realizadas.

    p.mb-0 El seguimiento también permite establecer indicadores y revisar periódicamente el cumplimiento de las proyecciones. Cuando se identifican resultados que requieren intervención, estos pueden dar lugar a acciones de mejora y a la actualización de la nota técnica, especialmente cuando se presentan modificaciones relevantes en las condiciones inicialmente consideradas.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Identificación y análisis de desviaciones

    p.mb-4 La identificación y el análisis de desviaciones permiten comparar los resultados observados durante la ejecución del acuerdo de voluntades con las proyecciones establecidas en la nota técnica. Esta comparación facilita reconocer diferencias en variables como la población, las frecuencias de uso, las cantidades de servicios y tecnologías, los costos y los valores proyectados.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        p Una desviación puede presentarse cuando el comportamiento observado se encuentra por encima o por debajo de lo inicialmente proyectado. Por ejemplo, un incremento en la frecuencia de utilización de un servicio puede generar una cantidad de atenciones superior a la estimada y, en consecuencia, modificar los valores económicos previstos.
        p Para analizar una desviación puede utilizarse la siguiente expresión:
        .cajon.color-secundario.p-4.mb-4
          p.text-center.fw-bold.mb-0 Desviación absoluta = Valor observado − Valor proyectado
        p También puede expresarse en términos porcentuales:
        .cajon.color-primario.p-4.mb-4.mb-lg-0
          p.text-center.fw-bold.mb-0
            | Desviación porcentual =
            span.d-inline-block.text-center.align-middle.mx-2
              span.d-block.border-bottom.border-black.px-2 Valor observado − Valor proyectado
              span.d-block.px-2 Valor proyectado
            | x 100
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t4/img4.png" alt="")
    .row.justify-content-center.align-items-center.mb-3
      .col-10
        .tema4-bordes-color.py-4.mb-4
          .row.align-items-center
            .col-md-6.col-lg-4.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t4/img5.svg" alt="")
            .col-md-8.col-lg-8
              .titulo-pastilla.mb-4
                img(src="@/assets/curso/icon.svg" alt="")
                span Ejemplo
              p Si la nota técnica proyectó 3.000 atenciones y durante la ejecución se registraron 3.300, la desviación absoluta sería:
              .cajon.color-secundario.p-4.mb-4
                p.text-center.fw-bold.mb-0 3.300 - 3.000 = 300
              p Y la desviación porcentual:
              .cajon.color-primario.p-4.mb-4
                p.text-center.fw-bold.mb-0
                  span.d-inline-block.text-center.align-middle.mx-2
                    span.d-block.border-bottom.border-black.px-2 3.300 - 3.000
                    span.d-block.px-2 3.000
                  | x 100 = 10 %
              p.mb-0 En este caso, se presenta una utilización 10 % superior a la proyectada.
    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .row.mb-4
          .col-lg-1.mb-3.mb-md-0
            figure
              img.tema4-icono(src="@/assets/curso/temas/t4/img6.svg" alt="")
          .col-lg-11
            p.mb-0 El análisis no debe limitarse a identificar la diferencia numérica. También debe considerar las condiciones que pueden explicar la variación, como cambios en la población, modificaciones en la red de prestadores, cobertura, comportamiento de la morbilidad o situaciones que afecten la prestación de los servicios.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t4/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los resultados del análisis permiten determinar si la desviación requiere seguimiento, ajuste de las proyecciones o modificación de otros elementos de la nota técnica. De esta manera, la comparación entre lo proyectado y lo observado se convierte en un insumo para la toma de acciones y la actualización de la información durante la ejecución del acuerdo.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Ajustes de tarifas y planificación de servicios

    p.mb-4 Los ajustes de tarifas y de la planificación de servicios se realizan cuando el seguimiento de la ejecución identifica variaciones que afectan las condiciones consideradas inicialmente en la nota técnica. Estos ajustes deben sustentarse en información actualizada y en los resultados obtenidos durante el seguimiento, de manera que las proyecciones mantengan correspondencia con el comportamiento observado.
    .BGF05.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-1.mb-3.mb-md-0
          figure
            img.tema4-icono(src="@/assets/curso/temas/t4/img8.svg" alt="")
        .col-md-9
          p.mb-0 En relación con las tarifas, la revisión puede considerar cambios en los valores de referencia, en los costos asociados a la prestación o en las condiciones económicas establecidas en el acuerdo. Cuando se identifica una diferencia entre los valores proyectados y los resultados observados, es necesario analizar su causa y determinar si corresponde actualizar los valores utilizados en la nota técnica.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.mb-4.mb-lg-0
          figure.h-100
            img.tema4-apertura__imagen(src="@/assets/curso/temas/t4/img9.png" alt="")
        .col-lg-6
          p La planificación de servicios, por su parte, puede requerir ajustes cuando se presentan modificaciones en variables como:
          ul.lista-ul--color.mb-4
            li
              i.fas.fa-file-lines
              span La población objeto o población susceptible.
            li
              i.fas.fa-file-lines
              span Las frecuencias de utilización.
            li
              i.fas.fa-file-lines
              span La cantidad de servicios y tecnologías requeridos.
            li
              i.fas.fa-file-lines
              span La red de prestadores disponible.
            li
              i.fas.fa-file-lines
              span La cobertura de los servicios.
            li
              i.fas.fa-file-lines
              span El comportamiento de las condiciones de salud de la población.
          .cajon.color-primario.p-4
            p.mb-0 El ajuste debe mantener la relación entre población, servicios, frecuencias, cantidades, tarifas y valores proyectados. De esta manera, cualquier modificación realizada en uno de estos elementos debe analizarse frente a los demás componentes para conservar la coherencia de la nota técnica.

    p.mb-0 Los cambios identificados durante el seguimiento deben quedar documentados, indicando la situación que los originó, el elemento modificado y el soporte utilizado. Esta trazabilidad facilita la revisión posterior y permite actualizar la nota técnica cuando las condiciones del acuerdo de voluntades así lo requieran.

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Ajustes relacionados con el riesgo

    p.mb-4 Los ajustes relacionados con el riesgo se realizan cuando el seguimiento de la ejecución permite identificar variaciones que pueden afectar las condiciones inicialmente consideradas en la nota técnica. Estos ajustes buscan mantener correspondencia entre el comportamiento observado de la población, la utilización de los servicios y tecnologías y las proyecciones establecidas.

    p.mb-4 El análisis puede considerar cambios relacionados con:

    .row.align-items-center.mb-4
      .col-lg-8
        LineaTiempoD.color-secundario
          p.mb-0(numero="1" titulo="La población") Variaciones en el número o las características de la población objeto y susceptible.
          p.mb-0(numero="2" titulo="La utilización de servicios") Cambios en las frecuencias o cantidades de servicios y tecnologías utilizadas.
          p.mb-0(numero="3" titulo="Las condiciones de salud") Modificaciones en el comportamiento de la morbilidad que puedan generar variaciones en las necesidades de atención.
          p.mb-0(numero="4" titulo="La red de prestadores") Cambios en la disponibilidad o composición de la red que puedan afectar la prestación.
          p.mb-0(numero="5" titulo="La cobertura") Modificaciones que generen cambios en el acceso o utilización de los servicios.
          p.mb-0(numero="6" titulo="Eventos no previstos") Situaciones que alteren las condiciones bajo las cuales se realizaron las proyecciones iniciales.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t4/img10.png" alt="")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.mb-3.mb-md-0
        figure
          img.tema4-icono(src="@/assets/curso/temas/t4/img11.svg" alt="")
      .col-md-9
        p.mb-0 A partir de estas variaciones, se puede revisar la estimación del riesgo primario y del riesgo técnico, así como los elementos de la nota técnica relacionados con las frecuencias, cantidades, costos y valores proyectados. Los ajustes deben sustentarse en información verificable y conservar la trazabilidad de las modificaciones realizadas.
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 El seguimiento de estos elementos permite determinar si las condiciones inicialmente consideradas continúan siendo pertinentes o si requieren actualización. De esta manera, la gestión del riesgo se articula con el seguimiento de la nota técnica y con las acciones de mejora que puedan derivarse de los resultados obtenidos.

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Seguimiento e indicadores de ejecución

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t4/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El seguimiento de la nota técnica permite analizar el comportamiento de los servicios y tecnologías durante la ejecución del acuerdo de voluntades y compararlo con las proyecciones establecidas. Este proceso facilita la identificación oportuna de variaciones en la población, las frecuencias de uso, las cantidades de servicios, los costos y los valores económicos.

    p.mb-4 Para realizar el seguimiento se pueden establecer indicadores de ejecución que permitan medir el comportamiento de las principales variables de la nota técnica. Estos indicadores deben relacionarse con los objetivos del seguimiento y utilizar información periódica y verificable.

    p.mb-4 Algunos indicadores que pueden utilizarse son:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 6.
      span Indicadores para el seguimiento de la ejecución de la nota técnica
    .tabla-a.color-acento-contenido.tema4-tabla.mb-4
      table
        colgroup
          col(style="width: 25%")
          col(style="width: 50%")
          col(style="width: 25%")
        thead
          tr
            th Indicador
            th Fórmula
            th Finalidad
        tbody
          tr
            td Cumplimiento de servicios proyectados
            td
              p.text-center.fw-bold.mb-0
                span.d-inline-block.text-center.align-middle.mx-2
                  span.d-block.border-bottom.border-black.px-2 Servicios ejecutados
                  span.d-block.px-2 Servicios proyectados
                | x 100
            td Determinar el porcentaje de servicios ejecutados frente a lo proyectado.
          tr
            td Variación de frecuencia de uso
            td
              p.text-center.fw-bold.mb-0
                span.d-inline-block.text-center.align-middle.mx-2
                  span.d-block.border-bottom.border-black.px-2 Frecuencia observada - Frecuencia proyectada
                  span.d-block.px-2 Frecuencia proyectada
                | x 100
            td Identificar cambios en la utilización de los servicios.
          tr
            td Ejecución del valor proyectado
            td
              p.text-center.fw-bold.mb-0
                span.d-inline-block.text-center.align-middle.mx-2
                  span.d-block.border-bottom.border-black.px-2 Valor ejecutado
                  span.d-block.px-2 Valor proyectado
                | x 100
            td Comparar el valor económico ejecutado con el valor estimado.
          tr
            td Variación de población
            td
              p.text-center.fw-bold.mb-0
                span.d-inline-block.text-center.align-middle.mx-2
                  span.d-block.border-bottom.border-black.px-2 Población observada - Población proyectada
                  span.d-block.px-2 Población proyectada
                | x 100
            td Identificar cambios en la población considerada para la proyección.

    p.mb-4 El seguimiento debe realizarse con una periodicidad definida de acuerdo con las condiciones del acuerdo de voluntades y las variables que se requieran controlar. Los resultados deben documentarse y compararse con los valores de referencia establecidos en la nota técnica.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Cuando los indicadores evidencien desviaciones relevantes, se debe analizar su causa y determinar si es necesario realizar ajustes en las proyecciones, tarifas, planificación de servicios o elementos relacionados con la gestión del riesgo. Los resultados también pueden constituir un insumo para formular acciones de mejora y actualizar la nota técnica cuando las condiciones lo requieran.
</template>

<script>
export default {
  name: 'Tema4',
}
</script>

<style lang="sass"></style>
