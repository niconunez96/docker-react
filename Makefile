status:
	docker-compose ps

runserver:
	docker-compose up --build -d

test:
	docker build -f ./Dockerfile.dev -t test .
	docker run -it test npm run test
