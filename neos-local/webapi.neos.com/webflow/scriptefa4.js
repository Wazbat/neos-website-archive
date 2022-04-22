jQuery(function($){

    var timestamp = Math.floor(Date.now() / 1000);

    var api = "https://webapi.neos.com/";
    $.get(api + 'uniswap/data/ncrPrice.txt?t='+timestamp, function(data) { 
        $("#js-uniswap-course").text("$"+(Math.round(data*100)/100));
    });
    
    $.get(api + 'uniswap/data/date.php?t='+timestamp, function(data) { 
        $("#js-uniswap-course-date").text(data);
    });
    
    $.get(api + 'uniswap/data/diff.php?t='+timestamp, function(data) { 
        $("#js-uniswap-course-percent").text(Math.round(data*100)/100 + "%");
        if (data < 0) {
            $("#js-uniswap-course-percent").css("color","red");
        }
    });
    
    
    
    
    $.get(api + 'poloniex/data/price.txt?t='+timestamp, function(data2) { 
        $("#js-poloniex-course").text("$"+(Math.round(data2*100)/100));
    });
    
    $.get(api + 'poloniex/data/diff.txt?t='+timestamp, function(data) { 
        $("#js-poloniex-course-percent").text(Math.round(data*100)/100 + "%");
        if (data < 0) {
            $("#js-poloniex-course-percent").css("color","red");
        }
    });
    
    
    
    $.get(api + 'coinbetter/data/price.txt?t='+timestamp, function(data2) { 
        $("#js-coinbetter-course").text("$"+(Math.round(data2*100)/100));
    });
    
    $.get(api + 'coinbetter/data/diff.txt?t='+timestamp, function(data) { 
        $("#js-coinbetter-course-percent").text(Math.round(data*100)/100 + "%");
        if (data < 0) {
            $("#js-coinbetter-course-percent").css("color","red");
        }
    });
    
    
    
    $.get(api + 'bitrue/data/price.txt?t='+timestamp, function(data2) { 
        $("#js-bitrue-course").text("$"+(Math.round(data2*100)/100));
    });
    
    $.get(api + 'bitrue/data/diff.txt?t='+timestamp, function(data) { 
        $("#js-bitrue-course-percent").text(Math.round(data*100)/100 + "%");
        if (data < 0) {
            $("#js-bitrue-course-percent").css("color","red");
        }
    });
    
    
    
    $("#js-chart").html('<div id="chart-container"><canvas width="284" height="224" id="chart"></canvas></div><label class="chart-label">    <input type="radio" name="chart-type" checked value="linear" data-chart-toggle-yaxis="">    Linear Scale</label><label class="chart-label">    <input type="radio" name="chart-type" value="logarithmic" data-chart-toggle-yaxis="">    Logarithmic Scale</label>');
});