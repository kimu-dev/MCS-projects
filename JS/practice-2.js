const data = [
    ["Bitcoin", "47311"],
    ["Ethereum", "3407"],
    ["Solana", "163"],
    ["Tether", "1"]
]

function renderTableRows(data) {
    console.log(data)
    let html_script;
    data.forEach(function(row){
        html_script += `<tr>
            <td>${row[0]}</td>
            <td>${row[1]}</td>
        </tr> `
    });
    return html_script;
}

console.log(renderTableRows(data));