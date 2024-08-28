from django.urls import path, include
from .routers import DiscountRouter
from .views import *

urlpatterns = [
    path('v1/', include(DiscountRouter.urls)),
    path('products/', MainProductListAPIView.as_view()),
    path('contact/', ContactAPIView.as_view()),
    path('categories/', ListCategoriesAPIView.as_view()),
    path('categories/sorted/', ListProductsByCategoriesAPIView.as_view()),
    path('product/details/', ProductDetailAPIView.as_view())
]
