package com.olvdanny.beers.rest.errors;


import com.olvdanny.beers.model.dto.TranslationDTO;
import com.olvdanny.beers.service.TranslationService;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * GlobalExceptionHandler class to handle exceptions across the whole application.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    private final TranslationService translationService;

    public GlobalExceptionHandler(TranslationService translationService) {
        this.translationService = translationService;
    }

    /**
     * A method to handle {@link ConstraintViolationException} across the whole application.
     */
    @ExceptionHandler({ConstraintViolationException.class})
    public ResponseEntity<List<String>> constraintViolationException(ConstraintViolationException ex) {
        log.warn("ConstraintViolationException thrown !");
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(ex.getConstraintViolations()
                        .stream()
                        .map(ConstraintViolation::getMessage)
                        .collect(Collectors.toList()));
    }

    /**
     * A method to handle {@link ResourceNotFoundException} across the whole application.
     */
    @ExceptionHandler({ResourceNotFoundException.class})
    public ResponseEntity<Optional<TranslationDTO>> resourceFoundException(ResourceNotFoundException ex) {
        log.warn("ResourceFoundException thrown !");
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(translationService.getOneByErrorKey("not_found"));
    }


    /**
     * A method to handle {@link NumberFormatException} across the whole application.
     */
    @ExceptionHandler({NumberFormatException.class})
    public ResponseEntity<Optional<TranslationDTO>> numberFormatException(NumberFormatException ex) {
        log.warn("NumberFormatException thrown !");
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(translationService.getOneByErrorKey("number_format"));
    }

}
