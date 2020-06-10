var products = [
	{
		name: "Broccoli",
        vegetarian: true,
		glutenFree: true,
        organic: false,
        vegetable:true,
        fruit:false,
        halal: true,
        price: 1.99,
        //img from https://lh3.googleusercontent.com/proxy/nzWUfKL5qIA9vzVOgIOokRwNGHLIVaWVSv5R_uRQ_WDRfAvFkGX6ekjIiZK96Kw_pofd_JswTTrSqNxVoEfbVIzbgwxUbU1zJiY6g_OvYE7s
        img: "./img/broccoli.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
        organic: false,
        vegetable:false,
        fruit:false,
        halal: true,
        price: 2.35,
        //img from https://i.pinimg.com/originals/40/b4/cd/40b4cd08765c2f619f3acd8d60d96b25.jpg
        img: "./img/bread.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
        organic: true,
        vegetable:false,
        fruit:false,
        halal: true,
        price: 10.00,
        //img from https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6Ijc1YWJhM2M1N2M2OTJhYThiYjQxYjAxNDQyYzlkMzIyLmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=b3dfb6ff68b0c1ea15e9c61094ee53a0d6b4de8769a42718eb677b723fa64bc1
        img: "./img/salmon.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Hot dog",
		vegetarian: false,
		glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:false,
        halal: false,
        price: 4.99,
        //img from https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/hot-dog.png
        img: "./img/hot-dog.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Veggie dog",
		vegetarian: true,
		glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:false,
        halal: true,
        price: 5.99,
        //img-from https://images.freshop.com/00043454100124/d8dc5f60cb2b590fefe3fcd9b5969caa_medium.png
        img: "./img/veg-dog.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Mustard",
		vegetarian: true,
		glutenFree: true,
        organic: false,
        vegetable:false,
        fruit:false,
        halal: true,
        price: 3.99,
        //img from https://littlecaymangrocery.com/wp-content/uploads/2019/09/27-2.png
        img: "./img/mustard.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Peaches",
		vegetarian: true,
		glutenFree: true,
        organic: true,
        vegetable:false,
        fruit:true,
        halal: true,
        price: 7.99,
        //img from https://images.freshop.com/78861/04db52080eb855c1b8dd5ab55a4157c1_medium.png
        img: "./img/peaches.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Bananas",
		vegetarian: true,
		glutenFree: true,
        organic: true,
        vegetable:false,
        fruit:true,
        halal: true,
        price: 4.99,
        //img from https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjE4NWI4MTY1ZTJkMGJkNjRhOTQ4ZWUyZjg4MWVlNWQ0Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=1b4726f98cf32ced2de19574cc6ddb313c1f39413bff105d30dbc4905981e012
        img: "./img/bananas.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
	},
	{
		name: "Cucumber",
		vegetarian: true,
        glutenFree: true,
        vegetable:true,
        fruit:false,
        organic: true,
        halal: true,
        price: 2.99,
        //img from https://i0.wp.com/crucible-ng.com/wp-content/uploads/2017/09/cucumber.png?fit=256%2C256
        img: "./img/cucumber.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
        
	},
	{
		name: "Tomatoes",
		vegetarian: true,
        glutenFree: true,
        vegetable:false,
        fruit:true,
        organic: true,
        halal: true,
        price: 2.50,
        //img from https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImI2NmY5NGIxZTE2NzYzZmE5OWZhNzAyN2I1MGI2ZGExIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=f9f21a46809f21277de6dff316f8658d91b3e08794a6930067d77520733a032e
        img: "./img/tomatoes.png",
        dairy:false,
        cookingProducts:false,
        beverages:false
    },
    {
		name: "Milk",
		vegetarian: false,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: true,
        halal: true,
        price: 5.50,
        //img from https://images.freshop.com/1564405684702319813/3fec6f7d8da4756e92820897cb1fc693_medium.png
        img: "./img/milk.png",
        dairy:true,
        cookingProducts:false,
        beverages:true
    },
    {
		name: "Sea Salt",
		vegetarian: true,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: true,
        halal: true,
        price: 3.20,
        //img from https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImNlZDhmYmQ0ZmIwNzViMTQ1MjE5ZGVmZDE0MzIyMzFiIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=44cbdfe34321651f20cdccb3be5659afd2658270cdccc1eeda0c6c8a57074100
        img: "./img/salt.png",
        dairy:false,
        cookingProducts:true,
        beverages:false
    },
    {
		name: "Orange Juice",
		vegetarian: true,
        glutenFree: true,
        vegetable:false,
        fruit:false,
        organic: true,
        halal: true,
        price: 2.75,
        //img from https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImNlZDhmYmQ0ZmIwNzViMTQ1MjE5ZGVmZDE0MzIyMzFiIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=44cbdfe34321651f20cdccb3be5659afd2658270cdccc1eeda0c6c8a57074100
        img: "./img/juice.png",
        dairy:false,
        cookingProducts:false,
        beverages:true
	},
];



//this code is inspired by https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}


const searchBtn = document.querySelector('#search');
searchBtn.addEventListener('click', (event) => {
    listDiv = document.getElementById("productChoices");
    listDiv.innerHTML = "";
    let preferences = getSelectedCheckboxValues('preference');
    let categories = getSelectedCheckboxValues('categorization');
    let productList = getProducts(preferences, categories);
    populateListProduct(productList);
});

const addToCartBtn = document.querySelector('#addCart');
addToCartBtn.addEventListener('click', (event) => { //["Broccoli", "Milk", "Peaches"]
    listDiv = document.getElementById("cart");
    listDiv.innerHTML = "";
    let productsToCartNames = getSelectedCheckboxValues('product');
    let productsToCart = getCartItems(productsToCartNames);
    // console.log(productsToCart);
    let cart = populateCart(productsToCart);
});

function getCartItems(productsToCart){
    let listOfProducts = [] 
    for(product in products){
        let name = products[product].name
        if(productsToCart.indexOf(name) >= 0){
            listOfProducts.push(products[product]);
        }
    }
    return listOfProducts;
}

function populateCart(productList){
    productList.sort((a, b) => (a.price > b.price) ? 1 : -1)
    var listDiv = document.getElementById("cart");
    let totalPrice = 0
    for(product in productList){
        let productName = productList[product].name;
        let productPrice = productList[product].price;
        totalPrice += productPrice;

        let label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
        listDiv.appendChild(label);
        
        listDiv.appendChild(document.createElement("br"));
    }
    let priceLabel = document.createElement('p')
    priceLabel.innerHTML = "Total Price: $" + totalPrice

    listDiv.appendChild(priceLabel);
}

function populateListProduct(productList){
    productList.sort((a, b) => (a.price > b.price) ? 1 : -1)
    var listDiv = document.getElementById("productChoices");
    for(product in productList){
        let productName = productList[product].name;
        let productPrice = productList[product].price;
        let productImg = productList[product].img;

        let checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product"; 
        checkbox.value = productName;
        listDiv.appendChild(checkbox)

        let img = document.createElement("img");
        img.src = productImg;
        img.width = 50;
        img.height = 50;
        listDiv.appendChild(img);

        let label = document.createElement('label')
        label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName  + ": $" + productPrice));
        listDiv.appendChild(label);
        
        listDiv.appendChild(document.createElement("br"));
        listDiv.appendChild(document.createElement("br"));
    }
}




function getProducts(preferences, categories) { 
    let productsList = []

    for(product in products){
        let toAdd = true;
        if(categories[0] == "noAdditional"){
           toAdd = true;
        }else{
            if(products[product][categories[0]] == true){
                toAdd = true;
            }else{
                toAdd = false
            }
        }
        for(preference in preferences){     
            if(products[product][preferences[preference]] == false){
                toAdd = false
            }     
        }
        if(toAdd){
            productsList.push(products[product])
        }
    }
    return productsList;
};