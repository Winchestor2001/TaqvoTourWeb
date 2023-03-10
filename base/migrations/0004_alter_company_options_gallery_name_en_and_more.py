# Generated by Django 4.1.6 on 2023-02-10 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_company_position_alter_mainsection_context1_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='company',
            options={'verbose_name': 'Kompaniya xaqida', 'verbose_name_plural': 'Kompaniya xaqida'},
        ),
        migrations.AddField(
            model_name='gallery',
            name='name_en',
            field=models.CharField(max_length=200, null=True, verbose_name='Rasim tarifi'),
        ),
        migrations.AddField(
            model_name='gallery',
            name='name_ru',
            field=models.CharField(max_length=200, null=True, verbose_name='Rasim tarifi'),
        ),
        migrations.AddField(
            model_name='gallery',
            name='name_uz',
            field=models.CharField(max_length=200, null=True, verbose_name='Rasim tarifi'),
        ),
        migrations.AddField(
            model_name='mainsection',
            name='context1_en',
            field=models.CharField(max_length=150, null=True, verbose_name='1 satir'),
        ),
        migrations.AddField(
            model_name='mainsection',
            name='context1_ru',
            field=models.CharField(max_length=150, null=True, verbose_name='1 satir'),
        ),
        migrations.AddField(
            model_name='mainsection',
            name='context1_uz',
            field=models.CharField(max_length=150, null=True, verbose_name='1 satir'),
        ),
        migrations.AddField(
            model_name='mainsection',
            name='context2_en',
            field=models.CharField(max_length=150, null=True, verbose_name='2 satir'),
        ),
        migrations.AddField(
            model_name='mainsection',
            name='context2_ru',
            field=models.CharField(max_length=150, null=True, verbose_name='2 satir'),
        ),
        migrations.AddField(
            model_name='mainsection',
            name='context2_uz',
            field=models.CharField(max_length=150, null=True, verbose_name='2 satir'),
        ),
        migrations.AddField(
            model_name='mainsection',
            name='context3_en',
            field=models.CharField(max_length=150, null=True, verbose_name='3 satir'),
        ),
        migrations.AddField(
            model_name='mainsection',
            name='context3_ru',
            field=models.CharField(max_length=150, null=True, verbose_name='3 satir'),
        ),
        migrations.AddField(
            model_name='mainsection',
            name='context3_uz',
            field=models.CharField(max_length=150, null=True, verbose_name='3 satir'),
        ),
        migrations.AddField(
            model_name='staff',
            name='name_en',
            field=models.CharField(max_length=200, null=True, verbose_name='Ismi'),
        ),
        migrations.AddField(
            model_name='staff',
            name='name_ru',
            field=models.CharField(max_length=200, null=True, verbose_name='Ismi'),
        ),
        migrations.AddField(
            model_name='staff',
            name='name_uz',
            field=models.CharField(max_length=200, null=True, verbose_name='Ismi'),
        ),
        migrations.AddField(
            model_name='staff',
            name='rank_en',
            field=models.CharField(max_length=150, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='staff',
            name='rank_ru',
            field=models.CharField(max_length=150, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='staff',
            name='rank_uz',
            field=models.CharField(max_length=150, null=True, verbose_name='Lavozimi'),
        ),
        migrations.AddField(
            model_name='video',
            name='name_en',
            field=models.CharField(max_length=200, null=True, verbose_name='Video sarlavhasi'),
        ),
        migrations.AddField(
            model_name='video',
            name='name_ru',
            field=models.CharField(max_length=200, null=True, verbose_name='Video sarlavhasi'),
        ),
        migrations.AddField(
            model_name='video',
            name='name_uz',
            field=models.CharField(max_length=200, null=True, verbose_name='Video sarlavhasi'),
        ),
        migrations.AlterField(
            model_name='company',
            name='content',
            field=models.CharField(max_length=255, verbose_name='Malumot'),
        ),
        migrations.AlterField(
            model_name='company',
            name='position',
            field=models.CharField(choices=[('Manzil', 'Manzil'), ('Telefon raqam', 'Telefon raqam'), ('Elektron pochta', 'Elektron pochta'), ('Google map', 'Google map')], max_length=200, verbose_name='Malumot turi'),
        ),
        migrations.AlterField(
            model_name='contactus',
            name='context',
            field=models.TextField(verbose_name='Matn'),
        ),
        migrations.AlterField(
            model_name='contactus',
            name='name',
            field=models.CharField(max_length=255, verbose_name='F.I.O'),
        ),
        migrations.AlterField(
            model_name='contactus',
            name='phone',
            field=models.CharField(max_length=255, verbose_name='Telefon raqam'),
        ),
        migrations.AlterField(
            model_name='gallery',
            name='img',
            field=models.ImageField(upload_to='gallery/', verbose_name='Rasim'),
        ),
        migrations.AlterField(
            model_name='gallery',
            name='name',
            field=models.CharField(max_length=200, verbose_name='Rasim tarifi'),
        ),
        migrations.AlterField(
            model_name='service',
            name='img',
            field=models.ImageField(upload_to='services/', verbose_name='Xizmat rasmi'),
        ),
        migrations.AlterField(
            model_name='staff',
            name='img',
            field=models.ImageField(upload_to='staffs/', verbose_name='Rasmi'),
        ),
        migrations.AlterField(
            model_name='staff',
            name='name',
            field=models.CharField(max_length=200, verbose_name='Ismi'),
        ),
        migrations.AlterField(
            model_name='staff',
            name='rank',
            field=models.CharField(max_length=150, verbose_name='Lavozimi'),
        ),
        migrations.AlterField(
            model_name='video',
            name='name',
            field=models.CharField(max_length=200, verbose_name='Video sarlavhasi'),
        ),
        migrations.AlterField(
            model_name='video',
            name='video',
            field=models.FileField(upload_to='videos/', verbose_name='Video'),
        ),
    ]
