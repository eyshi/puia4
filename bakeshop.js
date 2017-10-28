/*store user's choices for the product in an object*/
/*var checkout = {flavor1: "" flavor2: "" pack:""};
var checkoutJSON = JSON.stringify(checkout);
localStorage.setItem("passcode", checkoutJSON);
var storedCheckout = localStorage.getItem("passcode");
JSON.parse(storedCheckout);*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function packList() {
    document.getElementById("pack").classList.toggle("show");/*"select pack" dropdown*/
}
function flavorList1() {
    document.getElementById("flavors1").classList.toggle("show");/*"add 1 additional flavor" dropdown*/
}

function flavorList2() {
    document.getElementById("flavors2").classList.toggle("show");/*"add 2nd additional flavor" dropdown*/
}

/* Closes the dropdown menu if the user clicks outside of it*/
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

/* This section below changes the image, header, and description text depending on what flavor the user chooses*/
$("#og").click(function(){ /*original bun*/
  $(".pumpkinspice h1").text("Original");//update header
  $(".pumpkinspice p").text("The bun that started it all.");//update text
  $("#productimg").attr("src","ogcinnamon.png");//update image
  $("#flavor1").text("Original");//update flavor dropdown 1
});

$("#og2").click(function(){ /*original bun dropdown 2*/
  $(".pumpkinspice h1").text("Original");//update header
  $(".pumpkinspice p").text("The bun that started it all.");//update text
  $("#productimg").attr("src", "ogcinnamon.png");//update image
  $("#flavor2").text("Original");//update flavor dropdown 2
});

$("#glutenfree").click(function(){/*glutenfree*/
  $(".pumpkinspice h1").text("Original Gluten Free");//update text
  $(".pumpkinspice p").text("The great taste of our Original bun, but gluten free!");//update text
  $("#productimg").attr("src","ogglutenfree.png");//update image
  $("#flavor1").text("Original Gluten Free");//update flavor dropdown 1
});

$("#glutenfree2").click(function(){/*glutenfree dropdown 2*/
  $(".pumpkinspice h1").text("Original Gluten Free");//update text
  $(".pumpkinspice p").text("The great taste of our Original bun, but gluten free!");//update text
  $("#productimg").attr("src","ogglutenfree.png");//update image
  $("#flavor2").text("Original Gluten Free");//update flavor dropdown 2
});

$("#vegan").click(function(){/*vegan*/
  $(".pumpkinspice h1").text("Original Vegan");//update text
  $(".pumpkinspice p").text("The great taste of our Original bun, but vegan!");//update text
  $("#productimg").attr("src","ogvegan.png");//update image
  $("#flavor1").text("Original Vegan");//update flavor dropdown 1
});

$("#vegan2").click(function(){/*vegan dropdown 2*/
  $(".pumpkinspice h1").text("Original Vegan");//update text
  $(".pumpkinspice p").text("The great taste of our Original bun, but vegan!");//update text
  $("#productimg").attr("src","ogvegan.png");//update image
  $("#flavor2").text("Original Vegan");//update flavor dropdown 2
});

$("#carrotcake").click(function(){/*carrotcake*/
  $(".pumpkinspice h1").text("Carrot Cake");//update text
  $(".pumpkinspice p").text("Carrot cake + cinnamon buns = what more could you want?.");//update text
  $("#productimg").attr("src","carrotcake.png");//update image
  $("#flavor1").text("Carrot Cake");//update flavor dropdown 1
});

$("#carrotcake2").click(function(){/*carrotcake dropwdown 2*/
  $(".pumpkinspice h1").text("Carrot Cake");//update text
  $(".pumpkinspice p").text("Carrot cake + cinnamon buns = what more could you want?.");//update text
  $("#productimg").attr("src","carrotcake.png");//update image
  $("#flavor2").text("Carrot Cake");//update flavor dropdown 2
});

$("#buttermilk").click(function(){/*buttermilk*/
  $(".pumpkinspice h1").text("Old Fashioned Buttermilk");//update text
  $(".pumpkinspice p").text("A classic favorite straight from Mom's kitchen.");//update text
  $("#productimg").attr("src","oldfashioned.png");//update image
  $("#flavor1").text("Old Fashioned Buttermilk");//update flavor dropdown 1
});

$("#buttermilk2").click(function(){/*buttermilk dropdown 2*/
  $(".pumpkinspice h1").text("Old Fashioned Buttermilk");//update text
  $(".pumpkinspice p").text("A classic favorite straight from Mom's kitchen.");//update text
  $("#productimg").attr("src","oldfashioned.png");//update image
  $("#flavor2").text("Old Fashioned Buttermilk");//update flavor dropdown 2
});

$("#caramel").click(function(){/*caramel*/
  $(".pumpkinspice h1").text("Caramel Pecan");//update text
  $(".pumpkinspice p").text("Caramel and pecan goodness.");//update text
  $("#productimg").attr("src","caramel.png");//update image
  $("#flavor1").text("Caramel");//update flavor dropdown 1
});

$("#caramel2").click(function(){/*caramel dropdown 2*/
  $(".pumpkinspice h1").text("Caramel Pecan");//update text
  $(".pumpkinspice p").text("Caramel and pecan goodness.");//update text
  $("#productimg").attr("src","caramel.png");//update image
  $("#flavor2").text("Caramel");//update flavor dropdown 2
});

$("#blackberry").click(function(){/*blackberry*/
  $(".pumpkinspice h1").text("Blackberry");//update text
  $(".pumpkinspice p").text("A delicious tart bun.");//update text
  $("#productimg").attr("src","blackberry.png");//update image
  $("#flavor1").text("Blackberry");//update flavor dropdown 1
});

$("#blackberry2").click(function(){/*blackberry dropdown 2*/
  $(".pumpkinspice h1").text("Blackberry");//update text
  $(".pumpkinspice p").text("A delicious tart treat.");//update text
  $("#productimg").attr("src","blackberry.png");//update image
  $("#flavor2").text("Blackberry");//update flavor dropdown 2
});

$("#lemon").click(function(){/*lemon*/
  $(".pumpkinspice h1").text("Lemon Lavender");//update text
  $(".pumpkinspice p").text("When life gives you lemons, add lavender and eat these buns.");//update text
  $("#productimg").attr("src","lemonlavender.png");//update image
  $("#flavor1").text("Lemon Lavender");//update flavor dropdown 1
});

$("#lemon2").click(function(){/*lemon dropdown 2*/
  $(".pumpkinspice h1").text("Lemon Lavender");//update text
  $(".pumpkinspice p").text("When life gives you lemons, add lavender and eat these buns.");//update text
  $("#productimg").attr("src","lemonlavender.png");//update image
  $("#flavor2").text("Lemon Lavender");//update flavor dropdown 2
});

$("#cranberry").click(function(){/*cranberry*/
  $(".pumpkinspice h1").text("Cranberry");//update text
  $(".pumpkinspice p").text("Just in time for Thanksgiving.");//update text
  $("#productimg").attr("src","cranberry.png");//update image
  $("#flavor1").text("Cranberry");//update flavor dropdown 1
});

$("#cranberry2").click(function(){/*cranberry dropdown 2*/
  $(".pumpkinspice h1").text("Cranberry");//update text
  $(".pumpkinspice p").text("Just in time for Thanksgiving.");//update text
  $("#productimg").attr("src","cranberry.png");//update image
  $("#flavor2").text("Cranberry");//update flavor dropdown 2
});

$("#strawberry").click(function(){/*strawberry rhubarb*/
  $(".pumpkinspice h1").text("Strawberry Rhubarb");//update text
  $(".pumpkinspice p").text("Perfect for spring.");//update text
  $("#productimg").attr("src","strawberryrhubarb.png");//update image
  $("#flavor1").text("Strawberry Rhubarb");//update flavor dropdown 1
});

$("#strawberry2").click(function(){/*strawberry rhubarb dropdown 2*/
  $(".pumpkinspice h1").text("Strawberry Rhubarb");//update text
  $(".pumpkinspice p").text("Perfect for spring.");//update text
  $("#productimg").attr("src","strawberryrhubarb.png");//update image
  $("#flavor2").text("Strawberry Rhubarb");//update flavor dropdown 2
});

$("#birthday").click(function(){/*birthday*/
  $(".pumpkinspice h1").text("Birthday Cake");//update text
  $(".pumpkinspice p").text("It doesn't have to be your birthday to eat a Birthday Cake bun.");//update text
  $("#productimg").attr("src","birthdaycake.png");//update image
  $("#flavor1").text("Birthday Cake");//update flavor dropdown 1
});

$("#birthday2").click(function(){/*birthday dropdown 2*/
  $(".pumpkinspice h1").text("Birthday Cake");//update text
  $(".pumpkinspice p").text("It doesn't have to be your birthday to eat a Birthday Cake bun.");//update text
  $("#productimg").attr("src","birthdaycake.png");//update image
  $("#flavor2").text("Birthday Cake");//update flavor dropdown 2
});

$("#walnut").click(function(){/*walnut*/
  $(".pumpkinspice h1").text("Walnut");//update text
  $(".pumpkinspice p").text("Nutty goodness in a bun.");//update text
  $("#productimg").attr("src","walnut.png");//update image
  $("#flavor1").text("Walnut");//update flavor dropdown 1
});

$("#walnut2").click(function(){/*walnut dropdown 2*/
  $(".pumpkinspice h1").text("Walnut");//update text
  $(".pumpkinspice p").text("Nutty goodness in a bun.");//update text
  $("#productimg").attr("src","walnut.png");//update image
  $("#flavor2").text("Walnut");//update flavor dropdown 2
});

$("#maple").click(function(){/*maple*/
  $(".pumpkinspice h1").text("Maple Apple Pecan");//update text
  $(".pumpkinspice p").text("Another fall favorite!");//update text
  $("#productimg").attr("src","mapleapplepecan.png");//update image
  $("#flavor1").text("Mapple Apple Pecan");//update flavor dropdown 1
});

$("#maple2").click(function(){/*maple dropdown 2*/
  $(".pumpkinspice h1").text("Maple Apple Pecan");//update text
  $(".pumpkinspice p").text("Another fall favorite!");//update text
  $("#productimg").attr("src","mapleapplepecan.png");//update image
  $("#flavor2").text("Mapple Apple Pecan");//update flavor dropdown 2
});

$("#bacon").click(function(){/*bacon*/
  $(".pumpkinspice h1").text("Bacon");//update text
  $(".pumpkinspice p").text("Satisfy both your salty and sweet cravings!");//update text
  $("#productimg").attr("src","bacon.png");//update image
  $("#flavor1").text("Bacon");//update flavor dropdown 1
});

$("#bacon2").click(function(){/*bacon dropdown 2*/
  $(".pumpkinspice h1").text("Bacon");//update text
  $(".pumpkinspice p").text("Satisfy both your salty and sweet cravings!");//update text
  $("#productimg").attr("src","bacon.png");//update image
  $("#flavor2").text("Bacon");//update flavor dropdown 2
});

/* depending on what the user chooses, changes the pack*/
$("#individual").click(function(){/*individual pack*/
  $("#selectpack").text("Individual");//update dropdown
});

$("#6pack").click(function(){/*6 pack*/
  $("#selectpack").text("6-pack");//update dropdown
});

$("#12pack").click(function(){/*12 pack*/
  $("#selectpack").text("12-pack");//update dropdown
});

/*when user  clicks on remove icon, the item in their shopping cart is removed*/
$("#remove").click(function(){
  $("#shoppingcart-item").hide();
  console.log("hello");
});
}
