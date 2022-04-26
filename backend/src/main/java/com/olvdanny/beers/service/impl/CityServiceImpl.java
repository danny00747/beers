package com.olvdanny.beers.service.impl;

import com.olvdanny.beers.dao.CityDAO;
import com.olvdanny.beers.entities.City;
import com.olvdanny.beers.model.dto.CityDTO;
import com.olvdanny.beers.service.CityService;
import com.olvdanny.beers.service.mapper.CityMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityServiceImpl implements CityService {

    private final CityDAO cityDAO;
    private final CityMapper cityMapper;

    public CityServiceImpl(CityDAO cityDAO, CityMapper cityMapper) {
        this.cityDAO = cityDAO;
        this.cityMapper = cityMapper;
    }

    @Override
    public List<CityDTO> getCities() {
        return cityDAO.findAll()
                .stream()
                .map(cityMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public CityDTO createCity(CityDTO cityDTO) {
        City city = cityMapper.toEntity(cityDTO);
        city = cityDAO.save(city);
        return cityMapper.toDto(city);
    }
}
