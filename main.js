$(document).ready(function() {
  // Attraverso una chiamata ajax all’Api di Boolean avremo a disposizione una decina di dischi musicali.
  // Servendoci di handlebars stampiamo tutto a schermo.
  // In questo momento non è importante la parte graﬁca.
  // Creare una select con i seguenti generi: pop, rock, metal e jazz.
  // In base a cosa scegliamo nella select vedremo i corrispondenti cd.
  // Chiamata:
  // https://flynn.boolean.careers/exercises/api/array/music



  $.ajax(
    {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (risposta) {
      // console.log(risposta);
      // console.log(risposta.response[0].author);
      for (var i = 0; i < risposta.response.length; i++) {
        var source = document.getElementById("entry-template").innerHTML;
        var template = Handlebars.compile(source);
        var context = risposta.response[i];
        // console.log(context);
        // var context = {
        //   'poster': risposta.response[i].poster,
        //   'title': risposta.response[i].title,
        //   'author': risposta.response[i].author,
        //   'year': risposta.response[i].year,
        // };
        var html = template(context);
        $('.cds-container').append(html);
      }
      // console.log($('').val());
      $(".genere").change(function() {
        for (var i = 0; i < risposta.response.length; i++) {
          console.log($('.genere').val());
          if ($('.genere').val() == risposta.response[i].genre) {
            console.log('ciao');
            $('.cds-container .cd').eq(i).show();
        } else {
            $('.cds-container .cd').eq(i).hide();
        }
        }

      });

    },
    error: function () {
    alert('errore');
    }
    });

});
