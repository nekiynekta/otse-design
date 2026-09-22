// Otse.design — custom JS для Webflow

(function () {
  const list = document.querySelector('.services-list');
  if (!list) return;

  function resolveFromTrigger(trigger) {
    const targetId = trigger.getAttribute('data-service-trigger');
    const popup = targetId ? document.getElementById(targetId) : null;
    if (!popup) {
      console.warn('[service-popup] Не знайдено popup для тригера:', trigger);
      return null;
    }
    const holder = popup.closest('.service-popup-holder');
    if (!holder) {
      console.warn('[service-popup] Popup не обгорнутий у .service-popup-holder:', popup);
      return null;
    }
    return { trigger, popup, holder };
  }

  function getActiveContext() {
    const holder = document.querySelector('.service-popup-holder.active');
    if (!holder) return null;
    const popup = holder.querySelector('[data-service-popup]');
    if (!popup) return null;
    const trigger = document.querySelector('[data-service-trigger="' + popup.id + '"]');
    if (!trigger) return null;
    return { trigger, popup, holder };
  }

  function close(context) {
    context.holder.classList.remove('active');
    context.trigger.classList.remove('active');
    context.popup.setAttribute('aria-hidden', 'true');
    context.trigger.setAttribute('aria-expanded', 'false');
  }

  function open(context) {
    context.holder.classList.add('active');
    context.trigger.classList.add('active');
    context.popup.setAttribute('aria-hidden', 'false');
    context.trigger.setAttribute('aria-expanded', 'true');
    context.popup.focus();
  }

  function handleTriggerClick(trigger) {
    const target = resolveFromTrigger(trigger);
    if (!target) return;

    const current = getActiveContext();
    const reopeningSame = current && current.trigger === trigger;

    if (current) close(current);

    if (!reopeningSame) open(target);
  }

  list.addEventListener('click', function (e) {
    const trigger = e.target.closest('[data-service-trigger]');
    if (trigger) handleTriggerClick(trigger);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    const current = getActiveContext();
    if (!current) return;
    close(current);
    current.trigger.focus();
  });

  document.addEventListener('click', function (e) {
    const current = getActiveContext();
    if (!current) return;
    if (current.holder.contains(e.target)) return;
    if (e.target.closest('[data-service-trigger]')) return;
    close(current);
    current.trigger.focus();
  });
})();
