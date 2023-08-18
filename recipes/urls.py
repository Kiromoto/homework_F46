from django.urls import path
from .views import DishList, DishListCreate


urlpatterns = [
    # path('', DishList.as_view(), name='dishs_all'),
    path('api/dishs/', DishListCreate.as_view(), ),

]


