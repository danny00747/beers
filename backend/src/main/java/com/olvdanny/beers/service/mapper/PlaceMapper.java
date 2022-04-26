package com.olvdanny.beers.service.mapper;

import com.olvdanny.beers.entities.Place;
import com.olvdanny.beers.model.dto.PlaceDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

/**
 * Mapper for the entity {@link Place} and its DTO {@link PlaceDTO}.
 */
@Mapper(componentModel = "spring")
public interface PlaceMapper extends EntityMapper<PlaceDTO, Place> {

    @Mappings({
            @Mapping(expression = "java(place.getBeersIds())", target = "beersId"),
            @Mapping(expression = "java(place.getCityId())", target = "cityId")
    })
    PlaceDTO toDto(Place place);

    Place toEntity(PlaceDTO placeDTO);
}
