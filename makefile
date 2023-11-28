createdb:
	docker-compose exec db createdb --username=criciumenses --owner=criciumenses employeeManagement

dropdb:
	docker-compose exec db dropdb --username=criciumenses employeeManagement

setpass:
	docker-compose exec db psql -U criciumenses -d employeeManagement -c "ALTER USER criciumenses WITH PASSWORD 'CriciumaNaSerieA';" -c "\q"

exec:
	docker-compose exec db psql -U criciumenses -d employeeManagement 

dml-script:
	cat src/db/DML.sql | docker-compose exec -T db psql -U criciumenses -d employeeManagement

migrateup:
	docker-compose run --rm migrateup 

migratedown:
	docker-compose run --rm migratedown 

migratedrop:
	docker-compose run --rm migrate -path src/db/migration -database "postgresql://criciumenses:CriciumaNaSerieA@db:5432/employeeManagement?sslmode=disable" force 1

setup:
	docker-compose exec app sh /usr/src/app/setup.sh

.PHONY: createdb exec dropdb migrateup migratedown migratedrop setpass dml-script setup
