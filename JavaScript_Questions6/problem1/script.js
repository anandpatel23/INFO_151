function data(){
    // print values to 3x4 table
    var num = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
    var table =  document.createElement("table");
    var i = 0;
    for (var r = 0; r < 3; r++) {
        var row = table.insertRow(r);
        for (var c= 0; c < 4; c++) {
            var cell = row.insertCell(c);
            cell.appendChild(document.createTextNode(num[i++]));
        }
    }
    document.body.appendChild(table);

    // sum array
    var sum = 0;
    for(var i = num.length; i--;){
        sum += num[i];
    }
    
    window.alert(sum);
}