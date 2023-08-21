from django.urls import path
from .views import DishListCreate, CategoryListView


urlpatterns = [
    # path('', DishList.as_view(), name='dishs_all'),
    path('api/dishs/', DishListCreate.as_view(), ),
    path('api/category/', CategoryListView.as_view(), ),

]


