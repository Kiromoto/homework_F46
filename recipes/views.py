from rest_framework import generics
from .models import Dish
from .serializers import DishSerializer

from django.views.generic import ListView


class DishList(ListView):
    model = Dish
    ordering = '-datetime'
    template_name = 'dishs_all.html'
    context_object_name = 'dishs'
    # paginate_by = 6


class DishListCreate(generics.ListCreateAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer
