from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=800)
    description = models.TextField()

    class Meta:
        verbose_name_plural = 'Categories'


class Bucket(models.Model):
    pass


class Supplier(models.Model):
    name = models.CharField(max_length=800)
    description = models.TextField()


class Discount(models.Model):
    name = models.CharField(max_length=800)
    description = models.TextField()
    percent = models.FloatField()


class Product(models.Model):
    name = models.CharField(max_length=800)
    description = models.TextField()
    price = models.FloatField()
    count = models.PositiveIntegerField()
    photo = models.ImageField(upload_to='/products/')

    bucket = models.OneToOneField(Bucket, models.SET_NULL, null=True)
    cat = models.ForeignKey(Bucket, models.CASCADE)
    supplier = models.ForeignKey(Bucket, models.CASCADE)
