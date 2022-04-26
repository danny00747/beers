package com.olvdanny.beers.dao;

import com.olvdanny.beers.entities.Translation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data  repository for the Translation entity.
 */
@Repository
public interface TranslationDAO extends JpaRepository<Translation, Integer> {

    Optional<Translation> findOneByErrorKey(String key);
}
