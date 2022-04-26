package com.olvdanny.beers.service;

import com.olvdanny.beers.model.dto.BeerTypeDTO;

import java.util.List;

public interface BeerTypeService {

    /**
     * Get all the beerTypes.
     *
     * @return the list of entities.
     */
    List<BeerTypeDTO> getBeerTypes();

    /**
     * Save a beer type.
     * @param beerTypeDTO the beer type to save.
     * @return the persisted entity.
     */
    BeerTypeDTO createBeerType(BeerTypeDTO beerTypeDTO);

}
