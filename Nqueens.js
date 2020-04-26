var count = 0;

var old_table = document.createElement("table");
for (var i = 1; i < 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < 9; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white";
            td.id = count;
        } else {
            td.className = "black";
            td.id = count;
        }
        tr.appendChild(td);
        count++;
    }
    old_table.appendChild(tr);
}
document.body.appendChild(old_table);

function addtoev() {
  var set = document.getElementsByTagName("button");
  for (var s = 0; s < set.length; s++) {
    set[s].addEventListener("click", function() {
 	
    	var new_table = document.createElement("table");
		for (var i = 1; i <= this.id; i++) {
    		var tr = document.createElement('tr');
    		for (var j = 1; j <= this.id; j++) {
        	var td = document.createElement('td');
        		if (i%2 == j%2) {
            	td.className = "white";
            	td.id = count;
        		} else {
            	td.className = "black";
            	td.id = count;
        	}
        tr.appendChild(td);
        count++;
    }
    new_table.appendChild(tr);
}
old_table.parentNode.replaceChild(new_table, old_table);
old_table = new_table;
	});
  }
}

window.addEventListener("load",function() {
  addtoev();
});



