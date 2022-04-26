package com.olvdanny.beers.service.impl;

import com.olvdanny.beers.dao.TranslationDAO;
import com.olvdanny.beers.entities.Translation;
import com.olvdanny.beers.model.dto.TranslationDTO;
import com.olvdanny.beers.service.TranslationService;
import com.olvdanny.beers.service.impl.utils.Utils;
import com.olvdanny.beers.service.mapper.TranslationMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TranslationServiceImpl implements TranslationService {

    private final TranslationMapper translationMapper;
    private final TranslationDAO translationDAO;


    public TranslationServiceImpl(TranslationMapper translationMapper, TranslationDAO translationDAO) {
        this.translationMapper = translationMapper;
        this.translationDAO = translationDAO;
    }

    @Override
    public Optional<TranslationDTO> getOneByErrorKey(String key) {
        return Optional.of(translationDAO.findOneByErrorKey(key))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(translationMapper::toDto);
    }

    @Override
    public TranslationDTO createTranslation(TranslationDTO translationDTO) {
        Translation translation = translationMapper.toEntity(translationDTO);
        translation = translationDAO.save(translation);
        return translationMapper.toDto(translation);
    }
}
