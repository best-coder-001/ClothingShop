from django.urls import path, include
from .routers import DiscountRouter

urlpatterns = [
    path('v1/',include(DiscountRouter.urls))
]