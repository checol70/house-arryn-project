var obj = {
    name: "",
    ingredients: "",
    steps: "",
    originalUser: 0
}
function checkForHacks(str){
    if(str.includes("=") || str.includes("*")){
        return true;
    }
    return false;
}
$("#form").on("submit", (event) => {
    event.preventDefault();

    var name = $("#name").val().trim();
    var ingredients = $("#ingredients").val().trim();
    var steps = $("#steps").val().trim();

    if(checkForHacks(name)||checkForHacks(ingredients)||checkForHacks(steps)){
        $("#invalid").addClass("is-active");
        console.log("hellog");
        return 
    }

    var ing = ingredients.split(","
    );
    var stps = steps.split("\n");


    $("#modal-ter").addClass("is-active");

    $("#recipe-name").text(name);
    var ingHolder = $("#ing-holder");
    var stepHolder = $("#step-holder");

    ingHolder.empty();
    stepHolder.empty();

    ing.forEach((e) => {
        var li = $("<li>").text(e);
        ingHolder.append(li);
    })
    stps.forEach((e) => {
        var li = $("<li>").text(e);
        stepHolder.append(li);
    })

    obj.name = name;
    obj.ingredients = ing;
    obj.steps = stps;
})

$("#close-warning").on("click", function(event){
    $("#invalid").removeClass("is-active");
})

$("#good").on("click", function (event) {
    $.ajax("/recipes", {
        type: "POST",
        data: obj
    }).then(
        function () {
            location.reload();
        })
});

$(".bad").on("click", function (event) {
    $("#modal-ter").removeClass("is-active");
})