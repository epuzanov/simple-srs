FROM maven:3.6.3-jdk-11 as builder
ENV MAVEN_CONFIG=
COPY . /tmp
WORKDIR /tmp
RUN mvn clean -U package -DskipTests

FROM openjdk:11-jre-slim
RUN mkdir -p /data /config
WORKDIR /data
COPY --from=builder /tmp/target/simple-srs.jar /usr/local/lib/
COPY --from=builder /tmp/src/main/resources/application.conf /config/
COPY --from=builder /tmp/src/main/resources/static/assets/data/config.json /config/
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
VOLUME ["/data"]
EXPOSE 8080
CMD ["java", "-Dconfig.file=/config/application.conf", "-Dgsrs.frontend.config.file=/config/config.json", "-jar", "/usr/local/lib/simple-srs.jar"]
