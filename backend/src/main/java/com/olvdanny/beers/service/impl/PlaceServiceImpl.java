package com.olvdanny.beers.service.impl;

import com.olvdanny.beers.dao.BeerDAO;
import com.olvdanny.beers.dao.CityDAO;
import com.olvdanny.beers.dao.PlaceDAO;
import com.olvdanny.beers.entities.Beer;
import com.olvdanny.beers.entities.City;
import com.olvdanny.beers.entities.Place;
import com.olvdanny.beers.model.dto.BeerDTO;
import com.olvdanny.beers.model.dto.CityDTO;
import com.olvdanny.beers.model.dto.PlaceDTO;
import com.olvdanny.beers.service.PlaceService;
import com.olvdanny.beers.service.impl.utils.Utils;
import com.olvdanny.beers.service.mapper.CityMapper;
import com.olvdanny.beers.service.mapper.PlaceMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PlaceServiceImpl implements PlaceService {


    private final PlaceDAO placeDAO;
    private final BeerDAO beerDAO;
    private final PlaceMapper placeMapper;
    private final CityDAO cityDAO;
    private final CityMapper cityMapper;

    public PlaceServiceImpl(PlaceDAO placeDAO, BeerDAO beerDAO, PlaceMapper placeMapper,
                            CityDAO cityDAO, CityMapper cityMapper) {
        this.placeDAO = placeDAO;
        this.beerDAO = beerDAO;
        this.placeMapper = placeMapper;
        this.cityDAO = cityDAO;
        this.cityMapper = cityMapper;
    }

    @Override
    public List<PlaceDTO> getPlaces() {
        return placeDAO.findAll()
                .stream()
                .map(placeMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public PlaceDTO createPlace(PlaceDTO placeDTO) {
        Place place = placeMapper.toEntity(placeDTO);

        SetPlaceBeers(placeDTO, place);

        savePlaceCity(placeDTO.getCityDTO(), place);

        place.setCreatedAt(Instant.now());

        Place savedPlace = placeDAO.save(place);

        // placeDTO.getBeersId().forEach(b -> beerDAO.findById(Utils.validatedId(b)).ifPresent(bb -> bb.setPlaces(List.of())));

        return placeMapper.toDto(savedPlace);
    }

    @Override
    @Transactional
    public Optional<PlaceDTO> updatePlace(String id, PlaceDTO placeDTO) {
        return Optional.of(placeDAO.findById(Utils.validatedId(id)))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(foundPlace -> {
                            placeMapper.partialUpdate(foundPlace, placeDTO);
                            SetPlaceBeers(placeDTO, foundPlace);
                            savePlaceCity(placeDTO.getCityDTO(), foundPlace);
                            return foundPlace;
                        }
                )
                .map(placeDAO::save)
                .map(placeMapper::toDto);
    }

    private void SetPlaceBeers(PlaceDTO placeDTO, Place place) {
        var beers = new ArrayList<Beer>();
        placeDTO.getBeersId().forEach(b -> beerDAO.findById(Utils.validatedId(b)).ifPresent(beers::add));
        place.setBeers(beers);
    }

    @Override
    public Optional<PlaceDTO> getOneById(String placeId) {
        return Optional.of(placeDAO.findById(Utils.validatedId(placeId)))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(placeMapper::toDto);
    }

    @Override
    public List<PlaceDTO> getAllByType(String type) {
        return placeDAO.findAllByType(type)
                .stream()
                .map(placeMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<PlaceDTO> getAllByCityId(String cityId) {
        return placeDAO.findAllByCityId(Utils.validatedId(cityId))
                .stream()
                .map(placeMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<PlaceDTO> getAllByTypeAndCityId(String cityId, String type) {
        return placeDAO.findAllByTypeAndCityId(Utils.validatedId(cityId), type)
                .stream()
                .map(placeMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<String> deletePlace(String placeId) {
        return Optional.of(placeDAO.findById(Integer.parseInt(placeId)))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(place -> {
                    placeDAO.delete(place);
                    return "Successfully deleted !";
                });
    }

    private void savePlaceCity(CityDTO cityDTO, Place place) {
        cityDAO.findOneByName(cityDTO.getName())
                .ifPresentOrElse(
                        place::setCity,
                        () -> {
                            City city = cityMapper.toEntity(cityDTO);
                            city = cityDAO.save(city);
                            place.setCity(city);
                        }
                );
    }
}
