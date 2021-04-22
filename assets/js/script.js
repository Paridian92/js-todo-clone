$(function(){

  var arrToDo =  [  "fare la spesa",
  "comprare cibo per cani",
  "odiare la programmazione",
  "chiederti cosa hai fatto di male per meritarti tutto cio"

   
  ];

  for(i = 0; i<arrToDo.length; i++){
    var listToDo = arrToDo[i];
    /* console.log(listToDo); */
    
    var attaccati = '<li><p>' + listToDo + '<i class="fas fa-trash-alt"></i></p></li>';
    console.log(attaccati);
    $('.toappend').append(attaccati);
    
  }

  $('.toappend').on(click,'.fa-trash-alt', function(){
    console.log('lol');

  })

})