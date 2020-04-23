# API Tools

## Gettin started

#### Install dependencies project

```
npm install
```

#### Running docker compose

```
sudo docker-compose up -d
```

#### Running migrations

```
sudo docker-compose exec api npx sequelize db:create --env test
sudo docker-compose exec api npx npx sequelize db:migrate --env test
```

#### Running test

```
sudo docker-compos exec api npm test
```
