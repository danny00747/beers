package com.olvdanny.beers.entities;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "translations")
public @Data class Translation {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String fr;

    @Column(nullable = false)
    private String en;

    @Column(name = "error_key")
    private String errorKey;

    @OneToOne(mappedBy = "description")
    private Beer beerDesc;
}
