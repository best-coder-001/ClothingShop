from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    updated_at = models.DateTimeField(auto_now=True)
    photo = models.ImageField(upload_to='users', null=True)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bucket = models.OneToOneField('shop.Bucket', on_delete=models.CASCADE)
