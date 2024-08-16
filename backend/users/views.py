from rest_framework import generics, permissions
from .models import *
from .serializers import *


class CreateUserAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    permission_classes = [permissions.AllowAny]


class UpdateUserAPIView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    permission_classes = [permissions.IsAuthenticated]
