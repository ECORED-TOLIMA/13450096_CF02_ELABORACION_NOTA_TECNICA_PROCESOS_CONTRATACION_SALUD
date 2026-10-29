export default {
  global: {
    Name: 'Elaboración y validación de la nota técnica',
    Description:
      'El componente desarrolla los elementos necesarios para elaborar, revisar, validar, ajustar y evaluar una nota técnica, integrando cálculos, costos, indicadores, riesgos, servicios y modalidades de contratación. Asimismo, aborda los procesos de validación técnica, jurídica y financiera, el seguimiento de resultados y la formulación de acciones de mejora para fortalecer la calidad y pertinencia de la nota técnica.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura y elementos previos de la nota técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura de la nota técnica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Identificación de servicios y procedimientos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elaboración de cálculos e indicadores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Costos y tarifas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Riesgo primario y riesgo técnico',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elaboración de la nota técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lineamientos para la elaboración de la nota técnica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Construcción y organización de la información',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Nota técnica según la modalidad de contratación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Integración y consolidación de la nota técnica',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Ejercicio de construcción de una nota técnica',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Revisión y validación de la nota técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Validación técnica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Validación jurídica',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Validación financiera',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Consolidación de resultados de la validación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ajustes y seguimiento de la nota técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación y análisis de desviaciones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Ajustes de tarifas y planificación de servicios',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Ajustes relacionados con el riesgo',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Seguimiento e indicadores de ejecución',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Evaluación y mejoramiento de la nota técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Identificación y análisis de hallazgos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Formulación de acciones de mejora',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Seguimiento al plan de mejoramiento',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Actualización de la nota técnica',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/13450096_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Ajuste',
      significado:
        'Modificación realizada a la nota técnica como resultado del análisis de desviaciones, cambios en las condiciones del acuerdo de voluntades o resultados del seguimiento.',
    },
    {
      termino: 'Costo unitario',
      significado:
        'Valor económico asociado a una unidad de un servicio o tecnología en salud, utilizado para calcular el costo total proyectado.',
    },
    {
      termino: 'Desviación',
      significado:
        'diferencia entre el valor observado y el valor proyectado durante la ejecución de los servicios o tecnologías incluidos en la nota técnica.',
    },
    {
      termino: 'Frecuencia de uso',
      significado:
        'Número de veces que un servicio o tecnología es utilizado por una población determinada durante un periodo establecido.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'Situación identificada durante la revisión, validación o seguimiento de la nota técnica que evidencia una diferencia, inconsistencia o aspecto susceptible de mejora.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida que permite evaluar el comportamiento de una variable y comparar los resultados observados con los valores proyectados.',
    },
    {
      termino: 'Modalidad de pago',
      significado:
        'Forma establecida para reconocer económicamente los servicios y tecnologías en salud dentro de un acuerdo de voluntades.',
    },
    {
      termino: 'Nota técnica',
      significado:
        'Herramienta que organiza y sustenta la proyección de servicios y tecnologías en salud, considerando población, frecuencias de uso, costos, tarifas y riesgos.',
    },
    {
      termino: 'Población susceptible',
      significado:
        'Grupo de personas dentro de la población objeto que puede requerir determinados servicios o tecnologías en salud.',
    },
    {
      termino: 'Proyección',
      significado:
        'Estimación de las cantidades, frecuencias, costos o valores que se esperan durante un periodo determinado, a partir de información disponible.',
    },
    {
      termino: 'Riesgo primario',
      significado:
        'Riesgo relacionado con la ocurrencia de condiciones o eventos de salud en una población que pueden generar necesidades de atención.',
    },
    {
      termino: 'Riesgo técnico',
      significado:
        'Riesgo asociado con la variabilidad en la utilización de servicios y recursos requeridos para atender las condiciones de salud de una población.',
    },
    {
      termino: 'Tarifa',
      significado:
        'Valor económico asignado a un servicio o tecnología en salud para efectos de reconocimiento, negociación o contratación.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de identificar el origen, tratamiento y relación de los datos, cálculos y soportes utilizados en la construcción y actualización de la nota técnica.',
    },
    {
      termino: 'Validación',
      significado:
        'Proceso mediante el cual se verifica la coherencia, consistencia y correspondencia de la información de la nota técnica desde los aspectos técnico, jurídico y financiero.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Rutas Integrales de Atención en Salud (RIAS).',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Decreto 441 de 2022.',
      link: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20No.%20441%20de%202022.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Nota técnica: Decreto 441 de 2022. Lineamientos sobre su construcción, uso y seguimiento.',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/DOA/nota-tecnica-decreto-441-de-2022.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Resolución 2275 de 2023.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Resolución 2284 de 2023.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2025). Resolución 2706 de 2025.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2024). Resolución 100 de 2024.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2024). Resolución 1885 de 2024.',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1996). Decreto 2423 de 1996. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76014',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2016). Decreto 780 de 2016. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Milena Enríquez Tróchez',
          cargo: 'Instructora experta',
          centro: 'Centro de Comercio y Servicios - Regional Cauca',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
