var cart = {};

$(function () {

  cart = JSON.parse(localStorage.getItem('myCart'));
  console.log("kitchikar.js file loaded.., "+ JSON.stringify(cart));



  $(".category").on("click", function (event) {
    var category = $(this).attr('value');
    //console.log("category clickes is: " + category)

    var queryURL = "/category/" + category;
    //console.log("queryURL:" + queryURL);
    // Send the GET request.
    $.ajax(queryURL, {
      type: "GET",
      // data: "kitchenitems"
    }).then(
      function (data) {
        //console.log("from ajax call:" + data);
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

  /*
  * This method is invoked when addToCart button is clicked. 
  */
  $(".addToCartAnchor").on("click", function (event) {
      console.log("===============>"+$(this).attr('prodName'));
      if(cart == undefined) {
        cart = {};
        localStorage.setItem('myCart', JSON.stringify(cart));
      }
      console.log("===============>"+cart[prodName]);
      var countOfId = 0;
      var prodName = $(this).attr('prodName');
      if(cart[prodName] == undefined) {
        //console.log("undefined");
        cart[prodName] = 1;  
      } else {
        //console.log("incrementing..");
        cart[prodName] =  cart[prodName]+1;  
      }
      console.log("countOfId in kart: "+cart[prodName]);
      localStorage.setItem('myCart', JSON.stringify(cart));
      //event.preventDefault();
    })

})


