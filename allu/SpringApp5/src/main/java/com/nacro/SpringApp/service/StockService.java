package com.nacro.SpringApp.service;

import java.util.List;

import com.nacro.SpringApp.entity.Stock;

public interface StockService {
    public List<Stock> getAllStocks();
    
    public  Stock createStock(Stock stock);
  public void saveOrUpdate(Stock stock);
  public void delete(long id);
  public void update(Stock stock, int stockid);
public Stock getStocksById(long id);   
}
