import { Body, Controller, Get, HttpStatus } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { ClientEntity } from "../domain/entities/client.entity";
import { 
   GetClientInformationByIdQuery,
   GetClientInformationByIdQueryResult 
} from "../domain/get-client-information-by-id.query";
import { CLIENT_CONTROLLER_URLS } from "../../../params/urls/client-controller-urls";
import { GetClientInformationResponseDto } from "./dtos/get-client-information.response.dto";

@Controller(CLIENT_CONTROLLER_URLS.BASE_URL)
export class GetClientInformationController {

   constructor(private queryBus:QueryBus){}
   @Get(CLIENT_CONTROLLER_URLS.GET_CLIENT_INFORMATION)
   public async getClientInformation(@Body() clientId:ClientEntity["id"]){
      const {clientInformation} = await this.queryBus.execute<
      GetClientInformationByIdQuery,GetClientInformationByIdQueryResult>({payload:{clientId}});
      if(clientInformation.isErr()){
         return(HttpStatus.BAD_REQUEST);
      }
      return new GetClientInformationResponseDto(clientInformation.getValue());
      
   }
}

