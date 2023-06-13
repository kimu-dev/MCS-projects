const bitcoin = {title: "Bitcoin", price: 47311}

/* На основе объекта details, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/

function renderTableRow(bitcoin) {
    console.log(bitcoin)
    return `<tr>
    <td>${bitcoin.title}</td>
    <td>${bitcoin. price}</td>
  </tr>`
}

console.log(renderTableRow(bitcoin));
  