const navbar = document.querySelector(".navbar");
const cart = document.querySelector(".cart-items-container");
const cartItems = document.querySelector(".cart-item")
const searchBar = document.querySelector(".search-form")
const addToCart = document.querySelectorAll(".add-cart")

const notification = document.getElementById("cart-btn")

let counter = 0;


document.querySelector("#search-btn").onclick =()=>{
    searchBar.classList.toggle("active")
    cart.classList.remove("active")
    navbar.classList.remove("active")
}

document.querySelector("#menu-btn").onclick = ()=>{
    navbar.classList.toggle("active")
    cart.classList.remove("active")
    searchBar.classList.remove("active")
}


document.querySelector("#cart-btn").onclick = ()=>{
    cart.classList.toggle("active")
    navbar.classList.remove("active")
    searchBar.classList.remove("active")
}

window.onscroll = ()=>{
    navbar.classList.remove("active")
    cart.classList.remove("active")
    searchBar.classList.remove("active")
}
    
document.querySelector(".cart-items-container").addEventListener("click" ,removeItem)


addToCart.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault()
        
        const parent = e.target.parentElement;
        const [title, ,childs] = parent.children
        const greatParent = parent.parentElement
        const [,source,] = greatParent.children
        const image = source.firstElementChild.src;

        let temp = childs.innerHTML.split(" ")
        const price = temp[0]
            
        const node = document.createElement("div")
        node.classList.add("cart-item")
        node.innerHTML = `
        <span class="fa-solid fa-xmark"></span>
        <img src="${image}" alt="">
        <div class="content">
        <h3>${title.innerText}</h3>
        <div class="price">${price}</div>
        </div>
        `;
        cart.insertBefore(node, cart.lastElementChild);  
        content = counter;

        if(notification.classList.contains("shop")){
            counter++
            notification.setAttribute("data-content", counter)
        }else{
            counter++
            notification.classList.add("shop")
            notification.setAttribute("data-content", counter)
        }
    })
})

notification.addEventListener("click", ()=>{
    notification.classList.remove("shop")
    counter=0;
})



function removeItem(){
    let x = document.querySelectorAll(".fa-xmark")
    x.forEach((e)=>{
        e.addEventListener("click",(event)=>{
            event.preventDefault()
            let item = event.target.parentElement
            item.remove()
        })
    })
}