# Simple GSRS 3

This is the simple GSRS all-in-one JAR based build.  It contains the frontend and substances components.

## Requirements
### Java 
  We are targeting the Java 11 runtime for this project although the code can be built using java 8

#### RAM
This microservice probably needs lots of RAM.  The team recommends about 32GB of RAM for about 100 simulataneous users. 
Most of the RAM use is because GSRS has user-specific in-memory caching.  The team knows this is not ideal and 
will reconsider this in a future release.

#### Disk Space
This microservice needs several GB of diskspace for file caches and lucene indexes, and user created files.
The root path for this is set in the config to use the variable `ix.home`. This can be set as an environment variable.
For example, 
```
ix.home= ${?IX_HOME}
```
where the variable IX_HOME points to a location on disk that is readable and writeable by GSRS.

### Database
This microservice requires a SQL database loaded with the GSRS database schema
and optionally populated.  The database requires several GB of space.
The database connection strings will be added to the configuration files \

```
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url="<RDBMS-specific database URL>"
spring.datasource.username=<username>
spring.datasource.password=<password>
spring.jpa.database-platform = <database dialect>
```
#### Note:
Some database systems require a hibernate 'dialect' class to work with GSRS.  (See https://www.educba.com/hibernate-dialect/ for more information.)
For example, PostGreSQL 
requires 
```
spring.jpa.database-platform = gsrs.repository.sql.dialect.GSRSPostgreSQLDialectCustom
```
Oracle requires;
```
spring.jpa.database-platform = org.hibernate.dialect.Oracle10gDialect
```
MariaDB does not require a Hibernate dialect. 

MySQL:
```
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

H2:
```
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```


## Core Dependency Repos

- https://github.com/ncats/gsrs-spring-starter
- https://github.com/ncats/gsrs-spring-module-substances

These dependencies are Spring-boot "starters." 
Note: you don't have to do anything; these dependencies are alredy part of the POM file.

## Build Instructions

This entity microservice can be built into a war file for deployment in a J2EE web container. The simplest way to do this is:

```
./mvnw clean package -DskipTests
```

To include the tests, remove `-DskipTests` from the command. 

This will create a file `target/simple-srs.jar` 

## Running

You can run the simple GSRS for testing and debugging by running the following command:

```
java -jar simple-srs.jar
```

```
java -Dgsrs.frontend.config.dir=conf/static -jar simple-srs.jar
```

## Configuration

### Custom configuration files

Put your custom configuration file `substances.conf` into the `./conf` directory.
Put your custom frontend configuration file `config.json` or images file into
the `./conf/static` directory and add the environment
variable `-Dgsrs.frontend.config.dir=conf/static` to the startup command line
or put it into the `substances.conf` configuration file.

### Use of the Environment Variables and Java properties

Simple SRS supports configuration with environment variable and Java properties.

```
APPLICATION_HOST=http://localhost:8081 java -Dserver.port=8081 -jar simple-srs.jar
```


- API_URL (http://localhost:8080/)
- API_BASE_PATH
- APPLICATION_HOST (http://localhost:8080)
- APPROVALID_GENERATOR (ix.ginas.utils.UNIIGenerator)
- APPROVALID_NAME
- APPROVALID_CODESYSTEM
- AUTH_ALLOW_NONAUTH (true)
- AUTH_AUTOREGISTER (true)
- AUTH_AUTOREGISTERACTIVE (false)
- AUTH_EMAIL_HEADER (AUTHENTICATION_HEADER_NAME_EMAIL)
- AUTH_ROLES_HEADER
- AUTH_SYSADMIN_EMAIL
- AUTH_TRUST_HEADER (false)
- AUTH_USERNAME_HEADER (OAM_REMOTE_USER)
- DB_DDL_AUTO (none)
- DB_DIALECT
- DB_PASSWORD
- DB_USERNAME
- DB_CONNECTION_TIMEOUT (30000)
- DB_MAXIMUM_POOL_SIZE (10)
- DB_URL_ADVERSE_EVENTS (jdbc:h2:"${ix.h2.base}"/appinxight;MODE=Oracle;AUTO_SERVER=TRUE)
- DB_URL_APPLICATIONS (jdbc:h2:"${ix.h2.base}"/appinxight;MODE=Oracle;AUTO_SERVER=TRUE)
- DB_URL_CLINICAL_TRIALS (jdbc:h2:"${ix.h2.base}"/appinxight;MODE=Oracle;AUTO_SERVER=TRUE)
- DB_URL_IMPURITIES (jdbc:h2:"${ix.h2.base}"/appinxight;MODE=Oracle;AUTO_SERVER=TRUE)
- DB_URL_PRODUCTS (jdbc:h2:"${ix.h2.base}"/appinxight;MODE=Oracle;AUTO_SERVER=TRUE)
- DB_URL_SUBSTANCES (jdbc:h2:"${ix.h2.base}"/appinxight;MODE=Oracle;AUTO_SERVER=TRUE)
- DB_USE_NEW_ID_GENERATOR_MAPPINGS (true)
- EUREKA_CLIENT_ENABLED (false)
- EUREKA_SERVICE_URL (http://localhost:8761/eureka)
- FRONTEND_ROUTE_PREFIX (ginas/app/beta)
- FRONTEND_CONFIG_DIR (classpath:/static/assets/data)
- MS_URL_ADVERSE_EVENTS (http://localhost:8080/adverse-events)
- MS_URL_APPLICATIONS (http://localhost:8080/applications)
- MS_URL_CLINICAL_TRIALS (http://localhost:8080/clinical-trials)
- MS_URL_CLINICAL_TRIALS_EUROPE (http://localhost:8080/clinical-trials)
- MS_URL_CLINICAL_TRIALS_US (http://localhost:8080/clinical-trials)
- MS_URL_FRONTEND (http://localhost:8080/frontend)
- MS_URL_IMPURITIES (http://localhost:8080/impurities)
- MS_URL_PRODUCTS (http://localhost:8080/products)
- MS_URL_SUBSTANCES (http://localhost:8080/substances)
- CATALINA_OPTS (-Dlog.level="info" -Ddeploy.ignore.pattern="(adverse-events|applications|clinical-trials|impurities|products)")
