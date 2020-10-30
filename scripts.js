let records = [
	{"ninumber":"ZS502747A", "fullname":"Chris P Bacon", "phone":"07659-831024", "address":"123 Elliot Hill", "department":"IT"},
	{"ninumber":"XS130502B", "fullname":"Miles A Head", "phone":"07666-616680", "address":"321 Haha Road", "department":"Sales"},
	{"ninumber":"MY034526D", "fullname":"Rick O'Shea", "phone":"07440-003065", "address":"64 Zoo Lane", "department":"HR"},
	{"ninumber":"AK311470", "fullname":"Robyn Banks", "phone":"07342-472921", "address":"324 Langton Ridgeway", "department":"HR"},
	{"ninumber":"LY682275B", "fullname":"Lorne Mowers", "phone":"07822-821023", "address":"234 Julian Market", "department":"IT"},
	{"ninumber":"BK227215B", "fullname":"Frank N Stein", "phone":"07661-522545", "address":"12 Springfield Grange", "department":"Sales"},
	{"ninumber":"XB363374C", "fullname":"Hedda Hare", "phone":"07563-758264", "address":"54 Blackbird Crescent", "department":"IT"},
	{"ninumber":"MY501327A", "fullname":"Upton O Goode", "phone":"07401-414740", "address":"2 St Margarets Drive", "department":"IT"},
	{"ninumber":"TT405395B", "fullname":"Marius Quick", "phone":"07870-297789", "address":"98 Earl Path", "department":"IT"},
	{"ninumber":"AZ764036A", "fullname":"Max E Mumm", "phone":"07872-642897", "address":"233 Lady Smith Avenue", "department":"IT"},
	{"ninumber":"ES73841C", "fullname":"Yul B Allwright", "phone":"07750-872412", "address":"45 Fountains Broadway", "department":"Sales"},
	{"ninumber":"WX465470A", "fullname":"Lori Driver", "phone":"07773-782275", "address":"65 Burlington Lodge", "department":"HR"},
	{"ninumber":"AK625470D", "fullname":"Shirley U Care", "phone":"07569-060117", "address":"97 Holderness Drive", "department":"HR"},
	{"ninumber":"SW098272B", "fullname":"Felix Cited", "phone":"07394-529507", "address":"32 Banningham Court", "department":"Sales"},
	{"ninumber":"OB043941D", "fullname":"Sandy Beech", "phone":"07958-301691", "address":"3 Third Mount", "department":"Sales"}
];

var i = 0;

function showdata(){	
	var table = document.getElementById("hrtable");
	for (; i < records.length; i++){
		var row = table.insertRow();
		var nino = row.insertCell(0);
		var name = row.insertCell(1);
		var telephone = row.insertCell(2);
		var addr = row.insertCell(3);
		var depart = row.insertCell(4);
		var del = row.insertCell(5);
		var edit = row.insertCell(6);
		var editRowId = row.insertCell(7);
		row.id = i;
		nino.innerHTML = records[i]["ninumber"];
		name.innerHTML = records[i]["fullname"];
		telephone.innerHTML = records[i]["phone"];
		addr.innerHTML = records[i]["address"];
		depart.innerHTML = records[i]["department"];
		var rownumber = row.rowIndex;
		del.id = i;
		editRowId.innerHTML = i;
		editRowId.style.visibility = "hidden";
		var nationalInsuranceNumber = records[i]["ninumber"];
		del.innerHTML = '<button type="button" class="btn btn-primary delete" id="' + i + '" onclick="deletedRecord(this.id)">Delete</button>';
		edit.innerHTML = '<button type="button" class="btn btn-primary edit" data-toggle="modal" data-target="#editModal" id="' + i + '" onclick="editRecord(this.id)">Edit</button>';
		}
	filterOptions();
	}

function areYouSure(){

	}

function filterOptions(){
	var filterButton = document.getElementById("Departments");
	filterLength = filterButton.length;
	for (x = filterLength - 1; x >= 0; x--){
		filterButton.options[x] = null;
	}
	
	var option = document.createElement("option");
	option.text = "...";
	filterButton.add(option);
	var distinctDepartments = [...new Set(records.map(x => x.department))];
	for (var y = 0; y < distinctDepartments.length; y++){
		if (distinctDepartments[y] != undefined){
			var option = document.createElement("option");
			option.text = distinctDepartments[y];
			filterButton.add(option);
			}
		}
	}

function filterTable(selection = 1){
	console.log(selection);
	var dropdown = document.getElementById("Departments");

	if (selection != 1){
		dropdown.value = selection;
		console.log(dropdown.value);
		}
	

	var departmentSelection = dropdown.value;
		
	var table = document.getElementById("hrtable");
	var row = table.rows
	var x = 1;
	var y = 1;

	for (; y < row.length; y++){
		if (row[y].style.visibility == "collapse"){
			continue;
			}
		else {
			row[y].style.display = "";
			}
		}
	
	for (; x < row.length; x++){
		currentRow = row[x];
		if (departmentSelection == "..."){
				break;
			}

		currentRowDepartment = currentRow.cells[4].innerHTML;
		if (currentRowDepartment != departmentSelection){
			currentRow.style.display = "none";
			}
		}
	}

function clearFilter(){
	console.log("CLEAR FILTER FUNCTION CALLED");
	var table = document.getElementById("hrtable");
	var row = table.rows
	var x = 1;
	var y = 1;

	for (; y < row.length; y++){
		if (row[y].style.visibility == "collapse"){
			continue;
			}
		else {
			row[y].style.display = "";
			}
		}
	filterOptions();
	}


function deletedRecord(x){
	var table = document.getElementById("hrtable");
	delete records[x];
	var row = table.rows;
	var numberX = parseInt(x) + 1;
	x = parseInt(x);
	var number = 1;
	rowId = row[numberX].id;
	row[numberX].style.visibility="collapse";


	var dropdown = document.getElementById("Departments");
	var departmentSelection = dropdown.value;

	filterOptions();
	filterTable(departmentSelection);
	}

function editRecord(x){
	cancel();
	var table = document.getElementById("hrtable");
	var row = table.rows;
	var numberX = parseInt(x) + 1;
	var currentRow = row[numberX];
	var show = document.getElementById("editModal");
	show.style.visibility="";
	editedNino = document.getElementById("editNino");
	editedNino.value = currentRow.cells[0].innerHTML;
	editedName = document.getElementById("editName");
	editedName.value = currentRow.cells[1].innerHTML;
	editedPhone = document.getElementById("editPhone");
	editedPhone.value = currentRow.cells[2].innerHTML;
	editedAddress = document.getElementById("editAddress");
	editedAddress.value = currentRow.cells[3].innerHTML;
	editedDepartment = document.getElementById("editDepartment");
	editedDepartment.value = currentRow.cells[4].innerHTML;
	editedIValue = document.getElementById("iValue");
	editedIValue.value = currentRow.cells[7].innerHTML;
	editedIValue.style.visibility = "collapse";
	}

function saveRecords(){
	var table = document.getElementById("hrtable");
	var row = table.rows;
	var iValue = document.getElementById("iValue");
	iValue = parseInt(iValue.value);
	iValue += 1;
	var currentRow = row[iValue];
	editedNino = document.getElementById("editNino");
	newNinoValue = editedNino.value;
	currentRow.cells[0].innerHTML = newNinoValue;
	editedName = document.getElementById("editName");
	newNameValue = editedName.value;
	currentRow.cells[1].innerHTML = newNameValue;

	editedPhone = document.getElementById("editPhone");
	newPhoneValue = editedPhone.value;
	currentRow.cells[2].innerHTML = newPhoneValue;

	editedAddress = document.getElementById("editAddress");
	newAddressValue = editedAddress.value;
	currentRow.cells[3].innerHTML = newAddressValue;

	editedDepartment = document.getElementById("editDepartment");
	newDepartmentValue = editedDepartment.value;
	currentRow.cells[4].innerHTML = newDepartmentValue;

	var recordsIValue = iValue;
	recordsIValue -= 1;


	records[recordsIValue]["ninumber"] = newNinoValue;
	records[recordsIValue]["fullname"] = newNameValue;
	records[recordsIValue]["phone"] = newPhoneValue;
	records[recordsIValue]["address"] = newAddressValue;
	records[recordsIValue]["department"] = newDepartmentValue;


	cancel1();
	var dropdown = document.getElementById("Departments");
	var departmentSelection = dropdown.value;
	filterOptions();
	console.log("THE DEPARTMENT SELECTION IS: " + departmentSelection);
	filterTable(departmentSelection);
	}

function addNew(){
	cancel1();
	var show = document.getElementById("form");
	show.style.display="";
	}

function cancel(){
	var show = document.getElementById("editModal");
	show.style.display="none";
	var newNino = document.getElementById("newNino");
	var newName = document.getElementById("newName");
	var newPhone = document.getElementById("newPhone");
	var newAddress = document.getElementById("newAddress");
	var newDepartment = document.getElementById("newDepartment");
	newNino.value = "";
 	newName.value = "";
	newPhone.value = "";
	newAddress.value = "";
	newDepartment.value = "";
	}

function cancel1(){
	var show = document.getElementById("editModal");
	show.style.visibility="collapse";
	}

function submit1(){
	console.log("HERE");
	var newNino = document.getElementById("newNino");
	var newName = document.getElementById("newName");
	var newPhone = document.getElementById("newPhone");
	var newAddress = document.getElementById("newAddress");
	var newDepartment = document.getElementById("newDepartment");
	var data = {"ninumber":newNino.value, "fullname":newName.value, "phone":newPhone.value, "address":newAddress.value, "department":newDepartment.value};
	records.push(data);
	var show = document.getElementById("myModal");
	var table = document.getElementById("hrtable");
	var row = table.insertRow();
	var nino = row.insertCell(0);
	var name = row.insertCell(1);
	var telephone = row.insertCell(2);
	var addr = row.insertCell(3);
	var depart = row.insertCell(4);
	var del = row.insertCell(5);
	var edit = row.insertCell(6);
	var editRowId = row.insertCell(7);
	row.id = i;
	editRowId.innerHTML = i
	editRowId.style.visibility = "hidden";
	nino.innerHTML = newNino.value;
	name.innerHTML = newName.value;
	telephone.innerHTML = newPhone.value;
	addr.innerHTML = newAddress.value;
	depart.innerHTML = newDepartment.value;
	newNino.value = "";
	newName.value = "";
	newPhone.value = "";
	newAddress.value = "";
	newDepartment.value = "";
	del.innerHTML = '<button type="button" class="btn btn-primary delete" id="' + i + '" onclick="deletedRecord(this.id)">Delete</button>';
	edit.innerHTML = '<button type="button" class="btn btn-primary edit" data-toggle="modal" data-target="#editModal" id="' + i + '" onclick="editRecord(this.id)">Edit</button>';
	i++;
	filterOptions();
	}




window.onload = showdata;