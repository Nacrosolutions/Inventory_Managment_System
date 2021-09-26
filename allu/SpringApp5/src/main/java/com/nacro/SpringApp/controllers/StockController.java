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

import com.nacro.SpringApp.entity.Stock;
import com.nacro.SpringApp.entity.User;
import com.nacro.SpringApp.service.StockService;


@RestController
@CrossOrigin("http://localhost:4200")
public class StockController {
    private StockService stockService;
    @Autowired
    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping("/stocks")
    public List<Stock> getAll()
    {
        return stockService.getAllStocks();
    }

    @GetMapping("/stocks/{stockid}")  
    private Stock getStocks(@PathVariable("stockid") int stockid)   
    {  
    return stockService.getStocksById(stockid);  
    }  
    @PostMapping("/stocks")
    public Stock createStock(@RequestBody Stock stock)
    {
       return stockService.createStock(stock);
    }
    @DeleteMapping("/stocks/{stockid}")  
    private void deleteUser(@PathVariable("stockid") int stockid)   
    {  
    	stockService.delete(stockid);  
    }  
    
    @PutMapping("/stocks")  
    private Stock update(@RequestBody Stock stock)   
    {  
    	stockService.saveOrUpdate(stock);  
    return stock;  
    }  
}
