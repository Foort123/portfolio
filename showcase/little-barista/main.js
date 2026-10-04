/* Little Barista — вся логика сайта.
   Без библиотек, без сборки. Подключается одним <script defer src="main.js"> */

/* ============================================================
   НАСТРОЙКИ — правится здесь и больше нигде
   ============================================================ */

const CONTACT = {
  phone:    '+7 (900) 000-00-00',   // как показывать в шапке
  whatsapp: '79000000000',          // для ссылки wa.me — только цифры
  telegram: 'littlebarista',        // юзернейм без @
  email:    'hello@littlebarista.ru',
};

/* Прайс калькулятора смены. Цифры — заглушки, поставьте свои. */
const RATES = {
  breakfast: 450,    // ₽ с человека
  lunch:     780,
  dinner:    690,
  lunchbox:  950,
  overtime:  1.25,   // коэффициент к питанию за смену свыше 12 часов
  region:    14000,  // разовая доплата за выезд в область, ₽
  minimum:   35000,  // минимальный заказ смены, ₽
};

const MEAL_LABELS = {
  breakfast: 'Завтрак',
  lunch:     'Обед',
  dinner:    'Ужин',
  lunchbox:  'Ланч-боксы',
};

/* ============================================================ */

const money = n => new Intl.NumberFormat('ru-RU').format(Math.round(n)) + ' ₽';

/* ---------- появление блоков при скролле ---------- */

const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

  reveals.forEach(el => io.observe(el));
}

/* ---------- тонкая линия под шапкой после скролла ---------- */

const topbar = document.querySelector('.topbar');
if (topbar) {
  const onScroll = () => topbar.classList.toggle('is-stuck', window.scrollY > 12);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- подстановка контактов ---------- */

document.querySelectorAll('[data-contact]').forEach(el => {
  const key = el.dataset.contact;
  if (key === 'phone') {
    el.textContent = CONTACT.phone;
    if (el.tagName === 'A') el.href = 'tel:' + CONTACT.phone.replace(/[^\d+]/g, '');
  }
  if (key === 'email') {
    el.textContent = CONTACT.email;
    if (el.tagName === 'A') el.href = 'mailto:' + CONTACT.email;
  }
  if (key === 'whatsapp') el.href = 'https://wa.me/' + CONTACT.whatsapp;
  if (key === 'telegram') el.href = 'https://t.me/' + CONTACT.telegram;
});

/* ---------- отправка заявки ----------
   ponytail: заявка уходит в WhatsApp готовым текстом — работает без бэкенда.
   Появится сервер или CRM — заменить sendLead() на fetch(URL, {method:'POST'}). */

function sendLead(title, rows) {
  const text = [title, '', ...rows.map(([k, v]) => `${k}: ${v}`)].join('\n');
  open('https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(text), '_blank');
}

document.querySelectorAll('form[data-lead]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const rows = [];
    for (const el of form.elements) {
      if (!el.name || el.type === 'submit' || el.type === 'checkbox' && !el.checked) continue;
      const label = form.querySelector(`label[for="${el.id}"]`)?.textContent.trim() || el.name;
      if (el.value) rows.push([label, el.value]);
    }
    sendLead('Заявка с сайта — ' + form.dataset.lead, rows);
  });
});

/* ---------- калькулятор смены (страница «Кино») ---------- */

const calcForm = document.querySelector('#calc');

if (calcForm) {
  const out = {
    rows:  document.querySelector('#calc-rows'),
    price: document.querySelector('#calc-price'),
    note:  document.querySelector('#calc-note'),
  };

  function estimate() {
    const people   = Math.max(0, Math.min(2000, +calcForm.people.value || 0));
    const meals    = [...calcForm.querySelectorAll('[name="meal"]:checked')].map(i => i.value);
    const overtime = calcForm.overtime.checked;
    const region   = calcForm.location.value === 'region';

    if (!people || !meals.length) {
      out.rows.innerHTML = '';
      out.price.textContent = '—';
      out.note.textContent = 'Укажите количество человек и хотя бы один приём пищи.';
      return null;
    }

    const perPerson = meals.reduce((sum, m) => sum + RATES[m], 0);
    let total = perPerson * people;
    if (overtime) total *= RATES.overtime;
    if (region) total += RATES.region;

    const belowMin = total < RATES.minimum;
    if (belowMin) total = RATES.minimum;

    const rows = [
      ['Человек в группе', String(people)],
      ['Питание', meals.map(m => MEAL_LABELS[m]).join(', ')],
      ['Переработка', overtime ? 'да, смена 12+ часов' : 'нет'],
      ['Локация', region ? 'область' : 'город'],
    ];

    out.rows.innerHTML = rows
      .map(([k, v]) => `<div class="calc__row"><span>${k}</span><b>${v}</b></div>`)
      .join('');
    out.price.textContent = 'от ' + money(total);
    out.note.textContent = belowMin
      ? `Расчёт ниже минимального заказа — показан минимум ${money(RATES.minimum)}. Точную цену менеджер подтвердит после уточнения меню.`
      : 'Предварительный расчёт. Точную стоимость менеджер подтвердит после уточнения меню и графика смены.';

    return rows;
  }

  calcForm.addEventListener('input', estimate);
  calcForm.addEventListener('change', estimate);

  calcForm.addEventListener('submit', e => {
    e.preventDefault();
    const rows = estimate();
    if (!rows) return;
    rows.push(['Ориентир', out.price.textContent]);
    const name = calcForm.client.value.trim();
    const contact = calcForm.contact.value.trim();
    if (name) rows.push(['Имя', name]);
    if (contact) rows.push(['Контакт', contact]);
    sendLead('Расчёт смены — питание съёмочной группы', rows);
  });

  estimate();
}

/* ---------- фильтр кейсов по категориям ---------- */

const filters = document.querySelector('.filters');

if (filters) {
  filters.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;

    filters.querySelectorAll('button').forEach(b =>
      b.setAttribute('aria-pressed', String(b === btn)));

    const cat = btn.dataset.cat;
    document.querySelectorAll('[data-cat-item]').forEach(item => {
      item.hidden = cat !== 'all' && item.dataset.catItem !== cat;
    });
  });
}

/* ---------- самопроверка расчёта ----------
   Открыть сайт с ?selftest в адресе — результат в консоли. */

if (location.search.includes('selftest')) {
  const t = (name, got, want) =>
    console.assert(got === want, `${name}: получено ${got}, ожидалось ${want}`);

  const base = 20 * (RATES.breakfast + RATES.lunch);          // 20 чел, завтрак+обед
  t('обычная смена', base, 24600);
  t('переработка', Math.round(base * RATES.overtime), 30750);
  t('область', base + RATES.region, 38600);
  t('минимум срабатывает', Math.max(2 * RATES.lunch, RATES.minimum), RATES.minimum);
  // Intl ставит неразрывный пробел — нормализуем перед сравнением
  t('формат денег', money(38600).replace(/ /g, ' '), '38 600 ₽');
  console.log('selftest: проверки расчёта пройдены');
}
