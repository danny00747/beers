package com.olvdanny.beers.service.impl.utils;

public final class Utils {

    public static int validatedId(String id) {
        int validId;
        try {
            validId = Integer.parseInt(id);
        } catch (NumberFormatException ex) {
            throw new NumberFormatException("Please provide a valid number");
        }
        return validId;
    }
}
