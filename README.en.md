# 🌍 Country Flags API

[Русский](README.md) | **English**

## 📖 Description

A simple and lightweight API that returns country flag emojis by country codes. Perfect for automation scripts, console applications, and any project that needs quick access to country flags.

## 🚀 Features

- **Simple**: Just make a GET request to get a flag emoji
- **Fast**: JSON-based storage for quick lookups
- **Complete**: Supports all 250+ country codes (ISO 3166-1 alpha-2)
- **No dependencies**: Minimal serverless API
- **Free**: Open source and free to use

## 📋 Usage

### Basic Usage
```bash
curl -s https://getflag.vercel.app/US
# Returns: 🇺🇸

curl -s https://getflag.vercel.app/RU
# Returns: 🇷🇺

curl -s https://getflag.vercel.app/FI
# Returns: 🇫🇮
```

### Bash Scripts
```bash
#!/bin/bash
# Get flag for a country
country_code="DE"
flag=$(curl -s https://getflag.vercel.app/$country_code)
echo "Flag for $country_code: $flag"

# Use in variables
FINLAND=$(curl -s https://getflag.vercel.app/FI)
echo "Finland flag: $FINLAND"
```

### Python
```python
import requests

def get_country_flag(country_code):
    response = requests.get(f'https://getflag.vercel.app/{country_code}')
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

### PHP
```php
<?php
function getCountryFlag($countryCode) {
    return file_get_contents("https://getflag.vercel.app/$countryCode");
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

### JavaScript/Node.js
```javascript
// Using fetch (Node.js 18+ or browser)
async function getCountryFlag(countryCode) {
    const response = await fetch(`https://getflag.vercel.app/${countryCode}`);
    return await response.text();
}

// Usage
getCountryFlag('GB').then(flag => {
    console.log(`UK flag: ${flag}`);  // UK flag: 🇬🇧
});

// Using axios
const axios = require('axios');

async function getFlag(countryCode) {
    const response = await axios.get(`https://getflag.vercel.app/${countryCode}`);
    return response.data;
}
```

### cURL in automation
```bash
# Check server status with flags
servers=("US" "EU" "AS")
for region in "${servers[@]}"; do
    flag=$(curl -s https://getflag.vercel.app/$region)
    echo "Server $region $flag: $(ping -c1 $region.example.com | grep 'time=')"
done
```

## 🗺️ Supported Country Codes

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

## 🛠️ Installation & Deployment

### Local Development
```bash
# Clone the repository
git clone https://github.com/bekirovtimur/getflag.git
cd getflag

# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Test
curl -s http://localhost:3000/US
```

### Deployment to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔧 Technical Details

- **Storage**: All flags stored in a single JSON file (`flags.json`)
- **API**: Serverless function reads from JSON and returns flag by country code
- **Content-Type**: `text/plain; charset=utf-8`
- **CORS**: Enabled for all origins
- **Caching**: 24-hour cache for optimal performance
- **Total Countries**: 250+ country codes supported
- **No Database**: JSON-based storage for simplicity and speed

## ❤️ Support the Project

If this script and project helped you, and you'd like to support me or say thank you — you can use the ЮMoney link:

[💰 Support via ЮMoney](https://yoomoney.ru/to/410013756545159)

Any support is greatly appreciated and motivates me to keep developing the project! 🙏

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
