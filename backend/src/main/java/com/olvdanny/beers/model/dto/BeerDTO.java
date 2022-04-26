package com.olvdanny.beers.model.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.util.Set;


public @Data class BeerDTO {

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private String id;

    @NotNull(message = "name is a required field.")
    @Size(min = 2, max = 128, message = "A beer name length must be between 2 and 128.")
    private String name;

    @NotNull(message = "imageSrc is a required field.")
    @Size(min = 4, max = 128, message = "An imageSrc length must be between 4 and 128.")
    private String imageSrc;

    @NotNull(message = "description is a required field.")
    private TranslationDTO description;

    private String typeId;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private BeerTypeDTO beerTypeDTO;

    @NotNull(message = "abv is a required field.")
    @Min(value = 0, message = "abv must be greater than or equal to 0")
    @Max(value = 100, message = "abv must be less than or equal to 100")
    private Double abv;

    private Set<String> placesId;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Instant createdAt;
}
