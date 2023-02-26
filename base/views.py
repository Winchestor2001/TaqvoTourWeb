from django.shortcuts import render, redirect
from .models import *


def home(request):
    if request.method == 'POST':
        name = request.POST.get('cfName')
        phone = request.POST.get('cfPhone')
        message = request.POST.get('cfMessage')
        ContactUs.objects.create(name=name, phone=phone, context=message)
        return redirect('home')

    banner = MainSection.objects.first()
    s1 = Service.objects.get(name='Aviyaperelyot')
    s2 = Service.objects.get(name='Umra Viza')
    s3 = Service.objects.get(name='Mehmonxona')
    s4 = Service.objects.get(name='Shifokor Xizmati')
    gallery = Gallery.objects.all()
    video = Video.objects.first()
    staffs = Staff.objects.all()
    gmap = Company.objects.get(position='Google map')
    locations = Company.objects.filter(position='Manzil')
    phones = Company.objects.filter(position='Telefon raqam')
    emails = Company.objects.filter(position='Elektron pochta')
    context = {
        'banner': banner,
        'gallery': gallery,
        'video': video,
        'staffs': staffs,
        'gmap': gmap,
        'locations': locations,
        'phones': phones,
        'emails': emails,
        's1': s1,
        's2': s2,
        's3': s3,
        's4': s4,
    }
    return render(request, 'main.html', context)
