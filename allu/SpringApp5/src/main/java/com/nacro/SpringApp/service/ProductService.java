package com.nacro.SpringApp.service;

import java.util.List;

import com.nacro.SpringApp.entity.Product;


public interface ProductService {
    public List<Product> getAllProducts();
 
    public  Product createProduct(Product product);
  public void saveOrUpdate(Product product);
  public void delete(long id);
  public void update(Product product, int productid);
public Product getProductsById(long id);   
}

