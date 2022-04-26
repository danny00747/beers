package com.olvdanny.beers.dao;

import com.olvdanny.beers.entities.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data repository for the Beer entity.
 */
@Repository
public interface BeerDAO extends JpaRepository<Beer, Integer> {


    List<Beer> findAllByAbv(Double abv);

    @Query(""" 
                select distinct b from Beer b
                left join BeerType bt on bt.id = b.beerType.id
                where bt.id = :beerTypeId
            """)
    List<Beer> findAllByBeerTypeId(Integer beerTypeId);

    @Query(""" 
                select distinct b from Beer b
                left join BeerType bt on bt.id = b.beerType.id
                where bt.id = :beerTypeId and b.abv = :abv
            """)
    List<Beer> findAllByBeerTypeIdAndAbv(Integer beerTypeId, Double abv);
}
