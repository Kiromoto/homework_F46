from django.urls import path
from .views import DishListCreate, CategoryListView, SingleDishView
from rest_framework.schemas import get_schema_view


urlpatterns = [
    # path('', DishList.as_view(), name='dishs_all'),
    path('api/dishs/', DishListCreate.as_view(), ),
    path('api/dishs/<int:pk>', SingleDishView.as_view()),
    path('api/category/', CategoryListView.as_view(), ),


]


