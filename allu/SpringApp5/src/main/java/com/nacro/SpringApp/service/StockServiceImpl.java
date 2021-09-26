package com.nacro.SpringApp.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.nacro.SpringApp.dao.StockRepository;
import com.nacro.SpringApp.entity.Stock;
@Service
@EnableTransactionManagement
public class StockServiceImpl implements StockService {
    private StockRepository stockRepository;

    @Autowired
    public StockServiceImpl(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    @Override
    @Transactional
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    @Override
    @Transactional
    public Stock createStock(Stock stock) {
        stockRepository.save(stock);
        return stock;
    }

	@Override
	public void saveOrUpdate(Stock stock) {
		stockRepository.save(stock);  
		
	}

	@Override
	public void delete(long id) {
	stockRepository.deleteById(id);  
		
	}
	@Override
	public Stock getStocksById(long id)   
	{  
	return stockRepository.findById(id).get();  
	}  
	@Override
	public void update(Stock stock, int Stockid) {
		// TODO Auto-generated method stub
		stockRepository.save(stock);  
	}
}
