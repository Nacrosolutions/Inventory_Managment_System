package com.nacro.SpringApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nacro.SpringApp.entity.Stock;
import com.nacro.SpringApp.entity.User;



@Repository
public interface StockRepository  extends JpaRepository<Stock,Long> {
}