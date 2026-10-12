<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Evaluación y mejoramiento de la nota técnica

    .row.align-items-stretch.mb-4
      .col-lg-8.mb-4.mb-lg-0
        .row.align-items-center.mb-4
          .col-md-2.mb-3.mb-md-0
            figure
              img.tema5-icono(src="@/assets/curso/temas/t5/img1.svg" alt="")
          .col-md-10
            p.mb-0 La evaluación de la nota técnica permite determinar el comportamiento de las proyecciones realizadas frente a los resultados obtenidos durante la ejecución del acuerdo de voluntades. Este proceso considera la información recopilada mediante el seguimiento y los indicadores de ejecución, con el propósito de identificar hallazgos, desviaciones y situaciones que requieran intervención o ajuste.
        p.mb-4 A partir de los resultados de la evaluación se pueden establecer acciones orientadas a corregir las situaciones identificadas y fortalecer los procesos relacionados con la planeación, ejecución y seguimiento de los servicios y tecnologías en salud. Las acciones deben quedar documentadas, con la definición de responsables y fechas para su cumplimiento.
        .tema5-apertura__destacado.p-4
          p.mb-0 El mejoramiento también implica realizar seguimiento a las acciones formuladas y verificar sus resultados. Cuando las condiciones que dieron origen a los hallazgos cambian o se presentan nuevas situaciones que afectan las proyecciones, la nota técnica puede requerir actualización para mantener su correspondencia con las condiciones de la población, los servicios, los costos y los riesgos identificados.
      .col-lg-4
        figure.h-100
          img.tema5-apertura__imagen(src="@/assets/curso/temas/t5/img2.png" alt="")

    p.mb-0 De esta manera, la evaluación y el mejoramiento constituyen un proceso continuo que permite utilizar los resultados de la ejecución como insumo para fortalecer la nota técnica, orientar las acciones de mejora y mantener actualizada la información que sustenta las proyecciones.

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Identificación y análisis de hallazgos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t5/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La identificación y el análisis de hallazgos permiten reconocer situaciones que pueden afectar la coherencia, consistencia o cumplimiento de las condiciones establecidas en la nota técnica. Los hallazgos pueden surgir de la comparación entre la información proyectada y los resultados de la ejecución, así como de las revisiones realizadas durante los procesos de seguimiento y validación.

    p.mb-4 Un hallazgo debe analizarse considerando qué situación fue identificada, cuál es su posible causa, qué efecto puede generar y qué acción requiere. Este análisis permite determinar si se trata de una situación que debe corregirse, realizarse seguimiento o incorporarse como insumo para actualizar la nota técnica.

    p.mb-4 Algunos ejemplos de hallazgos que pueden identificarse son:

    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t5/img4.svg" alt="")
      .col-lg-8
        ul.lista-ul--color.mb-0
          li
            i.fas.fa-file-lines
            span Diferencias entre la población proyectada y la población registrada durante la ejecución.
          li
            i.fas.fa-file-lines
            span Frecuencias de utilización superiores o inferiores a las consideradas inicialmente.
          li
            i.fas.fa-file-lines
            span Códigos de servicios o tecnologías que requieren verificación o actualización.
          li
            i.fas.fa-file-lines
            span Diferencias entre las cantidades de servicios proyectadas y las efectivamente ejecutadas.
          li
            i.fas.fa-file-lines
            span Tarifas o costos que no corresponden con los valores utilizados en la proyección.
          li
            i.fas.fa-file-lines
            span Inconsistencias entre los cálculos de cantidades, valores unitarios y valores totales.
          li
            i.fas.fa-file-lines
            span Información de soporte insuficiente para sustentar determinados datos o cálculos.
          li
            i.fas.fa-file-lines
            span Variaciones en la red de prestadores o en la cobertura que afectan la planificación de los servicios.
          li
            i.fas.fa-file-lines
            span Cambios en las condiciones de salud de la población que generan variaciones en la utilización de los servicios.

    p.mb-4 Para facilitar el análisis, los hallazgos pueden clasificarse según el componente al que se encuentren relacionados:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 7.
      span Ejemplos de hallazgos en la evaluación de la nota técnica
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th Componente
            th Ejemplo de hallazgo
            th Posible efecto
        tbody
          tr
            td Población
            td La población observada presenta una variación frente a la proyectada.
            td Modificación de las cantidades estimadas.
          tr
            td Frecuencia
            td La utilización de un servicio supera la frecuencia proyectada.
            td Incremento de los servicios requeridos.
          tr
            td Servicios y tecnologías
            td Se identifica un código que requiere actualización.
            td Inconsistencia en la identificación del servicio.
          tr
            td Costos y tarifas
            td El valor utilizado difiere del valor de referencia o del establecido.
            td Variación del valor económico proyectado.
          tr
            td Soportes
            td Los datos utilizados no cuentan con documentación suficiente.
            td Dificultad para sustentar o validar la información.
          tr
            td Riesgo
            td Se presentan variaciones en las condiciones inicialmente consideradas.
            td Necesidad de revisar las proyecciones y medidas de gestión.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 El análisis de los hallazgos constituye la base para formular acciones de mejora, establecer responsables y realizar seguimiento a las situaciones identificadas. De esta manera, los resultados de la evaluación pueden utilizarse para fortalecer la planificación y mantener actualizada la nota técnica.

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Formulación de acciones de mejora

    p.mb-4 La formulación de acciones de mejora permite establecer las medidas necesarias para atender los hallazgos identificados durante la evaluación y el seguimiento de la nota técnica. Estas acciones deben orientarse a corregir las situaciones encontradas, prevenir su recurrencia y fortalecer los procesos relacionados con la planeación y ejecución de los servicios y tecnologías en salud.

    p.mb-4 Para formular una acción de mejora es necesario establecer con claridad:

    .BGF01.px-5.mb-4
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/temas/t5/img5.png" alt="")
        .col-lg-8
          SlyderF(columnas="col-md-4")
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t5/img6.svg" alt="")
              h5.text-center Hallazgo
              p.text-center.mb-0 Situación identificada que requiere intervención.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t5/img7.svg" alt="")
              h5.text-center Acción
              p.text-center.mb-0 Actividad que se realizará para atender el hallazgo.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t5/img8.svg" alt="")
              h5.text-center Responsable
              p.text-center.mb-0 Persona o área encargada de ejecutar la acción.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t5/img9.svg" alt="")
              h5.text-center Plazo
              p.text-center.mb-0 Fecha o periodo establecido para su cumplimiento.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t5/img10.svg" alt="")
              h5.text-center Resultado esperado
              p.text-center.mb-0 Condición que se espera alcanzar con la acción.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t5/img11.svg" alt="")
              h5.text-center Seguimiento
              p.text-center.mb-0 Mecanismo utilizado para comprobar su cumplimiento y efectividad.

    p.mb-4 Por ejemplo, si durante la evaluación se identifica que la frecuencia observada de un servicio presenta una diferencia significativa frente a la proyectada, una acción de mejora puede consistir en revisar la información histórica, analizar las causas de la variación y actualizar la proyección cuando corresponda.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Las acciones formuladas deben guardar relación directa con los hallazgos y contar con los soportes que permitan comprobar su ejecución. El seguimiento de estas acciones facilita determinar si las medidas implementadas permitieron atender la situación identificada y si es necesario establecer nuevas acciones.

    p.mb-4 Como herramienta de organización, puede utilizarse una matriz de plan de mejoramiento:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 8.
      span Plan de acciones de mejora de la nota técnica
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th Hallazgo
            th Acción de mejora
            th Responsable
            th Plazo
            th Resultado esperado
            th Estado
        tbody
          tr
            td Frecuencia de uso superior a la proyectada.
            td Analizar las causas de la variación y revisar la proyección.
            td Área responsable
            td Fecha definida
            td Proyección ajustada y sustentada.
            td En proceso
          tr
            td Diferencia en una tarifa utilizada.
            td Verificar la fuente tarifaria y actualizar el valor cuando corresponda.
            td Área responsable
            td Fecha definida
            td Valor actualizado y soportado.
            td Pendiente

    p.mb-0 La formulación y seguimiento de las acciones de mejora permiten convertir los resultados de la evaluación en medidas concretas y contribuyen a mantener la coherencia, trazabilidad y actualización de la nota técnica.

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Seguimiento al plan de mejoramiento

    p.mb-4 El seguimiento al plan de mejoramiento permite comprobar el avance de las acciones formuladas para atender los hallazgos identificados durante la evaluación de la nota técnica. Para ello, se revisa el cumplimiento de las actividades, los resultados obtenidos y las fechas establecidas, con el propósito de determinar si las acciones implementadas permiten atender las situaciones identificadas.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t5/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cada acción debe contar con un responsable, un plazo de ejecución y un resultado esperado. El seguimiento puede realizarse mediante cortes periódicos, de acuerdo con la naturaleza de la acción y las condiciones del acuerdo de voluntades. Cuando una acción no se cumple dentro del plazo establecido, debe analizarse la causa y determinarse si requiere una nueva fecha, una acción complementaria o una modificación de la estrategia.

    p.mb-4 Para facilitar este proceso, se puede utilizar una matriz de seguimiento:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 9.
      span Seguimiento al plan de mejoramiento de la nota técnica
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th Acción de mejora
            th Meta o resultado esperado
            th Plazo
            th Resultado alcanzado
            th Porcentaje de cumplimiento
            th Estado
        tbody
          tr
            td Revisar las frecuencias de uso de los servicios con mayor desviación.
            td Frecuencias revisadas y sustentadas.
            td 30 días
            td Frecuencias actualizadas.
            td 100 %
            td Cumplida
          tr
            td Verificar las tarifas utilizadas en la proyección.
            td Tarifas verificadas y soportadas.
            td 15 días
            td En proceso de revisión.
            td 60 %
            td En proceso
          tr
            td Actualizar la proyección de servicios.
            td Proyección ajustada con información actualizada.
            td 45 días
            td Pendiente de actualización.
            td 0 %
            td Pendiente

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure.h-100
          img.tema5-panel__imagen(src="@/assets/curso/temas/t5/img13.png" alt="")
      .col-lg-6
        .row.align-items-center.mb-4
          .col-md-2.mb-3.mb-md-0
            figure
              img.tema5-icono(src="@/assets/curso/temas/t5/img14.svg" alt="")
          .col-md-10
            p.mb-0 El porcentaje de cumplimiento puede calcularse cuando la acción permita cuantificar su avance. Una forma sencilla de expresarlo es:
        .cajon.color-primario.p-4.mb-4
          p.text-center.fw-bold.mb-0
            | Porcentaje de cumplimiento =
            span.d-inline-block.text-center.align-middle.mx-2
              span.d-block.border-bottom.border-black.px-2 Avance alcanzado
              span.d-block.px-2 Meta establecida
            | x 100
        p Por ejemplo, si una acción contempla la revisión de 20 servicios y se han revisado 15, el porcentaje de cumplimiento sería:
        .cajon.color-secundario.p-4
          p.text-center.fw-bold.mb-0
            span.d-inline-block.text-center.align-middle.mx-2
              span.d-block.border-bottom.border-black.px-4 15
              span.d-block.px-4 20
            | x 100 = 75 %
    .row.justify-content-center.align-items-center
      .col-10
        p.mb-0 Los resultados del seguimiento deben documentarse y servir como insumo para determinar si las acciones fueron eficaces o si es necesario establecer nuevas medidas. De esta manera, el plan de mejoramiento se convierte en una herramienta para corregir hallazgos, controlar los avances y fortalecer continuamente la nota técnica.

    Separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Actualización de la nota técnica

    p.mb-4 La actualización de la nota técnica consiste en incorporar los cambios que resulten necesarios a partir de los resultados del seguimiento, la evaluación y las acciones de mejora. Su propósito es mantener la información utilizada para las proyecciones acorde con las condiciones observadas durante la ejecución del acuerdo de voluntades.

    p.mb-4 La actualización puede ser necesaria cuando se presentan cambios relevantes en aspectos como:

    .row.align-items-center.mb-4
      .col-lg-8
        LineaTiempoD.color-secundario
          p.mb-0(numero="1" titulo="Población objeto o susceptible") Modificaciones en el número o las características de la población considerada.
          p.mb-0(numero="2" titulo="Servicios y tecnologías") Incorporación, modificación o retiro de servicios y tecnologías.
          p.mb-0(numero="3" titulo="Frecuencias de uso") Variaciones sostenidas frente a las frecuencias inicialmente proyectadas.
          p.mb-0(numero="4" titulo="Costos y tarifas") Cambios que afecten los valores utilizados para las proyecciones.
          p.mb-0(numero="5" titulo="Red de prestadores") Modificaciones que incidan en la disponibilidad o prestación de los servicios.
          p.mb-0(numero="6" titulo="Condiciones de salud") Cambios en el comportamiento de la morbilidad que modifiquen las necesidades de atención.
          p.mb-0(numero="7" titulo="Riesgos") Variaciones que requieran revisar los supuestos relacionados con el riesgo primario o técnico.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t5/img15.png" alt="")

    p.mb-4 La actualización debe sustentarse en información verificable y conservar la trazabilidad de los cambios realizados. Para ello, se deben identificar los elementos modificados, la información que sustenta el cambio, la fecha de actualización y los responsables de su revisión y aprobación.

    p.mb-4 Una forma de organizar este proceso es mediante una matriz de control:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 10.
      span Control de actualización de la nota técnica
    .tabla-a.color-acento-contenido.tema5-tabla.mb-4
      table
        thead
          tr
            th Elemento actualizado
            th Situación identificada
            th Modificación realizada
            th Fuente o soporte
            th Fecha de actualización
        tbody
          tr
            td Frecuencia de uso
            td Variación frente a la proyección inicial.
            td Actualización de la frecuencia.
            td Registros históricos de prestación
            td Fecha
          tr
            td Tarifa
            td Cambio en el valor utilizado.
            td Actualización del valor unitario.
            td Referencia tarifaria
            td Fecha
          tr
            td Población
            td Variación en la población susceptible.
            td Ajuste de la población proyectada.
            td Base de población
            td Fecha
          tr
            td Servicios
            td Modificación en los servicios requeridos.
            td Actualización de servicios y códigos.
            td Información vigente
            td Fecha

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-0
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t5/img16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La actualización no debe realizarse únicamente como consecuencia de una desviación aislada. Es necesario analizar la magnitud, comportamiento y causa de la variación antes de modificar las proyecciones. De esta manera, la nota técnica conserva coherencia con la información disponible y puede utilizarse como instrumento para el seguimiento y la gestión durante la ejecución del acuerdo de voluntades.
</template>

<script>
export default {
  name: 'Tema5',
}
</script>

<style lang="sass"></style>
