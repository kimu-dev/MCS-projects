const currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"]

/*

Функция getDropdown должна возвращать HTML, который вставится внутрь <option></option>.

Возвращаемый из getDropdown HTML-код должен:
1. Начинаться с <option value="">Выберите валюту</option>
2. Далее, для каждой криптовалюты в массиве currencies должен рендериться элемент <option>. Например, для "Ethereum" должно возвращаться <option value="ethereum">Ethereum</option>.

*/

const getDropdown = currencies => {
    console.log(currencies)
    let htmlText = '<option value="">Выберите валюту</option>'
    return htmlText + currencies.map(currencie => `\n<option value=${currencie.toLowerCase()}>${currencie}</option>`).join("")
}

console.log(getDropdown(currencies))
  
