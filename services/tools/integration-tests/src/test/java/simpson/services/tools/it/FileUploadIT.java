package simpson.services.tools.it;

import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;

import java.io.File;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FileUploadIT {



    @Test
    public void testUploadFile() {
        RestAssured.given().multiPart("file", new File("src/test/resources/test.xlsx")).when()
                .post("http://localhost:8080/upload").then().assertThat().statusCode(200);
    }
}
