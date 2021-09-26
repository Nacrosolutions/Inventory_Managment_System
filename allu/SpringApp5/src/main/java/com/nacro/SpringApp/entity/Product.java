package com.nacro.SpringApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @Column(name="name")
    private String name;
    @Column(name="description")
    private String description;
    @Column(name="price")
    private int price;
    @Column(name="quantity")
    private int quantity;
    @Column(name="stock")
    private int stock;
    @Column(name="stockss")
    private String stockss;
    

    

   
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public int getPrice() {
		return price;
	}


	public int setPrice(int price) {
		return this.price = price;
	}


	




	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public int getStock() {
		return stock;
	}


	public void setStock(int stock) {
		this.stock = stock;
	}


	



	public String getStockss() {
		return stockss;
	}


	public void setStockss(String stockss) {
		this.stockss = stockss;
	}


	public Product() {
	}


	public Product(String name, String description, int price, int quantity, int stock, String stockss) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.stock = stock;
		this.stockss = stockss;
	}


//	public Product(String name, String description, int price, int quantity, int stock, String current) {
//		this.name = name;
//		this.description = description;
//		this.price = price;
//		this.quantity = quantity;
//		this.stock = stock;
//		this.current = current;
//	}
	
	

	
	
	
//	public Product(String name, String description, int price, int quantity) {
//		this.name = name;
//		this.description = description;
//		this.price = price;
//		this.quantity = quantity;
//	
//	}




//	public Product(String name, String email) {
//        this.name = name;
//        this.email = email;
//    }


	
    
    
    
}
