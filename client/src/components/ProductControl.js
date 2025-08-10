import React, { Component } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import EditProductForm from './EditProductForm';
import tshirt from '../images/products/tshirt.png';
import backpack from '../images/products/backpack.png';
import pants from '../images/products/pants.png';
import trekkingshoes from '../images/products/trekkingshoes.png';
import giacket from '../images/products/giacket.png';
import tshirt_ladies from '../images/products/tshirt_ladies.png';
import Default_image from '../images/product_image.jpeg'

// Use environment variable or fallback to your backend IP
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://34.134.71.143:5000/api';

const actualProductList = [
    {
        name: 'T-Shirt',
        price: '599',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        photo: tshirt,
        quantity: 40,
        id: "1"
    },
    {
        name: 'BackPack', 
        price: '1500',
        quantity: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        photo: backpack,
        id: "2"
    },
    {
        name: 'Pants', 
        price: '1000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        quantity: 15,
        photo: pants,
        id: '3'
    },
    {
        name: 'Trekking Shoes',
        price: '2000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        quantity: 10,
        photo: trekkingshoes,
        id: '4'
    },
    {
        name: 'Jacket',
        price: '1500',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        quantity: 5,
        photo: giacket,
        id: '5'
    },
    {
        name:'T-Shirt Ladies',
        price: '650',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at arcu rutrum dolor pellentesque interdum ac id nunc. Ut nunc nunc, mollis vel auctor at, convallis et dolor. Donec felis nisl, ultricies ac lorem mollis, tempus maximus dolor. Maecenas mollis felis nec vulputate faucibus. Curabitur eleifend, felis sit amet fermentum sodales, dolor tellus feugiat turpis, vel placerat justo est luctus dui. Etiam vitae vulputate neque. Etiam tristique interdum laoreet. Pellentesque tincidunt nisi eu eros porta efficitur. Pellentesque sit amet lacus ut libero aliquet pellentesque quis a urna. Duis rutrum odio id sapien aliquet, auctor mattis augue facilisis.',
        quantity: 50,
        photo: tshirt_ladies,
        id: '6'
    }
]

class ProductControl extends Component {
    
    constructor(props)  {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            actualProductList: [],
            selectedProduct: null,
            editProduct: false,
            uploadPhoto: null,
            loading: false,
            error: null
        };
    }
    
    componentDidMount(){
        this.setState({ loading: true });
        axios.get(`${API_BASE_URL}/products`)
            .then(res => {
                console.log('API Response:', res);
                this.setState({
                    actualProductList: res.data,
                    loading: false
                });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                this.setState({
                    error: 'Failed to load products from server',
                    loading: false,
                    actualProductList: actualProductList // Fallback to hardcoded data
                });
            });
    }

    handleEditProductClick = () => {
        console.log('HandleEditClick reached!!');
        console.log(this.state.selectedProduct);
        this.setState({
            editProduct: true
        });
    }

    handleAddButtonClick = (id) => {
        const BuyProduct = this.state.actualProductList.filter(product => product._id === id)[0];
        if (BuyProduct && typeof BuyProduct.quantity === 'number') {
            BuyProduct.quantity = BuyProduct.quantity - 1;
            if (BuyProduct.quantity <= 0) {
                BuyProduct.quantity = "Product is not Available";
            }
            this.setState({
                selectedProduct: BuyProduct
            });
        }
    }

    handleClick = () => {
        if(this.state.editProduct){
            this.setState({
                editProduct: false
            });
        } else if (this.state.selectedProduct != null){
            this.setState({
                formVisibleOnPage: false,
                selectedProduct: null
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage
            }));
        }
    }

    // Method to handle adding a new product
    handleAddingNewProduct = (newProduct) => {
        this.setState({ loading: true });
        
        axios.post(`${API_BASE_URL}/products`, newProduct)
            .then(res => {
                console.log('Product added:', res.data);
                // Refresh the product list
                return axios.get(`${API_BASE_URL}/products`);
            })
            .then(res => {
                this.setState({
                    actualProductList: res.data,
                    formVisibleOnPage: false,
                    loading: false
                });
            })
            .catch(error => {
                console.error('Error adding product:', error);
                this.setState({
                    error: 'Failed to add product',
                    loading: false
                });
            });
    };

    handleDeletingProduct = (id) => {
        this.setState({ loading: true });
        
        axios.delete(`${API_BASE_URL}/products/${id}`)
            .then(res => {
                console.log('Product deleted:', res.data);
                this.setState({
                    actualProductList: this.state.actualProductList.filter(product => product._id !== id),
                    formVisibleOnPage: false,
                    selectedProduct: null,
                    loading: false
                });
            })
            .catch(error => {
                console.error('Error deleting product:', error);
                this.setState({
                    error: 'Failed to delete product',
                    loading: false
                });
            });
    }
    
    // Method to handle click event on a product
    handleChangingSelectedProduct = (id) => {
        console.log('Product selected:', id);
        const selectedProduct = this.state.actualProductList.filter(product => product._id === id)[0];
        this.setState({selectedProduct: selectedProduct});
    }

    handleEditingProduct = (editedProduct) => {
        this.setState({ loading: true });
        
        axios.put(`${API_BASE_URL}/products/${this.state.selectedProduct._id}`, editedProduct)
            .then(res => {
                console.log('Product updated:', res.data);
                // Refresh the product list
                return axios.get(`${API_BASE_URL}/products`);
            })
            .then(res => {
                this.setState({
                    actualProductList: res.data,
                    editProduct: false,
                    formVisibleOnPage: false,
                    selectedProduct: null,
                    loading: false
                });
            })
            .catch(error => {
                console.error('Error updating product:', error);
                this.setState({
                    error: 'Failed to update product',
                    loading: false
                });
            });
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;

        // Show loading state
        if (this.state.loading) {
            currentlyVisibleState = <div className="loading">Loading...</div>;
            buttonText = "Loading...";
        }
        // Show error message if any
        else if (this.state.error) {
            currentlyVisibleState = (
                <div className="error">
                    <p>Error: {this.state.error}</p>
                    <ProductList 
                        productList={this.state.actualProductList} 
                        onProductSelection={this.handleChangingSelectedProduct}  
                    />
                </div>
            );
            buttonText = "Add a product";
        }
        // Normal flow
        else if(this.state.editProduct){
            currentlyVisibleState = (
                <EditProductForm  
                    product={this.state.selectedProduct} 
                    onEditProduct={this.handleEditingProduct} 
                />
            );
            buttonText = "Back to Product Detail";
        } else if (this.state.selectedProduct != null){
            currentlyVisibleState = (
                <ProductDetail 
                    product={this.state.selectedProduct} 
                    onBuyButtonClick={this.handleAddButtonClick}  
                    onDeleteProduct={this.handleDeletingProduct} 
                    onEditProductClick={this.handleEditProductClick}
                />
            );
            buttonText = "Back to product list";
        } else if (this.state.formVisibleOnPage){
            currentlyVisibleState = (
                <NewProductForm 
                    onNewProductCreation={this.handleAddingNewProduct} 
                    onPhotoUpload={this.handlePhotoUpload} 
                />
            );
            buttonText = "Back to product list";
        } else {
            currentlyVisibleState = (
                <ProductList 
                    productList={this.state.actualProductList} 
                    onProductSelection={this.handleChangingSelectedProduct}  
                />
            );
            buttonText = "Add a product";
        }

        return (
            <React.Fragment>
                <AddProduct 
                    buttonText={buttonText}
                    whenButtonClicked={this.handleClick}
                />
                
                {currentlyVisibleState}
            </React.Fragment>
        )
    }
}

export default ProductControl;