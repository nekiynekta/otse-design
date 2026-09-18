# Otse.design — custom code

Vanilla JS/CSS для Webflow-сайту otse.design. Деплой автоматичний через GitHub → Vercel.

## Файли

- `custom.js` — підключається в Webflow через `<script src="https://otse-design.app/custom.js" defer></script>`
- `custom.css` — підключається через `<link rel="stylesheet" href="https://otse-design.app/custom.css">`

## Розробка

Файли статичні, білд-степ не потрібен. Редагуй `custom.js` / `custom.css` напряму.

## Деплой

Push у `main` → Vercel автоматично деплоїть у production. Cache-Control виставлено на 60с, тож зміни на опублікованому Webflow-сайті з'являються протягом ~1 хв після деплою.

Для тестування перед мержем у `main` використовуй Vercel Preview Deployments: тимчасово підстав preview-URL у Webflow Custom Code, перевір, потім поверни продакшн-URL.
