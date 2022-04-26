package com.olvdanny.beers.service.impl;

import com.olvdanny.beers.dao.BeerTypeDAO;
import com.olvdanny.beers.entities.BeerType;
import com.olvdanny.beers.service.BeerTypeService;
import com.olvdanny.beers.model.dto.BeerTypeDTO;
import com.olvdanny.beers.service.mapper.BeerTypeMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BeerTypeImpl implements BeerTypeService {

    private final BeerTypeMapper beerTypeMapper;
    private final BeerTypeDAO beerTypeDAO;

    public BeerTypeImpl(BeerTypeMapper beerTypeMapper, BeerTypeDAO beerTypeDAO) {
        this.beerTypeMapper = beerTypeMapper;
        this.beerTypeDAO = beerTypeDAO;
    }

    @Override
    public List<BeerTypeDTO> getBeerTypes() {
        return beerTypeDAO.findAll()
                .stream()
                .map(beerTypeMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public BeerTypeDTO createBeerType(BeerTypeDTO beerTypeDTO) {
        BeerType beerType = beerTypeMapper.toEntity(beerTypeDTO);
        beerType = beerTypeDAO.save(beerType);
        return beerTypeMapper.toDto(beerType);
    }
}
