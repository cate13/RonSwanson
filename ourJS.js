$(document).ready(function() {
    $("#oneAdvice").click(function(e) {
        e.preventDefault();
        var myurl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
            console.log(json)    
            var results = "";
             results += '<h3> "' + json + '" </h3>';
             console.log(results);
              $("#oneAdviceResults").html(results);
            }
        })
    });
    $(document).ready(function() {
        $("#manyAdvice").click(function(e) {
            e.preventDefault();
            var myurl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes/3";
            $.ajax({
                url : myurl,
                dataType : "json",
                success : function(json) {   
                console.log(json);
                console.log("check");
                console.log(json[0]);
                var results = "";
                 results += '<h3> "' + json[0] + '" ';

                 results += '<br><br> "' + json[1] + '" ';
                 results += '<br><br> "' + json[2] + '" </h3>';
                  $("#manyAdviceResults").html(results);
                }
            })
        });
    });
});