package com.olvdanny.beers.service.mapper;

import com.olvdanny.beers.entities.BeerType;
import com.olvdanny.beers.model.dto.BeerTypeDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

/**
 * Mapper for the entity {@link BeerType} and its DTO {@link BeerTypeDTO}.
 */
@Mapper(componentModel = "spring")
public interface BeerTypeMapper extends EntityMapper<BeerTypeDTO, BeerType> {

    BeerTypeDTO toDto(BeerType beerType);

    @Mappings({
            @Mapping(target = "id", ignore = true)
    })
    BeerType toEntity(BeerTypeDTO beerTypeDTO);
}
