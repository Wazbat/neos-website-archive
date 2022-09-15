
jQuery(function($){
    $("#js-add-wallet").on("click", function(){
        window.ethereum.enable().then(()=>{
            addToWallet();
        }).catch(e=>{alert("Došlo k chybě");});
    });
    
    function addToWallet() {
        if (typeof ethereum !== 'undefined') {
            web3obj = new Web3(ethereum);
        } else if (typeof web3 !== 'undefined') {
            web3obj = new Web3(web3.currentProvider);
        } else {
            alert('No web3 provider');
            return;
        }
  
        var network = 0;
        web3obj.eth.net.getId((err, netId) => {
            network = netId.toString();
            switch (network) {
                case "1":
                    network = 'mainnet';
                    break;
                case "2":
                    network = 'morden';
                    break;
                case "3":
                    network = 'ropsten';
                    break;
                case "4":
                    network = 'rinkeby';
                    break;
                case "5":
                    network = 'goerli';
                    break;
                case "42":
                    network = 'kovan';
                    break;
                case "11155111":
                    network = 'sepolia';
                    break;
                case "246":
                    network = 'ecw';
                    break
                default:
                    console.log('This is an unknown network.');
            }
    
            try {
                window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x1' }], // chainId of mainnet
                }).then(() => {
        
                    try {
                        web3obj.eth.currentProvider.sendAsync({
                            method: 'wallet_watchAsset',
                              params: {
                                type: 'ERC20',
                                options: {
                                  address: '0xDB5C3C46E28B53a39C255AA39A411dD64e5fed9c',
                                  symbol: 'NCR',
                                  decimals: 18,
                                  image: 'https://uploads-ssl.webflow.com/61e55a05ff9ce033ad45f7fa/621ce5936c767882d5fc88ea_NeosAssets_LOGO_2021_Horizontal%201.svg',
                                },
                                id: Math.round(Math.random() * 100000)
                            }
                            }, function (err, data) {
                                if (!err) {
                                    if (data.result) {
                                        console.log('Neos Credits successfully added to wallet!')
                                    } else {
                                        console.log(data);
                                        console.log('Something went wrong.');
                                    }
                                } else {
                                    console.log(err.message);
                                }
                            }
                        );
                    } catch (e) {
                        console.log(e);
                    }
                });
            
            } catch (e) {
                console.log(e);
            }
        });
    }

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