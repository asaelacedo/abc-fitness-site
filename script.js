const subscribeButton = document.getElementById("subscribeButton");

subscribeButton.addEventListener("click", function() {
    alert("Thank you for subscribing.");
});

const addCart1 = document.getElementById("addCart1");
const addCart2 = document.getElementById("addCart2");

if (addCart1){
    addCart1.addEventListener("click", function() {
    sessionStorage.setItem("cartItem1", "Individual Kickboxing");
    alert("Individual Kickboxing added to the cart");
});
}
if (addCart2){
    addCart2.addEventListener("click", function() {
        sessionStorage.setItem("cartItem2", "Group Kickboxing");
        alert("Group Kickboxing added to the cart.");
    });
    }
const clearCart = document.getElementById("clearCart");
const processOrder = document.getElementById("processOrder");
const viewCart=document.getElementById("viewCart");
if (clearCart){
    clearCart.addEventListener("click", function() {
        sessionStorage.removeItem("cartItem1");
        sessionStorage.removeItem("cartItem2");
        alert("Cart Cleared");
});
}
if (viewCart){
    viewCart.addEventListener("click", function() {
        const item1= sessionStorage.getItem("cartItem1");
        const item2= sessionStorage.getItem("cartItem2");
        alert("Cart Items:" + item1 + "'" + item2);
    });
}
if (processOrder){
    processOrder.addEventListener("click", function() {
    sessionStorage.removeItem("cartItem1");
    sessionStorage.removeItem("cartItem2");
    alert("Thank you for your order.");
});
}
const submitButton=document.getElementById("submitButton");
const customerName=document.getElementById("customerName");
const customerEmail=document.getElementById("customerEmail");
if (submitButton){
    submitButton.addEventListener("click", function() {

        localStorage.setItem("customerName", customerName.value);
        localStorage.setItem("customerEmail", customerEmail.value);

        alert(
            localStorage.getItem("customerName")+
            " "+
            localStorage.getItem("customerEmail")
        );
    });
}