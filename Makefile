.PHONY: build
build:
	docker-compose build

.PHONY: run
run:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose down --remove-orphans

.PHONY: logs
logs:
	docker-compose logs