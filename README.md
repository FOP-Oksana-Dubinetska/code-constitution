![Гербовый логотип со скворцом](./Starling.png)

# Code Constitution

<details open>
<summary>English</summary>

English is the repository’s default language. The complete Ukrainian and
Russian descriptions follow in collapsible sections.

> **Language status.** The Russian corpus is the normative source of the first
> revision. The complete English and Ukrainian translations are
> machine-assisted informative texts that have passed structural parity checks
> and substantive human review by Oksana Dubinetska on `2026-07-30`. They
> create no independent normative effect; if meanings diverge, the Russian text
> governs.

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
- **Other locales:** [Ukrainian informative corpus](locales/uk/) ·
  [Russian normative corpus](locales/ru/) ·
  [locale registry](locales/locales.json)
- **Governance:** [Development Regulation — canonical English act](governance/legislation/DEVELOPMENT.md)
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
bootstrap-pending coverage for all 41 development rules.

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

</details>

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

</details>
