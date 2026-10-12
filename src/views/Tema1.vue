<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estructura y elementos previos de la nota técnica

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t1/img1.png" alt="")
      .col-lg-7
        .row.align-items-start
          .col-md-2.mb-3.mb-md-0
            img.tema1-icono.d-none.d-lg-block(src="@/assets/curso/temas/t1/img2.svg" alt="")
          .col-md-10
            p La elaboración de una nota técnica requiere organizar previamente la información que sustenta la proyección de los servicios y tecnologías en salud. Para ello, se consideran elementos relacionados con la identificación de los servicios y procedimientos, la población objeto, las frecuencias de uso, los costos, las tarifas y los riesgos asociados a la atención. Estos elementos permiten consolidar una base técnica para la construcción de la nota y facilitan su posterior revisión y validación.
        .cajon.color-primario.p-4
          p.mb-0 Antes de integrar la información en el documento, es necesario verificar que los datos utilizados sean pertinentes, consistentes y se encuentren relacionados con las condiciones del acuerdo de voluntades. La información histórica de prestación de servicios, los códigos de los servicios y tecnologías, las frecuencias de uso y los valores económicos constituyen insumos para realizar los cálculos y establecer las proyecciones correspondientes.

    p.mb-0 En este proceso también se consideran los riesgos primario y técnico, debido a su relación con las condiciones de salud de la población y con la variabilidad en la utilización de servicios y recursos. De esta manera, los elementos previos permiten estructurar una nota técnica con información organizada y articulada con las características de la población, los servicios requeridos y las condiciones económicas de la contratación.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Estructura de la nota técnica

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t1/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La nota técnica organiza la información necesaria para sustentar la planeación de los servicios y tecnologías en salud que hacen parte de un acuerdo de voluntades. Su estructura integra elementos técnicos, poblacionales y económicos que permiten establecer una proyección de los servicios requeridos y los recursos asociados. Entre sus elementos principales se encuentran la identificación de los servicios y tecnologías, la población objeto, las frecuencias o cantidades estimadas, los valores económicos y las condiciones relacionadas con el seguimiento, la auditoría y la gestión del riesgo.

    p.mb-4 Para su construcción, la información puede organizarse de manera secuencial, de acuerdo con la relación entre la población, los servicios y los valores proyectados:

    .BGF01.px-5.mb-4
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/temas/t1/img4.png" alt="")
        .col-lg-8
          SlyderF(columnas="col-md-4")
            
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img5.svg" alt="")
              h5.text-center.mb-0 Población objeto
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img6.svg" alt="")
              h5.text-center.mb-0 Servicios y tecnologías
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img7.svg" alt="")
              h5.text-center.mb-0 Frecuencia de uso
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img8.svg" alt="")
              h5.text-center.mb-0 Cantidad estimada
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img9.svg" alt="")
              h5.text-center.mb-0 Costos y tarifas
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img10.svg" alt="")
              h5.text-center.mb-0 Valor proyectado
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img11.svg" alt="")
              h5.text-center.mb-0 Seguimiento y gestión del riesgo

    p.mb-4 Esta organización facilita la integración de los datos provenientes de fuentes históricas y de los diferentes soportes utilizados para sustentar los cálculos. También permite realizar posteriormente las validaciones técnica, jurídica y financiera requeridas para determinar la consistencia de la nota técnica.

    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 En consecuencia, la estructura de la nota técnica no se limita a la presentación de valores económicos, sino que articula la información que permite explicar, sustentar y hacer seguimiento a las proyecciones de servicios y tecnologías en salud.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Identificación de servicios y procedimientos

    p La identificación de los servicios y procedimientos constituye un elemento fundamental para la construcción de la nota técnica, debido a que permite establecer con precisión las atenciones y tecnologías que serán consideradas en el acuerdo de voluntades. Para ello, cada servicio o procedimiento debe asociarse con el código correspondiente en las tablas de referencia estandarizadas y relacionarse con la población y las frecuencias de uso proyectadas.
    p.mb-4 Entre las principales referencias para esta identificación se encuentran:

    .row.justify-content-center.mb-5
      .col-md-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t1/img12.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center CUPS (Clasificación Única de Procedimientos en Salud)
              p.mb-0 Permite identificar y codificar los procedimientos y servicios de salud.
      .col-md-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t1/img13.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center CUM (Código Único de Medicamentos)
              p.mb-0 Permite identificar los medicamentos registrados y autorizados.
      .col-md-6.col-xl-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t1/img14.svg" alt="")
          .tarjeta.bg00.w-100.h-100.mt-3
            .p-4
              h5.text-center IUM (Identificador Único de Medicamentos)
              p.mb-0 Facilita la identificación estandarizada de los medicamentos en los procesos de información del sector salud.

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t1/img15.png" alt="")
      .col-lg-7
        p La selección de los códigos debe realizarse de acuerdo con las tablas y clasificaciones vigentes. Además, es necesario comprobar que los códigos utilizados correspondan efectivamente al servicio o procedimiento que se pretende incluir y que no se encuentren desactualizados. Esta verificación contribuye a mantener la consistencia entre la información de la nota técnica, los registros de prestación de servicios y los procesos posteriores de seguimiento y validación.
        .cajon.color-primario.p-4
          p.mb-0 Una vez identificados los servicios y procedimientos, estos pueden organizarse y agruparse según sus características, nivel de atención u otras condiciones pertinentes para el análisis. Posteriormente, esta información se relaciona con la población susceptible y las frecuencias históricas o proyectadas, con el propósito de establecer las cantidades que serán consideradas en la nota técnica.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Elaboración de cálculos e indicadores

    p.mb-4 La elaboración de cálculos e indicadores permite transformar la información poblacional y los datos históricos de utilización de servicios en valores que pueden ser utilizados para proyectar las necesidades de atención. Para este proceso se consideran variables como la población objeto, la población susceptible, los servicios o tecnologías utilizados, las frecuencias de uso y los costos asociados.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        .row.align-items-center.mb-3
          .col-md-2.mb-3.mb-md-0
            img.tema1-icono.d-none.d-md-block(src="@/assets/curso/temas/t1/img16.svg" alt="")
          .col-md-10
            p.mb-0 Uno de los cálculos fundamentales corresponde a la frecuencia de uso, que relaciona el número de servicios utilizados con la población susceptible durante un periodo determinado. De manera general, puede expresarse mediante la siguiente fórmula:
        .cajon.color-secundario.p-4.mb-4
          p.text-center.fw-bold.mb-0
            | Frecuencia de uso =
            span.d-inline-block.text-center.align-middle.ms-2
              span.d-block.border-bottom.border-black.px-2 Número de servicios utilizados
              span.d-block.px-2 Población susceptible
        p Por ejemplo, si durante un periodo se registraron 3.000 atenciones para una población susceptible de 2.000 personas, la frecuencia de uso sería:
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajon.color-primario.p-4.mb-4
              p.text-center.fw-bold.mb-0
                span.d-inline-block.text-center.align-middle
                  span.d-block.border-bottom.border-black.px-4 3.000
                  span.d-block.px-4 2.000
                |  = 1,5
        
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/img17.png" alt="")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/img18.svg" alt="")
      .col-lg-6
        p Esto significa que, durante el periodo analizado, se registraron en promedio 1,5 atenciones por persona susceptible.

        p A partir de la frecuencia obtenida, puede estimarse la cantidad de servicios que se requerirían para una población determinada:
        .cajon.color-secundario.p-4.mb-4
          p.text-center.fw-bold.mb-0 Cantidad proyectada de servicios = Población susceptible x Frecuencia de uso
        p Por ejemplo, para una población susceptible de 2.500 personas y una frecuencia de uso de 1,5, la cantidad proyectada sería:
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajon.color-primario.p-4.mb-4
              p.text-center.fw-bold.mb-0 2.500 x 1,5 = 3.750
        

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        .row.align-items-center.mb-4
          .col-md-2.mb-3.mb-md-0
            img.tema1-icono.d-none.d-md-block(src="@/assets/curso/temas/t1/img19.svg" alt="")
          .col-md-10
            p.mb-2 Por tanto, se proyectarían 3.750 servicios para el periodo establecido.
            p.mb-0 Cuando se dispone de un costo unitario, también es posible estimar el valor asociado a los servicios proyectados:
        .cajon.color-secundario.p-4.mb-5
          p.text-center.fw-bold.mb-0 Costo proyectado = Cantidad proyectada de servicios x Costo unitario
        p Así, si se proyectan 3.750 servicios y cada uno tiene un costo unitario de $40.000, el costo proyectado sería:
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajon.color-primario.p-4.mb-4
              p.text-center.fw-bold.mb-0 3.750 x $40.000 = $150.000.000
        p Estos cálculos permiten relacionar la información de población, utilización y costos, y constituyen una base para la proyección económica de la nota técnica.
        
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/img20.png" alt="")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Los indicadores complementan estos cálculos al facilitar el seguimiento del comportamiento de variables relevantes. Por ejemplo, un indicador porcentual de utilización puede expresarse de la siguiente manera:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        .cajon.color-secundario.p-4.mb-4
          p.text-center.fw-bold.mb-0
            | Porcentaje de utilización =
            span.d-inline-block.text-center.align-middle.mx-2
              span.d-block.border-bottom.border-black.px-2 Número de servicios utilizados
              span.d-block.px-2 Población susceptible
            | x 100
        

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t1/img21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La información histórica debe organizarse por periodos y someterse a procesos de depuración y validación antes de utilizarse para realizar proyecciones. Cuando se presentan diferencias significativas en el comportamiento de utilización entre grupos de población, pueden establecerse frecuencias diferenciadas y utilizar ponderadores de acuerdo con las características identificadas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 De esta manera, los cálculos e indicadores permiten sustentar las cantidades y valores incorporados en la nota técnica y facilitan su posterior seguimiento y validación. Es importante conservar la trazabilidad de las fuentes y de los procedimientos utilizados, de modo que los resultados puedan ser revisados desde las perspectivas técnica, jurídica y financiera.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Costos y tarifas

    p Los costos y las tarifas constituyen elementos fundamentales para establecer el valor económico de los servicios y tecnologías incluidos en la nota técnica. Su análisis permite relacionar las cantidades proyectadas con los recursos requeridos para la prestación de los servicios y determinar los valores que serán considerados en el acuerdo de voluntades.
    p.mb-4 El costo corresponde a los recursos necesarios para producir o prestar un servicio. En su estimación pueden considerarse los siguientes elementos:

    .BGF01.px-5.mb-4
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/temas/t1/img22.png" alt="")
        .col-lg-8
          SlyderF(columnas="col-md-4")
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img23.svg" alt="")
              h5.text-center.mb-0 Insumos y materiales requeridos para la prestación.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img24.svg" alt="")
              h5.text-center.mb-0 Talento humano, según el tiempo destinado a la atención.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img25.svg" alt="")
              h5.text-center.mb-0 Depreciación de equipos e infraestructura.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img29.svg" alt="")
              h5.text-center.mb-0 Recursos físicos y tecnológicos utilizados.
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t1/img30.svg" alt="")
              h5.text-center.mb-0 Recursos administrativos relacionados con la prestación.

    p.mb-4 De acuerdo con su comportamiento, los costos pueden clasificarse en fijos y variables. Los costos fijos permanecen relativamente estables frente a las variaciones en el volumen de servicios, mientras que los costos variables cambian de acuerdo con la cantidad de servicios prestados. También pueden diferenciarse en directos e indirectos, según su relación con la prestación específica del servicio.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p De manera general, el costo total puede expresarse mediante la siguiente relación:
        .row.justify-content-center.align-items-center
          .col-10
            .cajon.color-primario.p-4.mb-4
              p.text-center.fw-bold.mb-0 Costo total = Costos fijos + Costos variables
        p Por otra parte, la tarifa corresponde al valor económico asignado a un servicio o tecnología para efectos de reconocimiento o negociación. Para establecer estos valores pueden utilizarse diferentes referentes, de acuerdo con las condiciones del acuerdo de voluntades. El insumo contempla como referencias las tarifas institucionales, los manuales tarifarios y otros valores de referencia, entre ellos el SOAT y la UVB cuando corresponda.
        p En la construcción de la nota técnica, los costos y las tarifas deben relacionarse con las cantidades proyectadas. Así, el valor estimado de un servicio puede calcularse mediante:
        .row.justify-content-center.align-items-center
          .col-10
            .cajon.color-secundario.p-4
              p.text-center.fw-bold.mb-0 Valor proyectado = Cantidad proyectada x Tarifa o valor unitario
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/t1/img26.png" alt="")
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.align-items-center.tema1-bordes-color.mb-4
          .col-lg-12
            p.mt-4 Por ejemplo, si se proyectan 3.000 procedimientos y el valor unitario acordado es de $50.000, el valor proyectado será:
            .row.justify-content-center.mb-4
              .col-lg-6
                .tema1-panel.p-4
                  p.text-center.fw-bold.mb-0 3.000 x $50.000 = $150.000.000

        .row.align-items-center.mb-0
          .col-md-2.col-lg-1.mb-3.mb-md-0
            img.tema1-icono.d-none.d-md-block(src="@/assets/curso/temas/t1/img27.svg" alt="")
          .col-md-10.col-lg-11
            p.mb-0 La información utilizada para establecer costos y tarifas debe encontrarse debidamente sustentada y ser coherente con los servicios identificados, las frecuencias de uso y las condiciones de contratación. Esta relación permite consolidar los valores económicos de la nota técnica y facilita su posterior validación financiera.

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Riesgo primario y riesgo técnico

    p.mb-4 La identificación de los riesgos constituye un elemento importante en la construcción de la nota técnica, debido a que permite considerar las condiciones que pueden influir en la utilización de los servicios y tecnologías en salud y en los recursos requeridos para su atención. En este contexto, se diferencian el riesgo primario y el riesgo técnico, los cuales se relacionan con aspectos distintos de la atención y de su comportamiento esperado.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t1/img28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El riesgo primario se relaciona con la ocurrencia de condiciones o eventos de salud en la población que pueden requerir atención. Su análisis considera las características de la población, sus necesidades y los eventos que pueden generar demanda de servicios y tecnologías. Por ello, guarda relación con la caracterización poblacional, los parámetros epidemiológicos y la frecuencia esperada de utilización.

    p.mb-4 El riesgo técnico se relaciona con la variabilidad que puede presentarse en la utilización de servicios y recursos necesarios para atender a una población. Esta variabilidad puede estar asociada con factores como la complejidad de las atenciones, las condiciones de salud, la aparición de complicaciones y las diferencias entre la utilización esperada y la observada. En la nota técnica, su consideración contribuye al análisis de las cantidades, costos y proyecciones.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Diferencias entre riesgo primario y riesgo técnico
    .tabla-a.color-acento-contenido.tema1-tabla.mb-4
      table
        thead
          tr
            th Aspecto
            th Riesgo primario
            th Riesgo técnico
        tbody
          tr
            td Relación principal
            td Condiciones y eventos de salud de la población.
            td Variabilidad en la utilización de servicios y recursos.
          tr
            td Se analiza a partir de
            td Características, necesidades y condiciones de salud de la población.
            td Utilización histórica, frecuencias, complejidad y comportamiento de los servicios.
          tr
            td Relación con la nota técnica
            td Contribuye a estimar las necesidades de atención.
            td Contribuye a proyectar el uso de servicios y los recursos requeridos.

    p.mb-0 La diferenciación entre ambos riesgos permite incorporar en la nota técnica tanto las condiciones de salud que pueden generar necesidades de atención como las variaciones que pueden presentarse durante la prestación de los servicios. De esta manera, el análisis del riesgo complementa la información poblacional, las frecuencias de uso y los costos utilizados para construir las proyecciones.
</template>

<script>
export default {
  name: 'Tema1',
}
</script>

<style lang="sass"></style>
