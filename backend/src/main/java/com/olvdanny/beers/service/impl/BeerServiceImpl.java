package com.olvdanny.beers.service.impl;

import com.olvdanny.beers.dao.BeerDAO;
import com.olvdanny.beers.dao.BeerTypeDAO;
import com.olvdanny.beers.dao.PlaceDAO;
import com.olvdanny.beers.dao.TranslationDAO;
import com.olvdanny.beers.entities.Beer;
import com.olvdanny.beers.entities.BeerType;
import com.olvdanny.beers.entities.Place;
import com.olvdanny.beers.entities.Translation;
import com.olvdanny.beers.model.dto.BeerDTO;
import com.olvdanny.beers.model.dto.BeerTypeDTO;
import com.olvdanny.beers.model.dto.TranslationDTO;
import com.olvdanny.beers.service.BeerService;
import com.olvdanny.beers.service.impl.utils.Utils;
import com.olvdanny.beers.service.mapper.BeerMapper;
import com.olvdanny.beers.service.mapper.BeerTypeMapper;
import com.olvdanny.beers.service.mapper.TranslationMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BeerServiceImpl implements BeerService {


    private final BeerDAO beerDAO;
    private final PlaceDAO placeDAO;
    private final BeerTypeDAO beerTypeDAO;
    private final TranslationDAO translationDAO;
    private final BeerMapper beerMapper;
    private final TranslationMapper translationMapper;
    private final BeerTypeMapper beerTypeMapper;

    public BeerServiceImpl(BeerDAO beerDAO, PlaceDAO placeDAO, BeerTypeDAO beerTypeDAO, TranslationDAO translationDAO,
                           BeerMapper beerMapper, TranslationMapper translationMapper, BeerTypeMapper beerTypeMapper) {
        this.beerDAO = beerDAO;
        this.placeDAO = placeDAO;
        this.beerTypeDAO = beerTypeDAO;
        this.translationDAO = translationDAO;
        this.beerMapper = beerMapper;
        this.translationMapper = translationMapper;
        this.beerTypeMapper = beerTypeMapper;
    }


    @Override
    public List<BeerDTO> getBeers() {
        return beerDAO.findAll()
                .stream()
                .map(beerMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public BeerDTO createBeer(BeerDTO beerDTO) {
        Beer beer = beerMapper.toEntity(beerDTO);

        SetBeerPlaces(beerDTO, beer);

        saveBeerDescription(beerDTO.getDescription(), beer);

        saveBeerType(beerDTO.getBeerTypeDTO(), beer);

        beer.setCreatedAt(Instant.now());

        Beer savedBeer = beerDAO.save(beer);

        return beerMapper.toDto(savedBeer);
    }

    @Override
    @Transactional
    public Optional<BeerDTO> updateBeer(String id, BeerDTO beerDTO) {
        return Optional.of(beerDAO.findById(Utils.validatedId(id)))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(foundBeer -> {
                            beerMapper.partialUpdate(foundBeer, beerDTO);

                            SetBeerPlaces(beerDTO, foundBeer);

                            saveBeerDescription(beerDTO.getDescription(), foundBeer);

                            saveBeerType(beerDTO.getBeerTypeDTO(), foundBeer);

                            return foundBeer;
                        }
                )
                .map(beerDAO::save)
                .map(beerMapper::toDto);
    }

    private void SetBeerPlaces(BeerDTO beerDTO, Beer beer) {
        var places = new ArrayList<Place>();
        beerDTO.getPlacesId().forEach(p -> placeDAO.findById(Utils.validatedId(p)).ifPresent(places::add));
        beer.setPlaces(places);
    }

    @Override
    public Optional<BeerDTO> getOneById(String beerId) {

        return Optional.of(beerDAO.findById(Utils.validatedId(beerId)))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(beerMapper::toDto);
    }

    @Override
    public List<BeerDTO> getAllByBeerTypeId(String typeId) {
        return beerDAO
                .findAllByBeerTypeId(Utils.validatedId(typeId))
                .stream()
                .map(beerMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<BeerDTO> getAllByAbv(String abv) {
        return beerDAO
                .findAllByAbv(Double.parseDouble(abv))
                .stream()
                .map(beerMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<BeerDTO> getAllByBeerTypeIdAndAbv(String typeId, String abv) {
        return beerDAO
                .findAllByBeerTypeIdAndAbv(Utils.validatedId(typeId), Double.parseDouble(abv))
                .stream()
                .map(beerMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<String> deleteBeer(String beerId) {
        return Optional.of(beerDAO.findById(Utils.validatedId(beerId)))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(beer -> {
                    beerDAO.delete(beer);
                    return "Successfully deleted !";
                });
    }

    private void saveBeerDescription(TranslationDTO translationDTO, Beer beer) {
        Translation translation = translationMapper.toEntity(translationDTO);
        translation = translationDAO.save(translation);
        beer.setDescription(translation);
    }

    private void saveBeerType(BeerTypeDTO beerTypeDTO, Beer beer) {
        beerTypeDAO.findOneByName(beerTypeDTO.getName())
                .ifPresentOrElse(
                        beer::setBeerType,
                        () -> {
                            BeerType beerType = beerTypeMapper.toEntity(beerTypeDTO);
                            beerType = beerTypeDAO.save(beerType);
                            beer.setBeerType(beerType);
                        }
                );
    }
}

