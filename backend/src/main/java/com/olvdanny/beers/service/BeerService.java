package com.olvdanny.beers.service;

import com.olvdanny.beers.model.dto.BeerDTO;

import java.util.List;
import java.util.Optional;

public interface BeerService {


    /**
     * Get all the beers.
     *
     * @return the list of entities.
     */
    List<BeerDTO> getBeers();

    /**
     * Save a beer.
     * @param beerDTO the beer to save.
     * @return the persisted entity.
     */
    BeerDTO createBeer(BeerDTO beerDTO);

    /**
     * Updates a beer.
     *
     * @param id of the beer to update.
     * @param beerDTO containing fields to update.
     * @return updated beer.
     */
    Optional<BeerDTO> updateBeer(String id, BeerDTO beerDTO);


    /**
     * Get a beer given its id .
     *
     * @param beerId the id of the beer to search.
     * @return the found entity.
     */
    Optional<BeerDTO> getOneById(String beerId);

    /**
     * Get beers given their beer type id .
     *
     * @param beerTypeId the id of the beerType to search.
     * @return the found entity.
     */
    List<BeerDTO> getAllByBeerTypeId(String beerTypeId);

    /**
     * Get beers given their abv.
     *
     * @param abv the id of the beer to search.
     * @return the found entity.
     */
    List<BeerDTO> getAllByAbv(String abv);


    /**
     * Get beers given their abv and beerTypeId .
     *
     * @param beerTypeId the id of the beerType to search.
     * @param abv the id of beer to search.
     * @return the found entity.
     */
    List<BeerDTO> getAllByBeerTypeIdAndAbv(String beerTypeId, String abv);


    /**
     * Deletes a specific beer, and return a confirmation message.
     *
     * @param beerId id of the beer to delete.
     * @return confirmation message.
     */
    Optional<String> deleteBeer(String beerId);





}
