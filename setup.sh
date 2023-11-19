
echo "Começando o setup... se der errado, provavelmente tens que instalar um postgres16-alpine ou algo assim como imagem do docker."
docker-compose up -d 
make createdb 
make setpass
make migrateup 
echo "...Setup completo! Banco de Dados criado, scripts DDL e DML executados, e PostgreSQL rodando na porta 7654 na máquina hospedeira."
