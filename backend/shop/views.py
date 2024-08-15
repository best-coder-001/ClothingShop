from rest_framework import viewsets, generics,permissions
from .models import *
from .serializers import *


class DiscountAPIViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountModelSerializer
    permission_classes = [permissions.IsAdminUser]




