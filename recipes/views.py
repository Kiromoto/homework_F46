from rest_framework import generics
from .models import Dish, Category
from .serializers import DishSerializer, CategorySerializer
from django.views.generic import ListView


class DishListCreate(generics.ListCreateAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
