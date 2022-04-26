package com.olvdanny.beers.model.dto;


import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public @Data
class TranslationDTO {

    @NotNull(message = "fr is a required field.")
    @Size(min = 2, max = 1028, message = "fr length must be between 2 and 1028.")
    private String fr;

    @NotNull(message = "en is a required field.")
    @Size(min = 2, max = 1028, message = "en length must be between 2 and 1028.")
    private String en;
}
