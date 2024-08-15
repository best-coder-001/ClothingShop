FROM python:3.11-slim

RUN mkdir ClothingShop
COPY . /backend/
WORKDIR backend
RUN pip install -r requirements.txt

CMD python manage.py makemigrations && python manage.py migrate
