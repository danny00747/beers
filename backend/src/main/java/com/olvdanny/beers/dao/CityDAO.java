package com.olvdanny.beers.dao;

import com.olvdanny.beers.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data repository for the City entity.
 */
@Repository
public interface CityDAO extends JpaRepository<City, Integer> {

    Optional<City> findOneByName(String name);
}

