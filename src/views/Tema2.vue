<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Operaciones aduaneras
    figure(data-aos="fade-right")
      img(src='@/assets/curso/img13.png', style="width: auto" ,alt='Texto que describa la imagen').m-auto
    .row.justify-content-center.mb-5.mb-lg-0
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 En las operaciones aduaneras intervienen varios actores, los cuales tienen roles definidos dentro del proceso, uno de estos es el declarante, para resolver el interrogante de ¿Quién es el declarante?, diremos que es la persona que adelanta operaciones y trámites aduaneros bien sea en nombre propio o por un encargo de terceros.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
              p.mb-0 - Legiscomex, 2008
    .row.align-items-end
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img14.png', style="width: auto" ,alt='Texto que describa la imagen').m-auto
      .col-lg-8
        p.mb-4 Así mismo, se tiene establecido que es la declaración de mercancías, como el acto, por medio del cual el declarante indica el régimen aduanero que se debe aplicar a los productos o mercancías, consignando en los formatos correspondientes, a la vez que provee de la información obligada por las normas que están en vigencia, y que corresponden con la legislación aduanera.
        .cajon.color-primario.p-4
          p.mb-0 En Colombia con el fin de adelantar los procedimientos y trámites de importación, exportación o tránsito aduanero, son declarantes ante la autoridad, las Agencias de Aduanas, las cuales actúan en nombre y por encargo de los importadores y exportadores.
    separador.mb-5
    #t_2_1
    .titulo-segundo
      h2 2.1 Tipos de declaración
    p.mb-5 La temática que vamos a desarrollar está orientada a conocer cuál es la normativa aduanera que utilizan los países para la clasificación de las mercancías en las operaciones de comercio exterior con el objetivo de establecer las tarifas o impuesto a recaudar por los gobiernos nacionales, así mismo busca proteger a las empresas locales o nacionales de la competencia internacional.
    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.p-4(titulo="Declaración anticipada de importación")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            .h4 Declaración anticipada de importación
            p Este tipo de declaración anticipada permite que las mercancías antes que lleguen al territorio nacional este declarada reduciendo los tiempos de nacionalización agilizando la descarga, la fluidez en el ingreso de las mercancías en el país y la reducción de costos.
            p.mb-0 Esto permite mejorar la movilidad de la cadena logística en las principales aduanas del país.
          .col-lg-4
            figure
              img(src='@/assets/curso/img15.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Declaración especial de importación")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            .h4 Declaración especial de importación
            p.mb-0 Este tipo de Declaración Especial de Importación comprende las operaciones realizadas al territorio Aduanero Nacional desde Zonas francas permanentes, especiales de los productos producidos, transformados por los usuarios industriales de bienes y servicios a partir de materia prima importada y componentes nacionales exportados.
          .col-lg-4
            figure
              img(src='@/assets/curso/img16.png', alt='Texto que describa la imagen')
    separador.mb-5
    #t_2_2
    .titulo-segundo
      h2 2.2 Documentos de importación y exportación
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-right")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/img17.png', style="width: 200px" ,alt='Texto que describa la imagen').m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Las empresas que se dedican al comercio exterior, bien sea exportando o importando productos y mercancías, requieren conocer los documentos que obligan el proceso. Estos documentos deben coincidir plenamente entre las partes involucradas; es decir, entre el comprador y el vendedor, este último debe facilitarse a quien compra, de manera oportuna y legal, de esta forma será provechosa la transacción.
    figure(data-aos="fade-left")
      img(src='@/assets/curso/img14.svg', style="width: 1050px" ,alt='Texto que describa la imagen').m-auto
    separador.mb-5
    #t_2_3
    .titulo-segundo
      h2 2.3 Procedimientos aduaneros
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img18.png', style="width: auto" ,alt='Texto que describa la imagen').m-auto
      .col-lg-8
        p.mb-4 Todos los procedimientos aduaneros inician con la llegada de la mercancía al territorio nacional de acuerdo al medio de transporte internacional seleccionado que inmediatamente genera obligaciones.
        .cajon.color-primario.p-4.mb-4
          p Para ampliar la temática se requiere consultar el Decreto 1165 de 2019, Artículo 140 y subsiguientes, que podrá consultar en línea en el siguiente enlace:
          .row.justify-content-end
            .col-6
              a.anexo(href="https://www-legiscomex-com.bdigital.sena.edu.co/BancoMedios/Documentos%20PDF/Decreto-1165-del-2-de-julio-de-2019.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo]. Decreto-1165-del-2-de-julio-de-2019
        p.mb-0 #[b Nota]: recuerde acceder con su número de identificación.
    separador.mb-5
    #t_2_4
    .titulo-segundo
      h2 2.4 Sistema informático aduanero
    figure(data-aos="fade-left")
      img(src='@/assets/curso/img19.png', style="width: auto" ,alt='Texto que describa la imagen').m-auto
    separador.mb-5
    #t_2_5
    .titulo-segundo
      h2 2.5 Tipos de cambio
    .row.align-items-end.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img20.png', style="width: auto" ,alt='Texto que describa la imagen').m-auto
      .col-lg-8
        p De acuerdo a Banxico educa (2021):
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 El tipo de cambio es una referencia que se usa en el mercado cambiario para conocer el número de unidades de moneda nacional que deben pagarse para obtener una moneda extranjera o similarmente, el número de unidades de moneda nacional que se obtienen al vender una unidad de moneda extranjera.
            i.fas.fa-quote-right
        p Las operaciones de compra y venta de divisas para los procesos de importación y exportación son realizadas a través de intermediarios financieros que transan en los mercados cambiarios las negociaciones de las divisas se realizan teniendo como referencia la tasa representativa del mercado (TRM) y que son calculadas por la Superintendencia Financiera de Colombia.
    p El tipo de cambio de cada país está determinado por el régimen cambiario; es decir, la forma en que decide administrar el valor de su moneda respecto a otras.
    p.mb-5 Los regímenes cambiarios más conocidos son el tipo de cambio fijo, flexible y las bandas cambiarias. Veamos:
    .row.justify-content-around(data-aos="fade-left")
      .col-lg-3.bg-color2.p-4.mb-4
        figure.mb-4
          img(src='@/assets/curso/img15.svg', style="width: auto" ,alt='Texto que describa la imagen').m-auto
        .h4.text-center Fijo
        p.text-center El Banco de la República como autoridad monetaria establece un nivel del tipo de cambio, en el cual interviene en el mercado comprando o vendiendo divisas para garantizar el equilibrio en ese tipo de cambio.
      .col-lg-3.bg-color3.p-4.mb-4
        figure.mb-4
          img(src='@/assets/curso/img16.svg', style="width: auto" ,alt='Texto que describa la imagen').m-auto
        .h4.text-center Flexible y flotante
        p.text-center Este tipo de cambio está dado por las condiciones de oferta y demanda del mercado en el que se determina el precio de la divisa sin la intervención del Banco de la República.
      .col-lg-3.bg-color2.p-4.mb-4
        figure.mb-4
          img(src='@/assets/curso/img17.svg', style="width: auto" ,alt='Texto que describa la imagen').m-auto
        .h4.text-center Bandas cambiarias
        p.text-center El Banco de la República fija una banda y deja que las divisas se muevan libremente, cuando alcanza el techo o el piso de la banda la autoridad interviene ya sea vendiendo o comprando divisas. Se considera un esquema intermedio entre el tipo de cambio fijo y flexible.
    separador.mb-5
    #t_2_5
    .titulo-segundo
      h2 2.5 Tipos de cambio
    p Las operaciones comerciales, requieren de un lenguaje común en relación con nombres y símbolos de las unidades de medida, así como la observancia de reglas para su utilización, que posibiliten el intercambio de información. Entre estas encontramos:
    TabsC.color-primario
      .py-3.py-md-4(titulo="Unidades físicas")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Unidades físicas
            p Son las definidas en el arancel de aduanas para cada uno de las mercancías establecidas en las subpartidas estas deben estar reflejadas en las declaraciones.
          .col-md-6
            figure
              img(src='@/assets/curso/img21.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Inspecciones de carácter voluntario")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Unidades comerciales
            p Corresponden a las unidades físicas registradas en la factura comercial o contrato de compra venta estas deben estar reflejadas en las declaraciones.
          .col-md-6
            figure
              img(src='@/assets/curso/img22.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
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
