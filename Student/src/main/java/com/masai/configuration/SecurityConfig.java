package com.masai.configuration;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

@Configuration
public class SecurityConfig {

	@Bean
	public SecurityFilterChain springSecurityConfiguration(HttpSecurity http) throws Exception {

		http.cors(cors -> {

			cors.configurationSource(new CorsConfigurationSource() {

				@Override
				public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
					CorsConfiguration cfg = new CorsConfiguration();

					cfg.setAllowedOriginPatterns(Collections.singletonList("*"));
					cfg.setAllowedMethods(Collections.singletonList("*"));
					cfg.setAllowCredentials(true);
					cfg.setAllowedHeaders(Collections.singletonList("*"));
					cfg.setExposedHeaders(Arrays.asList("Authorization"));
					return cfg;
				}
			});

		}).authorizeHttpRequests(auth ->{

		auth
		.requestMatchers(HttpMethod.POST,"/students").permitAll()
		.requestMatchers(HttpMethod.GET, "/students").permitAll()
		.requestMatchers(HttpMethod.PUT, "/students").permitAll()
		.requestMatchers(HttpMethod.DELETE, "/students").permitAll()
		.requestMatchers("/swagger-ui*/**","/v3/api-docs/**").permitAll()
		.anyRequest().authenticated();

	})
	.csrf(csrf -> csrf.disable())
	.formLogin(Customizer.withDefaults())
	.httpBasic(Customizer.withDefaults());


		return http.build();


	}

}
