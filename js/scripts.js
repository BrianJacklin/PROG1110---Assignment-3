var myTable = document.getElementById("data");

for(var i = 0;i <= firstName.length - 1;i++){
	var row = myTable.insertRow(i);

	var cellDate = row.insertCell(0);
	var cellAmount = row.insertCell(1);
	var cellFirstName = row.insertCell(2);
	var cellLastName = row.insertCell(3);
	var cellAddress = row.insertCell(4);
		
	cellDate.innerHTML = date[i] ;
	cellAmount.innerHTML = "$"+amount[i].toFixed(2);
	cellFirstName.innerHTML = firstName[i] ;
	cellLastName.innerHTML = lastName[i] ;
	cellAddress.innerHTML = street[i] + "<br>" +
						    city[i] + ", " + 
						    state[i] + " " +
						    zip[i] + "<br>";

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
		amount += parseFloat(myTable.rows[i].cells[1].innerHTML);
		totalAmount.innerHTML = "$"+amount.toFixed(2);
	}

/*
if(myTable.rows % 2){
	alert("odd");
}
*/