from django.db import models


class MainSection(models.Model):
    context1 = models.CharField(max_length=150, verbose_name='1 satir')
    context2 = models.CharField(max_length=150, verbose_name='2 satir')
    context3 = models.CharField(max_length=150, verbose_name='3 satir')
    img = models.ImageField(upload_to='banner/', verbose_name='Orqa fon')

    class Meta:
        verbose_name = 'Bosh Sahifa'
        verbose_name_plural = 'Bosh Sahifa'

    def __str__(self):
        return self.context1


class Service(models.Model):
    services = (
        ('Aviyaperelyot', 'Aviyaperelyot'),
        ('Umra Viza', 'Umra Viza'),
        ('Mehmonxona', 'Mehmonxona'),
        ('Shifokor Xizmati', 'Shifokor Xizmati'),
    )
    name = models.CharField(max_length=200, verbose_name='Xizmat turi', choices=services)
    img = models.ImageField(upload_to='services/', verbose_name='Xizmat rasmi')

    class Meta:
        verbose_name = 'Xizmat'
        verbose_name_plural = 'Xizmatlar'

    def __str__(self):
        return self.name


class Gallery(models.Model):
    name = models.CharField(max_length=200, verbose_name='Rasim tarifi')
    img = models.ImageField(upload_to='gallery/', verbose_name='Rasim')

    class Meta:
        verbose_name = 'Foto Surat'
        verbose_name_plural = 'Foto Suratlar'

    def __str__(self):
        return self.name


class Video(models.Model):
    name = models.CharField(max_length=200, verbose_name='Video sarlavhasi')
    video = models.FileField(upload_to='videos/', verbose_name='Video')

    class Meta:
        verbose_name = 'Video'
        verbose_name_plural = 'Videolar'

    def __str__(self):
        return self.name


class Staff(models.Model):
    name = models.CharField(max_length=200, verbose_name='Ismi')
    rank = models.CharField(max_length=150, verbose_name='Lavozimi')
    img = models.ImageField(upload_to='staffs/', verbose_name='Rasmi')

    class Meta:
        verbose_name = 'Ishchi'
        verbose_name_plural = 'Ishchilar'

    def __str__(self):
        return self.name


class Company(models.Model):
    POSITION = (
        ('Manzil', 'Manzil'),
        ('Telefon raqam', 'Telefon raqam'),
        ('Elektron pochta', 'Elektron pochta'),
        ('Google map', 'Google map'),
    )
    position = models.CharField(max_length=200, choices=POSITION, verbose_name='Malumot turi')
    content = models.CharField(max_length=255, verbose_name='Malumot')

    class Meta:
        verbose_name = 'Kompaniya xaqida'
        verbose_name_plural = 'Kompaniya xaqida'

    def __str__(self):
        return self.position


class ContactUs(models.Model):
    name = models.CharField(max_length=255, verbose_name='F.I.O')
    phone = models.CharField(max_length=255, verbose_name='Telefon raqam')
    context = models.TextField(verbose_name='Matn')

    class Meta:
        verbose_name = 'Ariza'
        verbose_name_plural = 'Arizalar'

    def __str__(self):
        return self.name


