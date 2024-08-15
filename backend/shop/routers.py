from rest_framework import routers
from .views import DiscountAPIViewSet


DiscountRouter = routers.SimpleRouter()
DiscountRouter.register(r'discount',DiscountAPIViewSet)