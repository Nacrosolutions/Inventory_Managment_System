package com.nacro.SpringApp.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="stock")
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @Column(name="stock")
    private int stock;

  
    


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}





	public int getStock() {
		return stock;
	}


	public void setStock(int stock) {
		this.stock = stock;
	}


	public Stock() {
	}


	public Stock(long id, int stock) {
		this.id = id;
		this.stock = stock;
	}


//	public User(String name, String email) {
//        this.name = name;
//        this.email = email;
//    }
//
	

	

    
}
