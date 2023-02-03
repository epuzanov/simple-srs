FROM maven:3-jdk-11 as builder
ENV MAVEN_CONFIG=
COPY . /tmp
WORKDIR /tmp
RUN mvn clean -U package -DskipTests

FROM openjdk:11-jre-slim
RUN mkdir -p /data
WORKDIR /data
COPY --from=builder /tmp/target/simple-srs.jar /usr/local/lib/
VOLUME ["/data"]
EXPOSE 8080
CMD ["java", "-Dgsrs.frontend.config.dir=conf/static", "-jar", "/usr/local/lib/simple-srs.jar"]
