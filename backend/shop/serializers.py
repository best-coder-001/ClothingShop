from rest_framework import serializers
from .models import *


class ProductModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class BucketModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bucket
        fields = '__all__'


class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class SupplierModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'


class DiscountModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = '__all__'
