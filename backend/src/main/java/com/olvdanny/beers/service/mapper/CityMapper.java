package com.olvdanny.beers.service.mapper;

import com.olvdanny.beers.entities.City;
import com.olvdanny.beers.model.dto.CityDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

/**
 * Mapper for the entity {@link City} and its DTO {@link CityDTO}.
 */
@Mapper(componentModel = "spring")
public interface CityMapper extends EntityMapper<CityDTO, City> {

    CityDTO toDto(City city);

    @Mappings({
            @Mapping(target = "id", ignore = true)
    })
    City toEntity(CityDTO cityDTO);
}

