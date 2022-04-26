package com.olvdanny.beers.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "cities")
public @Data class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "id")
    private Integer id;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "city")
    private Set<Place> places = new HashSet<>();
}
