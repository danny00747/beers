package com.olvdanny.beers.rest.errors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * REST controller to handle unknown requests.
 */
@Controller
public class ResourceNotFoundHandler {

    private static final Logger log = LoggerFactory.getLogger(ResourceNotFoundHandler.class);

    @RequestMapping(value = "/error", method = {RequestMethod.GET}, produces = "text/html")
    public ModelAndView errorPage() {
        log.error("Page requested not found.");
        return new ModelAndView("forward:/index.html");
    }
}
