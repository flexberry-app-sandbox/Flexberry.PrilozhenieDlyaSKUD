docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie_dlya_skud/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t prilozhenie_dlya_skud/app ../..
