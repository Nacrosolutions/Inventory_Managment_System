package com.nacro.SpringApp.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.nacro.SpringApp.dao.ProductRepository;
import com.nacro.SpringApp.entity.Product;
@Service
@EnableTransactionManagement
public class ProductServiceImpl implements ProductService {
    private ProductRepository ProductRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository ProductRepository) {
        this.ProductRepository = ProductRepository;
    }

    @Override
    @Transactional
    public List<Product> getAllProducts() {
        return ProductRepository.findAll();
    }

    @Override
    @Transactional
    public Product createProduct(Product product) {
        ProductRepository.save(product);
        return product;
    }

	@Override
	public void saveOrUpdate(Product product) {
		ProductRepository.save(product);  
		
	}

	@Override
	public void delete(long id) {
	ProductRepository.deleteById(id);  
		
	}
	@Override
	public Product getProductsById(long id)   
	{  
	return ProductRepository.findById(id).get();  
	}  
	@Override
	public void update(Product product, int Productid) {
		// TODO Auto-generated method stub
		ProductRepository.save(product);  
	}
}
