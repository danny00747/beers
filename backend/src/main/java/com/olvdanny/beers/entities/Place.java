package com.olvdanny.beers.entities;


import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Table(name = "places")
public @Data
class Place extends AbstractAuditingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "id")
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String url;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id")
    private City city;

    @ManyToMany
    @JoinTable(
            name = "beer_places",
            joinColumns = {@JoinColumn(name = "place_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "beer_id", referencedColumnName = "id")})
    private List<Beer> beers;

    public Set<String> getBeersIds() {
        return this.beers
                .stream()
                .map(Beer::getId)
                .map(String::valueOf)
                .collect(Collectors.toSet());
    }

    public String getCityId() {
        return this.city.getId().toString();
    }
}
