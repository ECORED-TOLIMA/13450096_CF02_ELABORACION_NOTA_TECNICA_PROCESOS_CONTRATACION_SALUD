<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

const mensajeCorrecto =
  '¡Excelente trabajo! Se evidencia un buen dominio de los elementos, procedimientos y criterios relacionados con la elaboración, validación, seguimiento, evaluación y mejoramiento de la nota técnica en salud.'
const mensajeIncorrecto =
  'Revise nuevamente el contenido del componente formativo.'

const preguntas = [
  {
    texto:
      '¿Cuál es uno de los elementos fundamentales que integra la estructura de una nota técnica?',
    opciones: [
      ['a', 'Únicamente las condiciones jurídicas del contrato.', false],
      [
        'b',
        'La población, los servicios, las frecuencias, los costos y los riesgos.',
        true,
      ],
      ['c', 'Solamente los indicadores financieros.', false],
      ['d', 'Exclusivamente los resultados de auditoría.', false],
    ],
  },
  {
    texto:
      '¿Cuál es el propósito principal de identificar y codificar los servicios y procedimientos en la nota técnica?',
    opciones: [
      ['a', 'Eliminar la necesidad de analizar frecuencias.', false],
      ['b', 'Determinar automáticamente el valor total del contrato.', false],
      ['c', 'Sustituir la caracterización de la población.', false],
      [
        'd',
        'Establecer una identificación estandarizada de los servicios y procedimientos.',
        true,
      ],
    ],
  },
  {
    texto:
      'Una población susceptible de 2.000 personas registra 3.000 servicios durante un periodo. ¿Cuál es la frecuencia de uso calculada como servicios utilizados divididos entre población susceptible?',
    opciones: [
      ['a', '1,5', true],
      ['b', '0,67', false],
      ['c', '5.000', false],
      ['d', '2,0', false],
    ],
  },
  {
    texto:
      '¿Qué relación permite calcular el costo total cuando se conocen los costos fijos y variables?',
    opciones: [
      ['a', 'Costos fijos − costos variables.', false],
      ['b', 'Costos fijos ÷ costos variables.', false],
      ['c', 'Costos fijos + costos variables.', true],
      ['d', 'Costos fijos × costos variables.', false],
    ],
  },
  {
    texto:
      '¿Qué caracteriza principalmente al riesgo primario dentro de la nota técnica?',
    opciones: [
      ['a', 'La variación de las tarifas negociadas.', false],
      [
        'b',
        'Las condiciones y eventos de salud que pueden generar necesidades de atención.',
        true,
      ],
      ['c', 'La diferencia entre costos fijos y variables.', false],
      ['d', 'El cumplimiento de los plazos del plan de mejoramiento.', false],
    ],
  },
  {
    texto:
      '¿Cuál es una característica de la elaboración de la nota técnica según la modalidad de contratación?',
    opciones: [
      [
        'a',
        'La información debe organizarse de acuerdo con las características de la modalidad de pago.',
        true,
      ],
      [
        'b',
        'La modalidad de contratación elimina la necesidad de utilizar información histórica.',
        false,
      ],
      [
        'c',
        'Todas las modalidades utilizan necesariamente las mismas proyecciones.',
        false,
      ],
      [
        'd',
        'La modalidad determina únicamente los códigos de los procedimientos.',
        false,
      ],
    ],
  },
  {
    texto:
      '¿Cuál es el propósito de consolidar la información de la nota técnica?',
    opciones: [
      ['a', 'Presentar únicamente los valores económicos.', false],
      ['b', 'Eliminar la necesidad de validar los datos.', false],
      ['c', 'Sustituir el seguimiento de la ejecución.', false],
      [
        'd',
        'Articular población, servicios, frecuencias, cantidades, costos, tarifas y riesgos.',
        true,
      ],
    ],
  },
  {
    texto: '¿Qué busca comprobar principalmente la validación técnica?',
    opciones: [
      ['a', 'La conveniencia comercial del acuerdo.', false],
      [
        'b',
        'Únicamente el cumplimiento de las cláusulas contractuales.',
        false,
      ],
      [
        'c',
        'La coherencia entre población, frecuencias, códigos, tarifas y soportes.',
        true,
      ],
      ['d', 'Solamente la sostenibilidad financiera.', false],
    ],
  },
  {
    texto: '¿Qué aspecto corresponde principalmente a la validación jurídica?',
    opciones: [
      [
        'a',
        'La modalidad de pago y su coherencia con las condiciones del acuerdo.',
        true,
      ],
      ['b', 'El cálculo de la frecuencia de uso.', false],
      ['c', 'La suma de costos fijos y variables.', false],
      ['d', 'El porcentaje de servicios ejecutados.', false],
    ],
  },
  {
    texto: '¿Qué se busca comprobar mediante la validación financiera?',
    opciones: [
      ['a', 'La correcta codificación de los procedimientos.', false],
      [
        'b',
        'La consistencia de cantidades, costos, tarifas y valores proyectados.',
        true,
      ],
      ['c', 'La habilitación de los servicios.', false],
      [
        'd',
        'La definición de los responsables del plan de mejoramiento.',
        false,
      ],
    ],
  },
  {
    texto:
      'Si una nota técnica proyecta 3.000 servicios y durante la ejecución se registran 3.300, ¿cuál es la desviación porcentual respecto de lo proyectado?',
    opciones: [
      ['a', '10 %', true],
      ['b', '5 %', false],
      ['c', '15 %', false],
      ['d', '20 %', false],
    ],
  },
  {
    texto:
      '¿Cuál de las siguientes situaciones puede justificar el análisis de un ajuste en la planificación de servicios?',
    opciones: [
      ['a', 'La existencia de un formato con título diferente.', false],
      [
        'b',
        'La ausencia de una operación matemática en un ejemplo pedagógico.',
        false,
      ],
      [
        'c',
        'La modificación de una palabra en la descripción del documento.',
        false,
      ],
      [
        'd',
        'Una variación relevante y sustentada en la población o en la frecuencia de utilización.',
        true,
      ],
    ],
  },
  {
    texto:
      '¿Cuál es una finalidad del seguimiento mediante indicadores de ejecución?',
    opciones: [
      [
        'a',
        'Comparar el comportamiento observado con las proyecciones establecidas.',
        true,
      ],
      ['b', 'Reemplazar los procesos de validación jurídica.', false],
      ['c', 'Eliminar la necesidad de documentar los resultados.', false],
      ['d', 'Establecer automáticamente todas las tarifas.', false],
    ],
  },
  {
    texto:
      '¿Qué situación constituye un ejemplo de hallazgo en la evaluación de una nota técnica?',
    opciones: [
      ['a', 'La nota técnica contiene un título institucional.', false],
      ['b', 'El documento utiliza una tabla.', false],
      ['c', 'La nota técnica contiene una introducción.', false],
      [
        'd',
        'La frecuencia observada de un servicio presenta una diferencia significativa frente a la proyectada.',
        true,
      ],
    ],
  },
  {
    texto: '¿Qué elementos deben definirse para formular una acción de mejora?',
    opciones: [
      ['a', 'Únicamente el hallazgo y el título del documento.', false],
      ['b', 'Solo el responsable y la fecha.', false],
      [
        'c',
        'El hallazgo, la acción, el responsable, el plazo y el resultado esperado.',
        true,
      ],
      ['d', 'Únicamente el porcentaje de cumplimiento.', false],
    ],
  },
  {
    texto:
      'Una acción tiene como meta revisar 20 servicios y ya se han revisado 15. ¿Cuál es su porcentaje de cumplimiento?',
    opciones: [
      ['a', '60 %', false],
      ['b', '70 %', false],
      ['c', '80 %', false],
      ['d', '75 %', true],
    ],
  },
  {
    texto:
      '¿Qué característica debe tener el seguimiento al plan de mejoramiento?',
    opciones: [
      ['a', 'Debe comprobar el avance de las acciones y sus resultados.', true],
      ['b', 'Debe realizarse únicamente cuando finaliza el contrato.', false],
      ['c', 'Debe limitarse a registrar los hallazgos iniciales.', false],
      ['d', 'Debe excluir los plazos establecidos.', false],
    ],
  },
  {
    texto: '¿Cuál es una razón para actualizar la nota técnica?',
    opciones: [
      ['a', 'Cambiar el orden de los títulos del documento.', false],
      ['b', 'Modificar el diseño gráfico del documento.', false],
      [
        'c',
        'Incorporar cambios relevantes en población, servicios, frecuencias, costos o riesgos.',
        true,
      ],
      ['d', 'Eliminar los soportes utilizados para los cálculos.', false],
    ],
  },
  {
    texto:
      '¿Qué característica debe conservar la información utilizada para construir y actualizar la nota técnica?',
    opciones: [
      ['a', 'La posibilidad de modificarse sin dejar registro.', false],
      [
        'b',
        'La trazabilidad de las fuentes y de los cálculos realizados.',
        true,
      ],
      ['c', 'La exclusión de los soportes históricos.', false],
      ['d', 'La utilización de valores sin fuente identificada.', false],
    ],
  },
  {
    texto:
      '¿Cuál describe mejor el proceso integral desarrollado para la nota técnica?',
    opciones: [
      [
        'a',
        'Identificar, elaborar, validar, ajustar, evaluar y mejorar la nota técnica.',
        true,
      ],
      [
        'b',
        'Codificar servicios y finalizar el documento sin seguimiento.',
        false,
      ],
      [
        'c',
        'Calcular tarifas y realizar únicamente una validación financiera.',
        false,
      ],
      [
        'd',
        'Caracterizar la población y omitir la revisión de resultados.',
        false,
      ],
    ],
  },
].map((pregunta, index) => ({
  id: index + 1,
  texto: pregunta.texto,
  imagen: `@/assets/actividad/imagen${(index % 10) + 1}.png`,
  barajarRespuestas: true,
  opciones: pregunta.opciones.map(([id, texto, esCorrecta]) => ({
    id,
    texto,
    esCorrecta,
  })),
  mensaje_correcto: mensajeCorrecto,
  mensaje_incorrecto: mensajeIncorrecto,
}))

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Elaboración y validación de la nota técnica',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> reconocer los principales elementos, procedimientos y criterios relacionados con la elaboración, validación, seguimiento, evaluación y mejoramiento de la nota técnica, mediante la aplicación de conceptos, cálculos e interpretación de situaciones propias de su construcción y ejecución.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas,
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

<style lang="sass"></style>
