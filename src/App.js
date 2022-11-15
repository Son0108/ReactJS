import './App.css';
import Products from './Products';

function App() {
  var products = [{
    "id": 1,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 2,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 3,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 4,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 5,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 6,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 7,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 8,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 9,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 10,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 11,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 12,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 13,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 14,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  },
  {
    "id": 15,
    "title": "Key Holder",
    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
    "price": 30,
    "discountPercentage": 2.92,
    "rating": 4.92,
    "stock": 54,
    "brand": "Golden",
    "category": "home-decoration",
    "thumbnail": "https://dummyjson.com/image/i/products/30/thumbnail.jpg",
    "image": 
      "https://dummyjson.com/image/i/products/30/1.jpg",
  }
]
  return (
    <div className="App">
     <Products products={products}/>
    </div>
  );
}

export default App;
