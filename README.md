# todolist-api-express

## Dependencias
> Caso queria subir a aplicação com docker é necessario estar com docker com o docker instalado no seu PC.

- Docker
- Docker Compose
  
## Subindo no Heroku

- Tenha um repositorio criado no github com este código nele.
- Tenha um banco de dados hospedado em algum lugar ex: MongoDB atlas (Visto que essa aplicação é para mongoDB);
- no arquivo .env coloque "MONGO_URL="ConnectionString obtida la no cluster criado no mongoDB atlas";
- Com o heroku CLI já instalado na máquina, vá até o terminal de comando e crie um app no Heroku:
 ~~~ Javascript
 heroku login
 ~~~

 ~~~ Javascript
 heroku apps:create <App Name>
 ~~~

