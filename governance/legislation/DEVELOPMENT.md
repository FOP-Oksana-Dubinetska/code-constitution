# Code Constitution Repository Development Regulation

## Draft Derivative Act

Act identifier: `kcr-act-development-001`.

Revision: `0.5.0-draft`.

Legislation classes: Z01, Z02, Z07, Z08, Z09, Z11.

Constitutional basis: Part I, § 7; I.1–I.3, II.4, V.4–V.5, VI.1, VI.4, and
P04, P06, P16, and P17 of the draft Founding Profile.

The Act establishes the procedure for changing the corpus and future programs
that process it. Its portable core is suitable for other TypeScript
repositories. The local extension regulates stable IDs, the Markdown source,
splitting, reverse assembly, and certification of the Code Constitution.

## 1. Classes of Rules

Each rule belongs to one of two classes:

- `BASE` — a portable rule for development, formatting, linting, typing,
  testing, and dependencies;
- `KCR` — a local rule for the Code Constitution corpus, its sources,
  identifiers, manifests, and assembly.

Another repository may adopt `BASE` as its source profile and define its own
local extension. A copy identifies the source revision, adopted deviations, and
its own identifier namespace.

## 2. Architecture of Sources and Releases

### BASE-S01. Canonical State

One Git commit constitutes the canonical state of the project. Each file in
that state has one of the following statuses:

- `source` — an editable source;
- `generated` — a reproducible generated representation;
- `fixture` — an intentionally fixed example or expected result;
- `external` — externally obtained material with stated provenance;
- `report` — evidence of a check or release.

Status is determined by path and manifest. A change of status proceeds through
the norm-making procedure.

### KCR-S01. Mother Document

`/locales/ru/CONSTITUTION_CODE.md` is the canonical mother document of the
first-revision universal corpus. It contains the normative parts, the Founding
Profile form, the map of Legislation, and express boundaries of the research
commentary.

The Russian Founding Profile and Glossary and this English Development
Regulation are independent canonical sources. Together with the mother document,
they constitute one canonical state at the commit level. The acts registry
states the language and path of every canonical act.

### KCR-S02. Generated Parts

Splitting creates generated representations of the Constitution, Profile form,
Legislation, and research corpus. Each result contains or is accompanied by:

- the source identifier and its hash;
- the version of the splitting rules;
- a list of included stable IDs;
- the order of fragments;
- its own status;
- a reference to the check result, when such a result exists.

Manual work in generated parts is permitted in a declared working mode. Its
result enters the canonical source only through reverse assembly, comparison, a
full check, and ordinary adoption of the change.

### KCR-S03. Locales, Repository Default, and README

The locale registry institutes `ru`, `uk`, and `en` and sets `en` as the
repository default. Each locale receives a machine-readable manifest containing
its BCP 47 code, status, source revision, authors or translators, reviewers, and
the dates of the latest structural and substantive checks.

The complete normative source of the first revision is `ru`. A complete `uk` or
`en` translation that has passed structural parity checks receives `candidate`
status. Candidate status means that the text is complete and machine-checked
but awaits human substantive review; it creates no independent normative
effect. After that review, the locale receives `informative` status. If a
translation diverges, the Russian normative source governs.

The localized corpus consists of the Constitution, Founding Profile, Glossary,
and Question Map under `/locales/{code}/`. Root navigation, programs,
machine-readable data, technical instructions, editorial reports, and acts
maintained in only one language use English unless the Founding Profile or acts
registry expressly establishes another language. An English-only act remains
canonical in the language and path recorded in that registry.

The root README displays the complete English description. Complete Ukrainian
and Russian versions appear below in collapsible sections. The language form of
the README does not change the normative language of the corpus.

A change to a localized canonical source updates all applicable translations in
the same change or marks each affected locale as out of date against the exact
source revision. A substantive review names the reviewer and date. Structural
parity confirms identifiers, headings, links, and required fields; it does not
substitute for review of meaning.

A copy that changes the Constitution must replace the project block in the
README: its own name, official repository, authority-holders, and statement of
official status. It identifies the source revision, preserves mandatory
attribution, and expressly describes the change. Retaining the source project
block after a substantive change constitutes a false claim of identity.

### KCR-S04. Associated Scholarly Publication

The repository is not archived in Zenodo and does not receive a DOI. The
article, research notes, and other listed materials are published as a separate
record authored by Sam Starling and Oksana Dubinetska. Its DOI is recorded as
the identifier of an associated work. Metadata, badges, and citation do not
present that DOI as the identifier of the repository, software release, or
normative corpus.

## 3. Technology Profile

### BASE-T01. Environment and Language

Repository programs are written predominantly in TypeScript and run on Node.js
24 LTS. JavaScript is permitted in configuration, an integration boundary, or
another place where a tool expressly requires it; it is subject to applicable
rules of modularity, naming, error handling, and linting. CSS forms an optional
declarative profile and is checked only when CSS sources are present.

The exact Node.js patch release and exact dependency versions are fixed by the
tool manifest, `package.json`, and `package-lock.json`. npm is the package
manager; its exact version also forms part of the manifest. CI uses the same
supported line and installs dependencies with `npm ci`. No other lockfile forms
part of the canonical state.

Source code uses ECMAScript modules. `tsconfig` enables strict checking and at
least the following options:

- `strict`;
- `noUncheckedIndexedAccess`;
- `exactOptionalPropertyTypes`;
- `noImplicitOverride`;
- `useUnknownInCatchVariables`;
- `noFallthroughCasesInSwitch`;
- `forceConsistentCasingInFileNames`.

The `npm run format`, `npm run lint`, `npm run typecheck`, `npm test`, and
`npm run check` scripts constitute the stable local tooling interface. A
replacement of an internal program preserves the semantics of the script or
proceeds as a change to this Act.

### KCR-T01. Data Representations

Structural operations on Markdown use a `unified`/`remark` syntax tree with GFM
support. Regular expressions are used for local lexical checks and do not
determine the structure of headings, tables, lists, or nested blocks.

The Founding Profile and other editable project data use YAML or JSON according
to an approved schema. Their structure is checked against JSON Schema Draft
2020-12. Assembly and provenance manifests use JSON with deterministic key
ordering during serialization.

### BASE-T02. External-Data Boundary

A file, command-line argument, environment variable, API response, and Git
content are external input. A reading adapter converts the input to `unknown`,
checks the schema, and only then creates an internal typed model. A type
assertion without checking the external value is prohibited.

The filesystem, Git, console, and network services are available to the core
through explicit adapters. Time and hashing are represented by separate ports:
time describes the moment of observation, while a hash describes exact content.
Their joint use in a report does not turn them into one dependency. Pure logic
for classification, ID matching, and construction of an assembly plan does not
access global state.

## 4. Change Procedure

### BASE-C01. Unit of Change

A change has one recognizable purpose. Its description states the intention,
affected scopes, method of checking, and consequences. A defect correction
contains a test reproducing the previous behavior when such a test is
technically possible.

### KCR-C01. Classification of a Change

A change receives one of the following classes:

- `editorial` — spelling, punctuation, link, or form without changing a
  proposition;
- `normative` — a change to the substance of a provision or project rule;
- `structural` — relocation, split, merger, or change in the composition of
  generated parts;
- `tooling` — a change to a program, schema, configuration, or CI;
- `release` — preparation of a certified release;
- `emergency` — a temporary measure under P14.

Classes may be combined. The highest affected level determines the procedure.

### BASE-C02. Change Pass

An ordinary pass includes:

1. recording the intention;
2. making the change in a separate branch;
3. running local automated checks;
4. reviewing the differences;
5. completing mandatory CI checks;
6. obtaining express consent from the competent holder;
7. merging without bypassing protected checks;
8. registering the result and, when necessary, releasing it.

A successful automated check confirms compliance with expressed rules. Human
consent confirms acceptance of the substance and consequences.

### BASE-C03. Normative Translation

A change that translates a recognized intention or norm into a specification,
contract, interface, default value, protocol, configuration, test, or code
contains a normative-translation record. The record identifies:

- the source basis and its exact revision;
- the formalized scope;
- preserved substance;
- narrowed, excluded, or technically inexpressible conditions;
- adopted defaults;
- retained human discretion;
- target artifacts and the owner of the translation;
- the means of checking each transition;
- the method for contesting a discrepancy and changing the decision.

The absence of detected losses, defaults, or residual discretion is recorded as
an express review result with the reviewer identified. Checking implementation
against a specification concerns one transition; conformance of the
specification to the source intention and operative norm is confirmed
separately.

### BASE-C04. Technical Regulator

A mechanism that materially permits, prescribes, impedes, sets by default, or
excludes an action is registered before it acquires binding force or is used as
a verification gate. A technical-regulator record contains:

- a stable ID;
- the normative basis and its exact revision;
- the kind of mechanism and the effect it creates;
- its scope and affected participants;
- its owner;
- configuration paths and operative defaults;
- the means of observing the result;
- the procedure for change, contestation, and disabling.

The Code Constitution repository maintains such records in
`manifest/technical-regulators.json` under a separate schema. An unregistered
mechanism is treated as a de facto practice under P18 and as a control defect;
its material effect remains subject to observation, safe transition, and a
subsequent normative decision.

### KCR-C02. Change to a Provision

An editorial change preserves the stable ID of a proposition. A split, merger,
replacement, and retirement of a provision create provenance records. A new
proposition receives the next free ID in the corresponding namespace. A retired
ID is preserved and is not issued again.

A normative change updates the associated question or contains a reasoned
explanation for retaining its previous wording. A change in the composition of
parts updates the allocation manifest.

## 5. File Formatting

### BASE-F01. General Properties

Text files use UTF-8, LF line endings, and a final newline. Trailing spaces and
tabs are prohibited. Source code uses tabs for indentation levels with a
displayed width of `2`. A format whose grammar requires spaces, including
Markdown and YAML, follows its own express rule.

Program-code filenames use `kebab-case`; TypeScript test filenames end in
`.test.ts`. The remaining naming rules are established by
BASE-N01–BASE-N03 and BASE-CSS-N01.

### BASE-F02. Prettier

Prettier formats TypeScript, JavaScript, CSS, JSON, YAML, and supported
configuration files with the following values:

| Option | Value |
| --- | --- |
| `printWidth` | `100` |
| `tabWidth` | `2` |
| `useTabs` | `true` |
| `semi` | `true` |
| `singleQuote` | `true` |
| `trailingComma` | `all` |
| `arrowParens` | `always` |
| `bracketSpacing` | `true` |
| `endOfLine` | `lf` |

`printWidth` sets the target width for automatic wrapping. It does not
constitute an absolute prohibition for an indivisible URL, hash, path, or other
atomic value. The formatter’s decision is canonical for the supported
syntactic form and does not determine the semantic grouping of operations.

### BASE-F03. Stanza Organization

A code stanza under G031 is a continuous group of adjacent expressions serving
one local sub-intention. A blank line separates different phases of an
operation, such as obtaining data, checking, transformation, an external effect,
and constructing the result. This list describes possible functions of a stanza
and does not require every function to have the same sequence.

Adjacent expressions with one semantic role preserve a parallel syntactic form
and argument order. `return`, throwing an error, and transferring an effect
complete the corresponding semantic phase. A blank line neither separates one
indivisible expression nor creates a decorative stanza without a change of
sub-intention.

Comments state the basis of a decision, a contract condition, a material risk,
or the reason for a waiver. A comment that merely repeats the action of a
readable expression does not constitute a semantic stanza.

### BASE-F04. Boundary of Style Automation

Prettier governs local syntactic form. ESLint and project-specific checks
control only objectively recognizable boundaries and parallel constructs.
Semantic unity of a stanza, sufficiency of a name, and appropriateness of a
comment are confirmed by human review.

A one-line function, declarative table, configuration, external file, or
generated file may have another natural form. An exclusion from an automated
check is recorded under BASE-X01; a common property of a file class is
established by a local rule under BASE-X02.

### KCR-F01. Markdown

Prettier does not format canonical normative and research Markdown. Automated
checks preserve authorial line breaks within a semantic paragraph, while a
blank line separates it from an adjacent block. Headings use ATX form. Nested
list items receive an indentation of two spaces. Code blocks always identify
the language when their content belongs to a defined syntax.

Markdown is checked by `markdownlint-cli2`. The line-length rule `MD013` is
disabled for the corpus because mechanically wrapping prose impairs block
addressability and creates diff noise. Rules prohibiting tabs, trailing spaces,
missing blank lines around headings, improper heading hierarchy, and ambiguous
lists remain mandatory.

A table may contain a line longer than the target width. Its structure and
number of cells are checked separately.

## 6. Program-Code Linting

### BASE-L01. Configuration

ESLint uses flat config. TypeScript is checked with the `strictTypeChecked` and
`stylisticTypeChecked` configurations; the first includes recommended and
strict type-aware rules. JavaScript is checked by all applicable rules of the
same profile. The Prettier-compatibility configuration is loaded last and
removes overlap with formatting rules.

Type-aware linting uses project service. CI warnings are prohibited: every
finding has error status, or the rule is expressly disabled with a normative
basis.

### BASE-L02. Mandatory Constraints

The project applies the following substantive rules:

- an unused variable or import is prohibited;
- an unhandled Promise is prohibited;
- unsafe operations with `any` are prohibited;
- explicit `any` is permitted only at a documented compatibility boundary;
- external input proceeds from `unknown` to a type through a validator;
- an exhaustive `switch` is mandatory for closed unions;
- comparison uses strict semantics;
- an exception has a recognizable type or is converted into a project error;
- a nested ternary operator is prohibited;
- disabling a rule requires a reason and a reference to a task or provision;
- suppression covers the smallest possible line or block.

Automatic ESLint correction is permitted locally for rules that preserve
meaning. CI runs in check mode and does not modify files.

### BASE-L03. Public Export

A public module uses named exports and declares the minimum available surface.
A default export is permitted in configuration files where a tool requires it.
An internal element is not exported merely for test convenience; the check uses
the public boundary or a separate pure module with an independent contract.

### BASE-L04. CSS Profile

When CSS is present, Stylelint checks syntactic correctness, unknown and
duplicate properties, conflicting declarations, and other applicable rules of
the supported standard profile. CI warnings are prohibited.

Prettier governs the syntactic form of CSS. Property-group ordering, container
conventions, and the means of component isolation are established by a local
rule when the project requires a unified policy beyond BASE-CSS-N01.

## 7. Semantic Names

### BASE-N01. Semantic Name

A semantic name under G032 applies to a directory, file, module, type, class,
function, variable, command, and CSS selector and states the subject or
responsibility of the element. It enables a new participant to determine the
purpose and probable place of change without first reading the entire
implementation.

One concept receives one primary term throughout the project. Terms conform to
the Glossary. An abbreviation is used after definition or when unambiguous
within a professional context.

The words `data`, `item`, `object`, `manager`, `service`, `handler`,
`processor`, `helper`, `utils`, `common`, `misc`, and `core` require an
identified subject and specific responsibility. `new`, `old`, `final`, an
ordinal number, and an incidental visual characteristic do not substitute for
meaning. The names `processData`, `FileManager`, `utils/`, `new-module.ts`, and
`wrapper2` are semantically insufficient.

### BASE-N02. Grammar and Consistency of Names

A function and command identify an action and subject, for example
`buildIntegrityManifest` and `compareCanonicalCorpus`. A type and class identify
an entity, state, or responsibility, for example `CanonicalCorpus` and
`ReleaseEvidence`. A Boolean value is phrased as an assertion and begins with
`is`, `has`, `can`, `should`, or another state verb. A test names the behavior
being confirmed or rejected.

Project files and directories use `kebab-case`; TypeScript and JavaScript
variables and functions use `camelCase`; types and classes use `PascalCase`;
top-level configuration constants use `UPPER_SNAKE_CASE`. Names directly
assigned by the Founding Profile, a tool contract, or a stable root convention
retain their declared form: `README.md`, `LICENSE.md`, `LOCALE.json`, and
`CONSTITUTION_CODE.md`. Elements of one kind preserve a common morphology and
ordering of semantic parts.

### BASE-N03. Semantic Hierarchy

Conventional roots `src`, `test`, `docs`, `dist`, and `.github` state a
technical role. The first project-specific level within them identifies a
subject domain, capability, or concrete boundary. The architectural words
`domain`, `application`, `adapters`, `infrastructure`, and `services` appear
within an already identified semantic context.

The requirement applies to every language and reduces the cost of entering the
work. Bash’s constraints merely make the value of an exact name especially
visible. In IRONCREED, the names `ironcreed::integrity_build_manifest`,
`baseline-promote.sh`, `topology-discovery.sh`, and `ioc-scan.sh` reveal the
namespace, action, and subject; TypeScript gains the same benefit from the same
precision.

### BASE-CSS-N01. CSS Names

CSS uses `kebab-case` and identifies a component, role, or state. One consistent
method of forming names for child elements and modifiers is used within one
scope. BEM, CSS Modules, and a local component scheme are permitted; none is
mandatory for every project.

The names `.constitution-index`, `.constitution-index-title`, and
`.constitution-index.is-expanded` form a readable local system. The names
`.box2`, `.left`, `.red-text`, and `.wrapper-final` describe an incidental form
or edit history and are rejected. Automation checks form and local consistency;
sufficiency of meaning is confirmed by review.

## 8. Program Structure

### BASE-A01. Direction of Dependencies

The internal core contains models, rules, and deterministic transformations.
Adapters connect the core to the filesystem, Git, console, time, hashing, and
storage formats. The CLI parses a command, invokes an application scenario, and
converts the result into an exit code.

Proposed structure:

```text
src/
  constitution-corpus/
    domain/
    application/
    adapters/
  release-evidence/
    application/
    adapters/
  constitution-cli/
    composition-root.ts
    main.ts
test/
  constitution-corpus/
  release-evidence/
  fixtures/
```

`domain` does not import `application`, `adapters`, or the CLI. `application`
depends on domain contracts. `adapters` implement external contracts. The
concrete `composition-root.ts` constitutes the composition root under G033 and
connects implementations for the executable entry point; the entire CLI
directory does not acquire an unrestricted right to import any internals. The
CLI contains no corpus rules.

### BASE-A02. Contracts and Module Boundaries

Each module declares a public boundary, directed dependencies, and the owner of
mutable state. Cycles between modules are prohibited. Technical types from the
filesystem, Git, console, clock, hashing, Markdown parser, and schema validator
do not enter the internal model.

An application scenario depends on a port, and an adapter confirms conformance
to that port with a contract test. The composition root knows concrete
implementations but makes no domain decisions.

### KCR-A01. Document Pipeline

The pipeline distinguishes the following operations:

1. reading source bytes;
2. parsing;
3. constructing an index of provisions and ranges;
4. validating the structure;
5. classifying and planning the split;
6. extracting exact source slices;
7. constructing a manifest;
8. reverse assembly;
9. comparison, hashing, and reporting.

The parser recognizes structure. The validator reports violations. The
transformer creates a new representation. The serializer writes the
representation. These duties remain separate and use terms from
`kcr-glossary-001`.

### KCR-A02. Preservation of Source Text

The AST determines structural-block boundaries, while splitting extracts source
byte slices. Full reserialization by the Markdown parser is not used for an
unchanged round trip. This preserves whitespace, tables, HTML anchors, line
breaks, and the authorial form of the text.

Assembly of unchanged parts must return the source byte sequence. Assembly of
changed parts creates a new source candidate and never claims identity with the
previous hash.

## 9. Testing and Evidence

### BASE-Q01. Kinds of Tests

The verification system distinguishes the following kinds of tests:

| Kind | Subject |
| --- | --- |
| Unit | Pure rules, transformations, and boundary values |
| Contract | Conformance of every adapter to an application-level port |
| Integration | Filesystem, temporary Git repository, CLI, exit codes, and complete scenario |
| Architecture | Import directions, absence of cycles, and exclusion of technical types from the core |
| Negative | Predictable failure, absence of a partial result, and preservation of the canonical source |

A test uses a module’s public boundary. Internal call order is fixed only where
sequence forms part of the observable contract.

A fixture receives a stable ID, purpose, provenance, applicable rules, expected
result, and status as a positive or negative example. Bulk updating expected
results does not constitute evidence of correctness: each substantive
difference is considered separately. Random generation uses a reproducible seed
and reports it upon failure.

### KCR-Q01. Corpus Invariants

Mandatory invariants:

- every normative semantic block has one stable ID;
- every ID is unique within its namespace;
- every link resolves in the declared revision;
- the provenance history contains no cycles;
- a retired ID is not reused;
- every provision is classified under one canonical location;
- every generated part contains only the declared IDs;
- an unchanged `assemble(split(source))` pass is identical to the source bytes;
- a change to a part is detected by its hash;
- tables preserve their cell count and headings;
- every localized Question Map resolves to existing provisions in the same
  locale;
- the Constitution, Founding Profile, Glossary, and Question Map preserve
  structural parity among declared locales;
- assembly is deterministic in different working directories.

### BASE-Q02. Rule-to-Check Map

Every normative invariant is linked to at least one automated check or expressly
assigned human review. The conformance registry contains the rule ID, scope,
means of checking, positive and negative fixtures, and required evidence.
Coverage percentage retains a diagnostic role; obligation is established by
the `rule → check` map.

A change to a rule updates the map and applicable checks in the same pass. A
rule without an executable automated form receives a concrete subject of human
review, not an unaddressed `manual` label.

### BASE-Q03. Full Check

`npm run check` is the single non-mutating and deterministic command. It runs
without network access, writes temporary results outside canonical sources, and
succeeds only after all applicable checks have run. Independent stages may run
in parallel while preserving the same result and diagnostics.

The full pass includes:

1. formatting of TypeScript, JavaScript, CSS, and configuration files;
2. Markdown linting;
3. ESLint for TypeScript and JavaScript;
4. TypeScript type checking;
5. Stylelint when CSS is present;
6. unit, contract, integration, architecture, and negative tests;
7. schemas, registries, and manifests;
8. local KCR invariants, including localization parity;
9. licensing declarations and the exact SHA of `.licensing-policy/`;
10. cleanliness of generated results and absence of changes created by the
    check itself.

Failure of an earlier check terminates the pass with a nonzero code. The report
identifies the rule, file, location, constitutional or legislative basis, and
proposed safe action.

### BASE-Q04. Certification of a Check

The verification procedure distinguishes three objects:

- a test or check — a reproducible rule;
- a pass result — evidence that the rule was applied to an exact state;
- a release report — durably preserved evidence of an adopted candidate.

The final report of a successful pass contains the Git SHA, lockfile hash,
Node.js and npm versions, tool manifest, applicable revision of this Act, stage
results, active waivers, and hashes of checked generated results. Time,
operating system, and execution environment are stored in the report as
observation information and are not included in deterministic artifacts. A
change to the candidate terminates the effect of the check result.

Diagnostics state the ID of the violated rule, file, location, and safe action
when known. The acts registry determines the rule’s link to the Constitution; a
single linter message does not reproduce the complete theoretical commentary.

## 10. Dependencies and Updates

### BASE-D01. Adoption of a Dependency

For every direct dependency, its function, scope of use, `runtime` or
`development` status, source, license, supported line, reason for selection, and
material risks are recorded. A dependency with an executable installation
script, native code, or access to an external resource receives a separate
assessment.

A dependency is adopted when it has a defined function, compatible licensing
order, supported release line, and proven advantage over a small local
implementation. Direct dependencies are listed expressly.

A dependency update passes tests and a review of behavioral changes. An update
to the Markdown parser, serializer, schema validator, formatter, linter,
TypeScript, Node.js, or a ruleset receives a separate decision record
regardless of version class because it may change normative evidence and
representations. The normative ruleset is the one resolved by the exact
lockfile version.

### BASE-D02. Reproducibility

`package.json` declares supported ranges, while `package-lock.json` establishes
the exact resolved tree and integrity control. A lockfile change contains only
the consequences of the declared update. CI installs dependencies without
floating version resolution.

The tool manifest records Node.js, npm, and versions of instruments that affect
bytes or a check result. A release includes a generated list of direct and
transitive dependencies with exact versions, licenses, and integrity values.
The network is not used during splitting, assembly, and local validation.

### BASE-D03. Dependency Audit

Current vulnerability information is checked by a separate
`npm run audit:dependencies` script because the external advisory database
changes over time. The script runs when the dependency tree changes, on a
schedule, and before release. The report identifies the source and time at which
data was obtained.

A decision considers reachability of the vulnerable path, the role of the
dependency, and consequences for the project. An internal waiver neither
creates absent license permission nor cancels a mandatory external order.

## 11. Waivers and Local Rules

### BASE-X01. Temporary Waiver

A waiver under G035 temporarily permits a limited departure and contains:

- its own stable ID;
- the exact address of the rule;
- the minimum scope of files or operations;
- the basis and risk assessment;
- a compensating check;
- the owner and approving subject;
- the start, expiry, and condition of early termination;
- evidence;
- status: `proposed`, `active`, `expired`, `revoked`, or `replaced`.

CI permits suppression only by reference to an operative record, displays the
result as `waived` rather than ordinary `passed`, and rejects an expired waiver.
An extension creates a successor record. An indefinite decision changes the
corresponding norm through the ordinary procedure. A configuration comment
without a record of its basis does not create a waiver.

A waiver does not affect entrenched provisions, integrity of the canonical
source, human attribution of authority, or requirements of a mandatory external
order.

### BASE-X02. Local Rule

A new local rule under G034 arises from a recurring defect, an adopted
architectural decision, a technology constraint, or a requirement of the
external order. The rule record contains:

- a stable ID;
- the source of intention;
- its scope;
- required behavior;
- an automated or human means of checking;
- examples of conformance and violation;
- the change procedure;
- its relation to the portable core.

A local rule specifies the portable core for a project in advance. A waiver
serves a temporary departure. An emergency measure operates under P14. This
order permits `BASE` to be transferred between projects while preserving rules
for a CSS container, module boundary, or concrete manifest format in an express
extension.

## 12. Revision History

| Revision | Date | Change |
| --- | --- | --- |
| `0.1.0-draft` | 2026-07-25 | Initial draft of the portable standard and local KCR extension |
| `0.2.0-draft` | 2026-07-27 | Instituted locales, README rules, and the boundary of a separate scholarly publication |
| `0.3.0-draft` | 2026-07-27 | Consolidated stanza style, semantic naming, architecture, evidence, dependencies, and waivers |
| `0.4.0-draft` | 2026-07-30 | Introduced the normative-translation record and technical-regulator registry |
| `0.5.0-draft` | 2026-07-30 | Established the English repository default, candidate translation status, and localization-parity checks |
