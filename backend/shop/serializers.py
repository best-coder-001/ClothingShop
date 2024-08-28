from rest_framework import serializers
from .models import *


class BucketModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bucket
        fields = '__all__'


class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class SupplierModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'


class DiscountModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = ['percent']


class ProductModelSerializer(serializers.ModelSerializer):
    discount = DiscountModelSerializer()
    photo = serializers.ReadOnlyField(source='get_photo_url')

    class Meta:
        model = Product
        fields = ['id', 'discount', 'rate', 'price', 'name', 'photo']


class ProductDetailedSerializer(serializers.ModelSerializer):
    discount = DiscountModelSerializer()
    cat = CategoryModelSerializer()
    photo = serializers.ReadOnlyField(source='get_photo_url')

    class Meta:
        model = Product
        fields = ['id', 'discount', 'rate', 'price', 'name', 'cat', 'count', 'photo', 'size', 'description']


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['fullname', 'email', 'opinion']
