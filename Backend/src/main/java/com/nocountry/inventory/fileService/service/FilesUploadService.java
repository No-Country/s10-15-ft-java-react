package com.nocountry.inventory.fileService.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FilesUploadService {
    private static final String UPLOADED_FOLDER = "src/main/webapp/images/";

    @Autowired
    public FilesUploadService() {
    }

    // Metodo para subir archivos
    public String uploadFile(MultipartFile file) {
        if (file.isEmpty()) {
            return "Archivo no seleccionado";
        }
        try {
            // Obtenemos el archivo y lo guardamos en la carpeta
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);
            return "Archivo subido correctamente";
        } catch (IOException e) {
            e.printStackTrace();
            return "Error al subir el archivo";
        }
    }

    // Metodo para borrar archivos por nombre
    public String deleteFile(String fileName) {
        try {
            // Obtenemos el archivo y lo borramos de la carpeta
            Path path = Paths.get(UPLOADED_FOLDER + fileName);
            Files.delete(path);
            return "Archivo borrado correctamente";
        } catch (IOException e) {
            e.printStackTrace();
            return "Error al borrar el archivo";
        }
    }

}
