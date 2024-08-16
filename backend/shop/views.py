from rest_framework import viewsets, generics,permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializers import *


class DiscountAPIViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountModelSerializer
    permission_classes = [permissions.IsAdminUser]


@api_view()
def echo(request):
    return Response({'response': 200})
