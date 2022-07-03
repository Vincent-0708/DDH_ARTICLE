Here are some code examples for the concepts discussed in this [article](https://www.sipios.com/blog-tech/9-tips-to-face-a-ddh-project-first-time) in typescript with nestjs and typeorm. 

It is supposed to represent some parts of a pizza restaurant with a DDH approach. 

Warning : this code is not executable. It is just possible implementations for different concepts. That's why several files are almost empty. They just exist to define elements needed elsewhere. 

You may be interested by those files : 
- Entities:
  - client.entity.ts
  - pizza.entity.ts
  -ingredient.entity.ts
- Aggregate:
  - pizza-command.aggregate.ts
- Domain errors:
  - all the .error.ts files
- Value object:
  - address.value-object.ts
- Commands:
  - send-pizza-command.command.ts
  - send-message-to-client.command.ts
- Command handler:
  - send-pizza-command.command-handler.ts
- Query:
  - get-client-information-by-id.query.ts
- Query handler:
  - get-client-information-by-id.query-handler.ts
- Ports: 
  - client.port.ts
  - send-pizza-command-with-delivery-guy.port.ts
- Adapters:
  - send-pizza-command-with-jack.adapter.ts
  - send-pizza-command-with-paul.adapter.ts
- Database adapter:
  - client-entity.adapter.ts
- Mapper:
  - client.mapper.ts
- Event:
  - pizza-command-sent.event.ts
- Event handler:
  - pizza-command-sent.event-handler.ts
- Response dtos:
  - get-client-information.response-dto.ts
  - get-client-phone-number-as-string.response-dto.ts
- Controller:
  - get-client-information.controller.ts
- Presenter:
  - get-client-information.presenter.ts

- Result class:
  - result.ts


  
 
Files without interest are : 
- generate-random-string-id.ts
- is-data-from-user-clean.ts
- phone-number.value-object.ts
- pizza-price.value-object.ts
- pizza-command-price.value-object.ts
- fidelity-account.entity.ts
- fidelity-point.value-object.ts