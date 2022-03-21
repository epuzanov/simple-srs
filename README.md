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
Or you can use your customized main configuration [./src/main/resources/application.conf](./src/main/resources/application.conf) 
and/or frontend config [./src/main/resources/static/assets/data/config.json](./src/main/resources/static/assets/data/config.json) files.

```
java -Dconfig.file=conf/application.conf -Dgsrs.frontend.config.file=conf/config.json -jar simple-srs.jar
```

## Configuration

Configuration will be affected by the default configurations included in the core dependencies. 
These will be supplemented by configuration in [./src/main/resources/application.conf](./src/main/resources/application.conf).  

Examine this file.  It contains example properties, but you may need to change several properties to run locally as an 
embedded instance during debugging and development, or to deploy for production.  

```
# Where indexes and other file resources are kept.
ix.home="./ginas.ix"
# Should the port the gateway runs on.
application.host= "http://localhost:8081"
# The port your microservice runs on
server.port=8080
``` 

In production, you may be running the GSRS as a single Tomcat instance.  If so, the `application.host` will 
use the same port as your gateway port. Also, your `ix.home` folder needs to be unique to the 
substances microservice.  For example, `ix.home="/var/lib/tomcat9/webapps/substances.ix"`

Configuration can be modifed before or after building or running the deployed microservice.  The main thing to note is that this configuration will be copied during packaging to a location in the war file, and the war file will be unzipped when placed in the Tomcat `webapps` folder.  Since different configurations are needed for development and production, one approach to take is to have an alternative copy of `application.conf` in a secure location on the server. This can then copied to the deployed location on the production server before run time.  Once tomcat unzips your war file, you will find the configuration here:    

```
path/to/webapps/substances/WEB-INF/classes/application.conf
```

Overwrite this file with your production version of your configuration.
