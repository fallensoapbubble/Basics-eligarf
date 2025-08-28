const product = { 

  name: 'Smartphone', 

  details: { 

    brand: 'XYZ', 

    color: 'Black' 

    // price property is missing 

  } 

}; 
// product.details?.price

// If details exists, then look for price.

// If details doesn’t exist, it stops safely and returns undefined (instead of throwing an error).


const price = product.details?.price ?? ' not available';


// If product.details.price exists → you get that value.

// If it doesn’t exist → you get "Price not available".
console.log(price); 
