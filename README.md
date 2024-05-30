Инструкция по запуску веб-приложения локально


Для корректного запуска разработанного веб-приложения на React необходимо соблюдать ряд шагов, обеспечивающих правильную настройку и функционирование среды разработки. Вот пошаговое руководство, которое поможет вам успешно запустить приложение:

•Проверка среды разработки

Проверка версии Node.js

Перед началом работы убедитесь, что на вашем компьютере установлен Node.js. React-приложения требуют для своей работы Node.js. Вы можете проверить его наличие и версию, введя в терминале или командной строке следующую команду:

	node -v

Если Node.js установлен, вы увидите номер версии. В случае если Node.js не установлен, перейдите на официальный сайт Node.js и скачайте актуальную версию для вашей операционной системы.

Проверка и установка npm

Node.js поставляется с менеджером пакетов npm, который необходим для управления зависимостями проекта. Проверьте его наличие и версию командой:
	npm -v
Если npm установлен, вы увидите номер версии. В противном случае установите или обновите npm, следуя инструкциям на официальном сайте npm.

•Установка зависимостей проекта

Перейдите в каталог вашего проекта с помощью командной строки или терминала и введите следующую команду для установки всех необходимых библиотек и модулей, указанных в файле package.json вашего проекта:
	npm install

Эта команда автоматически загрузит и установит все зависимости, необходимые для работы вашего приложения.

•Запуск приложения

После успешной установки всех зависимостей вы готовы запустить приложение. В вашем package.json уже должен быть определен скрипт для запуска:
"scripts": {
"start": "react-scripts start"
}
Выполните этот скрипт, введя в терминал следующую команду:

	npm start

Команда 	npm start инициирует скрипт react-scripts start, который запускает локальный сервер разработки и открывает ваше приложение в браузере по умолчанию. Обычно приложение будет доступно по адресу http://localhost:3000.
Следуя этим шагам, вы сможете запустить разработанное React-приложение локально на вашем компьютере для дальнейшей разработки и тестирования.
 Инструкция по установке и запуску ИИ

Предварительные требования:

Убедитесь, что на вашей системе установлены ffmpeg и MongoDB.

Установка ffmpeg:
# on Ubuntu or Debian
sudo apt update && sudo apt install ffmpeg

# on Arch Linux
sudo pacman -S ffmpeg

# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg

# on Windows using Scoop (https://scoop.sh/)
scoop install ffmpeg

Установка MongoDb
https://www.mongodb.com/try/download/community

Перейдите в директорию проекта:

cd myproject

Установите зависимости проекта:
npm install

Настройка конфигурации:
	•	Скопируйте файл .env.example и переименуйте его в .env.
	•	Откройте файл .env и укажите актуальные значения параметров:

NUXT_OPENAI_API_KEY=ваш-openai-api-key
NUXT_MONGODB_HOST_NAME=localhost
NUXT_MONGODB_PORT=27017
NUXT_MONGODB_DB_NAME=embeddingvectorsdb

Запустите приложение в режиме разработки:

npm run dev

Ссылка на видео с запуском проэкта на гугл диске:
https://drive.google.com/file/d/139wFqHNqvfToKLEHzAFwIx529OLkYW-J/view?usp=sharing
