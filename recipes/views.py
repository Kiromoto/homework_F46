from django.shortcuts import render
from django.views.generic import ListView
from .models import Dish

class DishList(ListView):
    model = Dish
    ordering = '-datetime'
    template_name = 'dishs_all.html'
    context_object_name = 'dishs'
    # paginate_by = 6

