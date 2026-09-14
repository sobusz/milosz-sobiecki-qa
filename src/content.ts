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
      hint: 'Illustrative examples of how I design tests. Hover to highlight the key checks.',
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
      hint: 'Przykłady pokazujące, jak projektuję testy. Najedź, żeby wyróżnić kluczowe sprawdzenia.',
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
    "id": "e2e",
    "file": "TypeScript · Playwright",
    "title": {
      "en": "Maintainable browser tests",
      "pl": "Testy łatwe w utrzymaniu"
    },
    "body": {
      "en": "I locate controls by their role and label, and keep repeated actions in page objects. This makes scenarios easier to read and update when the interface changes.",
      "pl": "Wyszukuję elementy po roli i etykiecie, a powtarzalne akcje umieszczam w page objects. Dzięki temu scenariusze są czytelne i łatwiejsze do aktualizacji po zmianach interfejsu."
    },
    "note": {
      "en": "The visible heading confirms which screen the test has reached.",
      "pl": "Widoczny nagłówek potwierdza, na którym ekranie znajduje się test."
    },
    "lines": [
      {
        "text": "class LoginPage {"
      },
      {
        "text": "  constructor(private page: Page) {}"
      },
      {
        "text": ""
      },
      {
        "text": "  async login(username: string, password: string) {"
      },
      {
        "text": "    await this.page.getByLabel('Username').fill(username);"
      },
      {
        "text": "    await this.page.getByLabel('Password').fill(password);"
      },
      {
        "text": "    await this.page.getByRole('button', { name: 'Login' }).click();"
      },
      {
        "text": "  }"
      },
      {
        "text": ""
      },
      {
        "text": "  async expectSignedIn() {"
      },
      {
        "text": "    await expect(this.page.getByRole('heading', {",
        "reveal": true
      },
      {
        "text": "      name: 'Your account', exact: true,",
        "reveal": true
      },
      {
        "text": "    })).toBeVisible();",
        "reveal": true
      },
      {
        "text": "  }"
      },
      {
        "text": "}"
      }
    ]
  },
  {
    "id": "flow",
    "file": "TypeScript · Playwright",
    "title": {
      "en": "Checking the user outcome",
      "pl": "Weryfikacja efektu dla użytkownika"
    },
    "body": {
      "en": "I build E2E scenarios around a user goal and verify the resulting data. For a shopping journey, that means checking the selected product and quantity in the cart.",
      "pl": "Buduję scenariusze E2E wokół celu użytkownika i sprawdzam wynik operacji. W ścieżce zakupowej oznacza to weryfikację wybranego produktu i jego ilości w koszyku."
    },
    "note": {
      "en": "Opening the cart is a step; finding the correct item is the result.",
      "pl": "Otwarcie koszyka to krok. Poprawny produkt w koszyku to wynik."
    },
    "lines": [
      {
        "text": "test('keeps the selected product in the cart', async ({ page }) => {"
      },
      {
        "text": "  await page.goto('/products');"
      },
      {
        "text": "  await page.getByRole('searchbox').fill('Cotton shirt');"
      },
      {
        "text": "  await page.getByRole('button', { name: 'Search', exact: true }).click();"
      },
      {
        "text": ""
      },
      {
        "text": "  const product = page.getByRole('article')"
      },
      {
        "text": "    .filter({ hasText: 'Cotton shirt' });"
      },
      {
        "text": "  await product.getByRole('button', { name: 'Add to cart' }).click();"
      },
      {
        "text": "  await page.getByRole('link', { name: 'Cart', exact: true }).click();"
      },
      {
        "text": ""
      },
      {
        "text": "  const item = page.getByRole('row').filter({ hasText: 'Cotton shirt' });"
      },
      {
        "text": "  await expect(item).toHaveCount(1);",
        "reveal": true
      },
      {
        "text": "  await expect(item.getByRole('spinbutton', { name: 'Quantity' }))",
        "reveal": true
      },
      {
        "text": "    .toHaveValue('1');",
        "reveal": true
      },
      {
        "text": "});"
      }
    ]
  },
  {
    "id": "a11y",
    "file": "TypeScript · Playwright · Axe",
    "title": {
      "en": "Accessibility checks",
      "pl": "Sprawdzanie dostępności"
    },
    "body": {
      "en": "I include automated accessibility checks in browser tests and prioritise findings by severity. Reports help the team investigate issues; keyboard and screen reader checks complement automation.",
      "pl": "Włączam automatyczne sprawdzanie dostępności do testów przeglądarkowych i priorytetyzuję problemy według ich wagi. Raport pomaga w analizie, a testy klawiaturą i czytnikiem ekranu uzupełniają automat."
    },
    "note": {
      "en": "This example fails on serious and critical findings and reports all violations.",
      "pl": "Przykład zatrzymuje test przy problemach serious i critical, a raport zawiera wszystkie wykryte naruszenia."
    },
    "lines": [
      {
        "text": "test('checks login accessibility', async ({ page }, testInfo) => {"
      },
      {
        "text": "  await page.goto('/login');"
      },
      {
        "text": "  const results = await new AxeBuilder({ page }).analyze();"
      },
      {
        "text": ""
      },
      {
        "text": "  await testInfo.attach('accessibility.json', {"
      },
      {
        "text": "    body: JSON.stringify(results.violations, null, 2),"
      },
      {
        "text": "    contentType: 'application/json',"
      },
      {
        "text": "  });"
      },
      {
        "text": ""
      },
      {
        "text": "  const blocking = results.violations.filter(({ impact }) =>",
        "reveal": true
      },
      {
        "text": "    impact === 'critical' || impact === 'serious',",
        "reveal": true
      },
      {
        "text": "  );"
      },
      {
        "text": "  expect(blocking).toEqual([]);",
        "reveal": true
      },
      {
        "text": "});"
      }
    ]
  },
  {
    "id": "contract",
    "file": "TypeScript · Zod",
    "title": {
      "en": "Validating data and business rules",
      "pl": "Walidacja danych i reguł biznesowych"
    },
    "body": {
      "en": "I check both the structure of API data and the rules it must satisfy. A booking needs valid calendar dates and a checkout later than check-in.",
      "pl": "Sprawdzam zarówno strukturę danych API, jak i reguły, które muszą spełniać. Rezerwacja wymaga poprawnych dat kalendarzowych i zakończenia pobytu po jego rozpoczęciu."
    },
    "note": {
      "en": "The schema checks dates and their order; parsing applies those checks to the response.",
      "pl": "Schemat sprawdza daty i ich kolejność, a parse stosuje te reguły do odpowiedzi API."
    },
    "lines": [
      {
        "text": "const bookingDatesSchema = z.object({"
      },
      {
        "text": "  checkin: z.iso.date(),"
      },
      {
        "text": "  checkout: z.iso.date(),"
      },
      {
        "text": "}).refine(({ checkin, checkout }) => checkout > checkin, {",
        "reveal": true
      },
      {
        "text": "  message: 'Checkout must be after check-in',",
        "reveal": true
      },
      {
        "text": "  path: ['checkout'],",
        "reveal": true
      },
      {
        "text": "});"
      },
      {
        "text": ""
      },
      {
        "text": "const response = await request.get('/booking/42');"
      },
      {
        "text": "expect(response.ok()).toBeTruthy();"
      },
      {
        "text": "const booking = await response.json();"
      },
      {
        "text": "bookingDatesSchema.parse(booking.bookingdates);",
        "reveal": true
      }
    ]
  },
  {
    "id": "data",
    "file": "TypeScript · Faker",
    "title": {
      "en": "Test data with a clear purpose",
      "pl": "Dane dopasowane do scenariusza"
    },
    "body": {
      "en": "I use factories to create a valid starting point, then change only the fields relevant to the scenario. This keeps test intent visible and makes boundary cases easier to express.",
      "pl": "Używam fabryk danych jako poprawnego punktu wyjścia, a potem zmieniam pola istotne dla scenariusza. Dzięki temu łatwiej odczytać cel testu i przygotować przypadki brzegowe."
    },
    "note": {
      "en": "Fixed dates keep this example predictable; overrides can also create deliberately invalid data.",
      "pl": "Stałe daty zapewniają przewidywalność przykładu. Nadpisanie pól pozwala też celowo utworzyć niepoprawne dane."
    },
    "lines": [
      {
        "text": "const buildBooking = (overrides: Partial<BookingPayload> = {})"
      },
      {
        "text": "  : BookingPayload => ({"
      },
      {
        "text": "    firstname: faker.person.firstName(),"
      },
      {
        "text": "    lastname: faker.person.lastName(),"
      },
      {
        "text": "    totalprice: 120,"
      },
      {
        "text": "    depositpaid: false,"
      },
      {
        "text": "    bookingdates: { checkin: '2030-06-10', checkout: '2030-06-12' },"
      },
      {
        "text": "    ...overrides,"
      },
      {
        "text": "  });"
      },
      {
        "text": ""
      },
      {
        "text": "const unpaid = buildBooking({ depositpaid: false });",
        "reveal": true
      },
      {
        "text": "const invalidDates = buildBooking({",
        "reveal": true
      },
      {
        "text": "  bookingdates: { checkin: '2030-06-12', checkout: '2030-06-10' },",
        "reveal": true
      },
      {
        "text": "});"
      }
    ]
  },
  {
    "id": "auth",
    "file": "TypeScript · Playwright",
    "title": {
      "en": "Reliable test setup",
      "pl": "Przewidywalne przygotowanie testów"
    },
    "body": {
      "en": "I separate login checks from scenarios that only need an authenticated user. Reusing a verified session reduces repeated setup and keeps each test focused on its purpose.",
      "pl": "Oddzielam testy logowania od scenariuszy, które potrzebują zalogowanego użytkownika. Wykorzystanie zweryfikowanej sesji ogranicza powtarzalne przygotowanie i pozwala skupić test na jego celu."
    },
    "note": {
      "en": "Save the session only after confirming successful login. Keep authentication state out of version control.",
      "pl": "Sesję zapisuję po potwierdzeniu udanego logowania. Pliki sesji pozostają poza kontrolą wersji."
    },
    "lines": [
      {
        "text": "setup('authenticate', async ({ page }) => {"
      },
      {
        "text": "  const username = process.env.E2E_USERNAME;"
      },
      {
        "text": "  const password = process.env.E2E_PASSWORD;"
      },
      {
        "text": "  if (!username || !password) throw new Error('Missing test credentials');"
      },
      {
        "text": ""
      },
      {
        "text": "  await page.goto('/login');"
      },
      {
        "text": "  await page.getByLabel('Username').fill(username);"
      },
      {
        "text": "  await page.getByLabel('Password').fill(password);"
      },
      {
        "text": "  await page.getByRole('button', { name: 'Login' }).click();"
      },
      {
        "text": ""
      },
      {
        "text": "  await expect(page.getByRole('heading', {",
        "reveal": true
      },
      {
        "text": "    name: 'Your account', exact: true,",
        "reveal": true
      },
      {
        "text": "  })).toBeVisible();",
        "reveal": true
      },
      {
        "text": "  await page.context().storageState({ path: 'playwright/.auth/user.json' });",
        "reveal": true
      },
      {
        "text": "});"
      }
    ]
  }
]

