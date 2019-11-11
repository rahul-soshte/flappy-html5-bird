$(document).ready(function() {
    

    $("#convert-button").click(function(){
            $( "#dialog" ).show();
    }); 

    $("body").on('DOMSubtreeModified', "#totalPoints", function() {
      // alert('changed');
      var url1 = "https://brambleapi.herokuapp.com/api/flappy/" + $('#totalPoints').text();
      // console.log(url1);
      $.ajax({

        url: "https://brambleapi.herokuapp.com/api/flappy/1",
        cache: false,
        timeout: 10000,
        success: function(data) {
            var url1 = $('#totalPoints').text();
            // console.log();
            $("#earned").html(url1 * data);
            // $('#totalPoints').html(0);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // alert('error ' + textStatus + " " + errorThrown);
        }
        }); 

    });

});