from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    updated_at = models.DateTimeField(auto_now=True)
    photo = models.ImageField(upload_to='/users/')


class Profile(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    bucket = models.OneToOneField('shop.Bucket', models.CASCADE)
