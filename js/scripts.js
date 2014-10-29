window.onload = function() {
	//Globals
	var myTable = document.getElementById("data"),
	rowCount = myTable.rows,  
	totalCont = document.getElementById("contributions"),
	totalAmount = document.getElementById("totalAmount");	

	function createTable(){
		// Create the table
		for(var i = 0, len = firstName.length;i <= len - 1;i++){
			//insert rows
			var row = myTable.insertRow(),

			//assign cells
			cellDate = row.insertCell(0),
			cellAmount = row.insertCell(1),
			cellFirstName = row.insertCell(2),
			cellLastName = row.insertCell(3),
			cellAddress = row.insertCell(4);

			//insert data
			cellDate.innerHTML = date[i] ;
			cellAmount.innerHTML = "$"+amount[i].toFixed(2);
			cellFirstName.innerHTML = firstName[i] ;
			cellLastName.innerHTML = lastName[i] ;
			cellAddress.innerHTML = street[i] + "<br>" +
						city[i] + ", " + 
						state[i] + " " +
						zip[i] + "<br>";
			//Stripe the table						    
			if( i % 2){
				myTable.rows[i].classList.add("yellowrow");
			}
		}
	}

	function summary(){
		// total contributors
		totalCont.innerHTML = rowCount.length; 

		// total contributions
		for(var i = 0,amount = 0, len = rowCount.length;i <= len - 1;i++){
			amount += parseFloat(myTable.rows[i]	       // get row use += to add at each iteration
									    .cells[1] 		   // get amount cell
									    .innerHTML 		   // get contents 
									    .substring(1));    // remove $ sign
			totalAmount.innerHTML = "$"+amount.toFixed(2); // format and display
		}
	}
	
	function init(){
		createTable();
		summary();
	}
	
	init();
}
	
