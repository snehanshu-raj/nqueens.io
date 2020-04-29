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
 	  count = 0;
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
    var select = document.getElementsByTagName("td");
    for(var i = 0; i < select.length; i++)
    {
        select[i].addEventListener("click", function(){
            if(this.classList.contains("black_queen")){
                this.classList.remove("black_queen");
            }
            else
            if(this.classList.contains("white_queen")){
                this.classList.remove("white_queen");
            }

            else
            if(this.classList.contains("white")){
                this.classList.add("white_queen");
            }
            else{
                this.classList.add("black_queen");
            }           
        });
}

	});
  }
}

window.addEventListener("load",function() {
  addtoev();
});



