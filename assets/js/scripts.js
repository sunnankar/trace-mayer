/*  Javascript
/*----------------------------------------------------*/

$(document).ready(function() {
    count(".coming-soon");           
});

/* -------- Counter Up -------- */
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// End Counter Up


/*  Count Down
/*---------------------------------------------------- MTCH*/
function count(elem){
    var $e = $(elem);
    if($e.length==0){
        return 0;
    };

    //CountDown
    var dateOfBeginning = new Date(),
        dateOfEnd = $e.closest('[data-end-date]').attr('data-end-date') || new Date((new Date()).getTime() + 3*30*24*3600*1000);

    countDown(dateOfBeginning, dateOfEnd); 

}


/* -------- Video placeholder swap to Youtube embeded video -------- */

  $(document).on('click','#intro-video',function(e){
  $('#intro-video').hide();
  $('#ytvideo').html('<div class="embed-container"><iframe id="ytvideo" frameborder="0" allowfullscreen src="https://www.youtube.com/embed/'+$(this).attr("data-vidid")+'?autoplay=1&rel=0"></iframe></div>').show();
  });

// End