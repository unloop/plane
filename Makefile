.PHONY : build clean start stop restart logs

run:
	npm start

restart: stop start logs

build:
	echo "build lastbackend dashboard image"
	docker build -t lastbackend/dashboard .

clean:
	echo "remove lastbackend api image"
	docker rmi -f lastbackend/dashboard

start:
	echo "start new docker dashboard image"
	docker run -i -t -d --name=dashboard \
		-v /opt/src/github.com/lastbackend/control-plane/src:/opt/control-plane/src:rw \
		-v /opt/src/github.com/lastbackend/control-plane/public:/opt/control-plane/public:rw \
		-v /opt/src/github.com/lastbackend/control-plane/.env:/opt/control-plane/.env:rw \
	  --restart=always --net=host -p 3000:3000 lastbackend/dashboard npm start

stop:
	echo "stop docker api image"
	docker rm -vf dashboard

logs:
	echo "fetch docker api image"
	docker logs -f dashboard
