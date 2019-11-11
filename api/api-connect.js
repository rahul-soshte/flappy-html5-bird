$(document).ready(function() {
    

      $.ajax({
        url: 'https://brambleapi.herokuapp.com/api/flappy/10',
        cache: false,
        timeout: 10000,
        success: function(data) {
            $("#earned").html(data);
            // $('#totalPoints').html(0);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('error ' + textStatus + " " + errorThrown);
        }
        }); 

    $("#convert-button").click(function(){
            $( "#dialog" ).show();
    }); 

});