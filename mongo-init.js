// Switch to the application database
db = db.getSiblingDB('yolo_db');

// Create collections
db.createCollection('products');
db.createCollection('users');

// Insert sample data
db.products.insertMany([
  {
    name: "Sample Product",
    price: 29.99,
    description: "A sample product for testing",
    category: "Electronics",
    stock: 100,
    createdAt: new Date()
  }
]);

// Create indexes for better performance
db.products.createIndex({ name: 1 });
db.products.createIndex({ category: 1 });
db.users.createIndex({ email: 1 }, { unique: true });

print("Database initialized successfully!");