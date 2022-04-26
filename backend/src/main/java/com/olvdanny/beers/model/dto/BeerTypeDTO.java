package com.olvdanny.beers.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public @Data class BeerTypeDTO {

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private String id;

    @NotNull(message = "name is a required field.")
    @Size(min = 2, max = 128, message = "A beer type name length must be between 2 and 128.")
    private String name;

    @NotNull(message = "color is a required field.")
    private String color;
}
