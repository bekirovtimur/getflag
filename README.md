# 🌍 Country Flags API / API флагов стран

[English](#english) | [Русский](#русский)

---

## English

### 📖 Description

A simple and lightweight API that returns country flag emojis by country codes. Perfect for automation scripts, console applications, and any project that needs quick access to country flags.

### 🚀 Features

- **Simple**: Just make a GET request to get a flag emoji
- **Fast**: Static files served directly
- **Complete**: Supports all 250+ country codes (ISO 3166-1 alpha-2)
- **No dependencies**: Pure static file hosting
- **Free**: Open source and free to use

### 📋 Usage

#### Basic Usage
```bash
curl -s https://getflag.netlify.app/US
# Returns: 🇺🇸

curl -s https://getflag.netlify.app/RU
# Returns: 🇷🇺

curl -s https://getflag.netlify.app/FI
# Returns: 🇫🇮
```

#### Bash Scripts
```bash
#!/bin/bash
# Get flag for a country
country_code="DE"
flag=$(curl -s https://getflag.netlify.app/$country_code)
echo "Flag for $country_code: $flag"

# Use in variables
FINLAND=$(curl -s https://getflag.netlify.app/FI)
echo "Finland flag: $FINLAND"
```

#### Python
```python
import requests

def get_country_flag(country_code):
    response = requests.get(f'https://getflag.netlify.app/{country_code}')
    return response.text

# Usage
flag = get_country_flag('JP')
print(f"Japan flag: {flag}")  # Japan flag: 🇯🇵

# Batch processing
countries = ['US', 'CA', 'MX']
for country in countries:
    flag = get_country_flag(country)
    print(f"{country}: {flag}")
```

#### PHP
```php
<?php
function getCountryFlag($countryCode) {
    return file_get_contents("https://getflag.netlify.app/$countryCode");
}

// Usage
$flag = getCountryFlag('BR');
echo "Brazil flag: $flag\n";  // Brazil flag: 🇧🇷

// Multiple countries
$countries = ['FR', 'IT', 'ES'];
foreach ($countries as $country) {
    $flag = getCountryFlag($country);
    echo "$country: $flag\n";
}
?>
```

#### JavaScript/Node.js
```javascript
// Using fetch (Node.js 18+ or browser)
async function getCountryFlag(countryCode) {
    const response = await fetch(`https://getflag.netlify.app/${countryCode}`);
    return await response.text();
}

// Usage
getCountryFlag('GB').then(flag => {
    console.log(`UK flag: ${flag}`);  // UK flag: 🇬🇧
});

// Using axios
const axios = require('axios');

async function getFlag(countryCode) {
    const response = await axios.get(`https://getflag.netlify.app/${countryCode}`);
    return response.data;
}
```

#### cURL in automation
```bash
# Check server status with flags
servers=("US" "EU" "AS")
for region in "${servers[@]}"; do
    flag=$(curl -s https://getflag.netlify.app/$region)
    echo "Server $region $flag: $(ping -c1 $region.example.com | grep 'time=')"
done
```

### 🗺️ Supported Country Codes

The API supports all ISO 3166-1 alpha-2 country codes. Here are some examples:

| Code | Country | Flag |
|------|---------|------|
| AD | Andorra | 🇦🇩 |
| AE | United Arab Emirates | 🇦🇪 |
| AF | Afghanistan | 🇦🇫 |
| AG | Antigua and Barbuda | 🇦🇬 |
| AI | Anguilla | 🇦🇮 |
| AL | Albania | 🇦🇱 |
| AM | Armenia | 🇦🇲 |
| AO | Angola | 🇦🇴 |
| AQ | Antarctica | 🇦🇶 |
| AR | Argentina | 🇦🇷 |
| AS | American Samoa | 🇦🇸 |
| AT | Austria | 🇦🇹 |
| AU | Australia | 🇦🇺 |
| AW | Aruba | 🇦🇼 |
| AX | Åland Islands | 🇦🇽 |
| AZ | Azerbaijan | 🇦🇿 |
| ... | ... | ... |
| ZA | South Africa | 🇿🇦 |
| ZM | Zambia | 🇿🇲 |
| ZW | Zimbabwe | 🇿🇼 |

[View complete list of country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### 🛠️ Installation & Deployment

#### Local Development
```bash
# Clone the repository
git clone https://github.com/bekirovtimur/getflag.git
cd getflag

# Generate flag files (if not already present)
chmod +x generate_flags.sh
./generate_flags.sh

# Serve locally (Python)
python3 -m http.server 8000

# Or with Node.js
npx http-server

# Test
curl -s http://localhost:8000/US
```

### 🔧 Technical Details

- **File Structure**: Each country code corresponds to a static file containing the flag emoji
- **Content-Type**: `text/plain; charset=utf-8`
- **File Size**: Each flag file is ~4 bytes (UTF-8 encoded emoji)
- **Total Files**: 250+ country flag files
- **No Database**: Pure static file serving for maximum performance

### 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## Русский

### 📖 Описание

Простой и легковесный API, который возвращает эмодзи флагов стран по кодам стран. Идеально подходит для скриптов автоматизации, консольных приложений и любых проектов, которым нужен быстрый доступ к флагам стран.

### 🚀 Возможности

- **Простота**: Просто сделайте GET-запрос, чтобы получить эмодзи флага
- **Скорость**: Статические файлы подаются напрямую
- **Полнота**: Поддерживает все 250+ кодов стран (ISO 3166-1 alpha-2)
- **Без зависимостей**: Чистый статический хостинг файлов
- **Бесплатно**: Открытый исходный код и бесплатное использование

### 📋 Использование

#### Базовое использование
```bash
curl -s https://getflag.netlify.app/US
# Возвращает: 🇺🇸

curl -s https://getflag.netlify.app/RU
# Возвращает: 🇷🇺

curl -s https://getflag.netlify.app/FI
# Возвращает: 🇫🇮
```

#### Bash скрипты
```bash
#!/bin/bash
# Получить флаг для страны
country_code="DE"
flag=$(curl -s https://getflag.netlify.app/$country_code)
echo "Флаг для $country_code: $flag"

# Использование в переменных
FINLAND=$(curl -s https://getflag.netlify.app/FI)
echo "Флаг Финляндии: $FINLAND"
```

#### Python
```python
import requests

def get_country_flag(country_code):
    response = requests.get(f'https://getflag.netlify.app/{country_code}')
    return response.text

# Использование
flag = get_country_flag('JP')
print(f"Флаг Японии: {flag}")  # Флаг Японии: 🇯🇵

# Пакетная обработка
countries = ['US', 'CA', 'MX']
for country in countries:
    flag = get_country_flag(country)
    print(f"{country}: {flag}")
```

#### PHP
```php
<?php
function getCountryFlag($countryCode) {
    return file_get_contents("https://getflag.netlify.app/$countryCode");
}

// Использование
$flag = getCountryFlag('BR');
echo "Флаг Бразилии: $flag\n";  // Флаг Бразилии: 🇧🇷

// Несколько стран
$countries = ['FR', 'IT', 'ES'];
foreach ($countries as $country) {
    $flag = getCountryFlag($country);
    echo "$country: $flag\n";
}
?>
```

#### JavaScript/Node.js
```javascript
// Используя fetch (Node.js 18+ или браузер)
async function getCountryFlag(countryCode) {
    const response = await fetch(`https://getflag.netlify.app/${countryCode}`);
    return await response.text();
}

// Использование
getCountryFlag('GB').then(flag => {
    console.log(`Флаг Великобритании: ${flag}`);  // Флаг Великобритании: 🇬🇧
});

// Используя axios
const axios = require('axios');

async function getFlag(countryCode) {
    const response = await axios.get(`https://getflag.netlify.app/${countryCode}`);
    return response.data;
}
```

#### cURL в автоматизации
```bash
# Проверка статуса серверов с флагами
servers=("US" "EU" "AS")
for region in "${servers[@]}"; do
    flag=$(curl -s https://getflag.netlify.app/$region)
    echo "Сервер $region $flag: $(ping -c1 $region.example.com | grep 'time=')"
done
```

### 🗺️ Поддерживаемые коды стран

API поддерживает все коды стран ISO 3166-1 alpha-2. Вот несколько примеров:

| Код | Страна | Флаг |
|-----|--------|------|
| AD | Андорра | 🇦🇩 |
| AE | ОАЭ | 🇦🇪 |
| AF | Афганистан | 🇦🇫 |
| AG | Антигуа и Барбуда | 🇦🇬 |
| AI | Ангилья | 🇦🇮 |
| AL | Албания | 🇦🇱 |
| AM | Армения | 🇦🇲 |
| AO | Ангола | 🇦🇴 |
| AQ | Антарктида | 🇦🇶 |
| AR | Аргентина | 🇦🇷 |
| AS | Американское Самоа | 🇦🇸 |
| AT | Австрия | 🇦🇹 |
| AU | Австралия | 🇦🇺 |
| AW | Аруба | 🇦🇼 |
| AX | Аландские острова | 🇦🇽 |
| AZ | Азербайджан | 🇦🇿 |
| ... | ... | ... |
| ZA | ЮАР | 🇿🇦 |
| ZM | Замбия | 🇿🇲 |
| ZW | Зимбабве | 🇿🇼 |

[Посмотреть полный список кодов стран](https://ru.wikipedia.org/wiki/ISO_3166-1)

### 🛠️ Установка и развертывание

#### Локальная разработка
```bash
# Клонировать репозиторий
git clone https://github.com/bekirovtimur/getflag.git
cd getflag

# Сгенерировать файлы флагов (если еще не созданы)
chmod +x generate_flags.sh
./generate_flags.sh

# Запустить локально (Python)
python3 -m http.server 8000

# Или с Node.js
npx http-server

# Тестирование
curl -s http://localhost:8000/US
```

### 🔧 Технические детали

- **Структура файлов**: Каждый код страны соответствует статическому файлу, содержащему эмодзи флага
- **Content-Type**: `text/plain; charset=utf-8`
- **Размер файла**: Каждый файл флага ~4 байта (эмодзи в кодировке UTF-8)
- **Общее количество файлов**: 250+ файлов флагов стран
- **Без базы данных**: Чистая подача статических файлов для максимальной производительности

### 📄 Лицензия

Этот проект имеет открытый исходный код и доступен под [лицензией MIT](LICENSE).
