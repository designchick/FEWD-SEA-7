$(document).ready(function() {	
	// //select the select field, store as variable
	// var $selectField = $("#city-type");
	// //store all cities in an array
	// var cities=["NYC", "SF", "LA", "ATX", "SYD"];
	// //loop through the arrow with forEach
	// cities.forEach(function(city) {
	// //create a new option element
	// 	var $option = $("<option>");
	// 	//add an HTML value to the option element
	// 	//set the value attribute on the option element
	// 	$option.html(city).val(city);
	// 	//append the option element to the select field
	// 	$selectField.append($option);

	// });

	var cities=["NYC", "SF", "LA", "Austin", "Sydney"];

	for(var i = 0; i < cities.length; i++){
		var option = "<option value=";
		option+= cities[i];
		option+= ">" + cities[i] + "</option>"
		$("#city-type").append(option);
	};

	//bind a select field event onChange()
	$("#city-type").change(function() {
		var selectedCity = $("#city-type option:selected").val();
		$("body").removeClass()
		$("body").addClass(selectedCity.toLowerCase());

	});

	//

// var cities=["NYC", "SF", "LA", "ATX", "SYD"];
// for(var i = 0; i < cities.length; i++){
// 	// $("#city-type").add(cities[i]);
// }  
});


