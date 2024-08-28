from django.conf import settings
from django.db import models
from urllib.parse import quote


class Category(models.Model):
    name = models.CharField(max_length=800)
    description = models.TextField()

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Bucket(models.Model):
    pass


class Supplier(models.Model):
    name = models.CharField(max_length=800)
    description = models.TextField()

    def __str__(self):
        return self.name


class Discount(models.Model):
    name = models.CharField(max_length=800)
    description = models.TextField()
    percent = models.FloatField()

    def __str__(self):
        return str(self.percent)


class Product(models.Model):
    name = models.CharField(max_length=800)
    description = models.TextField()
    price = models.FloatField()
    count = models.PositiveIntegerField()
    photo = models.ImageField(upload_to='products')
    rate = models.FloatField()
    size = models.CharField(max_length=400)

    discount = models.ForeignKey(Discount, on_delete=models.SET_NULL, null=True, blank=True)
    bucket = models.ForeignKey(Bucket, on_delete=models.SET_NULL, null=True, blank=True, related_name='bucket')
    cat = models.ManyToManyField(Category,related_name='cat')
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, related_name='supplier')

    def get_photo_url(self):
        if self.photo:
            return f"{settings.BASE_URL}{self.photo.url}"
        return None

    def __str__(self):
        return f'{self.name},{self.price}'


class Contact(models.Model):
    fullname = models.CharField()
    email = models.EmailField()
    opinion = models.TextField()

    def __str__(self):
        return self.fullname
