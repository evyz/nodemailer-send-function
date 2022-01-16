# Nodemailer рассылка

## Инсталяция 

1. Прописываем данные команды в терминале:

```
git clone https://github.com/evyz/nodemailer-send-function.git -b master lz-nodemailer
cd lz-nodemailer
npm install
```

2. Создаём .env файл и пишем в него нужные параметры:
```
# Настройки почты 

MAIL_USER="ваша_почта@почта"
MAIL_PASS="ваш_пароль"
MAIL_SERVICE="ваш_сервис"
MAIL_HOST=порт_почты
```