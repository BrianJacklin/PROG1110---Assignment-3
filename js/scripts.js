//Globals
	var myTable = document.getElementById("data");

// Create the table
	for(var i = 0;i <= firstName.length - 1;i++){
		//insert rows
			var row = myTable.insertRow(i);

		//assign cells
			var cellDate = row.insertCell(0);
			var cellAmount = row.insertCell(1);
			var cellFirstName = row.insertCell(2);
			var cellLastName = row.insertCell(3);
			var cellAddress = row.insertCell(4);

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

// total contributors
	var totalCont = document.getElementById("contributions");
	var rowCount = myTable.rows.length;  
	totalCont.innerHTML = rowCount; 

// total contributions
	var totalAmount = document.getElementById("totalAmount");	

	for(var i = 0,amount = 0;i <= rowCount - 1;i++){
		amount += parseFloat(myTable.rows[i]	       // get row use += to add at each iteration
								    .cells[1] 		   // get amount cell
								    .innerHTML 		   // get contents 
								    .substring(1));    // remove $ sign
		totalAmount.innerHTML = "$"+amount.toFixed(2); // format and display
	}