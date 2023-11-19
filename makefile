createdb:
	docker exec -it postgres16-bd createdb --username=criciumenses --owner=criciumenses employeeManagement

dropdb:
	docker exec -it postgres16-bd dropdb --username=criciumenses employeeManagement

setpass:
	docker exec -it postgres16-bd psql -U criciumenses -d employeeManagement -c "ALTER USER criciumenses WITH PASSWORD 'CriciumaNaSerieA';" -c "\q"

exec:
	docker exec -it postgres16-bd psql -U criciumenses -d employeeManagement 

migrateup:
	migrate -path src/db/migration -database "postgresql://criciumenses:CriciumaNaSerieA@localhost:7654/employeeManagement?sslmode=disable" -verbose up

migratedown:
	migrate -path src/db/migration -database "postgresql://criciumenses:CriciumaNaSerieA@localhost:7654/employeeManagement?sslmode=disable" -verbose down

migratedrop:
	migrate -path src/db/migration -database "postgresql://criciumenses:CriciumaNaSerieA@localhost:7654/employeeManagement?sslmode=disable" force 1

.PHONY: createdb exec dropdb migrateup migratedown migratedrop setpass
