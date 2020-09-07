status:
	docker-compose ps

start:
	docker-compose up --build -d

test:
	docker build -f ./Dockerfile.dev -t test .
	docker run -it test npm run test
