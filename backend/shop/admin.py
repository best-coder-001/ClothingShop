from django.contrib import admin
from .models import *

@admin.register(Product)
class ProductAdminModel(admin.ModelAdmin):
    pass


@admin.register(Discount)
class DiscountAdminModel(admin.ModelAdmin):
    pass


@admin.register(Category)
class CategoryAdminModel(admin.ModelAdmin):
    pass


@admin.register(Bucket)
class BucketAdminModel(admin.ModelAdmin):
    pass


@admin.register(Supplier)
class SupplierAdminModel(admin.ModelAdmin):
    pass
