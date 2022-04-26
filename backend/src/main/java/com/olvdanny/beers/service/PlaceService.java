package com.olvdanny.beers.service;

import com.olvdanny.beers.model.dto.PlaceDTO;

import java.util.List;
import java.util.Optional;

public interface PlaceService {

    /**
     * Get all the places.
     *
     * @return the list of entities.
     */
    List<PlaceDTO> getPlaces();

    /**
     * Save a place.
     *
     * @param placeDTO the place to save.
     * @return the persisted entity.
     */
    PlaceDTO createPlace(PlaceDTO placeDTO);

    /**
     * Updates a place.
     *
     * @param id of the place to update.
     * @param placeDTO containing fields to update.
     * @return updated entity.
     */
    Optional<PlaceDTO> updatePlace(String id, PlaceDTO placeDTO);

    /**
     * Get places given thier id .
     *
     * @param placeId the id of the place to search.
     * @return the found entity.
     */
    Optional<PlaceDTO> getOneById(String placeId);

    /**
     * Gets places given thier type.
     *
     * @param type the type of the place to search.
     * @return the found entity.
     */
    List<PlaceDTO> getAllByType(String type);


    /**
     * Get places given thier city id.
     *
     * @param cityId the id of the city to search.
     * @return the found entity.
     */
    List<PlaceDTO> getAllByCityId(String cityId);

    /**
     * Get places given thier type and city id .
     *
     * @param cityId the id of the city to search.
     * @param type the type of the place to search.
     * @return the found entity.
     */
    List<PlaceDTO> getAllByTypeAndCityId(String cityId, String type);

    /**
     * Deletes a specific place, and return a confirmation message.
     *
     * @param placeId id of the place to delete.
     * @return confirmation message.
     */
    Optional<String> deletePlace(String placeId);


}
