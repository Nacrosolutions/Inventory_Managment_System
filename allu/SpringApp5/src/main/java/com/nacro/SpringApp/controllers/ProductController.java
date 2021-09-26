package com.nacro.SpringApp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nacro.SpringApp.entity.Product;
import com.nacro.SpringApp.service.ProductService;


@RestController
@CrossOrigin("http://localhost:4200")
public class ProductController {
    private ProductService productService;
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> getAll()
    {
        return productService.getAllProducts();
    }

    @GetMapping("/products/{productid}")  
    private Product getProducts(@PathVariable("productid") int productid)   
    {  
    return productService.getProductsById(productid);  
    }  
    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product)
    {
       return productService.createProduct(product);
    }
    @DeleteMapping("/products/{productid}")  
    private void deleteProduct(@PathVariable("productid") int productid)   
    {  
    	productService.delete(productid);  
    }  
    
    @PutMapping("/products")  
    private Product update(@RequestBody Product product)   
    {  
    	productService.saveOrUpdate(product);  
    return product;  
    }  
}
