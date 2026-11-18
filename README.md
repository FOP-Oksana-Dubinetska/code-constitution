![Starling coat of arms](./Starling.png)

# Code Constitution

English is the repository’s default language. The complete Russian, Ukrainian and
Belarusian descriptions follow in collapsible sections.

> **Language status.** The Russian corpus is the normative source of the first
> revision. The complete English and Ukrainian translations are
> machine-assisted informative texts that have passed structural parity checks
> and substantive human review by Oksana Dubinetska on `2026-07-30`. They
> create no independent normative effect; if meanings diverge, the Russian text
> governs. The Belarusian edition remains a `candidate` pending separate
> substantive human review.

This repository contains a portable constitution for a software project, a
fillable Founding Profile, derivative Legislation, a Terminology Glossary, and
tools that connect norms to sources, checks, assembly, and release. Together
they institute a verifiable development order: who decides, which sources are
canonical, how rules change, and what evidence confirms a particular revision.

Application begins by creating a project-specific revision. P01–P18 are
completed in the Profile, while registries identify operative acts, canonical
files, roles, licenses, locales, waivers, and verification mechanisms. A
derivative revision that changes the Constitution replaces project identity,
official repository, authority-holders, and the status statement in its own
Profile and README while retaining source attribution and identifying its
changes. An uncompleted Profile remains a template and institutes no authority:
a machine may validate the form, but it still cannot appoint a lawful monarch
from the nearest `package.json`.

The built-in language profile covers TypeScript and JavaScript on Node.js; CSS
has an optional declarative profile without mandatory BEM. Directory, file,
module, type, and function names reveal subject and responsibility. Technical
levels such as `domain` and `adapters` appear within an identified semantic
scope. Stanza style separates local phases of an operation with a blank line
and preserves parallel form for like actions. Porting the rules to another
language replaces the language profile while preserving the common order of
sources, changes, and evidence.

Only files with `source` status and expressly permitted working parts are edited
directly. Files with `generated`, `report`, `fixture`, and `external` status
retain declared provenance. Generated results are reproduced from canonical
sources and do not replace them through manual editing. A normative semantic
block retains a stable ID; a split, merger, replacement, or retirement of a
provision is recorded in provenance.

## Repository Navigation

- **Localized corpus:** [Constitution — English informative translation](locales/en/CONSTITUTION_CODE.md)
  · [Founding Profile](locales/en/governance/PROFILE.md) ·
  [Question Map](locales/en/QUESTION_MAP.md) ·
  [Glossary](locales/en/governance/GLOSSARY.md)
- **Other locales:** [Russian normative corpus](locales/ru/) ·
  [Ukrainian informative corpus](locales/uk/) ·
  [Belarusian candidate corpus](locales/be/) ·
  [locale registry](locales/locales.json)
- **Governance:** [Development Regulation — canonical English act](governance/legislation/DEVELOPMENT.md)
  · [Interface typography — BASE-UI](governance/legislation/INTERFACE.md)
  · [acts registry](governance/acts.json)
- **Evidence:** [provenance](manifest/provenance.json) ·
  [rule coverage](manifest/rule-checks.json) ·
  [technical regulators](manifest/technical-regulators.json) ·
  [editorial reports](reports/editorial/) ·
  [security reports](reports/security/)
- **Implementation:** [schemas](schema/) · [source](src/) · [tests](test/) ·
  [CI workflow](.github/workflows/check.yml)
- **Licensing:** [project licensing map](LICENSE.md) ·
  [pinned common policy](.licensing-policy/)

## Applied in Practice

The methodology is widely used in our own and client projects through locally adopted Constitutions, Profiles and Legislation. Flagship applications include:

- [SPIDER](https://github.com/Zhovten-Games/SPIDER) — constitutional governance within the methodology.
- [The InterDead repository network](https://github.com/Zhovten-Games/InterDeadReferenceLibrary) — connected game, research and engineering repositories.
- [EMBO Site Commander](https://github.com/EMBO-Studio-develop/embo-site-commander) — a client engineering system.
- [IRONCREED SECURITY](https://github.com/IRONCREED/SECURITY) — WordPress plugins operating in production.
- [The Zhovten Games website](https://github.com/Zhovten-Games/zhovten-games.github.io) and [IRONCREED VOX](https://github.com/IRONCREED/VOX) — websites with adopted project rules.

Each project retains its selected revision and local overrides. Universal updates enter through the project's own amendment procedure.

## Verification

Initialize the pinned licensing policy and install the declared toolchain before
running the check contract:

```bash
git submodule update --init --recursive
npm ci
npm run check
```

The current pass checks formatting of supported files, Markdown, ESLint,
typing, schemas and manifests, selected architecture boundaries, 334 stable
provision IDs, parity of 334 questions in every locale, canonical corpus hashes,
the technical-regulator registry, locale structure, and byte-exact unchanged
split and reverse assembly. CI runs checking modes without modifying sources.
`manifest/rule-checks.json` records implemented, partial, and
bootstrap-pending coverage for 41 development rules and seven BASE-UI rules.

A release belongs to one frozen Git commit and receives a certification record,
tag, manifest, and checksums. Engineering evidence uses the full commit SHA
returned by `git rev-parse HEAD`; a tag, attestation, or release manifest binds
that SHA without creating a self-referential commit.

## Updating the Constitution and Legislation

1. Record the intention, change class, affected IDs, authority of the initiator,
   consequences, and transition plan.
2. Change the canonical normative source. A new independent proposition receives
   a new ID; a clarification retains the existing ID; a Legislation change
   remains within conferred competence.
3. Prepare a normative-translation record. State preserved and excluded
   substance, defaults, residual discretion, technical regulators, and the
   means of checking every transition.
4. Update associated questions, Profile, acts, registries, schemas, hashes,
   manifests, locales, checks, and revision histories to the extent actually
   affected.
5. Run `npm ci` and `npm run check`, review the complete diff, and obtain express
   consent from the competent holder.
6. Bind the adopted revision to the exact Git SHA and, for a release, create the
   certification record, tag, manifest, and checksums.

A Legislation change affecting the basic order, a limit of authority, or an
entrenched provision proceeds as a constitutional amendment. An automated
check confirms only the conditions it expresses; substantive adoption and
ratification retain a human addressee.

## External LLM Process

For constrained and traceable execution of LLM tasks, the external
[Prompt-Literate Workflow: Code Constitution integration](https://github.com/IRONCREED/prompt-literate-workflow/tree/main/integrations/code-constitution)
may be used. It pins revisions of both sources, connects the Constitution,
Profile, and Legislation to the plan, contracts, scenarios, and TRACE, and keeps
model output as a candidate artifact until verification and human adoption. The
adapter is an external extension and does not form part of this repository’s
normative corpus.

The repository receives no DOI of its own. The DOI of the separate article by
Sam Starling and Oksana Dubinetska identifies only the associated scholarly
publication. Text is distributed under `CC-BY-SA-4.0`, code under `MIT`; the
common policy is included as the pinned `.licensing-policy/` submodule, and the
root `LICENSE.md` applies it to this repository.

<details>
<summary>Русский</summary>

## Конституция кода

Английский является языком репозитория по умолчанию.

> **Статус языков.** Русский корпус является нормативным источником первой
> редакции. Полные английский и украинский переводы — это подготовленные с
> машинной поддержкой информационные тексты, прошедшие проверку структурного
> соответствия и содержательную проверку, которую `2026-07-30` провела Oksana
> Dubinetska. Они не создают самостоятельного нормативного действия; при
> расхождении значений действует русский текст.

Этот репозиторий содержит переносимую Конституцию программного проекта,
заполняемый Учредительный профиль, производное Законодательство,
Терминологический словарь и инструменты, связывающие нормы с источниками,
проверками, сборкой и выпуском. Вместе они учреждают проверяемый порядок
разработки: кто принимает решения, какие источники являются каноническими, как
изменяются правила и каким доказательством подтверждается конкретная редакция.

Применение начинается с создания собственной проектной редакции. В Профиле
заполняются P01–P18, а в реестрах указываются действующие акты, канонические
файлы, роли, лицензии, локали, исключения и механизмы проверки. Производная
редакция, изменившая текст Конституции, заменяет проектную идентичность,
официальный репозиторий, держателей полномочий и заявление о статусе в
собственных Профиле и README, одновременно сохраняя исходную атрибуцию и
указывая внесённые изменения. Незаполненный Профиль остаётся шаблоном и
полномочий не учреждает: машина способна проверить форму, но по-прежнему не
назначает законного монарха из ближайшего `package.json`.

Встроенный языковой профиль рассчитан на TypeScript и JavaScript в Node.js; CSS
получает необязательный декларативный профиль без обязательного BEM. Имена
каталогов, файлов, модулей, типов и функций раскрывают предмет и
ответственность. Технические уровни вроде `domain` и `adapters` располагаются
внутри названной смысловой области. Строфический стиль разделяет пустой строкой
локальные фазы операции и сохраняет параллельную форму однотипных действий.
Перенос правил на другой язык заменяет языковой профиль и сохраняет общий
порядок источников, изменений и доказательств.

Непосредственно редактируются только файлы со статусом `source` и специально
разрешённые рабочие части. Файлы со статусами `generated`, `report`, `fixture`
и `external` сохраняют объявленное происхождение. Производные результаты
воспроизводятся из канонических источников и не заменяют их ручной правкой.
Нормативный смысловой блок сохраняет устойчивый ID; разделение, слияние, замена
или выведение положения регистрируются в происхождении.

### Навигация по репозиторию

- **Локализованный корпус:** [Конституция — русская нормативная редакция](locales/ru/CONSTITUTION_CODE.md)
  · [Учредительный профиль](locales/ru/governance/PROFILE.md) ·
  [Карта вопросов](locales/ru/QUESTION_MAP.md) ·
  [Словарь](locales/ru/governance/GLOSSARY.md)
- **Другие локали:** [английский информационный корпус](locales/en/) ·
  [украинский информационный корпус](locales/uk/) ·
  [реестр локалей](locales/locales.json)
- **Управление:** [Регламент разработки — канонический английский акт](governance/legislation/DEVELOPMENT.md)
  · [реестр актов](governance/acts.json)
- **Доказательства:** [происхождение](manifest/provenance.json) ·
  [покрытие правил](manifest/rule-checks.json) ·
  [технические регуляторы](manifest/technical-regulators.json) ·
  [редакционные отчёты](reports/editorial/) ·
  [отчёты безопасности](reports/security/)
- **Реализация:** [схемы](schema/) · [исходный код](src/) ·
  [тесты](test/) · [CI-процесс](.github/workflows/check.yml)
- **Лицензирование:** [проектная лицензионная карта](LICENSE.md) ·
  [закреплённая общая политика](.licensing-policy/)

### Проверка

Инициализируйте закреплённую лицензионную политику и установите объявленные
зависимости инструментов перед запуском проверочного контракта:

```bash
git submodule update --init --recursive
npm ci
npm run check
```

Текущий проход проверяет форматирование поддерживаемых файлов, Markdown, ESLint,
типизацию, схемы и манифесты, избранные архитектурные границы, 334 устойчивых ID
положений, соответствие 334 вопросов в каждой локали, канонические хеши корпуса,
реестр технических регуляторов, структуру локалей и побайтово точное
неизменённое дробление с обратной сборкой. CI выполняет проверяющие режимы без
изменения источников. `manifest/rule-checks.json` фиксирует реализованное,
частичное и bootstrap-отложенное покрытие всех 41 правила разработки.

Выпуск относится к одному замороженному Git-коммиту и получает удостоверяющую
запись, тег, манифест и контрольные суммы. Инженерные доказательства используют
полный SHA коммита, возвращаемый `git rev-parse HEAD`; тег, аттестация или
манифест выпуска связывает этот SHA без создания самореферентного коммита.

### Обновление Конституции и Законодательства

1. Запишите намерение, класс изменения, затронутые ID, полномочие инициатора,
   последствия и план перехода.
2. Измените канонический нормативный источник. Новый самостоятельный тезис
   получает новый ID; уточнение сохраняет действующий ID; изменение
   Законодательства остаётся внутри предоставленной компетенции.
3. Подготовьте запись нормативного перевода. Укажите сохранённое и исключённое
   содержание, значения по умолчанию, остаточное усмотрение, технические
   регуляторы и способы проверки каждого перехода.
4. Обновите связанные вопросы, Профиль, акты, реестры, схемы, хеши, манифесты,
   локали, проверки и истории редакций в объёме фактического изменения.
5. Выполните `npm ci` и `npm run check`, рассмотрите полный diff и получите
   явное согласие компетентного носителя.
6. Свяжите принятую редакцию с точным Git SHA и, для выпуска, создайте
   удостоверяющую запись, тег, манифест и контрольные суммы.

Изменение Законодательства, затрагивающее основной порядок, предел полномочия
или защищённое положение, проходит как поправка к Конституции. Автоматическая
проверка подтверждает только выраженные ею условия; содержательное принятие и
ратификация сохраняют человеческого адресата.

### Внешний LLM-процесс

Для ограниченного и прослеживаемого исполнения задач LLM может использоваться
внешний
[Prompt-Literate Workflow: интеграция с Конституцией кода](https://github.com/IRONCREED/prompt-literate-workflow/tree/main/integrations/code-constitution).
Он закрепляет редакции обоих источников, связывает Конституцию, Профиль и
Законодательство с планом, контрактами, сценариями и TRACE и сохраняет вывод
модели кандидатным артефактом до проверки и человеческого принятия. Адаптер
остаётся внешним расширением и не входит в нормативный корпус этого
репозитория.

Репозиторий собственного DOI не получает. DOI отдельной статьи Sam Starling и
Oksana Dubinetska обозначает только связанную научную публикацию. Текст
распространяется по `CC-BY-SA-4.0`, код — по `MIT`; общая политика подключается
закреплённым сабмодулем `.licensing-policy/`, а корневой `LICENSE.md` применяет
её к настоящему репозиторию.

## Практическое применение

Методология широко применяется в наших и клиентских проектах через локально принятые Конституции, Профили и Законодательство. Флагманские направления:

- [SPIDER](https://github.com/Zhovten-Games/SPIDER) — конституционная основа внутри методологии.
- [Сеть репозиториев InterDead](https://github.com/Zhovten-Games/InterDeadReferenceLibrary) — связанные игровые, исследовательские и технические репозитории.
- [EMBO Site Commander](https://github.com/EMBO-Studio-develop/embo-site-commander) — клиентская инженерная система.
- [IRONCREED SECURITY](https://github.com/IRONCREED/SECURITY) — плагины WordPress в производственной эксплуатации.
- [Сайт Zhovten Games](https://github.com/Zhovten-Games/zhovten-games.github.io) и [IRONCREED VOX](https://github.com/IRONCREED/VOX) — сайты с принятыми проектными правилами.

Каждый проект сохраняет выбранную редакцию и локальные переопределения. Универсальные обновления включаются через собственную процедуру изменения проекта.

[Типографика интерфейсов — BASE-UI](locales/ru/governance/legislation/INTERFACE.md).

> Белорусская версия имеет статус `candidate` до отдельного содержательного человеческого ревью.

[Белорусский корпус](locales/be/).

</details>

<details>
<summary>Українська</summary>

## Конституція коду

Англійська є мовою репозиторію за замовчуванням.

> **Статус мов.** Російський корпус є нормативним джерелом першої редакції.
> Повні англійський та український переклади — це підготовлені з машинною
> підтримкою інформаційні тексти, які пройшли перевірку структурної
> відповідності та змістову перевірку, яку `2026-07-30` провела Oksana
> Dubinetska. Вони не створюють самостійної нормативної дії; у разі розбіжності
> значень діє російський текст.

Цей репозиторій містить переносну Конституцію програмного проєкту, заповнюваний
Установчий профіль, похідне Законодавство, Термінологічний словник та
інструменти, що пов’язують норми з джерелами, перевірками, збиранням і
випуском. Разом вони встановлюють перевірюваний порядок розробки: хто приймає
рішення, які джерела є канонічними, як змінюються правила та яким доказом
підтверджується конкретна редакція.

Застосування починається зі створення власної проєктної редакції. У Профілі
заповнюються P01–P18, а реєстри називають чинні акти, канонічні файли, ролі,
ліцензії, локалі, винятки та механізми перевірки. Похідна редакція, що змінила
текст Конституції, замінює проєктну ідентичність, офіційний репозиторій, носіїв
повноважень і заяву про статус у власних Профілі та README, водночас зберігаючи
атрибуцію джерела й називаючи зміни. Незаповнений Профіль залишається шаблоном
і не встановлює повноважень: машина може перевірити форму, але все ще не може
призначити законного монарха з найближчого `package.json`.

Вбудований мовний профіль охоплює TypeScript і JavaScript у Node.js; CSS має
необов’язковий декларативний профіль без обов’язкового BEM. Назви каталогів,
файлів, модулів, типів і функцій розкривають предмет і відповідальність.
Технічні рівні на кшталт `domain` та `adapters` розміщуються всередині названої
змістової сфери. Строфічний стиль відділяє порожнім рядком локальні фази
операції та зберігає паралельну форму однотипних дій. Перенесення правил на
іншу мову замінює мовний профіль і зберігає спільний порядок джерел, змін та
доказів.

Безпосередньо редагуються лише файли зі статусом `source` і прямо дозволені
робочі частини. Файли зі статусами `generated`, `report`, `fixture` та
`external` зберігають оголошене походження. Похідні результати відтворюються з
канонічних джерел і не замінюють їх ручною правкою. Нормативний змістовий блок
зберігає стійкий ID; поділ, злиття, заміна або виведення положення фіксуються в
походженні.

### Навігація репозиторієм

- **Локалізований корпус:** [Конституція — український інформаційний переклад](locales/uk/CONSTITUTION_CODE.md)
  · [Установчий профіль](locales/uk/governance/PROFILE.md) ·
  [Карта питань](locales/uk/QUESTION_MAP.md) ·
  [Словник](locales/uk/governance/GLOSSARY.md)
- **Інші локалі:** [англійський інформаційний корпус](locales/en/) ·
  [російський нормативний корпус](locales/ru/) ·
  [реєстр локалей](locales/locales.json)
- **Управління:** [Регламент розробки — канонічний англійський акт](governance/legislation/DEVELOPMENT.md)
  · [реєстр актів](governance/acts.json)
- **Докази:** [походження](manifest/provenance.json) ·
  [покриття правил](manifest/rule-checks.json) ·
  [технічні регулятори](manifest/technical-regulators.json) ·
  [редакційні звіти](reports/editorial/) ·
  [звіти безпеки](reports/security/)
- **Реалізація:** [схеми](schema/) · [вихідний код](src/) ·
  [тести](test/) · [CI-процес](.github/workflows/check.yml)
- **Ліцензування:** [проєктна ліцензійна карта](LICENSE.md) ·
  [закріплена спільна політика](.licensing-policy/)

### Перевірка

Ініціалізуйте закріплену ліцензійну політику та встановіть оголошені залежності
інструментів перед запуском контракту перевірки:

```bash
git submodule update --init --recursive
npm ci
npm run check
```

Поточний прохід перевіряє форматування підтримуваних файлів, Markdown, ESLint,
типізацію, схеми й маніфести, вибрані архітектурні межі, 334 стійкі ID
положень, відповідність 334 питань у кожній локалі, канонічні хеші корпусу,
реєстр технічних регуляторів, структуру локалей і побайтово точний незмінений
поділ зі зворотним збиранням. CI запускає режими перевірки без зміни джерел.
`manifest/rule-checks.json` фіксує реалізоване, часткове й
bootstrap-відкладене покриття всіх 41 правила розробки.

Випуск належить одному замороженому Git-коміту та отримує засвідчувальний
запис, тег, маніфест і контрольні суми. Інженерні докази використовують повний
SHA коміту, який повертає `git rev-parse HEAD`; тег, атестація або маніфест
випуску пов’язує цей SHA без створення самопосилального коміту.

### Оновлення Конституції та Законодавства

1. Запишіть намір, клас зміни, заторкнуті ID, повноваження ініціатора, наслідки
   та план переходу.
2. Змініть канонічне нормативне джерело. Нова самостійна теза отримує новий ID;
   уточнення зберігає чинний ID; зміна Законодавства залишається в межах наданої
   компетенції.
3. Підготуйте запис нормативного переведення. Укажіть збережений і виключений
   зміст, значення за замовчуванням, залишковий розсуд, технічні регулятори та
   способи перевірки кожного переходу.
4. Оновіть пов’язані питання, Профіль, акти, реєстри, схеми, хеші, маніфести,
   локалі, перевірки та історії редакцій в обсязі фактичної зміни.
5. Виконайте `npm ci` і `npm run check`, розгляньте повний diff та отримайте
   явну згоду компетентного носія.
6. Пов’яжіть прийняту редакцію з точним Git SHA і, для випуску, створіть
   засвідчувальний запис, тег, маніфест та контрольні суми.

Зміна Законодавства, що зачіпає основний порядок, межу повноваження або захищене
положення, проходить як поправка до Конституції. Автоматична перевірка
підтверджує лише виражені нею умови; змістове прийняття й ратифікація зберігають
людського адресата.

### Зовнішній LLM-процес

Для обмеженого й простежуваного виконання завдань LLM може використовуватися
зовнішній
[Prompt-Literate Workflow: інтеграція з Конституцією коду](https://github.com/IRONCREED/prompt-literate-workflow/tree/main/integrations/code-constitution).
Вона закріплює редакції обох джерел, пов’язує Конституцію, Профіль і
Законодавство з планом, контрактами, сценаріями та TRACE й зберігає вивід
моделі кандидатним артефактом до перевірки та людського прийняття. Адаптер є
зовнішнім розширенням і не входить до нормативного корпусу цього репозиторію.

Репозиторій не отримує власного DOI. DOI окремої статті Sam Starling та Oksana
Dubinetska позначає лише пов’язану наукову публікацію. Текст поширюється за
`CC-BY-SA-4.0`, код — за `MIT`; спільна політика підключається закріпленим
сабмодулем `.licensing-policy/`, а кореневий `LICENSE.md` застосовує її до цього
репозиторію.

## Практичне застосування

Методологія широко застосовується у власних і клієнтських проєктах через локально прийняті Конституції, Профілі та Законодавство. Флагманські напрями:

- [SPIDER](https://github.com/Zhovten-Games/SPIDER) — конституційна основа всередині методології.
- [Мережа репозиторіїв InterDead](https://github.com/Zhovten-Games/InterDeadReferenceLibrary) — пов'язані ігрові, дослідницькі та технічні репозиторії.
- [EMBO Site Commander](https://github.com/EMBO-Studio-develop/embo-site-commander) — клієнтська інженерна система.
- [IRONCREED SECURITY](https://github.com/IRONCREED/SECURITY) — плагіни WordPress у виробничій експлуатації.
- [Сайт Zhovten Games](https://github.com/Zhovten-Games/zhovten-games.github.io) та [IRONCREED VOX](https://github.com/IRONCREED/VOX) — сайти з прийнятими проєктними правилами.

Кожний проєкт зберігає вибрану редакцію й локальні перевизначення. Універсальні оновлення включаються через власну процедуру зміни проєкту.

[Типографіка інтерфейсів — BASE-UI](locales/uk/governance/legislation/INTERFACE.md).

> Білоруська версія має статус `candidate` до окремого змістовного людського рев’ю.

[Білоруський корпус](locales/be/).

</details>

<details>
<summary>Беларуская</summary>

Англійская — асноўная мова рэпазіторыя. Поўныя рускае, украінскае і беларускае апісанні даступныя ў згортваных раздзелах.

> **Статус моў.** Рускі корпус — нарматыўная крыніца першай рэдакцыі. Англійскі і ўкраінскі інфармацыйныя пераклады падрыхтаваныя з машыннай дапамогай, прайшлі праверкі структурнага парытэту і змястоўнае чалавечае рэв'ю Oksana Dubinetska `2026-07-30`. Беларуская версія мае статус `candidate` да асобнага змястоўнага рэв'ю. Пераклады не ствараюць самастойнага нарматыўнага эфекту; пры разыходжанні дзейнічае рускі тэкст.

Рэпазіторый змяшчае пераносімую канстытуцыю праграмнага праекта, запаўняльны Устаноўчы профіль, вытворнае Заканадаўства, Слоўнік тэрмінаў і інструменты сувязі нормаў з крыніцамі, праверкамі, зборкай і выпускам. Разам яны ўстанаўліваюць правяральны парадак распрацоўкі: хто вырашае, якія крыніцы кананічныя, як змяняюцца правілы і якія сведчанні пацвярджаюць канкрэтную рэдакцыю.

Прымяненне пачынаецца са стварэння праектнай рэдакцыі. У Профілі запаўняюцца P01–P18, а рэестры называюць дзейныя акты, кананічныя файлы, ролі, ліцэнзіі, лакалі, выключэнні і механізмы праверкі. Вытворная рэдакцыя са змененай Канстытуцыяй замяняе ідэнтычнасць праекта, афіцыйны рэпазіторый, носьбітаў паўнамоцтваў і заяву статусу ва ўласных Профілі і README, захоўваючы атрыбуцыю крыніцы і называючы змены. Незапоўнены Профіль застаецца шаблонам і не ўстанаўлівае паўнамоцтваў: машына можа праверыць форму, але прызначыць законнага манарха з бліжэйшага `package.json` усё яшчэ не можа.

Убудаваны моўны профіль ахоплівае TypeScript і JavaScript на Node.js; CSS мае неабавязковы дэкларатыўны профіль без агульнаабавязковага BEM. Назвы каталогаў, файлаў, модуляў, тыпаў і функцый раскрываюць прадмет і адказнасць. Тэхнічныя ўзроўні `domain` і `adapters` размяшчаюцца ў вызначанай сэнсавай вобласці. Страфічны стыль аддзяляе лакальныя фазы аперацыі пустым радком і захоўвае паралельную форму падобных дзеянняў. Перанос на іншую мову замяняе моўны профіль і захоўвае агульны парадак крыніц, зменаў і сведчанняў.

Непасрэдна рэдагуюцца толькі файлы са статусам `source` і яўна дазволеныя працоўныя часткі. Статусы `generated`, `report`, `fixture` і `external` захоўваюць абвешчанае паходжанне. Вытворныя вынікі ўзнаўляюцца з кананічных крыніц і не замяняюць іх ручным рэдагаваннем. Нарматыўны сэнсавы блок захоўвае ўстойлівы ID; падзел, зліццё, замена або вывядзенне палажэння фіксуюцца ў паходжанні.

## Навігацыя па рэпазіторыі

- **Беларускі корпус:** [Канстытуцыя](locales/be/CONSTITUTION_CODE.md) · [Устаноўчы профіль](locales/be/governance/PROFILE.md) · [Карта пытанняў](locales/be/QUESTION_MAP.md) · [Слоўнік](locales/be/governance/GLOSSARY.md).
- **Іншыя лакалі:** [англійскі інфармацыйны корпус](locales/en/) · [рускі нарматыўны корпус](locales/ru/) · [украінскі інфармацыйны корпус](locales/uk/) · [рэестр лакаляў](locales/locales.json).
- **Кіраванне:** [Рэгламент распрацоўкі — кананічны англійскі акт](governance/legislation/DEVELOPMENT.md) · [Тыпаграфіка інтэрфейсу — BASE-UI](locales/be/governance/legislation/INTERFACE.md) · [рэестр актаў](governance/acts.json).
- **Сведчанні:** [паходжанне](manifest/provenance.json) · [пакрыццё правілаў](manifest/rule-checks.json) · [тэхнічныя рэгулятары](manifest/technical-regulators.json) · [рэдакцыйныя справаздачы](reports/editorial/) · [справаздачы бяспекі](reports/security/).
- **Рэалізацыя:** [схемы](schema/) · [зыходны код](src/) · [тэсты](test/) · [CI](.github/workflows/check.yml).
- **Ліцэнзаванне:** [карта праекта](LICENSE.md) · [замацаваная агульная палітыка](.licensing-policy/).

## Практычнае прымяненне

Метадалогія шырока прымяняецца ва ўласных і кліенцкіх праектах праз лакальна прынятыя Канстытуцыі, Профілі і Заканадаўства. Флагманскія вобласці:

- [SPIDER](https://github.com/Zhovten-Games/SPIDER) — канстытуцыйная аснова ўнутры метадалогіі.
- [Сетка InterDead](https://github.com/Zhovten-Games/InterDeadReferenceLibrary) — узаемазвязаныя гульнявыя, даследчыя і тэхнічныя рэпазіторыі.
- [EMBO Site Commander](https://github.com/EMBO-Studio-develop/embo-site-commander) — кліенцкая інжынерная сістэма.
- [IRONCREED SECURITY](https://github.com/IRONCREED/SECURITY) — плагіны WordPress, якія працуюць у вытворчай эксплуатацыі.
- [Сайт Zhovten Games](https://github.com/Zhovten-Games/zhovten-games.github.io) і [IRONCREED VOX](https://github.com/IRONCREED/VOX) — сайты з уласнымі прынятымі праектнымі правіламі.

Кожны праект захоўвае выбраную рэдакцыю і лакальныя перавызначэнні. Універсальнае абнаўленне ўключаецца праз уласную працэдуру змены праекта.

## Праверка

Ініцыялізуйце замацаваную палітыку ліцэнзавання і ўсталюйце абвешчаны інструментарый перад кантрольным запускам:

```bash
git submodule update --init --recursive
npm ci
npm run check
```

Праверка ахоплівае фарматаванне падтрымліваных файлаў, Markdown, ESLint, тыпы, схемы і маніфесты, выбраныя архітэктурныя межы, 334 устойлівыя ID палажэнняў, парытэт 334 пытанняў кожнай лакалі, хэшы кананічнага корпуса, рэестр тэхнічных рэгулятараў, структуру лакаляў і пабайтава дакладныя нязменныя драбненне і зваротную зборку. CI запускае кантрольныя рэжымы без змены крыніц. `manifest/rule-checks.json` фіксуе рэалізаванае, частковае і пачаткова адкладзенае пакрыццё 41 правіла распрацоўкі і сямі правілаў BASE-UI.

Выпуск належыць аднаму замарожанаму Git-каміту і атрымлівае запіс засведчання, тэг, маніфест і кантрольныя сумы. Інжынерныя сведчанні выкарыстоўваюць поўны SHA з `git rev-parse HEAD`; тэг, засведчанне або маніфест выпуску звязвае гэты SHA без самаспасылачнага каміта.

## Абнаўленне Канстытуцыі і Заканадаўства

1. Зафіксуйце намер, клас змены, закранутыя ID, паўнамоцтвы ініцыятара, наступствы і план пераходу.
2. Змяніце кананічную нарматыўную крыніцу. Новы самастойны тэзіс атрымлівае новы ID; удакладненне захоўвае ID; змена Заканадаўства застаецца ў перададзенай кампетэнцыі.
3. Падрыхтуйце запіс нарматыўнага перакладу: захаваны і выключаны змест, стандартныя значэнні, пакінутую свабоду меркавання, тэхнічныя рэгулятары і праверку кожнага пераходу.
4. Абнавіце звязаныя пытанні, Профіль, акты, рэестры, схемы, хэшы, маніфесты, лакалі, праверкі і гісторыі рэдакцый у фактычна закранутай частцы.
5. Выканайце `npm ci` і `npm run check`, агледзьце поўны diff і атрымайце яўную згоду кампетэнтнага носьбіта.
6. Звяжыце прынятую рэдакцыю з дакладным Git SHA; для выпуску стварыце запіс засведчання, тэг, маніфест і кантрольныя сумы.

Змена Заканадаўства, якая закранае асноўны парадак, мяжу паўнамоцтваў або абароненае палажэнне, праходзіць як канстытуцыйная папраўка. Аўтаматызаваная праверка пацвярджае толькі выражаныя ёю ўмовы; змястоўнае прыняцце і ратыфікацыя захоўваюць чалавечага адрасата.

## Знешні працэс LLM

Для абмежаванага і прасочвальнага выканання задач LLM можа выкарыстоўвацца знешняя [інтэграцыя Prompt-Literate Workflow з Канстытуцыяй кода](https://github.com/IRONCREED/prompt-literate-workflow/tree/main/integrations/code-constitution). Яна замацоўвае рэдакцыі абедзвюх крыніц, звязвае Канстытуцыю, Профіль і Заканадаўства з планам, кантрактамі, сцэнарыямі і TRACE, захоўвае вывад мадэлі як кандыдат да праверкі і чалавечага прыняцця. Адаптар — знешняе пашырэнне і не ўваходзіць у нарматыўны корпус рэпазіторыя.

Рэпазіторый не атрымлівае ўласнага DOI. DOI асобнага артыкула Sam Starling і Oksana Dubinetska вызначае толькі звязаную навуковую публікацыю. Тэкст распаўсюджваецца паводле `CC-BY-SA-4.0`, код — паводле `MIT`; агульная палітыка падключаная замацаваным падмодулем `.licensing-policy/`, а каранёвы `LICENSE.md` прымяняе яе да гэтага рэпазіторыя.

</details>
