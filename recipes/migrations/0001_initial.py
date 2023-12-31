# Generated by Django 4.2.4 on 2023-08-17 09:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='category name', max_length=64, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Dish',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=128)),
                ('text', models.TextField()),
                ('picture', models.FileField(blank=True, default='uploads/default.jpg', upload_to='uploads/', verbose_name='Загрузить фото рецепта')),
                ('category', models.ForeignKey(default='Другое', on_delete=django.db.models.deletion.SET_DEFAULT, to='recipes.category')),
            ],
        ),
    ]
