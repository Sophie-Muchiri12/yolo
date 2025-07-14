// This script runs during MongoDB initialization when authentication is enabled
// The script runs as the root user defined in MONGO_INITDB_ROOT_USERNAME

// Switch to the application database
db = db.getSiblingDB('yolo_db');

print("Initializing yolo_db database...");

// Drop existing collections if they exist
try {
  db.products.drop();
  print("Dropped existing products collection");
} catch (e) {
  print("No existing products collection to drop");
}

try {
  db.users.drop();
  print("Dropped existing users collection");
} catch (e) {
  print("No existing users collection to drop");
}

// Insert sample data
var result = db.products.insertMany([
  {
    name: 'T-Shirt',
    price: 599,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
    category: 'Clothing',
    quantity: 40,
    photo: './images/products/tshirt.png',
    createdAt: new Date()
  },
  {
    name: 'BackPack',
    price: 1500,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
    category: 'Accessories',
    quantity: 20,
    photo: './images/products/backpack.png',
    createdAt: new Date()
  },
  {
    name: 'Pants',
    price: 1000,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
    category: 'Clothing',
    quantity: 15,
    photo: './images/products/pants.png',
    createdAt: new Date()
  },
  {
    name: 'Trekking Shoes',
    price: 2000,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
    category: 'Footwear',
    quantity: 10,
    photo: './images/products/trekkingshoes.png',
    createdAt: new Date()
  },
  {
    name: 'Jacket',
    price: 1500,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
    category: 'Clothing',
    quantity: 5,
    photo: './images/products/giacket.png',
    createdAt: new Date()
  },
  {
    name: 'T-Shirt Ladies',
    price: 650,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
    category: 'Clothing',
    quantity: 50,
    photo: './images/products/tshirt_ladies.png',
    createdAt: new Date()
  }
]);

print("Inserted " + result.insertedIds.length + " products");

// Create indexes for better performance
db.products.createIndex({ name: 1 });
db.products.createIndex({ category: 1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ quantity: 1 });

// Create users collection with index
db.users.createIndex({ email: 1 }, { unique: true });

// Create a regular user for the application (optional)
db.createUser({
  user: "admin",
  pwd: "password123",
  roles: [
    {
      role: "admin",
      db: "yolo_db"
    }
  ]
});

print("Database initialized successfully!");
print("Total products in database: " + db.products.countDocuments());
print("Available collections: " + db.getCollectionNames());
print("Indexes created successfully");
print("Application user 'yolo_user' created");