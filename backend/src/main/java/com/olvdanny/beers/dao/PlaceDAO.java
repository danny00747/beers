package com.olvdanny.beers.dao;

import com.olvdanny.beers.entities.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Spring Data repository for the Place entity.
 */
@Repository
public interface PlaceDAO extends JpaRepository<Place, Integer> {

    List<Place> findAllByType(String type);

    @Query(""" 
                select distinct p from Place p
                left join City c on c.id = p.city.id
                where c.id = :cityId
            """)
    List<Place> findAllByCityId(Integer cityId);

    @Query(""" 
                select distinct p from Place p
                left join City c on  c.id = p.city.id
                where c.id = :cityId and p.type = :type
            """)
    List<Place> findAllByTypeAndCityId(Integer cityId, String type);
}

