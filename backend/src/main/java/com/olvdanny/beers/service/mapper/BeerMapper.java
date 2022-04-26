package com.olvdanny.beers.service.mapper;

import com.olvdanny.beers.entities.Beer;
import com.olvdanny.beers.model.dto.BeerDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

/**
 * Mapper for the entity {@link Beer} and its DTO {@link BeerDTO}.
 */
@Mapper(componentModel = "spring", uses = {TranslationMapper.class})
public interface BeerMapper extends EntityMapper<BeerDTO, Beer> {

    @Mappings({
            @Mapping(expression = "java(beer.getPlacesId())", target = "placesId"),
            @Mapping(expression = "java(beer.getBeerTypeId())", target = "typeId")
    })
    BeerDTO toDto(Beer beer);

    Beer toEntity(BeerDTO beerDTO);
}
