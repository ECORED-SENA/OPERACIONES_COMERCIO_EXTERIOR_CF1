export default {
  global: {
    componenteFormativo: 'Régimen arancelario y declaraciones aduaneras',
    descripcionCurso:
      'Este componente de formación ofrece lo necesario para el manejo del arancel de aduanas y la clasificación de las mercancías en el sistema armonizado de acuerdo a las secciones, capítulos, partidas y subpartidas arancelarias. También lo respectivo al conocimiento de los documentos de importación, exportación, tipos de declaraciones, procedimientos aduaneros y tipos de cambio.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis arancelario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto arancel',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ficha técnica producto',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Inspección de mercancía',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Operaciones aduaneras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de declaración',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Documentos de importación y exportación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Procedimientos aduaneros',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Sistema informático aduanero',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Tipos de cambio',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Unidades de medida',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Arias, A. S. (28 de octubre de 2015). Arancel. economipedia.',
      link: 'https://economipedia.com/definiciones/arancel.html',
    },
    {
      referencia: 'Banxico educa. (2021). ¿Qué es el tipo de cambio?',
      link:
        'http://educa.banxico.org.mx/banco_mexico_banca_central/sist-finc-tipo-cambio.html',
    },
    {
      referencia: 'DIAN. (s.f.). DIAN. Declaración Anticipada de Importación.',
      link:
        'https://www.dian.gov.co/aduanas/Paginas/Declaracion-Anticipada-de-Importacion.aspx',
    },
    {
      referencia:
        'Diario del Exportador. (agosto de 2021). La ficha técnica: definición, contenido y modelos.',
      link:
        'https://www.diariodelexportador.com/2018/05/la-ficha-tecnica-definicion-contenido-y.html',
    },
    {
      referencia:
        'Guardiola-Esmeral, A. (2017). Sistema armonizado y clasificación arancelaria. (Documento de docencia N° 14). Bogotá: Ediciones Universidad Cooperativa de Colombia.',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/20357/1/2017_NC_Sistema%20Armonizado%20y%20la%20clasificaci%C3%B3n%20arancelaria_Guardiola.pdf',
    },
    {
      referencia: 'Icontec. (2021). Ficha técnica de producto.',
      link: 'https://www.icontec.org/portafolio-normalizacion/',
    },
    {
      referencia: 'Legiscomex. (2008). Funciones del declarante autorizado.',
      link: 'https://www.legiscomex.com/Documentos/PROCESOEXPO_PASO12-1',
    },
    {
      referencia: 'Legiscomex. (2015). Herramienta Decreto 993.',
      link:
        'https://www.legiscomex.com/BancoMedios/Documentos%20PDF/herramienta-decreto-993-2015.pdf',
    },
    {
      referencia:
        'Procolombia. (27 de enero de 2017). Organización Mundial de Aduanas (OMA) aprobó nueva clasificación arancelaria.',
      link:
        'https://procolombia.co/actualidad-internacional/organizacion-mundial-de-aduanas-oma-aprobo-nueva-clasificacion-arancelaria',
    },
    {
      referencia:
        'Procolombia. (s.f.). ¿Cómo identifico la posición arancelaria? ColombiaTrade.',
      link:
        'https://www.colombiatrade.com.co/contacto/preguntas-frecuentes/como-identifico-la-posicion-arancelaria',
    },
  ],
  glosario: [
    {
      termino: 'Aduana',
      significado:
        'oficina pública del Estado, situada en las fronteras, puertos o aeropuertos, donde se registran los géneros y mercancías que se importan o exportan y se cobran los derechos que adeudan según el arancel correspondiente.',
    },
    {
      termino: 'Decreto',
      significado:
        'disposición del Gobierno que desarrolla una delegación legislativa otorgada por las cortes.',
    },
    {
      termino: 'DIAN',
      significado: 'Dirección de Impuestos y Aduanas Nacionales.',
    },
    {
      termino: 'Divisas',
      significado: 'moneda extranjera manejada en el comercio exterior.',
    },
    {
      termino: 'Exportación',
      significado:
        'son los productos y servicios vendidos por un país en mercados exteriores.',
    },
    {
      termino: 'Gravamen',
      significado: 'obligación o impuesto que pesa sobre los productos.',
    },
    {
      termino: 'Importación',
      significado:
        'se trata de la acción de comprar mercancías de otra nación a mi país. ',
    },
    {
      termino: 'Régimen',
      significado:
        'conjunto de normas por las que se rige una institución, una entidad o una actividad.',
    },
  ],
  complementario: [
    {
      texto: 'OMC español. (2 de febrero de 2019). Hablemos de aranceles.',
      tipo: 'Video',
      link: 'https://youtu.be/rtqKwGDBh04',
    },
    {
      texto:
        'Presidencia de la República de Colombia. (Julio 2, 2019). Decreto 1165 de 2019. Disposiciones relativas al régimen de aduanas. ',
      tipo: 'Decreto',
      link:
        'https://www-legiscomex-com.bdigital.sena.edu.co/BancoMedios/Documentos%20PDF/Decreto-1165-del-2-de-julio-de-2019.pdf',
    },
    {
      texto:
        'Guardiola-Esmeral, A. (2017). Sistema armonizado y clasificación arancelaria. (Documento de docencia N° 14). Bogotá: Ediciones Universidad Cooperativa de Colombia.',
      tipo: 'Documento de Trabajo',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/20357/1/2017_NC_Sistema%20Armonizado%20y%20la%20clasificaci%C3%B3n%20arancelaria_Guardiola.pdf',
    },
    {
      texto:
        'Procolombia. (2018, 9 julio). Guía práctica para clasificar la partida arancelaria de su producto.',
      tipo: 'Guía Práctica',
      link:
        'https://procolombia.co/publicaciones/guia-practica-para-clasificar-la-partida-arancelaria-de-su-producto',
    },
    {
      texto:
        'DIAN Colombia. (8 de agosto 2021). Qué es el Sistema Informático Electrónico (SIE) de Tránsito Aduanero.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JDjiminMWEE',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'May Stefanny González Verjel',
        cargo: 'Experta Temática',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Huila',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
