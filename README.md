
### Tecnologias da API
* Node v12.19.0
* NPM v6.14.8
* Restify v8.5.1
* Axios v0.21.0
* Jest v26.6.3

### Instalação e utilização
  1. Instale as dependências, com o comando abaixo:
  ```
    npm i
  ```
  3. Execute a API, com o comando abaixo:
  ```
    npm start
  ```

### Utilizando API com Docker
  1. Criar a imagem a partir do Dockerfile, trocar {image_name} pelo nome desejado para a imagem.
  ```
    docker build . -t {image_name}
  ```
  2. Para executar o container, utilize o seguinte comando abaixo, com o nome da imagem escolhido
  ```
    docker run -p 3000 -d {image_name}
  ```

### Estrutura

```
  http://{HOST}:3000/recipes/?i={ingredient_1},{ingredient_2},{ingredient_3}
```
```
  http://127.0.0.1:3000/recipes/?i=onion,garlic,tomato
```
### Testar API
  1. Para testar a API, utilize o seguinte comando
  ```
    npm test
  ```