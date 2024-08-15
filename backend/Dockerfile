FROM python:3.11-slim

RUN mkdir ClothingShop

COPY . backend
RUN pip install -r requirements.txt
WORKDIR backend

CMD python manage.py makemigrations && python manage.py migrate
