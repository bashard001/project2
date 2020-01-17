$(function () {

  console.log("kitchikar.js file loaded.. ");


  $(".category").on("click", function (event) {
    var category = $(this).attr('value');
    console.log("category clickes is: " + category)

    var queryURL = "/category/" + category;
    console.log("queryURL:" + queryURL);
    // Send the GET request.
    $.ajax(queryURL, {
      type: "GET",
      // data: "kitchenitems"
    }).then(
      function (data) {
        console.log("from ajax call:" + data);
      });

    // $(".shopAll").on("click", function (event) {
    //   event.preventDefault();
    //   // Send the PUT request.
    //   $.ajax("/all", {
    //     type: "PUT",
    //     data: "kitchenitems"
    //   }).then(
    //     function (data) {

    //       location.reload();
    //     });
    // });

  })
})