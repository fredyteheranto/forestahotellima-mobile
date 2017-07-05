$(document).ready(function() {
  console.log("ready!");
  $('.slide-hor').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 2
  });
  $('.box-content > a').on('click', function() {
    console.log("ready to flys!");
    $('.compare-pre').show().animate({
      height: '40px',
      opacity: '1'
    }, 'slow');
  });
  $('.close').on('click', function() {
    console.log("ready to flys!");
    $('.compare-pre').hide().animate({
      height: '-100px',
      opacity: '0'
    }, 'slow');
  });
  $('.datepicker').pickadate({
    monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    today: 'Hoy',
    clear: 'Borrar',
    format: 'dd, mmm, yyyy',
    formatSubmit: 'yyyy/mm/dd',
    selectMonths: true,
    selectYears: true
  });
  $('.select').selectric();
  $('.buscar').on('click', function() {
    var llega = $('#hllegada').val();
    var sale = $('#hsalida').val();
    var adult = $('#adulto').val();
    var nino = $('#nino').val();
    var Dia = llega.substring(0, 2);
    var Mes = llega.substring(4, 7);
    var Ano = llega.substring(9, 14);
    var sale = $('#hsalida').val();
    var Dias = sale.substring(0, 2);
    var Mess = sale.substring(4, 7);
    var Anos = sale.substring(9, 14);
    console.log(Dia + '----' + Mes + '----' + Ano);
    $('.resultado').show().animate({
      opacity: '1'
    }, 'slow');
    $('.reservas').hide().animate({
      opacity: '0'
    }, 'slow');
    $('.fcdia').append(Dia);
    $('.fcmes').append(Mes);
    $('.fcano').append(Ano);
    // 
    $('.fcdias').append(Dias);
    $('.fcmess').append(Mess);
    $('.fcanos').append(Anos);
    // 
    $('.fcadult').append(adult);
    $('.fcnino').append(nino);
  });
});