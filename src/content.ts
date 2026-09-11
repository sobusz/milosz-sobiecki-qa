export type Locale = 'en' | 'pl'

export const LINKS = {
  email: 'sobiecki.mj@gmail.com',
  linkedin: 'https://www.linkedin.com/in/milosz-sobiecki/',
  github: 'https://github.com/sobusz/playwright-portfolio',
  cv: `${import.meta.env.BASE_URL}Milosz-Sobiecki-CV.pdf`,
}

export const stack = [
  'TypeScript',
  'Playwright',
  'Cypress',
  'REST API',
  'Node.js',
  'Mocha / Chai',
  'Supertest',
  'Zod',
  'PostgreSQL',
  'AMQP',
  'JMeter',
  'Postman',
  'CI/CD',
  'Git',
  'Axe',
  'AI in QA',
]

type Copy = {
  nav: { about: string; stack: string; code: string; project: string; experience: string }
  langLabel: string
  hero: {
    name: string
    line: string
    location: string
    languages: string
    cv: string
    mail: string
  }
  about: { title: string; body: string[] }
  stackTitle: string
  snippets: { title: string; hint: string }
  project: {
    title: string
    name: string
    body: string
    tags: string[]
    cta: string
  }
  experienceTitle: string
  roles: {
    company: string
    role: string
    dates: string
    meta: string
    summary: string
  }[]
  footer: string
}

export const copy: Record<Locale, Copy> = {
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      code: 'Code',
      project: 'Work',
      experience: 'Experience',
    },
    langLabel: 'Language',
    hero: {
      name: 'Miłosz Sobiecki QA Services',
      line: 'Automation & API · TypeScript',
      location: 'Available · Gdańsk / hybrid / remote PL · B2B',
      languages: 'Polish native · English C1',
      cv: 'Download CV',
      mail: 'Email',
    },
    about: {
      title: 'About',
      body: [
        'QA engineer with five years across web, mobile, and backend systems — including fintech and payment flows.',
        'I build and maintain TypeScript automation for REST APIs, UI regression, async integrations, and SQL-backed data. Comfortable owning backend-heavy scenarios, reading logs, and using AI-assisted tools without skipping review.',
        'This page is a complement to the CV: a few facts, one project, and the kind of code I actually write.',
      ],
    },
    stackTitle: 'Stack',
    snippets: {
      title: 'How I test',
      hint: 'Hover to check the assertion.',
    },
    project: {
      title: 'Featured',
      name: 'Playwright portfolio',
      body: 'A TypeScript suite on public demo apps: UI/E2E, API CRUD with Zod contracts, Axe accessibility, visual regression, performance smoke, auth storage state, and network mocking. Page Objects, fixtures, faker factories, tagged runs.',
      tags: ['Playwright', 'Zod', 'Axe', 'POM', 'API', 'Visual', 'Mock'],
      cta: 'GitHub',
    },
    experienceTitle: 'Experience',
    roles: [
      {
        company: 'Boldare',
        role: 'QA Engineer',
        dates: 'Jun 2025 — present',
        meta: 'Remote · B2B',
        summary:
          'API automation and release readiness for distributed services — including async flows, data checks, and load risk before production.',
      },
      {
        company: 'Bright Inventions',
        role: 'QA Engineer',
        dates: 'Mar 2024 — May 2025',
        meta: 'Freelance · hybrid · Gdańsk',
        summary: 'Owned QA for web and mobile products for international clients, including fintech and payment flows.',
      },
      {
        company: 'Boldare',
        role: 'QA Engineer',
        dates: 'Aug 2022 — Feb 2024',
        meta: 'Remote',
        summary: 'Backend-heavy testing in a regulated setup: REST, data, CI/CD, UAT and production readiness.',
      },
      {
        company: 'EPAM Systems',
        role: 'Junior Software Test Automation Engineer',
        dates: 'Jun 2022 — Aug 2022',
        meta: 'Remote',
        summary: 'Web scenarios from requirements and Cypress UI automation.',
      },
      {
        company: 'SentiOne',
        role: 'Junior Software Tester',
        dates: 'Jun 2021 — May 2022',
        meta: 'Gdańsk',
        summary: 'Conversational AI products and APIs — intents, edge cases, NLP / LLM output.',
      },
      {
        company: 'Interactivo',
        role: 'Junior Software Tester',
        dates: 'Jan 2021 — May 2021',
        meta: 'Gdańsk',
        summary: 'Functional and regression testing, cases in Jira, fix verification.',
      },
    ],
    footer: 'Complement to the CV — not a replacement.',
  },
  pl: {
    nav: {
      about: 'O mnie',
      stack: 'Stack',
      code: 'Kod',
      project: 'Projekt',
      experience: 'Doświadczenie',
    },
    langLabel: 'Język',
    hero: {
      name: 'Miłosz Sobiecki QA Services',
      line: 'Automatyzacja i API · TypeScript',
      location: 'Dostępny · Gdańsk / hybryda / remote PL · B2B',
      languages: 'Polski native · English C1',
      cv: 'Pobierz CV',
      mail: 'Mail',
    },
    about: {
      title: 'O mnie',
      body: [
        'QA engineer z pięcioletnim doświadczeniem w systemach web, mobile i backend — w tym fintech i płatności.',
        'Buduję i utrzymuję automatyzację w TypeScript: REST API, regresja UI, integracje asynchroniczne i weryfikacja danych w SQL. Biorę na siebie scenariusze backendowe, diagnostykę z logów i pracę z AI — z recenzją wygenerowanego kodu.',
        'Ta strona uzupełnia CV: kilka faktów, jeden projekt i kod, który faktycznie piszę.',
      ],
    },
    stackTitle: 'Stack',
    snippets: {
      title: 'Jak testuję',
      hint: 'Najedź, żeby zobaczyć asercję.',
    },
    project: {
      title: 'Projekt',
      name: 'Playwright portfolio',
      body: 'Suite w TypeScript na publicznych aplikacjach demo: UI/E2E, CRUD API z kontraktami Zod, a11y (Axe), visual regression, smoke wydajnościowy, auth storage state i network mocking. Page Objects, fixtures, fabryki faker, tagi.',
      tags: ['Playwright', 'Zod', 'Axe', 'POM', 'API', 'Visual', 'Mock'],
      cta: 'GitHub',
    },
    experienceTitle: 'Doświadczenie',
    roles: [
      {
        company: 'Boldare',
        role: 'QA Engineer',
        dates: 'cze 2025 — obecnie',
        meta: 'Remote · B2B',
        summary:
          'Automatyzacja API i gotowość release’u w usługach rozproszonych — przepływy async, dane, ryzyko obciążenia przed produkcją.',
      },
      {
        company: 'Bright Inventions',
        role: 'QA Engineer',
        dates: 'mar 2024 — maj 2025',
        meta: 'Zlecenie · hybryda · Gdańsk',
        summary: 'QA web i mobile dla klientów zagranicznych, w tym fintech i płatności.',
      },
      {
        company: 'Boldare',
        role: 'QA Engineer',
        dates: 'sie 2022 — lut 2024',
        meta: 'Remote',
        summary: 'Testy backendowe w środowisku regulowanym: REST, dane, CI/CD, UAT i produkcja.',
      },
      {
        company: 'EPAM Systems',
        role: 'Junior Software Test Automation Engineer',
        dates: 'cze 2022 — sie 2022',
        meta: 'Remote',
        summary: 'Scenariusze web z wymagań i automatyzacja UI w Cypress.',
      },
      {
        company: 'SentiOne',
        role: 'Junior Software Tester',
        dates: 'cze 2021 — maj 2022',
        meta: 'Gdańsk',
        summary: 'Produkty conversational AI i API — intenty, edge case’y, NLP / LLM.',
      },
      {
        company: 'Interactivo',
        role: 'Junior Software Tester',
        dates: 'sty 2021 — maj 2021',
        meta: 'Gdańsk',
        summary: 'Testy funkcyjne i regresja, przypadki w Jira, weryfikacja poprawek.',
      },
    ],
    footer: 'Uzupełnienie CV — nie jego kopia.',
  },
}

export type SnippetLine = { text: string; reveal?: boolean }

export const snippets: {
  id: string
  file: string
  title: { en: string; pl: string }
  body: { en: string; pl: string }
  note: { en: string; pl: string }
  lines: SnippetLine[]
}[] = [
  {
    id: 'a11y',
    file: 'tests/utils/a11y.ts',
    title: { en: 'Accessibility', pl: 'Accessibility' },
    body: {
      en: 'Axe scans run in tests/a11y/ and attach violations to the report.',
      pl: 'Skany Axe w tests/a11y/ — naruszenia trafiają jako attachment do raportu.',
    },
    note: {
      en: 'Keep the full JSON in the report; fail only on the impacts that actually block.',
      pl: 'Pełny JSON w raporcie; fail tylko na impactach, które naprawdę blokują.',
    },
    lines: [
      { text: 'const results = await builder.analyze();' },
      { text: 'const filtered = options.impacts' },
      { text: '  ? results.violations.filter((v) => v.impact && options.impacts?.includes(v.impact))' },
      { text: '  : results.violations;' },
      { text: '' },
      { text: "await test.info().attach('a11y-violations.json', {" },
      { text: '  body: JSON.stringify(results.violations, null, 2),' },
      { text: "  contentType: 'application/json'," },
      { text: '});' },
      { text: '' },
      { text: 'const summary = filtered.map((v) => ({', reveal: true },
      { text: '  id: v.id, impact: v.impact, nodes: v.nodes.length,', reveal: true },
      { text: '}));', reveal: true },
      { text: "expect(summary, summary.map((s) => s.id).join(', ') || 'no violations').toEqual([]);", reveal: true },
    ],
  },
  {
    id: 'visual',
    file: 'tests/visual/the-internet.visual.spec.ts',
    title: { en: 'Visual regression', pl: 'Visual regression' },
    body: {
      en: 'tests/visual/ uses toHaveScreenshot with a dedicated visual project (fixed 1280×720 viewport).',
      pl: 'tests/visual/ używa toHaveScreenshot w osobnym projekcie visual (viewport 1280×720).',
    },
    note: {
      en: 'Dedicated project, stable viewport, 2% pixel budget — not a flake magnet.',
      pl: 'Osobny projekt, stały viewport, 2% budżetu pikseli — nie magnes na flake.',
    },
    lines: [
      { text: "test.describe('Visual - The Internet @visual', () => {" },
      { text: "  test('login page matches snapshot', async ({ page, siteUrls }) => {" },
      { text: '    const loginPage = new TheInternetLoginPage(page, siteUrls.theInternet);' },
      { text: '    await loginPage.goto();' },
      { text: '    await loginPage.expectOnLoginPage();' },
      { text: '' },
      { text: "    await expect(page).toHaveScreenshot('the-internet-login.png', {", reveal: true },
      { text: '      maxDiffPixelRatio: 0.02,', reveal: true },
      { text: '    });', reveal: true },
      { text: '  });' },
      { text: '});' },
    ],
  },
  {
    id: 'contract',
    file: 'tests/utils/restful-booker.schemas.ts',
    title: { en: 'API contract', pl: 'Kontrakt API' },
    body: {
      en: 'Zod schemas validate API responses in tests/utils/restful-booker.schemas.ts.',
      pl: 'Schematy Zod walidują odpowiedzi API w tests/utils/restful-booker.schemas.ts.',
    },
    note: {
      en: 'ISO dates plus an invariant: checkout must be after checkin.',
      pl: 'Daty ISO plus invariant: checkout musi być po checkin.',
    },
    lines: [
      { text: 'const isoDate = z.string().regex(/^\\d{4}-\\d{2}-\\d{2}$/, "expected YYYY-MM-DD");' },
      { text: '' },
      { text: 'export const bookingDatesSchema = z' },
      { text: '  .object({ checkin: isoDate, checkout: isoDate })' },
      { text: '  .refine((dates) => dates.checkout > dates.checkin, {', reveal: true },
      { text: "    message: 'checkout must be after checkin',", reveal: true },
      { text: "    path: ['checkout'],", reveal: true },
      { text: '  });' },
      { text: '' },
      { text: 'export const createdBookingSchema = bookingIdSchema.extend({' },
      { text: '  booking: bookingSchema,' },
      { text: '});' },
    ],
  },
  {
    id: 'data',
    file: 'tests/data/factories/booking-factory.ts',
    title: { en: 'Test data', pl: 'Dane testowe' },
    body: {
      en: '@faker-js/faker data factories live in tests/data/factories/.',
      pl: 'Fabryki danych z @faker-js/faker są w tests/data/factories/.',
    },
    note: {
      en: 'Random names, deterministic date math, overrides when the test needs a fixed field.',
      pl: 'Losowe imiona, deterministyczna matematyka dat, overrides gdy test potrzebuje stałego pola.',
    },
    lines: [
      { text: 'export const buildBookingPayload = (' },
      { text: '  overrides: Partial<BookingPayload> = {},' },
      { text: '): BookingPayload => {' },
      { text: '  const startOffset = faker.number.int({ min: 1, max: 20 });' },
      { text: '  const stayLength = faker.number.int({ min: 1, max: 7 });' },
      { text: '  const checkinDate = addDays(new Date(), startOffset);' },
      { text: '  const checkoutDate = addDays(checkinDate, stayLength);', reveal: true },
      { text: '' },
      { text: '  return {' },
      { text: '    firstname: faker.person.firstName(),' },
      { text: '    lastname: faker.person.lastName(),' },
      { text: '    totalprice: faker.number.int({ min: 50, max: 500 }),' },
      { text: '    bookingdates: {' },
      { text: '      checkin: formatDate(checkinDate),' },
      { text: '      checkout: formatDate(checkoutDate),' },
      { text: '    },' },
      { text: '    ...overrides,', reveal: true },
      { text: '  };' },
      { text: '};' },
    ],
  },
  {
    id: 'trace',
    file: 'tests/api/restful-booker.spec.ts',
    title: { en: 'Traceability', pl: 'Traceability' },
    body: {
      en: 'API tests attach payloads and responses to the report for fast debugging.',
      pl: 'Testy API dokładają payloady i response’y do raportu — szybszy debug.',
    },
    note: {
      en: 'If it fails, the report already has the request and the parsed body.',
      pl: 'Jak padnie, raport już ma request i sparsowane body.',
    },
    lines: [
      { text: "await test.step('Create booking', async () => {" },
      { text: "  await test.info().attach('create-payload.json', {" },
      { text: '    body: JSON.stringify(createPayload, null, 2),' },
      { text: "    contentType: 'application/json'," },
      { text: '  });' },
      { text: '' },
      { text: '  const created = await bookingApi.client.createBooking(createPayload);' },
      { text: '  bookingApi.track(created.bookingid);' },
      { text: '' },
      { text: "  await test.info().attach('create-response.json', {", reveal: true },
      { text: '    body: JSON.stringify(created, null, 2),', reveal: true },
      { text: "    contentType: 'application/json',", reveal: true },
      { text: '  });', reveal: true },
      { text: '});' },
    ],
  },
  {
    id: 'perf',
    file: 'tests/perf/perf.smoke.spec.ts',
    title: { en: 'Performance smoke', pl: 'Performance smoke' },
    body: {
      en: 'Lightweight timing checks live in tests/perf/.',
      pl: 'Lekkie pomiary czasu są w tests/perf/.',
    },
    note: {
      en: 'Soft asserts: a slow ping does not hide the rest of the smoke.',
      pl: 'Soft assert: wolny ping nie chowa reszty smoke’a.',
    },
    lines: [
      { text: "test('booking api responds within a reasonable threshold', async ({ request }) => {" },
      { text: '  const apiStart = Date.now();' },
      { text: '  const response = await request.get(`${restfulBookerBaseURL}/ping`);' },
      { text: '  const apiDuration = Date.now() - apiStart;' },
      { text: '' },
      { text: "  await test.info().attach('restful-booker-ping-ms', {" },
      { text: '    body: String(apiDuration),' },
      { text: "    contentType: 'text/plain'," },
      { text: '  });' },
      { text: '' },
      { text: '  expect.soft(response.ok()).toBeTruthy();', reveal: true },
      { text: '  expect.soft(apiDuration).toBeLessThan(2500);', reveal: true },
      { text: '});' },
    ],
  },
  {
    id: 'auth',
    file: 'tests/global-setup.ts',
    title: { en: 'Auth state', pl: 'Auth state' },
    body: {
      en: 'tests/global-setup.ts creates a storage state for authenticated tests in tests/auth/.',
      pl: 'tests/global-setup.ts zapisuje storage state dla testów w tests/auth/.',
    },
    note: {
      en: 'Login once, reuse cookies — the @auth spec never types the password again.',
      pl: 'Login raz, cookies reuse — spec @auth nie wpisuje hasła drugi raz.',
    },
    lines: [
      { text: "const authFile = path.resolve(__dirname, '.auth', 'the-internet.json');" },
      { text: '' },
      { text: 'export default async (): Promise<void> => {' },
      { text: "  const shouldRun = process.env.RUN_AUTH_SETUP === 'true' || !fs.existsSync(authFile);" },
      { text: '  if (!shouldRun) return;' },
      { text: '' },
      { text: '  const browser = await chromium.launch();' },
      { text: '  const page = await browser.newPage();' },
      { text: '  await page.goto("https://the-internet.herokuapp.com/login");' },
      { text: "  await page.getByLabel('Username').fill('tomsmith');" },
      { text: "  await page.getByRole('button', { name: 'Login' }).click();" },
      { text: '' },
      { text: "  await page.locator('#flash').waitFor({ state: 'visible' });" },
      { text: '  await page.context().storageState({ path: authFile });', reveal: true },
      { text: '};' },
    ],
  },
  {
    id: 'mock',
    file: 'tests/ui/automation-exercise/home.network-mock.spec.ts',
    title: { en: 'Network mocking', pl: 'Network mocking' },
    body: {
      en: 'page.route stubs an API and injects the payload into the UI. The demo site does not call this API on its own — it is a deterministic mock demo.',
      pl: 'page.route stubuje API i wstrzykuje payload do UI. Demo samo tego endpointu nie woła — to deterministyczny mock.',
    },
    note: {
      en: 'Stub the wire, then assert the UI is allowed to show only the mocked item.',
      pl: 'Zastubuj sieć, potem asercja: UI pokazuje tylko zmockowany produkt.',
    },
    lines: [
      { text: "await page.route('**/features_items', async (route) => {" },
      { text: '  await route.fulfill({' },
      { text: '    status: 200,' },
      { text: "    contentType: 'application/json'," },
      { text: "    body: JSON.stringify({ products: [{ id: 1, name: 'Mocked Top' }] })," },
      { text: '  });' },
      { text: '});' },
      { text: '' },
      { text: 'await page.evaluate(async () => {' },
      { text: "  const data = await (await fetch('/api/features_items')).json();" },
      { text: "  document.querySelector('.features_items')!.innerHTML = data.products" },
      { text: '    .map((p: { name: string }) => `<h2>${p.name}</h2>`)' },
      { text: "    .join('');" },
      { text: '});' },
      { text: '' },
      { text: "await homePage.expectFeaturedItemVisible('Mocked Top');", reveal: true },
    ],
  },
  {
    id: 'ai',
    file: 'web/src/App.tsx',
    title: { en: 'AI-assisted delivery', pl: 'AI w praktyce' },
    body: {
      en: 'This page is the example: drafted with AI, then reviewed by me — copy, structure, and behaviour. Same loop I use on test design.',
      pl: 'Ta strona jest przykładem: draft z AI, potem moja recenzja — copy, struktura, zachowanie. Ten sam loop co przy projektowaniu testów.',
    },
    note: {
      en: 'AI accelerates the first pass. The locale, content, and UX still have to be owned.',
      pl: 'AI przyspiesza pierwszy pass. Locale, treść i UX i tak trzeba wziąć na siebie.',
    },
    lines: [
      { text: "const STORAGE_KEY = 'ms-locale'" },
      { text: '' },
      { text: 'function readLocale(): Locale {' },
      { text: '  const stored = localStorage.getItem(STORAGE_KEY)' },
      { text: "  if (stored === 'pl' || stored === 'en') return stored" },
      { text: "  return navigator.language.startsWith('pl') ? 'pl' : 'en'" },
      { text: '}' },
      { text: '' },
      { text: 'useEffect(() => {' },
      { text: '  document.documentElement.lang = locale', reveal: true },
      { text: '  localStorage.setItem(STORAGE_KEY, locale)', reveal: true },
      { text: '}, [locale])' },
    ],
  },
]
