var obj = {
    name: "",
    ingredients: "",
    steps: "",
    originalUser: 0

}

console.log("scrpit start")
$("#form").on("submit", (event) => {
    console.log("SUBMIT DETECTED");
    event.preventDefault();

    var name = $("#name").val().trim();
    var ingredients = $("#ingredients").val().trim();
    var steps = $("#steps").val().trim();
    console.log(name, ingredients, steps);

    var ing = ingredients.split(","
    );
    console.log(ing)
    var stps = steps.split("\n");
    console.log(stps)


    $("#modal-ter").addClass("is-active");

    $("#recipe-name").text(name)
    var ingHolder = $("#ing-holder");
    var stepHolder = $("#step-holder");

    ing.forEach((e) => {
        var li = $("<li>").text(e);
        ingHolder.append(li)

    })
    stps.forEach((e) => {
        var li = $("<li>").text(e);
        stepHolder.append(li)
    })


    obj.name = name;
    obj.ingredients = ing;
    obj.steps = stps;

})


$("#good").on("click", function (event) {
    $.ajax("/recipes", {
        type: "POST",
        data: obj
    }).then(
        function () {

            console.log("new recipe");
            location.reload();


        })
});
$("#bad").on("click", function (event) {
    $("#modal-ter").removeClass("is-active")

})



