package com.olvdanny.beers.rest.controllers;

import com.olvdanny.beers.model.dto.BeerDTO;
import com.olvdanny.beers.service.BeerService;
import com.olvdanny.beers.rest.errors.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for managing the beer entity.
 */
@RestController
public class BeerController extends BaseRestController {

    private final BeerService beerService;

    public BeerController(BeerService beerService) {
        this.beerService = beerService;
    }

    /**
     * {@code GET  /beers} : get all the beers.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of beers in body.
     */
    @GetMapping("/beers")
    public ResponseEntity<List<BeerDTO>> getAllBeers() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(beerService.getBeers());
    }

    /**
     * {@code GET /beers/:id} : get the "id" beer.
     *
     * @param id the id of the beer to find.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the found beer or with status {@code 404 (Not Found)}.
     * @throws NumberFormatException     {@code 400 (Bad Request)} if the id is in an invalid state.
     * @throws ResourceNotFoundException {@code 404 (Not Found)} if the beer couldn't be returned.
     */
    @GetMapping("/beers/{id}")
    public ResponseEntity<BeerDTO> getBeerById(@PathVariable("id") String id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(beerService
                        .getOneById(id)
                        .orElseThrow(ResourceNotFoundException::new));
    }

    /**
     * {@code POST  /beers} : create a beer.
     *
     * @param beerDTO the beer to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new beer, or with status {@code 400 (Bad Request)} if something went wrong.
     */
    @PostMapping("/beers")
    public ResponseEntity<BeerDTO> createBeer(@RequestBody BeerDTO beerDTO) {
        BeerDTO createdBeer = this.beerService.createBeer(beerDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBeer);
    }

    /**
     * {@code PATCH /beers/:id} : Updates an existing beer.
     *
     * @param beerDTO beerDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body of the updated beer.
     * @throws ResourceNotFoundException {@code 404 (Not Found)} if the beer couldn't be returned.
     */
    @PatchMapping("/beers/{id}")
    public ResponseEntity<BeerDTO> updateBeer(@PathVariable("id") String id, @RequestBody BeerDTO beerDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(beerService
                        .updateBeer(id, beerDTO)
                        .orElseThrow(ResourceNotFoundException::new));
    }


    /**
     * {@code DELETE /beers/:id} : deletes a beer.
     *
     * @param id the id of the beer to delete.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)}.
     * @throws ResourceNotFoundException {@code 404 (Not Found)} if the beer couldn't be found.
     */
    @DeleteMapping("/beers/{id}")
    public ResponseEntity<Void> deleteBeer(@PathVariable String id) {
        beerService.deleteBeer(id).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
