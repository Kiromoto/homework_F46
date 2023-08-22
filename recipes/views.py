from rest_framework.generics import ListCreateAPIView, ListAPIView, RetrieveAPIView
from .models import Dish, Category
from .serializers import DishSerializer, CategorySerializer
from django.views.generic import ListView


class DishListCreate(ListCreateAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer


class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SingleDishView(RetrieveAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer
