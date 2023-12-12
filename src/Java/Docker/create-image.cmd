docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probasem-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probasem-java/app ../../..
