from modeltranslation.translator import register, TranslationOptions
from .models import MainSection, Gallery, Video, Staff


@register(MainSection)
class MainSectionTranslationOptions(TranslationOptions):
    fields = ('context1', 'context2', 'context3')


@register(Gallery)
class GalleryTranslationOptions(TranslationOptions):
    fields = ('name',)


@register(Video)
class VideoTranslationOptions(TranslationOptions):
    fields = ('name',)


@register(Staff)
class StaffTranslationOptions(TranslationOptions):
    fields = ('rank',)




