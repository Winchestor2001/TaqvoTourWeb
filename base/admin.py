from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import *


@admin.register(MainSection)
class MainSectionAdmin(TranslationAdmin):
    list_display = ('context1', 'context2', 'context3', 'img')


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'img')


@admin.register(Gallery)
class GalleryAdmin(TranslationAdmin):
    list_display = ('name', 'img')


@admin.register(Video)
class VideoAdmin(TranslationAdmin):
    list_display = ('name', 'video')


@admin.register(Staff)
class StaffAdmin(TranslationAdmin):
    list_display = ('name', 'rank', 'img')


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('position',)


@admin.register(ContactUs)
class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'context')







