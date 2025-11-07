package gsrs.ncats.simplesrs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

import gsrs.EnableGsrsApi;
import gsrs.EnableGsrsBackup;
import gsrs.EnableGsrsJpaEntities;
import gsrs.EnableGsrsLegacyAuthentication;
import gsrs.EnableGsrsLegacyCache;
import gsrs.EnableGsrsLegacyPayload;
import gsrs.EnableGsrsLegacySequenceSearch;
import gsrs.EnableGsrsLegacyStructureSearch;
import gsrs.EnableGsrsScheduler;
import gsrs.cv.EnableControlledVocabulary;
import ix.core.search.bulk.EnableBulkSearch;

@SpringBootApplication
@EnableGsrsApi(indexValueMakerDetector = EnableGsrsApi.IndexValueMakerDetector.CONF)
@EnableGsrsJpaEntities
@EnableGsrsLegacyAuthentication
@EnableGsrsLegacyCache
@EnableGsrsLegacyPayload
@EnableGsrsLegacySequenceSearch
@EnableGsrsLegacyStructureSearch
@EnableBulkSearch
@EntityScan(basePackages ={"ix","gsrs", "gov.nih.ncats"} )
//@EnableJpaRepositories(basePackages ={"ix","gsrs", "gov.nih.ncats"} )
@EnableScheduling
@EnableGsrsScheduler
@EnableGsrsBackup
@EnableControlledVocabulary
//@EnableAsync   //disable asynchronous events for now 11/09/2022. 
                 //Technically this can work okay, but something about the transaction
                 //requirements of the existing listeners can cause issues.
public class SimpleSrsApplication {

/*    @Bean
    public gsrs.config.GsrsServiceInfoEndpointPathConfiguration gsrsServiceInfoEndpointPathConfiguration(){
        return new gsrs.config.GsrsServiceInfoEndpointPathConfiguration();
    }

    @Bean
    public gsrs.config.BasicServiceInfoController basicServiceInfoController(){
        return new gsrs.config.BasicServiceInfoController();
    }

    @Bean
    public gsrs.config.NoEntityConfigurationServiceInfoController noEntityConfigurationServiceInfoController(){
        return new gsrs.config.NoEntityConfigurationServiceInfoController();
    }
*/
    public static void main(String[] args) {
        SpringApplication.run(SimpleSrsApplication.class, args);
    }
}
