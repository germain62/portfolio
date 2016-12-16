$(function(){
  $("#black").click(function(){
      $("#home").animate( {backgroundColor:"rgb(0, 0, 0)"}, 1000 );
      $("#home h1 ,#home p").animate( {color:"#FFF"}, 1000 );
      $("#portfolio").animate( {backgroundColor:"#FFF"}, 1000 );
      $("#portfolio h1").animate( {color:"rgb(0, 0, 0)"}, 1000 );
      $("#about").animate( {backgroundColor:"rgb(0, 0, 0)", color:"#FFF"}, 1000 );
      $("#about h1 ,#about p").animate( {color:"#FFF"}, 1000 );
      $("#contact").animate( {backgroundColor:"#FFF"}, 1000 );
      $("#contact h1").animate( {color:"rgb(0, 0, 0)"}, 1000 );
      $("#contact li , #contact label ").animate( {color:"rgb(0, 0, 0)"}, 1000 );
      $("#bot").animate( {backgroundColor:"rgb(0, 0, 0)", color:"#FFF"}, 1000 );
      $("#bot p").animate( {color:"#FFF"}, 1000 );
      $("#comment").animate({color:"rgb(162, 154, 158)"},1000);
      $("#haut").animate( {backgroundColor:"#FFF"}, 1000 );
      $("#haut a").animate( {color:"rgb(0, 0, 0)"}, 1000 );
      $("#haut img").animate( {color:"rgb(0, 0, 0)"}, 1000 );
      $("#black a").animate( {color:"#FFF"}, 1000 );
  });

  $("#pink").click(function(){
    $("#home").animate( {backgroundColor:"#FFF"}, 1000 );
    $("#home h1 ,#home p").animate( {color:"#FB8B98"}, 1000 );
    $("#portfolio").animate( {backgroundColor:"#F64459"}, 1000 );
    $("#portfolio h1").animate( {color:"#FB8B98"}, 1000 );
    $("#about").animate( {backgroundColor:"#FFF"}, 1000 );
    $("#about h1 ,#about p").animate( {color:"#FB8B98"}, 1000 );
    $("#contact").animate( {backgroundColor:"#F64459"}, 1000 );
    $("#contact h1 ").animate( {color:"#FB8B98"}, 1000 );
    $("#contact li , #contact label ").animate( {color:"#FFF"}, 1000 );
    $("#bot").animate( {backgroundColor:"#EB1D35"}, 1000 );
    $("#bot p").animate( {color:"#FFF"}, 1000 );
    $("#comment").animate({color:"#FB8B98"},1000);
    $("#haut").animate( {backgroundColor:"#F64459"}, 1000 );
    $("#haut a").animate( {color:"#FFF"}, 1000 );
    $("#black a").animate( {color:"#FFF"}, 1000 );

  });


});
