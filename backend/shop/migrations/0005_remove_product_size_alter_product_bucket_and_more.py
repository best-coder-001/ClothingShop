# Generated by Django 5.0 on 2024-08-21 10:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0004_rename_sizes_size_alter_product_bucket'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='size',
        ),
        migrations.AlterField(
            model_name='product',
            name='bucket',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='bucket', to='shop.bucket'),
        ),
        migrations.AlterField(
            model_name='product',
            name='cat',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cat', to='shop.category'),
        ),
        migrations.AlterField(
            model_name='product',
            name='supplier',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='supplier', to='shop.supplier'),
        ),
        migrations.DeleteModel(
            name='Size',
        ),
        migrations.AddField(
            model_name='product',
            name='size',
            field=models.CharField(default='XL', max_length=400),
            preserve_default=False,
        ),
    ]
