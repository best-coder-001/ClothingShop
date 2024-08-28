FROM python:3.11-slim
# Install system dependencies for psycopg
RUN apt-get update \
    && apt-get -y install build-essential libpq-dev \
    && apt-get clean
    
RUN mkdir ClothingShop
WORKDIR /ClothingShop
WORKDIR /backend
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

CMD python manage.py migrate \
    && python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(username='root').exists() or User.objects.create_superuser('root', 'root@example.com', 'root')" \
    && python manage.py collectstatic --no-input \
    && python manage.py loaddata shop_fixture.json \
    && gunicorn backend.wsgi:application -b 0.0.0.0:8000