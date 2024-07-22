#!/bin/sh

if ["$DATABASE" = "postgres"] 
then
    echo 'CHECK if database is running'

    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "the database is running"
fi

python manage.py makemigrations
python manage.py migrate

exec "$@"