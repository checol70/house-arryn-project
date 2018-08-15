console.log("scrpit start")
	$("#form").on("submit", (event)=>{
		console.log("SUBMIT DETECTED");
		event.preventDefault();
	
		var name = $("#name").val().trim();
		var ingredients = $("#ingredients").val().trim();
		var steps = $("#steps").val().trim();
        console.log(name, ingredients, steps);
        
        var ing = ingredients.split(","
        );
        console.log(ing)
        var stps = steps.split("/([,\n])g/");
        console.log(stps)

    })
    


