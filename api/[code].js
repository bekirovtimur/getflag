import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  const { code } = req.query;
  
  if (!code || typeof code !== 'string' || code.length !== 2) {
    return res.status(404).send('❔');
  }
  
  // Приводим к верхнему регистру
  const upperCode = code.toUpperCase();
  
  try {
    // Путь к файлу флага
    const flagPath = join(process.cwd(), upperCode);
    
    // Проверяем существование файла
    if (!existsSync(flagPath)) {
      return res.status(404).send('❔');
    }
    
    // Читаем содержимое файла
    const flag = readFileSync(flagPath, 'utf8').trim();
    
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