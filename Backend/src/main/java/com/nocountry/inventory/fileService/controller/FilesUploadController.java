package com.nocountry.inventory.fileService.controller;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.inventory.dto.GenericResponseDTO;
import com.nocountry.inventory.fileService.service.FilesUploadService;

@RestController
@RequestMapping("/files")
@CrossOrigin(origins = { "https://stockflow10.vercel.app/", "https://stockflow.netlify.app/",
        "http://localhost:5173/" })
public class FilesUploadController {
    private final FilesUploadService filesUploadService;

    @Autowired
    public FilesUploadController(FilesUploadService filesUploadService) {
        this.filesUploadService = filesUploadService;
    }

    // Metodo para subir archivos
    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok().body(new GenericResponseDTO<>(true, "Success", filesUploadService.uploadFile(file)));

    }

    // Metodo para borrar archivos por nombre
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteFile(@RequestParam("fileName") String fileName) {
        return ResponseEntity.ok()
                .body(new GenericResponseDTO<>(true, "Success", filesUploadService.deleteFile(fileName)));
    }

}
