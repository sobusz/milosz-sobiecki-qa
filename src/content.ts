export type Locale = 'en' | 'pl'

export const LINKS = {
  email: 'sobiecki.mj@gmail.com',
  linkedin: 'https://www.linkedin.com/in/milosz-sobiecki/',
  github: 'https://github.com/sobusz/playwright-portfolio',
  cv: `${import.meta.env.BASE_URL}Milosz-Sobiecki-CV.pdf`,
}

export const stack = [
  'TypeScript',
  'AI in QA',
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
]

type Copy = {
  nav: { about: string; stack: string; code: string; project: string; experience: string }
  langLabel: string
  themeLabel: string
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
  projectsTitle: string
  projects: {
    name: string
    body: string
    tags: string[]
    cta: string
    href: string
  }[]
  experienceTitle: string
  roles: {
    company: string
    role: string
    dates: string
    meta: string
    points: string[]
  }[]
}

export const copy: Record<Locale, Copy> = {
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      code: 'Code',
      project: 'Projects',
      experience: 'Experience',
    },
    langLabel: 'Language',
    themeLabel: 'Theme',
    hero: {
      name: 'Miłosz Sobiecki QA Services',
      line: 'E2E automation in TypeScript, with AI in the daily workflow.',
      location: 'Available · Gdańsk / hybrid / remote PL · B2B',
      languages: 'Polish native · English C1 · Italian B1',
      cv: 'Download CV',
      mail: 'Email',
    },
    about: {
      title: 'About',
      body: [
        'QA automation engineer based in Gdańsk. Five years on web, mobile, and backend. My focus is E2E automation; I have also worked on API checks, fintech, and regulated projects.',
        'I write E2E suites in Playwright and Cypress, plus TypeScript checks for REST and async integrations. I also check data in PostgreSQL and run JMeter before release. I work with developers from design through UAT.',
        'Lately I have been focusing on AI in QA: drafting tests, checking prompts and model output, then reviewing before anything goes into the suite. MSc in IT and Econometrics, University of Gdańsk.',
      ],
    },
    stackTitle: 'Stack',
    snippets: {
      title: 'How I test',
      hint: 'Hover to check the assertion.',
    },
    projectsTitle: 'Projects',
    projects: [
      {
        name: 'Playwright portfolio',
        body: 'A TypeScript suite for UI/E2E, API CRUD with Zod, Axe, visual regression, performance smoke, auth storage state, and network mocks. Page Objects, fixtures, faker factories, tagged runs.',
        tags: ['Playwright', 'Zod', 'Axe', 'POM', 'API', 'Visual', 'Mock'],
        cta: 'GitHub',
        href: LINKS.github,
      },
    ],
    experienceTitle: 'Experience',
    roles: [
      {
        company: 'Boldare',
        role: 'QA Engineer',
        dates: 'Jun 2025 — present',
        meta: 'Remote · B2B',
        points: [
          'TypeScript API automation (Mocha, Chai, Supertest) for distributed services.',
          'AMQP, PostgreSQL, reports, and JMeter checks before release.',
          'Cypress/Playwright in CI, UAT support, and AI-assisted test design.',
        ],
      },
      {
        company: 'Bright Inventions',
        role: 'QA Engineer',
        dates: 'Mar 2024 — Jun 2025',
        meta: 'B2B · hybrid · Gdańsk',
        points: [
          'Functional, exploratory and regression QA for web and mobile, including payments.',
          'REST, auth and integrations in Postman; SQL and device logs.',
          'Test plans and support for store and production releases.',
        ],
      },
      {
        company: 'Boldare',
        role: 'QA Engineer',
        dates: 'Aug 2022 — Feb 2024',
        meta: 'Remote',
        points: [
          'Backend testing in a regulated setup: REST, data, and async flows.',
          'TypeScript API checks and Cypress/Playwright regression in CI.',
        ],
      },
      {
        company: 'EPAM Systems',
        role: 'Junior Software Test Automation Engineer',
        dates: 'Jun 2022 — Aug 2022',
        meta: 'Remote',
        points: [
          'Web scenarios from requirements, smoke/regression, and Cypress UI tests.',
        ],
      },
      {
        company: 'SentiOne',
        role: 'Junior Software Tester',
        dates: 'May 2021 — Jun 2022',
        meta: 'Gdańsk',
        points: [
          'Conversational AI products and APIs: intents, edge cases, NLP / LLM output.',
        ],
      },
      {
        company: 'Interactivo',
        role: 'Junior Software Tester',
        dates: 'Jan 2021 — May 2021',
        meta: 'Gdańsk',
        points: [
          'Functional and regression testing, cases and defects in Jira, fix verification.',
        ],
      },
    ],
  },
  pl: {
    nav: {
      about: 'O mnie',
      stack: 'Stack',
      code: 'Kod',
      project: 'Projekty',
      experience: 'Doświadczenie',
    },
    langLabel: 'Język',
    themeLabel: 'Motyw',
    hero: {
      name: 'Miłosz Sobiecki QA Services',
      line: 'Automatyzacja E2E w TypeScript, z AI w codziennej pracy.',
      location: 'Dostępny · Gdańsk / hybryda / remote PL · B2B',
      languages: 'Polski native · English C1 · włoski B1',
      cv: 'Pobierz CV',
      mail: 'E-mail',
    },
    about: {
      title: 'O mnie',
      body: [
        'QA automation engineer z Gdańska. Pięć lat na webie, mobile i backendzie. Skupiam się na automatyzacji E2E; po drodze też testy API, fintech i projekty regulowane.',
        'Piszę suite’y E2E w Playwright i Cypress, a także testy TypeScript na REST i integracje asynchroniczne. Sprawdzam dane w PostgreSQL i odpalam JMeter przed release’em. Pracuję z developerami od designu po UAT.',
        'Ostatnio skupiam się na AI w QA: draft testów, sprawdzanie promptów i outputu modelu, recenzja zanim coś trafi do suite’u. Magister informatyki i ekonometrii, Uniwersytet Gdański.',
      ],
    },
    stackTitle: 'Stack',
    snippets: {
      title: 'Jak testuję',
      hint: 'Najedź, żeby zobaczyć asercję.',
    },
    projectsTitle: 'Projekty',
    projects: [
      {
        name: 'Playwright portfolio',
        body: 'Suite w TypeScript: UI/E2E, CRUD API z Zod, Axe, visual regression, smoke wydajnościowy, auth storage state i mocki sieci. Page Objects, fixtures, fabryki faker, tagi.',
        tags: ['Playwright', 'Zod', 'Axe', 'POM', 'API', 'Visual', 'Mock'],
        cta: 'GitHub',
        href: LINKS.github,
      },
    ],
    experienceTitle: 'Doświadczenie',
    roles: [
      {
        company: 'Boldare',
        role: 'QA Engineer',
        dates: 'cze 2025 — obecnie',
        meta: 'Remote · B2B',
        points: [
          'Automatyzacja API w TypeScript (Mocha, Chai, Supertest) w usługach rozproszonych.',
          'AMQP, PostgreSQL, raporty i sprawdzenia JMeter przed release’em.',
          'Cypress/Playwright w CI, wsparcie UAT i testy z pomocą AI.',
        ],
      },
      {
        company: 'Bright Inventions',
        role: 'QA Engineer',
        dates: 'mar 2024 — cze 2025',
        meta: 'B2B · hybryda · Gdańsk',
        points: [
          'QA funkcyjne, eksploracyjne i regresja web i mobile, w tym płatności.',
          'REST, auth i integracje w Postmanie; SQL i logi z urządzeń.',
          'Plany testów oraz wsparcie wydań do sklepu i na produkcję.',
        ],
      },
      {
        company: 'Boldare',
        role: 'QA Engineer',
        dates: 'sie 2022 — lut 2024',
        meta: 'Remote',
        points: [
          'Testy backendu w środowisku regulowanym: REST, dane, przepływy async.',
          'Testy API w TypeScript oraz regresja Cypress/Playwright w CI.',
        ],
      },
      {
        company: 'EPAM Systems',
        role: 'Junior Software Test Automation Engineer',
        dates: 'cze 2022 — sie 2022',
        meta: 'Remote',
        points: [
          'Scenariusze web z wymagań, smoke/regresja i testy UI w Cypress.',
        ],
      },
      {
        company: 'SentiOne',
        role: 'Junior Software Tester',
        dates: 'maj 2021 — cze 2022',
        meta: 'Gdańsk',
        points: [
          'Produkty conversational AI i API: intenty, brzegi, output NLP / LLM.',
        ],
      },
      {
        company: 'Interactivo',
        role: 'Junior Software Tester',
        dates: 'sty 2021 — maj 2021',
        meta: 'Gdańsk',
        points: [
          'Testy funkcyjne i regresja, przypadki i defekty w Jira, weryfikacja poprawek.',
        ],
      },
    ],
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
      en: 'Accessibility is a gate, not a screenshot in Confluence: Axe in CI, violations on the report.',
      pl: 'A11y to bramka, nie screenshot w Confluence: Axe w CI, naruszenia na raporcie.',
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
      en: 'Visual diffs with a fixed viewport and a pixel budget — catch UI drift without a flake farm.',
      pl: 'Różnice wizualne na stałym viewportcie i budżecie pikseli — dryf UI bez farmy flake’ów.',
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
      en: 'API responses have to match a contract, not just HTTP 200 — including business invariants.',
      pl: 'Odpowiedź API musi zgadzać się z kontraktem, nie tylko z HTTP 200 — w tym z invariantami biznesowymi.',
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
      en: 'Factories, not copy-pasted JSON: random where it should vary, fixed where the case depends on it.',
      pl: 'Fabryki zamiast wklejonego JSON-a: losowość tam, gdzie ma się zmieniać, stałe pole tam, gdzie case tego wymaga.',
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
      en: 'When an API test fails, the report already has the request and the parsed body.',
      pl: 'Jak padnie test API, raport już ma request i sparsowane body.',
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
      en: 'A cheap timing check in the pipeline so a slow API does not wait for a dedicated load run.',
      pl: 'Tani pomiar w pipeline, żeby wolne API nie czekało na osobny load test.',
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
      en: 'Login once, reuse the session. Authenticated tests should not retype the password.',
      pl: 'Login raz, sesja reuse. Testy z auth nie wpisują hasła drugi raz.',
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
      en: 'Stub the network when the UI must stay deterministic. This demo injects a known payload so the assertion is about the contract, not the backend.',
      pl: 'Stub sieci, gdy UI ma zostać deterministyczne. Demo wstrzykuje znany payload — asercja jest o kontrakcie, nie o backendzie.',
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
    title: { en: 'How I work with AI', pl: 'Tak pracuję z AI' },
    body: {
      en: 'AI drafts, then I review: locale, behaviour, and whether the assertion still holds.',
      pl: 'AI robi draft, potem recenzja: locale, zachowanie i to, czy asercja nadal ma sens.',
    },
    note: {
      en: 'First pass from the model, then a review.',
      pl: 'Pierwszy pass z modelu, potem recenzja.',
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
