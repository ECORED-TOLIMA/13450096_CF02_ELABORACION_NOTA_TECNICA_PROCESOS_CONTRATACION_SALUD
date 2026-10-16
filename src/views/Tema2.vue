<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Elaboración de la nota técnica

    figure.mb-4
      img(src="@/assets/curso/temas/t2/img1.png" alt="")

    p.mb-4 La elaboración de la nota técnica comprende la organización y articulación de la información necesaria para sustentar la proyección de los servicios y tecnologías en salud dentro de un acuerdo de voluntades. Este proceso integra los datos de la población, la identificación y codificación de los servicios, las frecuencias de uso, los costos y las tarifas, así como los elementos relacionados con el seguimiento, la auditoría y la gestión del riesgo.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Para su construcción, es necesario partir de información previamente organizada y validada, de manera que los datos utilizados permitan establecer relaciones entre la población objeto, los servicios requeridos, las cantidades proyectadas y los valores económicos. La información histórica de prestación de servicios constituye uno de los insumos para analizar el comportamiento de la utilización y establecer las proyecciones correspondientes.

    .row.justify-content-center.align-items-center.mb-0
      .col-md-2.col-lg-1.mb-3.mb-md-0
        img.tema2-icono.d-none.d-lg-block(src="@/assets/curso/temas/t2/img2.svg" alt="")
      .col-md-10.col-lg-7
        p.mb-0 La elaboración también debe considerar las condiciones particulares de la modalidad de contratación y los elementos establecidos para el acuerdo de voluntades. De esta manera, la nota técnica se consolida como un documento que integra información técnica y económica para sustentar la planeación de los servicios y facilitar su posterior revisión, validación y seguimiento.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Lineamientos para la elaboración de la nota técnica

    p.mb-4 La elaboración de la nota técnica debe partir de información organizada, verificable y relacionada con las condiciones del acuerdo de voluntades. Para ello, se integran los elementos previamente analizados: población, servicios y tecnologías, frecuencias de uso, costos, tarifas y riesgos, de manera que la información permita sustentar las proyecciones realizadas.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t2/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Como referencia para su elaboración, el #[strong Decreto 441 de 2022] establece elementos relacionados con el contenido de los acuerdos de voluntades y la nota técnica. En este contexto, la construcción debe considerar, entre otros aspectos, los servicios y tecnologías objeto del acuerdo, la población, las frecuencias estimadas, los valores económicos y las condiciones para el seguimiento y gestión del riesgo.

    p.mb-4 Para organizar el proceso, se pueden considerar los siguientes lineamientos:

    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          p.mb-0(numero="A" titulo="Definir la población objeto") Establecer la población que será considerada en el acuerdo y, cuando corresponda, los grupos de población susceptibles de utilizar determinados servicios o tecnologías.
          p.mb-0(numero="B" titulo="Identificar los servicios y tecnologías") Establecer los procedimientos, servicios, medicamentos y demás tecnologías que serán incluidos, utilizando los códigos y tablas de referencia correspondientes.
          p.mb-0(numero="C" titulo="Analizar la información histórica") Revisar los registros de utilización, las frecuencias de uso y los soportes disponibles para identificar comportamientos y establecer proyecciones.
          p.mb-0(numero="D" titulo="Determinar cantidades y frecuencias") Calcular las cantidades esperadas de servicios y tecnologías de acuerdo con la población y el comportamiento histórico analizado.
          p.mb-0(numero="E" titulo="Establecer costos y tarifas") Relacionar las cantidades proyectadas con los valores unitarios o tarifas que correspondan según las condiciones del acuerdo.
          p.mb-0(numero="F" titulo="Considerar los riesgos") Incorporar el análisis del riesgo primario y técnico y los elementos relacionados con auditoría, seguimiento y ajustes.
          p.mb-0(numero="G" titulo="Consolidar la información") Integrar los resultados en una estructura que permita relacionar población, servicios, frecuencias, costos, tarifas y riesgos.
          p.mb-0(numero="H" titulo="Garantizar la trazabilidad") Conservar las fuentes y soportes utilizados para los cálculos y proyecciones, de manera que la información pueda ser posteriormente revisada y validada.
      .col-lg-5.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t2/img4.png" alt="")

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10
        p.mb-0 Estos lineamientos permiten que la nota técnica se construya de manera articulada y que sus componentes puedan ser sometidos posteriormente a validación técnica, jurídica y financiera.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Construcción y organización de la información

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t2/img5.png" alt="")
      .col-lg-7
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La construcción de la nota técnica requiere recopilar, organizar y relacionar la información que sustenta las proyecciones de servicios y tecnologías en salud. Para ello, se integran los datos de la población, los servicios y tecnologías, las frecuencias de uso, los costos y las tarifas, junto con la información necesaria para el seguimiento y la gestión del riesgo.
        p.mb-0 La información histórica de prestación de servicios constituye un insumo importante para este proceso. Los registros disponibles deben organizarse por periodos y relacionarse con los servicios o tecnologías correspondientes, de manera que sea posible identificar su comportamiento y establecer las frecuencias de utilización. También es necesario revisar y depurar los datos para reducir inconsistencias y conservar únicamente la información pertinente para los cálculos.

    p.mb-4 Una forma de organizar la información consiste en establecer una relación entre los principales elementos de la nota técnica:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Elementos para la construcción y organización de la información de la nota técnica
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th Elemento
            th Información que se organiza
            th Utilidad
        tbody
          tr
            td Población
            td Población objeto y población susceptible.
            td Determinar el universo y los grupos considerados en las proyecciones.
          tr
            td Servicios y tecnologías
            td Procedimientos, servicios y tecnologías con sus respectivos códigos.
            td Identificar las atenciones que serán proyectadas.
          tr
            td Frecuencia de uso
            td Registros históricos y cantidades utilizadas por periodo.
            td Estimar la utilización esperada.
          tr
            td Costos y tarifas
            td Valores unitarios, costos y tarifas aplicables.
            td Proyectar los valores económicos.
          tr
            td Riesgos
            td Riesgo primario y riesgo técnico.
            td Considerar posibles variaciones en las necesidades y utilización.
          tr
            td Seguimiento
            td Indicadores, resultados y desviaciones.
            td Facilitar el control y la actualización de la nota técnica.

    p.mb-4 La organización debe permitir conservar la trazabilidad de las fuentes y de los cálculos realizados, de modo que cada resultado pueda ser revisado y sustentado. En el proceso de validación se verifica, entre otros aspectos, la correspondencia entre población, frecuencias, códigos, tarifas y documentación de soporte.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Finalmente, la información consolidada constituye la base para integrar la nota técnica y realizar posteriormente su validación, seguimiento y actualización de acuerdo con los resultados obtenidos durante la ejecución del acuerdo de voluntades.

    .tarjeta.tema4-slyder.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t2/img6.svg" alt="")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Nota técnica: Decreto 441 de 2022. Lineamientos sobre su construcción, uso y seguimiento
              p.mb-0 Para complementar la información relacionada con la construcción de la nota técnica, se recomienda consultar el documento disponible en el siguiente enlace:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/DOA/nota-tecnica-decreto-441-de-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
              )
                span Enlace web
                i.fas.fa-external-link-alt

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Nota técnica según la modalidad de contratación

    p.mb-4 La nota técnica debe guardar correspondencia con la modalidad de contratación establecida en el acuerdo de voluntades, debido a que las condiciones de reconocimiento económico, proyección de servicios y gestión del riesgo pueden variar según la forma en que se acuerde el pago. Por esta razón, la información poblacional, las frecuencias de uso, los servicios y tecnologías, los costos y las tarifas deben organizarse de acuerdo con las características de la modalidad seleccionada.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t2/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En las modalidades de pago prospectivas, el reconocimiento económico se establece previamente a la prestación de los servicios, con base en una proyección de las necesidades de atención y de los recursos requeridos. En este grupo pueden encontrarse mecanismos como la capitación, los pagos globales prospectivos y los paquetes o conjuntos integrales de atención, según las condiciones acordadas.

    p En las modalidades retrospectivas, el reconocimiento económico se determina a partir de los servicios efectivamente prestados y soportados durante el periodo correspondiente. El pago por servicio constituye un ejemplo de esta modalidad.
    p.mb-4 A continuación, se presentan las principales características de la nota técnica según la modalidad de contratación:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Características de la nota técnica según la modalidad de contratación
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th Modalidad de pago
            th Característica
            th Elementos de la nota técnica que adquieren especial relevancia
        tbody
          tr
            td Prospectiva
            td El reconocimiento económico se establece previamente a la prestación, a partir de una proyección.
            td Población, frecuencia de uso, cantidades proyectadas, costos, tarifas y gestión del riesgo.
          tr
            td Retrospectiva
            td El reconocimiento económico se determina a partir de los servicios efectivamente prestados.
            td Servicios realizados, soportes de atención, frecuencias observadas, costos, tarifas y seguimiento de la ejecución.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 En consecuencia, la construcción de la nota técnica debe considerar las condiciones específicas de la modalidad de contratación y mantener coherencia entre las proyecciones, los mecanismos de pago y la gestión del riesgo. La información utilizada debe permitir sustentar los valores establecidos y facilitar el seguimiento de los resultados durante la ejecución del acuerdo.

    p.mb-0 Para efectos de la nota técnica, la modalidad de contratación no modifica la necesidad de contar con información organizada y sustentada; determina la forma en que dicha información se utiliza para proyectar, reconocer y hacer seguimiento a los servicios y recursos involucrados.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Integración y consolidación de la nota técnica

    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t2/img8.png" alt="")
      .col-lg-7
        p.mb-4 La integración y consolidación de la nota técnica consiste en articular la información recopilada, analizada y calculada en los apartados anteriores, de manera que exista correspondencia entre la población objeto, los servicios y tecnologías, las frecuencias de uso, las cantidades proyectadas, los costos, las tarifas y los riesgos. Esta integración permite obtener una proyección coherente de los recursos requeridos para la atención de la población.
        .row.align-items-center
          .col-md-2.mb-3.mb-md-0
            img.tema2-icono.d-none.d-lg-block(src="@/assets/curso/temas/t2/img9.svg" alt="")
          .col-md-10
            p.mb-0 Para consolidar la información, es necesario verificar que los datos utilizados correspondan al mismo periodo de análisis y que los servicios y tecnologías estén correctamente identificados y codificados. También se deben relacionar las frecuencias calculadas con la población susceptible y con los valores unitarios definidos, de manera que sea posible establecer los valores proyectados.

    p.mb-4 El proceso puede organizarse mediante la siguiente secuencia:

    .BGF01.px-5.mb-4
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/temas/t2/img9.png" alt="")
        .col-lg-8
          SlyderF(columnas="col-md-4")
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t2/img10.svg" alt="")
              h5.text-center.mb-0 Población objeto
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t2/img11.svg" alt="")
              h5.text-center.mb-0 Población susceptible
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t2/img12.svg" alt="")
              h5.text-center.mb-0 Servicios y tecnologías
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t2/img13.svg" alt="")
              h5.text-center.mb-0 Frecuencias de uso
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t2/img14.svg" alt="")
              h5.text-center.mb-0 Cantidades proyectadas
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t2/img15.svg" alt="")
              h5.text-center.mb-0 Costos y tarifas
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t2/img16.svg" alt="")
              h5.text-center.mb-0 Valor proyectado
            .tarjeta.tema1-slider-card.p-4.h-100
              img.tema1-slider-card__icono.mb-3(src="@/assets/curso/temas/t2/img17.svg" alt="")
              h5.text-center.mb-0 Riesgo y seguimiento
            

    p.mb-4 La consolidación debe conservar la trazabilidad de las fuentes utilizadas y de los cálculos realizados. Esto facilita la revisión posterior de la información y permite identificar inconsistencias antes de someter la nota técnica a los procesos de validación técnica, jurídica y financiera.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Como resultado, la nota técnica debe presentar de manera articulada la información que sustenta las proyecciones y permitir su seguimiento durante la ejecución del acuerdo de voluntades. Cuando se identifiquen variaciones en la población, utilización de servicios, condiciones de la red, cobertura u otros factores relevantes, la información consolidada podrá servir como base para realizar los ajustes correspondientes.

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Ejercicio de construcción de una nota técnica

    p.mb-4 Para integrar los conocimientos desarrollados en este componente, se propone un ejercicio práctico de construcción de una nota técnica a partir de información simulada. El ejercicio permite organizar la población, identificar los servicios y tecnologías, analizar las frecuencias de uso, establecer costos y tarifas y consolidar los resultados en una estructura coherente. Este tipo de ejercicio se encuentra contemplado en el material de referencia como una actividad práctica para aplicar los elementos necesarios para la construcción de la nota técnica.

    .tema2-panel.mb-4
      .row.g-0.align-items-stretch
        .col-lg-5
          img.tema2-panel__imagen(src="@/assets/curso/temas/t2/img18.png" alt="")
        .col-lg-7
          .p-4.h-100.d-flex.align-items-center
            .row.align-items-center
              .col-lg-2.mb-4
                img.tema2-icono.d-none.d-lg-block(src="@/assets/curso/temas/t2/img19.svg" alt="")
              .col-md-12
                p.mb-0 #[strong Situación planteada:] una entidad responsable del aseguramiento requiere proyectar los servicios y tecnologías en salud para una población afiliada durante un periodo de contratación. Para ello, dispone de información sobre la población, registros históricos de prestación de servicios, códigos de los procedimientos, frecuencias de utilización y valores de referencia.

    p.mb-4 Para desarrollar el ejercicio se deben realizar las siguientes actividades:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          p.mb-0(numero="A" titulo="Caracterizar la población") Establecer la población objeto e identificar la población susceptible para los servicios analizados.
          p.mb-0(numero="B" titulo="Depurar la información histórica") Organizar los registros disponibles por servicio, tecnología y periodo, verificando su consistencia.
          p.mb-0(numero="C" titulo="Identificar y codificar los servicios") Relacionar cada servicio o procedimiento con el código correspondiente.
          p.mb-0(numero="D" titulo="Calcular las frecuencias de uso") Determinar la frecuencia de utilización a partir de los registros históricos y la población susceptible.
          p.mb-0(numero="E" titulo="Proyectar las cantidades") Calcular la cantidad esperada de servicios para la población definida.
          p.mb-0(numero="F" titulo="Establecer costos y tarifas") Asignar los valores unitarios correspondientes y calcular el valor proyectado de los servicios.
          p.mb-0(numero="G" titulo="Organizar los servicios") Agrupar la información de acuerdo con las características definidas para el ejercicio y la modalidad de contratación.
          p.mb-0(numero="H" titulo="Considerar los riesgos") Incorporar los elementos relacionados con el riesgo primario y el riesgo técnico.
          p.mb-0(numero="I" titulo="Consolidar la información") Integrar los resultados en una estructura que permita relacionar población, servicios, frecuencias, cantidades y valores económicos.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/t2/img20.png" alt="")

    p Como producto del ejercicio, se debe obtener una matriz consolidada de la nota técnica, en la que cada servicio o tecnología pueda relacionarse con su código, población susceptible, frecuencia, cantidad proyectada, valor unitario y valor total. Esta organización facilita posteriormente los procesos de revisión y validación de la nota técnica.
    p.mb-4 A continuación, se presenta un ejemplo de la estructura que puede utilizarse para organizar esta información:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4.
      span Ejemplo de estructura para la matriz
    .tabla-a.color-acento-contenido.tema2-tabla.mb-4
      table
        thead
          tr
            th Código
            th Servicio o tecnología
            th Población susceptible
            th Frecuencia
            th Cantidad proyectada
            th Valor unitario
            th Valor proyectado
        tbody
          tr
            td Código correspondiente
            td Servicio 1
            td 2.000
            td 1,5
            td 3.000
            td $50.000
            td $150.000.000
          tr
            td Código correspondiente
            td Servicio 2
            td 1.200
            td 2,0
            td 2.400
            td $30.000
            td $72.000.000

    p.mb-0 Los valores utilizados en este ejemplo son simulados y tienen únicamente finalidad pedagógica. En un ejercicio aplicado a información real, los datos deben proceder de fuentes verificables y contar con los soportes correspondientes.
</template>

<script>
export default {
  name: 'Tema2',
}
</script>

<style lang="sass"></style>
