const data = [
    ["Bitcoin", 47311],
    ["Ethereum", 3407],
    ["Solana", 163],
    ["Tether", 1]
]

/* На основе параметра rows, функция renderTableRows должна возвращать следующий HTML:
<tr>
  <td>название криптовалюты здесь</td>
  <td>стоимость криптовалюты здесь</td>
</tr> 
*/

// function renderTableRows(rows) {
//     console.log(rows)
//     let htmlText = ""
//     rows.forEach(row => htmlText += `<tr>
//     <td>${row[0]}</td>
//     <td>${row[1]}</td>
//   </tr> `)
//     return htmlText;
// }

const renderTableRows = (rows) => {
    return rows.map((row) => `\n<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("");
  };

console.log(renderTableRows(data));
