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
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;
    @Column(name="name")
    private String name;
    @Column(name="email")
    private String email;
//   
//    @OneToOne(cascade = CascadeType.ALL)
////    @JoinColumn(name = "user_id")
//  private Product product;
  
  
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


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public User() {
	}


	public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

	

//	public Product getProduct() {
//		return product;
//	}


//	public User(String name, String email, Product product) {
//		this.name = name;
//		this.email = email;
//		this.product = product;
//	}
//
//
//	public void setProduct(Product product) {
//		this.product = product;
//	}
    
    
    
}
