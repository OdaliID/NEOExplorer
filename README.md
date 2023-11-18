## Atividade: Mapear os objetos próximos a Terra

A NASA (agência especial norte americana) fornece diversas APIs públicas com dados e informações sobre seus estudos. Uma delas de chama API NEO (Near Earth Object), que retorna informações sobre objetos próximos à Terra, como asteroides e cometas.

Implemente um frontend utilizando ReactJS para listar esses objetos da API NEO.

## Requisitos:

    Exibir os seguintes dados de cada objeto: 
    * nome: name
    * diâmetro estimado: estimated_diameter.kilometers.estimated_diameter_min e estimated_diameter.kilometers.estimated_diameter_max
    * data da primeira observação: orbital_data.first_observation_date
    * data da última observação: orbital_data.last_observation_date
    * Paginar os dados (usar links.next e links.prev);
    * Formatar os dados, como datas e unidades de medidas (km);
    * A página deve ter um visual agradável, utilize CSS ou bibliotecas.

## Observação:

    Para a API funcionar deve fazer um cadastro em https://api.nasa.gov/ e preencher o formulário Generate API Key. Você irá receber um e-mail com uma chave, que será usada para acessar a API, para isso é necessário informar a Query Param api_key.

    Para fazer a paginação é necessário informar a Query Param page.

## Material de Apoio:

    `Axios Query Params` : https://stackabuse.com/bytes/getting-request-query-parameters-with-axios/

    `A importância do suporte à Query Strings em uma API REST` : https://www.linkedin.com/pulse/import%C3%A2ncia-do-suporte-%C3%A0-query-strings-em-uma-api-rest-lucas-rocha/?originalSubdomain=pt
