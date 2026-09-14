export type Locale = 'en' | 'pl'

export const LINKS = {
  email: 'sobiecki.mj@gmail.com',
  linkedin: 'https://www.linkedin.com/in/milosz-sobiecki/',
  github: 'https://github.com/sobusz/playwright-portfolio',
  cv: `${import.meta.env.BASE_URL}Milosz-Sobiecki-CV.pdf`,
}

export const stack: { name: string; blurb: { en: string; pl: string } }[] = [
  {
    name: 'TypeScript',
    blurb: {
      en: 'Typed JavaScript. I write E2E and API tests in it so the suite stays readable and refactors safely.',
      pl: 'Typowany JavaScript. Piszę w nim testy E2E i API, żeby suite był czytelny i bezpieczny przy zmianach.',
    },
  },
  {
    name: 'AI in QA',
    blurb: {
      en: 'Models for a first draft of tests and analysis. I still review prompts and output before anything lands in the suite.',
      pl: 'Modele do draftu testów i analizy. Prompt i output recenzuję, zanim coś trafi do suite’u.',
    },
  },
  {
    name: 'Playwright',
    blurb: {
      en: 'Browser automation. My main tool for E2E: page objects, fixtures, and runs in CI.',
      pl: 'Automatyzacja przeglądarki. Główne narzędzie do E2E: page objects, fixtures i odpalanie w CI.',
    },
  },
  {
    name: 'Cypress',
    blurb: {
      en: 'UI test runner I still maintain on projects that already have Cypress regression.',
      pl: 'Runner testów UI. Utrzymuję go tam, gdzie regresja już stoi na Cypressie.',
    },
  },
  {
    name: 'REST API',
    blurb: {
      en: 'HTTP APIs. I check status, body, auth, and that the flow still holds end to end.',
      pl: 'API po HTTP. Sprawdzam status, body, auth i to, czy przepływ trzyma się od początku do końca.',
    },
  },
  {
    name: 'Node.js',
    blurb: {
      en: 'Runtime for the TypeScript checks — API tests, fixtures, and helpers around Playwright.',
      pl: 'Runtime dla testów w TypeScript — API, fixtures i helpery wokół Playwrighta.',
    },
  },
  {
    name: 'Mocha / Chai',
    blurb: {
      en: 'Classic Node test stack. I use it for API automation on distributed services.',
      pl: 'Klasyczny stack testów w Node. Używam do automatyzacji API na usługach rozproszonych.',
    },
  },
  {
    name: 'Supertest',
    blurb: {
      en: 'HTTP assertions from Node. I hit endpoints and check the response without a browser.',
      pl: 'Asercje HTTP z Node. Wołam endpointy i sprawdzam odpowiedź bez przeglądarki.',
    },
  },
  {
    name: 'Zod',
    blurb: {
      en: 'Schemas for API bodies. A 200 is not enough — the payload has to match the contract.',
      pl: 'Schematy na body API. Samo 200 nie wystarczy — payload musi zgadzać się z kontraktem.',
    },
  },
  {
    name: 'PostgreSQL',
    blurb: {
      en: 'SQL database. I verify what the API persisted, not only what it returned.',
      pl: 'Baza SQL. Sprawdzam, co API zapisało, nie tylko to, co zwróciło.',
    },
  },
  {
    name: 'AMQP',
    blurb: {
      en: 'Message queues. I follow async flows: message in, side effects out.',
      pl: 'Kolejki wiadomości. Śledzę przepływy async: message wchodzi, skutki uboczne wychodzą.',
    },
  },
  {
    name: 'JMeter',
    blurb: {
      en: 'Load tests. I run scenarios before release and read times and saturation with the team.',
      pl: 'Testy obciążeniowe. Odpalam scenariusze przed release’em i czytam czasy i saturację z zespołem.',
    },
  },
  {
    name: 'Postman',
    blurb: {
      en: 'Manual API client. I explore endpoints, auth, and reproductions before they become automated checks.',
      pl: 'Ręczny klient API. Eksploruję endpointy, auth i reprodukcje, zanim wejdą w automat.',
    },
  },
  {
    name: 'CI/CD',
    blurb: {
      en: 'Pipelines. Tests run on every relevant change, with failure analysis before UAT.',
      pl: 'Pipeline’y. Testy lecą przy zmianie, a pady analizuję zanim dojdziemy do UAT.',
    },
  },
  {
    name: 'Git',
    blurb: {
      en: 'Version control for tests and helpers, same review flow as application code.',
      pl: 'Kontrola wersji testów i helperów, ten sam review co przy kodzie aplikacji.',
    },
  },
  {
    name: 'Axe',
    blurb: {
      en: 'Accessibility scans in Playwright. Critical issues fail the run; the rest goes on the report.',
      pl: 'Skan a11y w Playwright. Critical sypie run, reszta ląduje na raporcie.',
    },
  },
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
    id: 'e2e',
    file: 'tests/pages/the-internet/login-page.ts',
    title: { en: 'E2E page object', pl: 'Page object E2E' },
    body: {
      en: 'Roles and labels, not a pile of CSS selectors. The test reads like a user.',
      pl: 'Role i labele, nie stos selektorów CSS. Test czyta się jak użytkownik.',
    },
    note: {
      en: 'The assertion is on the heading the user actually sees.',
      pl: 'Asercja na nagłówku, który użytkownik naprawdę widzi.',
    },
    lines: [
      { text: 'async login(username: string, password: string): Promise<void> {' },
      { text: "  await this.page.getByLabel('Username').fill(username);" },
      { text: "  await this.page.getByLabel('Password').fill(password);" },
      { text: "  await this.page.getByRole('button', { name: 'Login' }).click();" },
      { text: '}' },
      { text: '' },
      { text: 'async expectOnLoginPage(): Promise<void> {', reveal: true },
      { text: "  await expect(this.page.getByRole('heading', { name: 'Login Page' })).toBeVisible();", reveal: true },
      { text: '}', reveal: true },
    ],
  },
  {
    id: 'flow',
    file: 'tests/ui/automation-exercise/search-and-cart.spec.ts',
    title: { en: 'E2E user flow', pl: 'Przepływ E2E' },
    body: {
      en: 'One path: search, add to cart, open the cart. Pages are composed, not one 200-line spec.',
      pl: 'Jedna ścieżka: szukaj, dodaj do koszyka, otwórz koszyk. Page’e złożone, nie spec na 200 linii.',
    },
    note: {
      en: 'The last line is the outcome: the cart table is there.',
      pl: 'Ostatnia linia to wynik: tabela koszyka jest na miejscu.',
    },
    lines: [
      { text: "test('searches for a product and adds it to the cart', async ({ page, siteUrls }) => {" },
      { text: '  const productsPage = new AutomationExerciseProductsPage(page, siteUrls.automationExercise);' },
      { text: '  const cartPage = new AutomationExerciseCartPage(page);' },
      { text: '' },
      { text: '  await productsPage.goto();' },
      { text: '  await productsPage.dismissOverlays();' },
      { text: "  await productsPage.searchFor('Top');" },
      { text: '  await productsPage.expectSearchedProductsVisible();' },
      { text: '  await productsPage.addFirstProductToCart();' },
      { text: '  await productsPage.openViewCart();' },
      { text: '  await cartPage.expectCartTableVisible();', reveal: true },
      { text: '});' },
    ],
  },
  {
    id: 'a11y',
    file: 'tests/a11y/the-internet.a11y.spec.ts',
    title: { en: 'Accessibility', pl: 'Accessibility' },
    body: {
      en: 'Axe in the suite. Fail on critical issues, keep the rest on the report.',
      pl: 'Axe w suite. Fail na critical, reszta zostaje na raporcie.',
    },
    note: {
      en: 'Critical is a gate. The JSON attachment is for the rest.',
      pl: 'Critical to bramka. Attachment JSON jest do reszty.',
    },
    lines: [
      { text: "test('login page has no critical a11y violations', async ({ page, siteUrls }) => {" },
      { text: '  const loginPage = new TheInternetLoginPage(page, siteUrls.theInternet);' },
      { text: '  await loginPage.goto();' },
      { text: '  await loginPage.expectOnLoginPage();' },
      { text: '' },
      { text: "  await runA11yAudit(page, { impacts: ['critical'] });", reveal: true },
      { text: '});' },
    ],
  },
  {
    id: 'contract',
    file: 'tests/utils/restful-booker.schemas.ts',
    title: { en: 'API contract', pl: 'Kontrakt API' },
    body: {
      en: 'A 200 is not enough. Dates have a shape, and checkout has to be after checkin.',
      pl: 'Samo 200 nie wystarczy. Daty mają kształt, a checkout musi być po checkin.',
    },
    note: {
      en: 'The refine is the business rule, not the HTTP status.',
      pl: 'Refine to reguła biznesowa, nie status HTTP.',
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
    ],
  },
  {
    id: 'data',
    file: 'tests/data/factories/booking-factory.ts',
    title: { en: 'Test data', pl: 'Dane testowe' },
    body: {
      en: 'A factory instead of a copied JSON file. Random names, valid dates, overrides when the case needs a fixed field.',
      pl: 'Fabryka zamiast skopiowanego JSON-a. Losowe imiona, poprawne daty, override gdy case potrzebuje stałego pola.',
    },
    note: {
      en: 'checkout is always after checkin, even when names are random.',
      pl: 'checkout zawsze po checkin, nawet gdy imiona są losowe.',
    },
    lines: [
      { text: 'export const buildBookingPayload = (' },
      { text: '  overrides: Partial<BookingPayload> = {},' },
      { text: '): BookingPayload => {' },
      { text: '  const checkinDate = addDays(new Date(), faker.number.int({ min: 1, max: 20 }));' },
      { text: '  const checkoutDate = addDays(checkinDate, faker.number.int({ min: 1, max: 7 }));', reveal: true },
      { text: '' },
      { text: '  return {' },
      { text: '    firstname: faker.person.firstName(),' },
      { text: '    lastname: faker.person.lastName(),' },
      { text: '    bookingdates: { checkin: formatDate(checkinDate), checkout: formatDate(checkoutDate) },' },
      { text: '    ...overrides,', reveal: true },
      { text: '  };' },
      { text: '};' },
    ],
  },
  {
    id: 'auth',
    file: 'tests/global-setup.ts',
    title: { en: 'Auth state', pl: 'Auth state' },
    body: {
      en: 'Log in once, save storageState. The next spec does not type the password again.',
      pl: 'Login raz, zapis storageState. Kolejny spec nie wpisuje hasła drugi raz.',
    },
    note: {
      en: 'Wait for the flash, then persist cookies.',
      pl: 'Czekaj na flash, potem zapisz cookies.',
    },
    lines: [
      { text: "await page.getByLabel('Username').fill('tomsmith');" },
      { text: "await page.getByLabel('Password').fill('SuperSecretPassword!');" },
      { text: "await page.getByRole('button', { name: 'Login' }).click();" },
      { text: '' },
      { text: "await page.locator('#flash').waitFor({ state: 'visible' });" },
      { text: 'await page.context().storageState({ path: authFile });', reveal: true },
    ],
  },
]
