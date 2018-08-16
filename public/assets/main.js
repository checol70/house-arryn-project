
//Added jquery on click event to capture the input search value and assign 
// href the route with the search value

$('#searchRecipes').on('click', function() {
    var inputVal = $("input").val().trim();
    console.log("clicked")
    location.href = `/recipes/${inputVal}`;
})



