# Otse.design — custom code

Vanilla JS/CSS для Webflow-сайту otse.design. Деплой автоматичний через GitHub → Netlify.

## Файли

- `custom.js` — підключається в Webflow через `<script src="https://otse-design.app/custom.js" defer></script>`
- `custom.css` — підключається через `<link rel="stylesheet" href="https://otse-design.app/custom.css">`

## Розробка

Файли статичні, білд-степ не потрібен. Редагуй `custom.js` / `custom.css` напряму.

### Тестування в реальному часі (без push/деплою)

```bash
netlify dev
```

Видасть публічний HTTPS-лінк (`https://xxxx.netlify.live` або схожий). Тимчасово підстав його у Webflow Custom Code замість продакшн-лінка — зміни в локальних файлах відображаються на опублікованому Webflow-сайті одразу після збереження. Коли тестування завершено — поверни продакшн-лінк (`otse-design.app` / `*.netlify.app`) у Webflow.

## Деплой

Push у `main` → Netlify автоматично деплоїть у production. Cache-Control виставлено на 60с (`netlify.toml`), тож зміни на опублікованому Webflow-сайті з'являються протягом ~1 хв після деплою.

Для перегляду перед мержем у `main` можна також використовувати Netlify Deploy Previews (автоматичні для кожного PR).
