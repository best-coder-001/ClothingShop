# Generated by Django 5.0 on 2024-08-21 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_sizes_product_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='rate',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
    ]
