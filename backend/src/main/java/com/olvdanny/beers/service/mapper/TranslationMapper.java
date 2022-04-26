package com.olvdanny.beers.service.mapper;

import com.olvdanny.beers.entities.Translation;
import com.olvdanny.beers.model.dto.TranslationDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;


/**
 * Mapper for the entity {@link Translation} and its DTO {@link TranslationDTO}.
 */
@Mapper(componentModel = "spring")
public interface TranslationMapper extends EntityMapper<TranslationDTO, Translation> {

    TranslationDTO toDto(Translation translation);

    Translation toEntity(TranslationDTO translationDTO);
}
