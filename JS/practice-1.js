const currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"]

function getDropdown(currencies) {
    console.log(currencies);
    let html_script = `<option value="">Выберите валюту</option>`;
    currencies.forEach(function (currencie) {
      html_script += `\n<option value="${currencie.toLowerCase()}">${currencie}</option>`;
    });
    return console.log(html_script);
  }

console.log(getDropdown(currencies));