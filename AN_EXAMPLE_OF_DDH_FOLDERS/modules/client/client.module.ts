import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GetClientInformationByIdQuery }
    from "./domain/get-client-information-by-id.query";
import { ClientEntityAdapter } from "./infrastructure/client-entity.adapter";
import { GetClientInformationPresenter }
    from "./interface/get-client-information.presenter";

const QueryHandlers = [ GetClientInformationByIdQuery ];

const ClientPresenters = [ GetClientInformationPresenter ];

@Module( {
    imports: [ TypeOrmModule.forFeature( [ ClientEntityAdapter ] ), ],
    providers: [ ...QueryHandlers, ],
    exports: [ ...ClientPresenters ],
} )
export class ClientModule {}