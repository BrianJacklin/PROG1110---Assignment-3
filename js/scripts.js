// total contributors
	var totalCont = document.getElementById("contributions");
	var rowCount = document.getElementById("lighthouse-table").rows.length - 1; 
	totalCont.innerHTML = rowCount; 

// total contributions
	var myTable = document.getElementById("lighthouse-table");
	var totalAmount = document.getElementById("totalAmount");
	var amount = 0
	var i = 1;
		
	for(i;i <= rowCount;i++){
		amount += parseInt(myTable.rows[i].cells[1].innerHTML);
		totalAmount.innerHTML = "$"+amount.toFixed(2);
	}
