# Camunda Training
This is the repository for Camunda's training lab. You can use it as a starting point or even check the resolution of the exercises through the branches. This project was started based on [Camunda Srping Boot Initializr](https://start.camunda.com/) including the following options:

- Camunda 7.19 Version
- H2 on Disk
- Camunda REST API
- Camunda Webapps
- Camunda Spin

<br>

## Enabling Camunda Embedded Forms
To enable the use of embedded forms the following modifications were applied in the project.

<br>

Add `@EnableProcessApplication` annotation to main Application class. Check the docs reference for [Process applications](https://docs.camunda.org/manual/latest/user-guide/spring-boot-integration/process-applications/) for more info.

<br>

**src/main/../Application.java**

```java
import org.camunda.bpm.spring.boot.starter.annotation.EnableProcessApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableProcessApplication
public class Application {

  public static void main(String... args) {
    SpringApplication.run(Application.class, args);
  }

}
```

<br>

Create the `META-INF` folder and a empty `processes.xml` file descriptor. Check the docs reference for [Deployment Descriptor](https://docs.camunda.org/manual/latest/user-guide/process-applications/the-processes-xml-deployment-descriptor/) for more info.

> src/resources/META-INF/processes.xml

<br>

Create the static folder for your form files. Check the docs reference for [User Task Forms - Embedded](https://docs.camunda.org/manual/latest/user-guide/task-forms/#embedded-task-forms) and [Embedded Forms](https://docs.camunda.org/manual/latest/reference/forms/embedded-forms/)
> src/resources/static/forms/{form htmls files}

<br>

Configure your `application.yaml`. Add spring static location to enable "hot reload" your static files without restarting the application and disable Camunda CSP (Content Security Policy, more info on [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)) to enable fetch requests to external services.

```yaml
spring.datasource.url: jdbc:h2:file:./camunda-h2-database

# add Spring static location to hot reload
spring.web.resources.static-locations: file:src/main/resources/static/

camunda.bpm.admin-user:
  id: demo
  password: demo

# disable Camunda CSP header rule
camunda.bpm.webapp:
  header-security:
    content-security-policy-disabled: true
```