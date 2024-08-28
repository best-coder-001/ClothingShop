from rest_framework import viewsets, generics, permissions, views, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializers import *
from .tasks import send_email_contact


class DiscountAPIViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = DiscountModelSerializer
    permission_classes = [permissions.IsAdminUser]


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductModelSerializer
    permission_classes = [permissions.IsAuthenticated]


class MainProductListAPIView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        today_discounts = Product.objects.order_by('-discount__percent')[:4]
        today_top = Product.objects.order_by('-rate')[:4]
        today_best_prices = Product.objects.order_by('-price')[:4]
        response = Response({
            'discounts': ProductModelSerializer(today_discounts, many=True).data,
            'bestPrices': ProductModelSerializer(today_best_prices, many=True).data,
            'top': ProductModelSerializer(today_top, many=True).data
        })
        return response


class ContactAPIView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        send_email_contact.delay(
            name=request.data.get('fullname'),
            email=request.data.get('email')
        )
        return super().post(request, *args, **kwargs)


class ListCategoriesAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryModelSerializer
    permission_classes = [permissions.AllowAny]


class ListProductsByCategoriesAPIView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        cat_name = request.query_params.get('cat_name')  # Use query_params for GET request
        if not cat_name:
            return Response({'error': 'Category name is required!'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            cat = Category.objects.get(name=cat_name)
        except Category.DoesNotExist:
            return Response({'error': 'Could not find category with that name!'}, status=status.HTTP_404_NOT_FOUND)

        products = Product.objects.filter(cat=cat)
        serialized_products = ProductModelSerializer(products, many=True)  # Pass queryset to serializer
        return Response({'products': serialized_products.data}, status=status.HTTP_200_OK)


class ProductDetailAPIView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        clothId = request.query_params.get('clothId')

        if not clothId:
            return Response({'error': 'Product id is required!'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            product = Product.objects.get(pk=clothId)
        except:
            return Response({'error': 'Could not find product with that id!'}, status=status.HTTP_404_NOT_FOUND)

        serialized_product = ProductDetailedSerializer(product)
        return Response({'product': serialized_product.data}, status=status.HTTP_200_OK)


@api_view()
def echo(request):
    return Response({'response': 200})
