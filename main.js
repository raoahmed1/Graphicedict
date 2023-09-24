//search functionality
function filter(){
    var filtervalue, input, productlist,productname,h4,i;
    input = document .getElementById("search");
    filtervalue = input.value.toUpperCase();
    productlist = document.getElementById("product-list");
    productname = productlist.getElementsByClassName("col-4");
    for (i = 0; i < productname.length ; i++) {
        h4 = productname[i].getElementsByTagName("h4") [0];
    //In search if typed string matches with the element name.
    if(h4.innerHTML.toUpperCase().indexOf(filtervalue) > -1){
        productname[i].style.display = "";
    }
    else{
        productname[i].style.display = "none";
        }
    }
}
//sort product by price
function sortList() {
    var productlist, productname, i, switching, b, c, shouldswitch;
    productlist = document.getElementById("product-list");
    productname = productlist.getElementsByClassName("col-4");
    switching = true;//boolean true
      while (switching) {
        switching = false;
        //loop is running through each product
        for (i = 0 ; i < (productname.length - 1) ; i++) {
            shouldswitch = false;
            b = productname[i].getElementsByTagName("span") [0].innerHTML;
            c = productname[i+1].getElementsByTagName("span") [0].
              innerHTML;
            //condion to check price for each productitem
            if (Number (b) > Number (c)) {
                shouldswitch = true;
                break;
            }
        }
    //each element will switch with next product element based on 
    //product price sorting
        if (shouldswitch) {
            productname[i].parentNode.insertBefore(productname[i + 1],productname[i]);
            switching = true;
        }
      }
}
//contact validation
function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;
//asian names can be three-letter names such as lee mee hence limit >=3
if (name.length < 2) {
    text = "please Enter Valid Name (Minimume 3 characters)";
    error_message.innerHTML = text;
    return false;
    }
if (subject.length < 10) {
    text = "please Enter Correct Subject (Minimume 10 characters)";
    error_message.innerHTML = text;
    return false;
    }
if (isNaN(phone) || phone.length != 11) {
    text = "please Enter Valid Phone Number (11 digit)";
    error_message.innerHTML = text;
    return false;
    }
    if (message.length <= 140) {
        text = "please Enter More Then 140 Characters";
        error_message.innerHTML = text;
        return false;
        }
    if (message.length >= 500) {
        text = "please Enter Less Then 500 Characters";
        error_message.innerHTML = text;
        return false;
}
    alert("Form Submitted Successfully! Thank You For Contacting Us");
    return true;
}