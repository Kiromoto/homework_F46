from django.urls import path
from .views import DishListCreate, CategoryListView, SingleDishView, OneCategoryDishesListView
from rest_framework.schemas import get_schema_view


urlpatterns = [
    path('api/dishes/', DishListCreate.as_view(), ),
    path('api/dishes/<int:pk>', SingleDishView.as_view()),
    path('api/category/', CategoryListView.as_view(), ),
    path('api/category/<int:pk>', OneCategoryDishesListView.as_view(), ),

]


