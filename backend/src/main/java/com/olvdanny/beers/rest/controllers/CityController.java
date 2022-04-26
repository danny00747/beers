package com.olvdanny.beers.rest.controllers;


import com.olvdanny.beers.service.CityService;
import com.olvdanny.beers.model.dto.CityDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * REST controller for managing the city entity.
 */
@RestController
public class CityController extends BaseRestController{

    private final CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    /**
     * {@code GET  /cities} : get all the cities.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of cities in body.
     */
    @GetMapping("/cities")
    public ResponseEntity<List<CityDTO>> getAllCities() {
        List<CityDTO> cityDTOList = this.cityService.getCities();
        return ResponseEntity.status(HttpStatus.OK).body(cityDTOList);
    }

    /**
     * {@code POST  /cities} : create a city.
     *
     * @param cityDTO the city to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new city, or with status {@code 400 (Bad Request)} if something went wrong.
     */
    @PostMapping("/cities")
    public ResponseEntity<CityDTO> createCity(@RequestBody CityDTO cityDTO) {
        CityDTO createdCity = this.cityService.createCity(cityDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCity);
    }
}
