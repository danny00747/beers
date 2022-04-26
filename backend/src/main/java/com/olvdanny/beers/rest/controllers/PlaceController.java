package com.olvdanny.beers.rest.controllers;

import com.olvdanny.beers.service.PlaceService;
import com.olvdanny.beers.model.dto.PlaceDTO;
import com.olvdanny.beers.rest.errors.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for managing the place entity.
 */
@RestController
public class PlaceController extends BaseRestController {

    private final PlaceService placeService;

    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    /**
     * {@code GET  /places} : get all the places.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of places in body.
     */
    @GetMapping("/places")
    public ResponseEntity<List<PlaceDTO>> getAllPlaces() {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(placeService.getPlaces());
    }

    /**
     * {@code POST  /places} : create a place.
     *
     * @param placeDTO the place to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new place, or with status {@code 400 (Bad Request)} if something went wrong.
     */
    @PostMapping("/places")
    public ResponseEntity<PlaceDTO> createPlace(@RequestBody PlaceDTO placeDTO) {
        PlaceDTO createdPlace = this.placeService.createPlace(placeDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPlace);
    }

    /**
     * {@code GET /places/:id} : get the "id" place.
     *
     * @param id the id of the place to find.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the found place or with status {@code 404 (Not Found)}.
     * @throws NumberFormatException     {@code 400 (Bad Request)} if the id is in an invalid state.
     * @throws ResourceNotFoundException {@code 404 (Not Found)} if the place couldn't be returned.
     */
    @GetMapping("/places/{id}")
    public ResponseEntity<PlaceDTO> getPlaceById(@PathVariable("id") String id) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(placeService
                        .getOneById(id)
                        .orElseThrow(ResourceNotFoundException::new));
    }

    /**
     * {@code PATCH /places/:id} : Updates an existing place.
     *
     * @param placeDTO placeDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body of the updated place.
     * @throws ResourceNotFoundException {@code 404 (Not Found)} if the beer couldn't be returned.
     */
    @PatchMapping("/places/{id}")
    public ResponseEntity<PlaceDTO> updatePlace(@PathVariable("id") String id, @RequestBody PlaceDTO placeDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(placeService
                        .updatePlace(id, placeDTO)
                        .orElseThrow(ResourceNotFoundException::new));
    }

    /**
     * {@code DELETE /places/:id} : deletes a place.
     *
     * @param id the id of the place to delete.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)}.
     * @throws ResourceNotFoundException {@code 404 (Not Found)} if the place couldn't be found.
     */
    @DeleteMapping("/places/{id}")
    public ResponseEntity<Void> deletePlace(@PathVariable String id) {
        placeService.deletePlace(id).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }



}
