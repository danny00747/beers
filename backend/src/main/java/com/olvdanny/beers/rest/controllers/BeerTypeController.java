package com.olvdanny.beers.rest.controllers;

import com.olvdanny.beers.model.dto.BeerTypeDTO;
import com.olvdanny.beers.service.BeerTypeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * REST controller for managing the beerType entity.
 */
@RestController
public class BeerTypeController extends BaseRestController{

    private final BeerTypeService beerTypeService;

    public BeerTypeController(BeerTypeService beerTypeService) {
        this.beerTypeService = beerTypeService;
    }

    /**
     * {@code GET  /beerTypes} : get all the beerTypes.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of beerTypes in body.
     */
    @GetMapping("/beerTypes")
    public ResponseEntity<List<BeerTypeDTO>> getAllBeerTypes() {
        List<BeerTypeDTO> beerTypeDTOList = this.beerTypeService.getBeerTypes();
        return ResponseEntity.status(HttpStatus.OK).body(beerTypeDTOList);
    }

    /**
     * {@code POST  /beerTypes} : create a beer type.
     *
     * @param beerTypeDTO the beer type to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new beer type, or with status {@code 400 (Bad Request)} if something went wrong.
     */
    @PostMapping("/beerTypes")
    public ResponseEntity<BeerTypeDTO> createBeerType(@RequestBody BeerTypeDTO beerTypeDTO) {
        BeerTypeDTO beerType = this.beerTypeService.createBeerType(beerTypeDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(beerType);
    }

}
