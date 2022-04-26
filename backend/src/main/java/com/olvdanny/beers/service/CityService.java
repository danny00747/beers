package com.olvdanny.beers.service;

import com.olvdanny.beers.model.dto.CityDTO;

import java.util.List;

public interface CityService {


    /**
     * Get all the cities.
     *
     * @return the list of entities.
     */
    List<CityDTO> getCities();

    /**
     * Save a city.
     * @param cityDTO the city to save.
     * @return the persisted entity.
     */
    CityDTO createCity(CityDTO cityDTO);


}
