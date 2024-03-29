package com.example.homepage.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//WebMvcConfig setting

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {


/**
     * addCorsMappings
     * for allowing cross-origin requests from frontend
     */


    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedHeaders("*")
                .allowCredentials(true)
                .allowedOriginPatterns("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE");

    }
}

