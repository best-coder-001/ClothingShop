from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import User


class UserModelSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email','photo']

