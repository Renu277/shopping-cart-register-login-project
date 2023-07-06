let productsEl = document.getElementById("products");
let subTotal = document.getElementById("subtotal");
let cartIcon = document.getElementById("cartTotal");
let cartTotalItems = document.getElementById("totalItems");
let emptyCart = document.getElementById("removeItemsFromCart")
//console.log(products);
let cartBasket = JSON.parse(localStorage.getItem("data")) || [];
let renderProducts = () => {
    productsItemsData.forEach((x) => {
        let { id, name, price, desc, img } = x;
        let found = cartBasket.find((x) => x.id === id) || [];
        productsEl.innerHTML += `
        <div id=product-id-${id} class="ele">
        <img width="294" height="294" src="${img} " alt="">
        <div class="details">
            <h4>${name}</h4>
            <p class="${desc}">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <div class="price-btn">
                <h4>${price}€</h4>
                <div class="buttons">
                    <i onclick = "minusItems(${id})" class="bi bi-cart-dash"></i>
                    <div id=${id} class="quantity">
                       ${found.item === undefined ? 0 : found.item}                 
                    </div>
                    <i onclick = "plusItems(${id})"  class="bi bi-cart-plus"></i>  
                </div>
            </div>
            <div>
                <button  class="selected" onclick="plusItems(${id}); this.onclick=null;">Select-Product</button>
            </div>
        </div>

    </div>
`;

    });
}

renderProducts();


let plusItems = (id) => {
    let selected = id;
    let found = cartBasket.find((item) => item.id === selected.id); // searching for selected item exists or not.if exists then item count will increase else item is push into basket

    if (found === undefined) {
        cartBasket.push({
            id: selected.id,
            item: 1,
        });
    }
    else {
        found.item += 1;
    }
    //console.log(cartBasket);

    update(selected.id);
    localStorage.setItem("data", JSON.stringify(cartBasket));
    // setting the "cart items with key name data" inside the "localstorage"
    // JSON.stringify: we can read objects stored in storage
    
};

let minusItems = (id) => {
    let selected = id;
    let found = cartBasket.find((x) => x.id === selected.id);
    if (found === undefined) return;// when basket is empty it gives error.solution is this stmt.
    else if (found.item === 0) return;
    else {
        found.item -= 1;
    }
    // console.log(cartBasket);
    update(selected.id);
    cartBasket = cartBasket.filter((x) => x.item !== 0);

    localStorage.setItem("data", JSON.stringify(cartBasket));
    
};

let update = (id) => {

    //search function for if and only if item exists then incre item
    let found = cartBasket.find((x) => x.id === id);
    console.log(found.item);
    document.getElementById(id).innerHTML = found.item;
      numberOfUnits();
      totalCost();    
     
};

//number of items in the cart

let numberOfUnits = () => {  
    // console.log("numberofunit fun is running");
    cartTotalItems = (cartBasket
        .map((x) => x.item)//x.item chooses only item of the basket
        .reduce((x, y) => x + y, 0)//adds the total items in basket
    );
     // cartIcon.innerHTML = `Total-items : ${TotalItems}`;
     cartIcon.innerHTML = cartTotalItems;
}
numberOfUnits();

//dropDownCart

dropDownCart = () => {
    document.getElementById("dropdown").classList.toggle("show");
};

//total cost of the update items

totalCost = () => {

    total = (cartBasket.map((x) => {
        let { item, id } = x
        let found = productsItemsData.find(element => element.id === x.id)
        console.log(found);
        // console.log( item * found.price);   
        return item * found.price

    }).reduce((x, found) => x + found, 0)

    )
    //console.log(subTotal);

    subTotal.innerHTML = `Total-Amount : ${total.toFixed(2)}€`
    totalItems.innerHTML = `Total-items in the cart : ${cartTotalItems}`

};
totalCost();

//clear cart items
// remove item from cart
removeItemFromCart = () => {
    emptyCart.innerHTML = localStorage.setItem("data", 0);
                window.location.reload();
};

//logout
let logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", ()=>{
   window.open("logout.html")
    
  // alert("logout")
});