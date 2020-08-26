import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

//services is where you do heavy lifting
@Injectable()
export class ProductsService{
    private products: Product[] = [];
    

    insertProduct(title: string, desc:string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;

    }

    getProducts(){
        return this.products.slice();
        
    }

    getSingleProduct(productId: string){
        const product = this.findProduct(productId)[0];
       return {...product};
    }

    updateProduct(productId: string, title: string, desc: string, price: number){
        // const product = this.findProduct(productId)[0];
        // const index = this.findProduct(productId)[1];

        //above and below code are the same

        const [product, index] = this.findProduct(productId);
        const updatedProduct = {...product};
        if(title){
            updatedProduct.title = title;
        }
        if(desc){
            updatedProduct.desc = desc;
        }
        if(price){
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
      

    }

    deleteProduct(prodId: string){

        const index = this.findProduct(prodId)[1];
        return this.products.splice(index, 1);

    }

    deleteProducts(){
        this.products.splice(0);
    }

    private findProduct(id: string): [Product, number]{
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if(!product){
            throw new NotFoundException('could not find product');
        }
        return [product, productIndex];

    }

    }
   
