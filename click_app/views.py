from django.shortcuts import render

# Create your views here.
def render_click_app(request):
    return render(request= request, template_name= 'click_app/click.html')