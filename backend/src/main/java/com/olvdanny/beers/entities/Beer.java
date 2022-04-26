package com.olvdanny.beers.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Table(name = "beers")
public @Data
class Beer extends AbstractAuditingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "id")
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(name = "image_src", nullable = false)
    private String imageSrc;

    @Column(nullable = false)
    private Double abv;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "beer_type")
    private BeerType beerType;

    @OneToOne
    @JoinColumn(name = "description")
    private Translation description;

    @ManyToMany
    @JoinTable(
            name = "beer_places",
            joinColumns = {@JoinColumn(name = "beer_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "place_id", referencedColumnName = "id")})
    private List<Place> places;

    public Set<String> getPlacesId() {
        return this.places != null ?
            this.places
                .stream()
                .map(Place::getId)
                .map(String::valueOf)
                .collect(Collectors.toSet()) :
            null;
    }

    public String getBeerTypeId() {
        return this.beerType.getId().toString();
    }




}
