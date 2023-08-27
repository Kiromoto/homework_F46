from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User
from django.conf import settings


class Category(models.Model):
    name = models.CharField(max_length=64, unique=True, help_text='category name')

    def __str__(self):
        return self.name


class Dish(models.Model):
    category = models.ForeignKey(Category, related_name='dishes', on_delete=models.SET_DEFAULT, default='Другое', )
    title = models.CharField(max_length=128)
    text = models.TextField()
    datetime = models.DateTimeField(auto_now_add=True)
    picture = models.FileField(upload_to='uploads/', blank=True, verbose_name='Загрузить фото рецепта',
                               default='uploads/default.jpg')

    def get_category(self):
        return '\n'.join([c.name for c in self.category.all()])

    def preview(self):
        return f'{self.text[:124]}...'

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return settings.URL+'api/dishs/' + str(self.id)
    #     # return reverse('dish_detail', args=[str(self.id)])

