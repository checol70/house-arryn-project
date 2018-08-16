
//Added jquery on click event to capture the input search value and assign 
// href the route with the search value

$('#searchRecipes').on('click', function() {
    var inputVal = $("input").val().trim();
    console.log("clicked")

    // minor error checking
    if(inputVal.includes("=")|| inputVal.includes("*")){
        $("#invalid").addClass("is-active");
        console.log("hellog")
        return 
    }
    location.href = `/recipes/${inputVal}`;
})

$("#close-warning").on("click", function(event){
    $("#invalid").removeClass("is-active");
})



