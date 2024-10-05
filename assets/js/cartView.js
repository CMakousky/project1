//Catalogue of books
const bookCatalogue = ['Book1','Book2', 'Book3', 'Book4'];

//Set cartContents array based on the presence of items in local storage
if (localStorage.length === 0){cartContents=[]}
else{cartContents = JSON.parse(localStorage.getItem('cartContents'))};

//Set cartContents index counter "n" initial value
if (localStorage.length === 0){n=0}
else{n=cartContents.length};

console.log(localStorage);
console.log(cartContents);

//Object to keep track the quantity of each book in the cart
const bookQuantity={};

//Function to quantify the number of each type of book in the cart
const quantifyCartContents=function(x){
    bookQuantity[x]=(bookQuantity[x] || 0)+1;
};

//Perform "quantifyCartContents" for each element of the "cartContents" array
cartContents.forEach(quantifyCartContents);
console.log(bookQuantity);

//Array to house the "Remove from Cart" button event listeners
const cartRemoveBook=[];

//Function to remove book from cart
const removeBook=function(){};

//Make an array of the keys from the object "bookQuantity"
const bookQuantityKeys=Object.keys(bookQuantity);
//Make an array of the values from the object "bookQuantity"
const bookQuantityValues=Object.values(bookQuantity);

for(c=0; c<bookQuantityKeys.length; c++){

    let bookTitle=bookQuantityKeys[c];
    let itemQuantity=bookQuantityValues[c];

    //Query Selector to locate the #cartColumn
    const cartDisplay=document.querySelector('#cartColumn');
    //Query Selector to locate the template element
    const oldElement=document.querySelector('#cartBookTemplate');
    //Clone the template element
    let newElement=oldElement.cloneNode(true);
    //Change the id of the clone element
    newElement.id=`#cart${bookTitle}`;
    //Change the hidden value of newElement to false
    newElement.hidden=false;

    let newUpdatedElement = newElement.firstChild.nextSibling.firstChild.nextSibling;

    //Change nth child text "bookTitle"
    newUpdatedElement.textContent=`${bookTitle}`;
    //Change nth child text "Item Quantity: Quantity"
    newUpdatedElement.nextSibling.nextSibling.textContent=`Item Quantity: ${itemQuantity}`;
    //Change nth child button id
    newUpdatedElement.nextSibling.nextSibling.nextSibling.nextSibling.id=`#cartRemove${bookTitle}`;
    //Append the newElement as a child of cartDisplay
    cartDisplay.appendChild(newElement);

    //Add querySelector for the cartRemove button
    cartRemoveBook[c]=document.getElementById(`#cartRemove${bookTitle}`);

    //Add Event Listeners
    cartRemoveBook[c].addEventListener('click', function(){
        console.log(`Remove ${bookTitle} from the cart.`);
    });
};