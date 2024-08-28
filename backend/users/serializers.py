from rest_framework import serializers
from .models import User, Profile
from shop.models import Bucket


class UserModelSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        bucket = Bucket.objects.create()
        Profile.objects.create(user=user,bucket=bucket)
        return user

    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'photo', 'first_name', 'last_name']


