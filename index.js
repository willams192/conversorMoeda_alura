let valueReal = parseFloat(prompt('Digite o valor em reais:'));

if (isNaN(valueReal)) {
    alert('Por favor, insira um valor numérico válido.');
} else {
    let btcExchangeRate = 0.00002;

    let valueBtc = valueReal * btcExchangeRate;

    alert('BTC ' + valueBtc.toFixed(8));
}
