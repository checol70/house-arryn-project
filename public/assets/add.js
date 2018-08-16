var obj = {
    name: "",
    ingredients: "",
    steps: "",
    originalUser: 0

}

$("#form").on("submit", (event) => {
    event.preventDefault();

    var name = $("#name").val().trim();
    var ingredients = $("#ingredients").val().trim();
    var steps = $("#steps").val().trim();

    var ing = ingredients.split(","
    );
    var stps = steps.split("\n");


    $("#modal-ter").addClass("is-active");

    $("#recipe-name").text(name)
    var ingHolder = $("#ing-holder");
    var stepHolder = $("#step-holder");

    ingHolder.empty();
    stepHolder.empty();

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
            location.reload();
        })
});
$("#bad").on("click", function (event) {
    $("#modal-ter").removeClass("is-active")

})



