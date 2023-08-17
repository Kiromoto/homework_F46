from django.contrib import admin
from .models import Category, Dish


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


class DishAdmin(admin.ModelAdmin):
    list_display = ('category', 'title', 'text', 'datetime', 'picture',)
    list_filter = ('category', 'datetime',)
    search_fields = ('category', 'title', 'text', 'datetime',)


admin.site.register(Category, CategoryAdmin)
admin.site.register(Dish, DishAdmin)
