package com.nocountry.inventory.controller;

import com.nocountry.inventory.dto.ErrorDto;
import com.nocountry.inventory.exception.RequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class HandlerException {

    @ResponseStatus(code = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handlerValidateExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<String, String>();

        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fildName = ((FieldError) error).getField();
            String message = error.getDefaultMessage();
            errors.put(fildName, message);
        });

        return errors;
    }

    @ExceptionHandler(value = RequestException.class)
    public ResponseEntity<ErrorDto> businessExceptionHandler(RequestException ex) {
        ErrorDto error = ErrorDto.builder().message(ex.getMessage()).build();
        return new ResponseEntity<>(error, ex.getStatus());
    }
}
