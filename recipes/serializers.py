from rest_framework import serializers
from .models import Dish, Category


class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ('id', 'category', 'title', 'text', 'datetime', 'picture',)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name',)
