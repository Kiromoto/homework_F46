from django.urls import path
from .views import DishList


urlpatterns = [
    path('', DishList.as_view(), name='dishs_all'),


    # path('<int:pk>', PostDetail.as_view(), name='new_detail'),
    # path('add/', add_new, name='add_new'),
    # path('<int:pk>/update/', PostUpdate.as_view(), name='update_new'),
    # path('<int:pk>/delete/', PostDelete.as_view(), name='delete_new'),
    # path('sendemail/', send_mail_example, name='send_mail_example'),
    # path('becomeanauthor/', become_an_author, name='become_an_author'),
]


