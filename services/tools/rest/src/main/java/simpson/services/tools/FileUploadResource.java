package simpson.services.tools;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import simpson.services.tools.application.StorageService;
import simpson.services.tools.domain.Content;

import java.io.IOException;

@RestController
public class FileUploadResource {

    @Autowired
    private StorageService storageService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        Content content = ContentMapper.INSTANCE.map(file);
        storageService.storeContent(content);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/uploadMultiple")
    public ResponseEntity<String> uploadFiles(@RequestParam("files") MultipartFile[] files) throws IOException {
        for (MultipartFile file : files) {
            Content content = ContentMapper.INSTANCE.map(file);
            storageService.storeContent(content);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
