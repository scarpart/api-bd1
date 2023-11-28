# api-bd1
API para o trabalho final de Banco de Dados I.

## Instruções de Uso
Use os seguintes comandos para rodar a aplicação (em teoria, deve funcionar,
já que nos nossos testes feitos nos nossos computadores isso funcionou):

```bash
docker build -t api-bd1 .
docker-compose up -d db
sh setup.sh
docker-compose up -d app
```

Se tudo ocorrer de maneira correta, deves poder fazer algum request
para, por exemplo http://localhost:3000/api/employees com um GET
e obter uma resposta satisfatória.


