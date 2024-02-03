package gsrs.ncats.simplesrs;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.beans.factory.annotation.Value;

import java.io.IOException;

@Configuration
public class MvcConfiguration implements WebMvcConfigurer {
    @Value("${route.prefix:ginas/app/beta/}")
    private String prefix = "ginas/app/beta/";

    public MvcConfiguration(){
    }

    //This is so all the front end refresh/ non-existing files default back to index.html
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
           registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        if(resourcePath.startsWith(prefix)){
                               resourcePath = resourcePath.substring(prefix.length());
                        }
                        Resource requestedResource = location.createRelative(resourcePath);
                        return (requestedResource.exists() && requestedResource.isReadable()) ? requestedResource
                                : new ClassPathResource("/static/index.html");
                    }
                });
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}
