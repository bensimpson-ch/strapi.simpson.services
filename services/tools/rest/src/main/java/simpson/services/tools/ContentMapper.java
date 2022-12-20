package simpson.services.tools;

import org.springframework.web.multipart.MultipartFile;
import simpson.services.tools.domain.Content;

import java.io.IOException;

enum ContentMapper {
    INSTANCE;

    Content map(MultipartFile multipartFile) throws IOException {
        return new Content(multipartFile.getName(), multipartFile.getContentType(), multipartFile.getBytes());
    }
}
