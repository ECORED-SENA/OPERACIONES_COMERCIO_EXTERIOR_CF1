<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Análisis arancelario
    p La temática que vamos a desarrollar está orientada a conocer cuál es la normativa aduanera que utilizan los países para la clasificación de las mercancías en las operaciones de comercio exterior con el objetivo de establecer las tarifas o impuesto a recaudar por los gobiernos nacionales, así mismo busca proteger a las empresas locales o nacionales de la competencia internacional.
    separador.mb-5
    #t_1_1
    .titulo-segundo
      h2 1.1 Concepto arancel
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-right")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img2.png', style="width: 200px" ,alt='Texto que describa la imagen').m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Se parte de la premisa que el arancel es un impuesto manejado por la mayoría de países en donde la mano del Estado se hace participe activamente para poder obtener un recaudo. Esta definición se basa en los decretos que regulan el comercio exterior en Colombia, que podrá usted observar a continuación. En esta unidad se profundizará sobre qué es el arancel de aduanas, su concepto, clasificación, finalidad, particularidades, reglas generales para el funcionamiento y procedimientos para realizar consulta del arancel de aduanas. Veamos:
    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Arancel")
            .col-12.p-4
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/img1.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    h2 Es un tipo de tributo
                    p El arancel es una obligación fiscal sostenida por los importadores y el estado colombiano y en el que mediante la entidad de la Dirección de impuestos y aduanas nacionales (DIAN), este impuesto es recaudado.
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/img2.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    h2 Grava un bien o servicio cuando cruza la frontera de un país
                    p Los aranceles son la representación más antigua de manejo comercial y han sido utilizadas tradicionalmente como una fuente de ingresos para el Estado y como una manera de proteger a los productores nacionales.
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/img3.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    h2 Comúnmente se aplica sobre importaciones
                    p El arancel sobre un bien importado, aumenta el precio recibido por los productores nacionales de dicho bien logrando una desmotivación en el consumo de bienes extranjeros.
              p #[b Los aranceles pueden hacer menos eficiente la industria del país que los establece.]
          .row(numero="2" titulo="¿Qué es el Arancel de Aduanas?")
            .col-12.p-4
              .row.align-items-center.mb-4
                .col-lg-8.mb-4.mb-lg-0
                  p Es un listado de mercancías que empezó a organizarse con el criterio de la naturaleza o composición del producto y por ello el primero que se utilizó, fue el de los reinos de la naturaleza (Animal, vegetal y mineral); luego las dos grandes ramas de la química (orgánica e inorgánica) y finalmente por industrias (caucho, textil, calzado, etc.)
                  p.mb-0 El objetivo de la organización de todos los bienes es poder agruparlos de manera tal, que a mercancías similares se les pueda aplicar una política comercial parecida.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/img3.png', style="width: 350px" ,alt='Texto que describa la imagen').m-auto
              .cajon.color-primario.p-4
                p En el caso colombiano se adopta a través de un decreto, expedido por el presidente de la República. La estructura del arancel está recomendada a nivel global por la organización Mundial de Aduanas -OMA.
          .row(numero="3" titulo="¿Qué es el Arancel de Aduanas?")
            .col-12.p-4
              p.mb-5 Con base en el criterio de liquidación, los aranceles se pueden clasificar en:
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/img4.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    h2 Especificos
                    p Aquellos que se cobran en unidad monetaria por unidades de una determinada medida que puede ser de peso (libra, kilo, tonelada, etc.) volumen (centímetros, metros, toneladas etc.) de longitud (metro, centímetro etc.)
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/img5.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    h2 Ad valorem
                    p Aquellos que se aplican como un porcentaje sobre el valor en aduana de las mercancías. Este valor en el caso de Colombia está compuesto por valor de la mercancía, más el valor del seguro, más el valor del flete, más el valor de otros gastos.
              .tarjeta-avatar-b
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/img6.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul
                  .p-4
                    h2 Mixtos
                    p Aquellos que se calculan combinando un arancel específico y un arancel Ad Valorem.
                    <br>
          .row(numero="4" titulo="¿Qué es la nomenclatura arancelaría?")
            .col-12.p-4
              p Es un sistema, con base en números y por ello se llama “nomenclatura”.
              p.mb-5 Se basa en un lenguaje cifrado originado en un método y unas reglas que se aplican de manera mundial a seis dígitos y permite un lenguaje común, independientemente de las costumbres, idioma, políticas comerciales, etc. En resumen, mediante el uso de una codificación,  se clasifican y agrupan por categorías las mercancías objeto de comercio exterior.
              figure
                img(src='@/assets/curso/img7.svg', style="width: 750px" ,alt='Texto que describa la imagen').m-auto
          .row(numero="5" titulo="¿Cuáles son las particularidades de la nomenclatura arancelaría?")
            .col-12.p-4
              p.mb-5 Una de sus características es que corresponde a una nomenclatura polivalente, la cual está concebida para clasificar mercancías transportables que son cerca de 5100 grupos de mercancías con código de seis cifras para ser utilizadas con distintos fines.
              .cajon.color-primario.p-4.mb-5
                p.mb-0 A nivel mundial y de los países miembros del Consejo de Cooperación Aduanera, hoy OMA (Organización Mundial de Aduanas) identifica la codificación arancelaria con 6 dígitos. Esto comprende todo el universo de la Nomenclatura Arancelaria. Son ejemplos de nomenclatura:
              figure
                img(src='@/assets/curso/img8.svg', style="width: 750px" ,alt='Texto que describa la imagen').m-auto
          .row(numero="6" titulo="¿Qué ventaja ofrece al comercio una nomenclatura arancelaria?")
            .col-12.p-4
              figure
                img(src='@/assets/curso/img9.svg', style="width: 850px" ,alt='Texto que describa la imagen').m-auto
          .row(numero="7" titulo="¿Qué es una subpartida arancelaria armonizada?")
            .col-12.p-4
              p.mb-4 Las mercancías a través de la nomenclatura y codificación del Sistema Armonizado es utilizada a nivel internacional con base en dos objetivos principales: uno de los instrumentos de facilitación del comercio al hacerlo más fácil y transparente y dos, base para unificación de estadísticas a nivel internacional de comercio de productos. De hecho, es utilizado en más de 190 países en el mundo.
              .row.align-items-end
                .col-lg-8.mb-4.mb-lg-0
                  .cajon.color-primario.p-4
                    p.mb-0 Cuando un país (parte contratante) suscribe el Acuerdo del Sistema Armonizado de Designación y Codificación de Mercancías, el compromiso esencial es adoptar y respetar la organización del Sistema Armonizado, que en este caso va a seis (6) dígitos de manera que las subdivisiones que se realicen a nivel regional lo pueden hacer a ocho (8) dígitos y a nivel nacional puede hacerlo a diez (10) dígitos.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/img4.png', style="width: 400px" ,alt='Texto que describa la imagen').m-auto
          .row(numero="8" titulo="¿Cómo está compuesta una subpartida arancelaria)?")
            .col-12.p-4
              p.mb-5 Las mercancías que van a ser importadas o exportadas se deben identificar con un código numérico denominado partida arancelaria que se encuentra compuesto por 10 dígitos, este código permite conocer cuáles son los aranceles de importación que se deben cancelar, así como los trámites correspondientes a procesos de exportación y las medidas comerciales que tengan los países, que afecten las mercancías, además de conocer los posibles requisitos de importación del país de destino.
              .cajon.color-primario.p-4.mb-5
                p.mb-0 El objetivo principal del sistema armonizado es clasificar las mercancías mediante un sistema de números y textos en común, que son usados internacionalmente para la comercialización de productos.
              p.mb-5 #[b Ejemplo]: la subpartida 0201.30.90.00 si la desglosamos, está compuesta de la siguiente manera:
              figure
                img(src='@/assets/curso/img10.svg', style="width: 850px" ,alt='Texto que describa la imagen').m-auto
    p.mb-5 La clasificación arancelaria funciona mediante reglas generales, específicamente en cuanto a los productos se debe tener en cuenta las seis reglas generales de clasificación arancelarias. Estas reglas, se encuentran regidas al inicio del arancel y más detalladamente en las notas explicativas del sistema armonizado. En la siguiente tabla pueden ser observadas estas reglas generales para el funcionamiento de la nomenclatura:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Reglas generales para el funcionamiento de la nomenclatura
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th(style="width: 10%") Regla
                th Descripción
            tbody
              tr
                td.text-center 1
                td La clasificación está determinada por: El texto mismo de las partidas o subpartidas y las notas legales de sección o capítulos.
              tr.table
                td.text-center 2
                td
                  p a) Cualquier referencia a un artículo en una partida determinada alcanza al artículo incluso incompleto o sin terminar, siempre que éste presente las características esenciales del artículo completo o terminado o cuando se presente desmontado.
                  p b) Cualquier referencia a una materia en una partida determinada alcanza a dicha materia incluso mezclada o asociada con otras materias; las manufacturas de una materia determinada alcanzan también a las constituidas total o parcialmente por dicha materia. La clasificación se efectuará de acuerdo con los principios enunciados en la Regla 3.
              tr
                td.text-center 3
                td
                  p Cuando una mercancía pudiera clasificarse, en principio, en dos o más partidas por aplicación de la Regla 2 b) o en cualquier otro caso, la clasificación se efectuará como sigue:
                  p a) La partida con descripción más específica tendrá prioridad sobre las partidas de alcance más genérico; cuando dos o más partidas son igualmente específicas, la clasificación se realiza conforme a la regla 3 b)
                  p b) En productos mezclados o compuestos: prima la materia que le da al producto el carácter esencial.
                  p c) Cuando las Reglas 3 a) y 3 b) no permitan efectuar la clasificación, la mercancía se clasificará en la última partida por orden de numeración entre las susceptibles de tenerse razonablemente en cuenta.
              tr.table
                td.text-center 4
                td Las mercancías que no puedan clasificarse aplicando las Reglas anteriores se clasifican en la partida que comprenda aquellas con las que tengan mayor analogía.
              tr
                td.text-center 5
                td
                  p Además de las disposiciones precedentes, a las mercancías consideradas a continuación se les aplicarán las Reglas siguientes:
                  p a) Los estuches para cámaras fotográficas, instrumentos musicales, armas, instrumentos de dibujo, collares y continentes similares, se clasifican con dichos artículos
                  p b) La regla anterior, no es obligatoria cuando los envases sean susceptibles de ser utilizados razonablemente de manera repetida.
              tr.table
                td.text-center 6
                td La clasificación de mercancías en las subpartidas de una misma partida está determinada legalmente por los textos de estas subpartidas y de las Notas de subpartida, así como, mutatis mutandis, por las Reglas anteriores.
    p.mb-5 Este sistema se encuentra organizado de manera armonizada; a continuación, se presenta su orden en cuanto a la codificación arancelaria:
    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .dual-txt-deco
          p Se encuentran compuestas de grandes grupos de mercancías que tienen relación directa entre sí y están clasificados en tres grandes componentes de acuerdo a lo siguiente: Reino de la Naturaleza, Sector Industrial y un Mismo Sector Económico. Se puede evidenciar que el Sistema Armonizado está compuesto por 21 secciones y se utiliza para su numeración los números romanos del (I al XXI) sus partes son progresivo. Las secciones inician desde las mercancías más básicas y llegan hasta las más elaboradas.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img5.png', ,alt='Texto que describa la imagen').m-auto
    .cajon.color-primario.p-4.mb-5
      p.mb-0 De acuerdo a lo anteriormente mencionado, se presenta en la siguiente tabla, tomada de la Organización Mundial del Comercio (OMC) en la que se presenta el orden de las secciones del SA:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Reglas generales para el funcionamiento de la nomenclatura
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th(style="width: 10%") Sección
                th Designación
            tbody
              tr
                td.text-center I
                td Animales vivos y productos del reino animal.
              tr.table
                td.text-center II
                td Productos del reino vegetal.
              tr
                td.text-center III
                td Grasas y aceites animales o vegetales; productos de su desdoblamiento; grasas alimenticias elaboradas; ceras de origen animal o vegetal.
              tr.table
                td.text-center IV
                td Productos de las industrias alimentarias; bebidas, líquidos alcohólicos y vinagre; tabaco y sucedáneos del tabaco elaborados.
              tr
                td.text-center V
                td Productos minerales.
              tr.table
                td.text-center VI
                td Productos de las industrias químicas o de las industrias conexas.
              tr
                td.text-center VII
                td Plástico y sus manufacturas; caucho y sus manufacturas.
              tr.table
                td.text-center VIII
                td Pieles, cueros, peletería y manufacturas de estas materias; artículos de talabartería o guarnicionería; artículos de viaje, bolsos de mano (carteras) y continentes similares; manufacturas de tripa.
              tr
                td.text-center IX
                td Madera, carbón vegetal y manufacturas de madera; corcho y sus manufacturas; manufacturas de espartería o cestería.
              tr.table
                td.text-center X
                td Pasta de madera o de las demás materias fibrosas celulósicas; papel o cartón para reciclar (desperdicios y desechos) papel o cartón y sus aplicaciones.
              tr
                td.text-center XI
                td Materias textiles y sus manufacturas.
              tr.table
                td.text-center XII
                td Calzado, sombreros y demás tocados, paraguas, quitasoles, bastones, látigos, fustas y sus partes; plumas preparadas y artículos de plumas; flores artificiales; manufacturas de cabello.
              tr
                td.text-center XIII
                td Manufacturas de piedra, yeso fraguable, cemento, amianto (asbesto), mica o materias análogas; productos cerámicos; vidrio y manufacturas de vidrio.
              tr.table
                td.text-center XIV
                td Perlas finas (naturales) o cultivadas, piedras preciosas o semipreciosas, metales preciosos, chapados de metal precioso (plaqué) y manufacturas de estas materias; bisutería; monedas.
              tr
                td.text-center XV
                td Metales comunes y manufacturas de esos metales.
              tr.table
                td.text-center XVI
                td Máquinas y aparatos, material eléctrico y sus partes; aparatos de grabación o reproducción de sonido, aparatos de grabación o reproducción de imagen y sonido en televisión, y las partes y accesorios de estos aparatos.
              tr
                td.text-center XVII
                td Material de transporte.
              tr.table
                td.text-center XVIII
                td Instrumentos y aparatos de óptica, fotografía o cinematografía, de medida, control o precisión; instrumentos y aparatos médicoquirúrgicos; aparatos de relojería; instrumentos musicales; partes y accesorios de estos instrumentos o aparatos.
              tr
                td.text-center XIX
                td Armas, municiones, y sus partes y accesorios.
              tr.table
                td.text-center XX
                td Mercancías y productos diversos.
              tr
                td.text-center XXI
                td Objetos de arte o colección y antigüedades.
    .row.align-items-end.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img6.png', style="width:350px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-8
        .h5 Los capítulos
        p Están compuestos por agrupaciones de mercancías que guardan relación entre sí. No son tan amplios como las secciones, estos hacen parte de ellas.
        p.mb-4 El Arancel está compuesto por 97 capítulos, que están organizados del 1 al 97 y cada país puede agregar al sistema uno o dos capítulos más, de acuerdo a sus necesidades.
        .cajon.color-primario.p-4
          p.mb-4 Es importante mencionar que siempre las agrupaciones de mercancías van en orden continuo esto se puede evidenciar en las secciones, capítulos, subcapítulos, partidas y subpartidas en la siguiente tabla se puede tener una idea de cómo se pueden identificar las mercancías:
          .row.justify-content-end
            .col-6
              a.anexo(:href="obtenerLink('/downloads/Anexo1.xlsx')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-xls.svg")
                .anexo__texto
                  p #[b Anexo]. Capítulos del Sistema Armonizado
    .row.justify-content-center.align-items-center.mb-5
      .col-2.px-0(style="z-index:2").d-none.d-lg-block
        figure.d-flex.justify-content-end
          img(src='@/assets/curso/img11.svg', style="width: auto" ,alt='Texto que describa la imagen')
      .col-9.px-3.px-lg-0.py-2.bg-color1(style="z-index:1")
        .row
          .col-12.p-4
            p #[b Dentro de los capítulos se encuentra una división denominada “partidas”, las cuales se dividen así:]
            ul.lista-ul.ms-5
              li 
                i.fas.fa-check(style="color: #451991")
                | Los 2 primeros dígitos corresponden con el número del capítulo dónde está clasificada la mercancía de acuerdo a su naturaleza.
              li 
                i.fas.fa-check(style="color: #451991")
                | Los capítulos están organizados del 01 al 97 excepto el 77 ya que se guardó para futuros usos.
              li 
                i.fas.fa-check(style="color: #451991")
                | Los capítulos se agrupan a su vez en Secciones hay XXI Secciones.
              li 
                i.fas.fa-check(style="color: #451991")
                | Los dígitos 3 y 4, corresponden con la Partida. Cada capítulo se subdivide en varias partidas pueden ir desde la 01 hasta la que corresponda, con el máximo de 99.
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Ejemplos de Partida Arancelaria
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th(style="width: 20%") Código PARTIDA
                th Designación de la mercancía
            tbody
              tr
                td.text-center 6401
                td Calzado impermeable con suela y parte superior de caucho o plástico, cuya parte superior no se haya unido a la suela por costura o por medio de remaches, clavos, tornillos, espigas o dispositivos similares, ni se haya formado con diferentes partes unidas de la misma manera.
              tr.table
                td.text-center 6402
                td Los demás calzados con suela y parte superior de caucho o plástico.
    p.mb-5 A la vez esa división llamada partidas, se divide en otra más denominada “subpartidas”, que consiste en otros dos dígitos 5° y 6°, y esta subdivisión se denomina “subpartida del Sistema Armonizado”. Por ejemplo y siguiendo con la partida 6401, en la tabla 5 se encuentra un ejemplo de las subdivisiones a nivel de Sistema Armonizado:
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Ejemplos de Subpartida Arancelaria
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th(style="width: 20%") Código SA
                th Designación de la mercancía
            tbody
              tr
                td.text-center 6401
                td Calzado impermeable con suela y parte superior de caucho o plástico, cuya parte superior no se haya unido a la suela por costura o por medio de remaches, clavos, tornillos, espigas o dispositivos similares, ni se haya formado con diferentes partes unidas de la misma manera.
              tr.table
                td.text-center 6401.10
                td Calzado con puntera metálica de protección.
              tr
                td.text-center 6401.90
                td Los demás calzados.
    p.mb-5 Muy seguramente ahora nos surge la pregunta de: ¿Cómo consultar la partida arancelaria en Colombia?, para lo cual encontrará a continuación el paso a paso correspondiente:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador.mb-5
    #t_1_2
    .titulo-segundo
      h2 1.2 Ficha técnica producto
    .h4 ¿Qué es la ficha técnica de producto?
    .row.justify-content-center.mb-5.mb-lg-0
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4(data-aos="fade-right")
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 La ficha técnica, es un documento en forma de sumario que contiene la descripción de las características técnicas de un objeto, material, producto o bien de manera detallada. Los contenidos varían dependiendo del producto, servicio o entidad descrita, pero en general contiene datos como el nombre, características físicas, el modo de uso o elaboración, propiedades distintivas, métodos de ensayo y especificaciones técnicas.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
              p.mb-0 - CITATION Ico21 \l 3082 (Icontec, 2021)
    .row.align-items-end.mb-5
      .col-lg-8
        p Por otro lado, para crear la ficha técnica se deben regir a partir de lo establecido en la Norma Técnica Colombiana, sus reglamentos técnicos, especificaciones de la empresa y producto. 
        p.mb-0 De acuerdo al diario exportador, el portal especializado en comercio exterior y gestión de los negocios internacionales, la ficha técnica es una herramienta con la que cuenta el exportador para informar de una manera estandarizada y sencilla sobre las características técnicas de su producto. Esta ficha técnica de un producto es importante en los procesos logísticos y comerciales, pues permiten conocer: las características, composición, presentación, peso, dimensiones de las mercancías, todo esto, con el propósito de identificar posibles clientes que estén interesados en nuestros productos. Así mismo, facilitar el transporte, manipuleo y almacenamiento.
      .col-lg-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img7.png', style="width: 350px" ,alt='Texto que describa la imagen').m-auto
    .cajon.color-primario.p-4.mb-5
      p.mb-0 Esta ficha técnica contiene: la identificación del producto, la información técnica, la información comercial y los aspectos arancelarios, tal como puede apreciarse en la siguiente figura:
    figure.mb-5(data-aos="fade-right")
          img(src='@/assets/curso/img12.svg', style="width: 1050px" ,alt='Texto que describa la imagen').m-auto
    p.mb-5 Algunos ejemplos de la ficha técnica de un producto, en este caso de origen agropecuario y agroindustrial, pueden observarse en la siguiente tabla:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Ejemplos de ficha técnica
        .tabla-a.color-acento-botones 
          table
            caption Nota. Modelo de ficha técnica de producto. Tomado de Minagricultura, 2016.
            thead
              tr
                th(colspan="2") Exportaciones agregadas de productos de origen agropecuario y agroindustrial
            tbody
              tr
                td.text-center Código interno:
                td 99
              tr.table
                td(style="width:10%").text-center Descripción del reporte:
                td Proporciona información de las exportaciones de productos de origen agropecuario y agroindustrial, agregados por capítulos para el periodo seleccionado.
              tr
                td.text-center Información que brinda el reporte:
                td
                  p Por capítulo según el arancel colombiano:
                  ul.lista-ul
                    li 
                      i.fas.fa-check(style="color: #451991")
                      | Volumen de exportaciones en toneladas.
                    li 
                      i.fas.fa-check(style="color: #451991")
                      | Valor de las exportaciones a precios FOB en Miles US$.
              tr.table
                td.text-center Fechas disponibles:
                td Desde 1991
              tr
                td.text-center Países o zonas a que hace referencia:
                td Colombia
              tr.table
                td.text-center Productos a que hace referencia:
                td
                  p La información se encuentra organizada por grupos de productos así:
                  ul.lista-ul
                    li 
                      i.fas.fa-check(style="color: #451991")
                      | Animales vivos y productos del reino animal (Capítulos 01 al 05).
                    li 
                      i.fas.fa-check(style="color: #451991")
                      | Productos del reino vegetal (Capítulos 06 al 14).
                    li 
                      i.fas.fa-check(style="color: #451991")
                      | Grasas y aceites (Animales y Vegetales) (Capítulo 15).
                    li 
                      i.fas.fa-check(style="color: #451991")
                      | Productos de las industrias alimenticias y bebidas (Capítulos 16 al 24).
                    li 
                      i.fas.fa-check(style="color: #451991")
                      | Algodón (subpartidas 5201 a 5203).
              tr
                td.text-center Unidades en que se expresa:
                td Proporciona información en und, kg dependiendo de la unidad de medida que se utiliza en la mercancía.
              tr.table
                td.text-center Información adicional:
                td
                  p Para el cálculo del total del café se excluyó el valor de las exportaciones de Colombia de las partidas 0901119000 y 0901110000. 
                  p A partir de 1991, las partidas arancelarias relacionadas con el algodón corresponden a las subpartidas 5201 y 5203.
                  p Desde el año 2004 el café pertenece a la partida arancelaria 0901119000.
              tr
                td.text-center Información adicional:
                td Elaborado con base en estadísticas de Comercio Exterior de DANE.
    separador.mb-5
    #t_1_3
    .titulo-segundo
      h2 1.3 Inspección de mercancía
    .h4 ¿Qué es la Inspección de mercancías?
    .row.align-items-end.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img8.png', style="width: 350px" ,alt='Texto que describa la imagen').m-auto
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 Cuando hablamos de inspección de mercancías, debemos tener presente que ésta la realiza la autoridad aduanera competente. Se hace con el fin de establecer la naturaleza, el origen, el estado, la cantidad, el valor, la clasificación arancelaría, los tributos aduaneros, el régimen aduanero y el tratamiento tributario que es aplicable a una mercancía o producto determinado.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
              p.mb-0 - Legiscomex, 2015
        p.mb-0 Las inspecciones facilitan el reconocimiento de mercancías, ésta realiza su inspección en físico y, será documental, cuando se basa en la información de los documentos soportes como la declaración.
    p.mb-4 El portal especializado en Comercio Exterior y gestión de los negocios internacionales: “Diario exportador”, portal especializado, nos indica que, para el reconocimiento de mercancías, las que salen como las que llegan, es necesario y de uso obligado, pues de esta forma podemos demostrar la transparencia y el buen funcionamiento de las operaciones comerciales internacionales, todo esto es obligante en el despacho de las mercancías.
    .row.align-items-end.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Es garantía para los operadores de comercio exterior, la inspección realizada, tanto a nivel voluntario como obligado, dicha inspección de mercancías, es una coincidencia plena y de cumplimiento, consistente con la calidad ofrecida por el proveedor, ya sea que esta se presente en cualquiera de las modalidades establecidas, se realizan sobre el 10% del total de la mercancía, principalmente por cuestiones de tiempo y ante el despacho de urgencia; sin embargo, la empresa es la responsable de verificar la totalidad expidiendo un certificado de conformidad.
        p.mb-0 Las inspecciones se pueden clasificar en dos grandes grupos:
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img9.png', style="width: 300px" ,alt='Texto que describa la imagen').m-auto
    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Ejemplos de ficha técnica
    figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/img13.svg', style="width: 750px" ,alt='Texto que describa la imagen').m-auto
    p.mb-5 Atendiendo a su carácter, de acuerdo con su carácter, las inspecciones pueden ser:
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Inspecciones de carácter obligatorio")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Inspecciones de carácter obligatorio
            p Estas se realizan con el objetivo de revisar la cantidad, calidad de la mercancía, verificación de precios, clasificación arancelaria de todo producto que esté destinado a realizar procesos de exportación estas son realizadas por las autoridades aduaneras.
          .col-md-6
            figure
              img(src='@/assets/curso/img10.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Inspecciones de carácter voluntario")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Inspecciones de carácter voluntario
            p Son realizadas por el cliente con el objetivo de asegurarse que las mercancías o productos cumplan con las especificaciones de la orden de compra.
          .col-md-6
            figure
              img(src='@/assets/curso/img11.png', alt='Texto que describa la imagen')
    p.mb-5 Atendiendo a su contenido, de acuerdo con el contenido del empaque se dividen en:
    .row.align-items-start
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img12.png', style="width: 350px" ,alt='Texto que describa la imagen')
      .col-lg-8
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Contenido de la inspección pre embarque de producto general")
            .col-12.p-4
              p Por el cual se crea la Unidad Nacional para la Gestión del Riesgo de Desastres, se establece su objeto y estructura (Decreto 4147/2011, p. 1).
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Se realizan antes, al comienzo y durante la producción del producto.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Se verifica la calidad, cantidad, empaquetado, marcado, aspecto visual del producto terminado.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Verificación de peso de la mercancía.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Supervisión de la carga a contenedor.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Análisis en Laboratorio de parámetros específicos.
          .row(numero="2" titulo="Inspección al inicio de la producción")
            .col-12.p-4
              p Se revisa al inicio de los procesos de producción que se cumplan con todas las especificaciones emitidas en la orden de compra del cliente.
          .row(numero="3" titulo="Inspección durante la producción")
            .col-12.p-4
              p Se revisa al inicio de los procesos de producción que se cumplan con todas las especificaciones emitidas en la orden de compra del cliente.
          .row(numero="4" titulo="Inspección de producto terminado")
            .col-12.p-4
              p Se realiza antes de ser embarcado en el transporte para verificar las características claves del producto terminado.
          .row(numero="5" titulo="Supervisión de carga")
            .col-12.p-4
              p Esta inspección se realiza de acuerdo al documento de embarque con el objetivo de verificar la carga de la mercancía en donde se revisa y confirma la cantidad de cajas en el contenedor, esta inspección la puede solicitar las entidades aduaneras encargadas de comprobar el origen de las mercancías.

</template>

<script>
export default {
  components: {},
  data: () => ({
    // variables de vue
  }),
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

<style lang="sass" scoped></style>
