from rest_framework import serializers
from .models import Dish, Category


class DishSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_absolute_url', read_only=True)
    category_name = serializers.SerializerMethodField()
    class Meta:
        model = Dish
        fields = ('id', 'category', 'category_name', 'title', 'text', 'datetime', 'picture', 'url')

    def get_category_name(self, obj):
        return obj.category.name


class CategorySerializer(serializers.ModelSerializer):
    dishes = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'name', 'dishes',)
