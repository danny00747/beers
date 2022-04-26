package com.olvdanny.beers.service;

import com.olvdanny.beers.model.dto.BeerDTO;
import com.olvdanny.beers.model.dto.TranslationDTO;

import java.util.Optional;

public interface TranslationService {

    /**
     * Get translation given its key .
     *
     * @param key the error key to search.
     * @return the found entity.
     */
    Optional<TranslationDTO> getOneByErrorKey(String key);

    /*
     * Save a translation.
     * @param translationDTO the beer to save.
     * @return the persisted entity.
     */
    TranslationDTO createTranslation(TranslationDTO translationDTO);

}
