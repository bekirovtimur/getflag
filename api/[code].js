import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  // Получаем код из URL пути
  const code = req.query.code || req.url.split('/').pop();
  
  if (!code || typeof code !== 'string' || code.length !== 2) {
    return res.status(404).send('❔');
  }
  
  // Приводим к верхнему регистру
  const upperCode = code.toUpperCase();
  
  try {
    // Путь к JSON файлу с флагами
    const flagsPath = join(process.cwd(), 'flags.json');
    
    // Читаем JSON файл
    const flagsData = readFileSync(flagsPath, 'utf8');
    const flags = JSON.parse(flagsData);
    
    // Получаем флаг по коду
    const flag = flags[upperCode];
    
    if (!flag) {
      return res.status(404).send('❔');
    }
    
    // Устанавливаем заголовки
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    
    return res.status(200).send(flag);
  } catch (error) {
    return res.status(404).send('❔');
  }
}