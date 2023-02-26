# Generated by Django 4.1.6 on 2023-02-10 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_remove_mainsection_context_mainsection_context1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='position',
            field=models.CharField(choices=[('Manzil', 'Manzil'), ('Telefon raqam', 'Telefon raqam'), ('Elektron pochta', 'Elektron pochta'), ('Google map', 'Google map')], max_length=200),
        ),
        migrations.AlterField(
            model_name='mainsection',
            name='context1',
            field=models.CharField(max_length=150, verbose_name='1 satir'),
        ),
        migrations.AlterField(
            model_name='mainsection',
            name='context2',
            field=models.CharField(max_length=150, verbose_name='2 satir'),
        ),
        migrations.AlterField(
            model_name='mainsection',
            name='context3',
            field=models.CharField(max_length=150, verbose_name='3 satir'),
        ),
        migrations.AlterField(
            model_name='mainsection',
            name='img',
            field=models.ImageField(upload_to='banner/', verbose_name='Orqa fon'),
        ),
        migrations.AlterField(
            model_name='service',
            name='name',
            field=models.CharField(choices=[('Aviyaperelyot', 'Aviyaperelyot'), ('Umra Viza', 'Umra Viza'), ('Mehmonxona', 'Mehmonxona'), ('Shifokor Xizmati', 'Shifokor Xizmati')], max_length=200, verbose_name='Xizmat turi'),
        ),
    ]
