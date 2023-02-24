function calculateCost() {
	// Get the values of the input fields
	var cpu = document.getElementById("cpu").value;
	var ram = document.getElementById("ram").value;
	var disk = document.getElementById("disk").value;

	// Calculate the total cost
	var total = (cpu * 1.05) + (ram * 0.28) + (disk * 0.04);

	// Set the value of the total input field
	document.getElementById("total").value = "$" + total.toFixed(2);
}
