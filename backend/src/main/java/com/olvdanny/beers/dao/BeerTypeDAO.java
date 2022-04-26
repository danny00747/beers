package com.olvdanny.beers.dao;


import com.olvdanny.beers.entities.BeerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data repository for the BeerType entity.
 */
@Repository
public interface BeerTypeDAO extends JpaRepository<BeerType, Integer> {

    Optional<BeerType> findOneByName(String name);
}
