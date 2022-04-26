package com.olvdanny.beers.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;
import java.util.Set;

public @Data
class PlaceDTO {


    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private String id;

    @NotNull(message = "name is a required field.")
    @Size(min = 2, max = 128, message = "A beer name length must be between 2 and 128.")
    private String name;

    @NotNull(message = "type is a required field.")
    @Size(min = 2, max = 128, message = "A type length must be between 2 and 128.")
    private String type;

    @NotNull(message = "address is a required field.")
    @Size(min = 2, max = 128, message = "An address name length must be between 2 and 128.")
    private String address;

    @NotNull(message = "url is a required field.")
    @Size(min = 2, max = 128, message = "An url length must be between 2 and 128.")
    private String url;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private String cityId;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private CityDTO cityDTO;

    private Set<String> beersId;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Instant createdAt;
}
