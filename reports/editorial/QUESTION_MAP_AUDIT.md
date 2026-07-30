# Editorial Audit of the Code Constitution Question Map — Revision 3

## Scope and Method

The audit was performed against the publication revision at
`/locales/ru/CONSTITUTION_CODE.md`, with SHA-256
`864bf72a9072d394d77d09de40089f8f0f3ecc0ff8f77c41ef173f0852adf2ee`.

The unit of review is a semantic block with a stable ID. Each block was first
checked by function and place in the system and then inverted into one plain
question with the generated identifier `q-kc-NNNN`. The heading gives the
reader address, and the link leads to the exact provision.

| State of the corpus | Provisions | Questions | Change |
| --- | ---: | ---: | --- |
| Control map before splitting | 278 | 278 | Initial state |
| Corrected revision after splitting | 317 | — | `+39` independent propositions from 19 compound blocks |
| Revision after repeated audit | 334 | 334 | `+17` provisions closing old and new blind spots |

The final Map contains 334 unique questions, 334 unique addresses, and 334
links to provisions. The `kc-0001`–`kc-0334` range contains no omissions or
repetitions. Average question length is 10.84 words, the median is 11 words, and
the maximum is 27 words. Every question contains one question mark; no questions
are repeated verbatim.

The growth from 278 to 334 units is fully explained: 39 units arose from the
previously approved split, and 17 arose from the substantive audit. No hidden
expansion of the corpus or accidental duplication was found.

## Revision 3 Clarifications

The later corpus of seven works created no new constitutional provisions. The
clarification of `kc-0034` required expanding `q-kc-0034` with questions about
losses, defaults, residual discretion, and separate checking of transitions.
The clarification of `kc-0047` required `q-kc-0047` to identify the features of
a technical regulator, its consequences, and its link to the human procedure.
The number of questions remained 334.

The automated check requires exact equality between the sets of `q-kc-*` and
`kc-*`, 334 unique links to provisions in each locale, and equality between the
SHA-256 stated in every localized Map and `manifest/provenance.json`.

## Review of Previous Substantive Tensions

| Previous observation | Result of repeated review |
| --- | --- |
| Moment of acquiring binding force | Resolved: `kc-0001` links force to a completed Profile and to the moment certified after ratification under Article VII. |
| Absence of authority and contestability | Resolved: `kc-0062` regulates absence of authority; `kc-0066`–`kc-0067` regulate a defect in exercising existing authority; `kc-0068` regulates temporary preservation of consequences for transition. |
| “Federal order” | Resolved: the universal model uses an independent jurisdiction under the common order; the word “federal” is absent from the corpus. |

The new Map found no two incompatible answers to one question. Old
contradictions are preserved in the control audit as review history, while the
operative revision contains coordinated solutions.

## Unification of Recurring Semantic Nodes

Unification means that one canonical rule exists. A conceptual definition,
procedural application, and field of a particular project remain separate
functions and refer to the canonical provision.

| Semantic node | Canonical provision | Applications and result |
| --- | --- | --- |
| Classification of the level of a decision | I.3, `kc-0070` | Part I, § 6, V.1, and Part III refer to I.3; parallel lists of criteria were removed. |
| Validity of a written norm | I.2, `kc-0063`–`kc-0068` | VI.2, `kc-0204` directly refers to I.2 and retains only the distinction between written and unwritten order. |
| Technical enforcement | VI.4, `kc-0217`–`kc-0220` | `kc-0047` defines the concept through VI.4; III.3 regulates evidence and contestation; P16 and Z09 specify the project mechanism. |
| Material power | Part I, § 5, `kc-0029`; regime — VI.6 | I.1 refers to the definition; `kc-0230`, `kc-0327`–`kc-0329` regulate discovery, temporary duty, and institution of power. |
| Personal responsibility | II.7, `kc-0113` | `kc-0031`, `kc-0076`, `kc-0109`, and `kc-0138` use the single rule in II.7. |
| Combination of roles and independence of consents | Part I, § 5, `kc-0030`; I.2, `kc-0064` | V.3 and VII.2 refer to the common rule; concrete parameters appear in P11 and P10 respectively. |
| Emergency measure, waiver, and protective intervention | II.5, `kc-0100` and `kc-0102`; IV.6, `kc-0169` | An emergency measure regulates immediate risk; a waiver is an individual departure; protective intervention is an interjurisdictional regime subject to II.5 when risk is immediate. V.6 uses these terms without a separate “extraordinary measure.” |
| Provenance and delivery states | II.4, `kc-0096`–`kc-0099` | Part I, § 7 preserves the conceptual distinction and refers to II.4; no repeated operational norm remains. |
| Unpublished high-risk expectation | VI.2, `kc-0209` | A.1, `kc-0278` now refers to VI.2. The verbatim repetition was removed. |
| Ratification parameters | P10 and P11 | VII.2, `kc-0238` refers to P10; V.3, `kc-0184` refers to P11. Repeated lists were removed. |

The lexical check left three adjacent pairs of questions. They perform different
functions: the legislative and constitutional levels of a form; the general
rule on entrenched provisions and the P12 field; and the subject-matter limits
of joint executive authority and the founder’s scope. Combining them would
destroy the distinction between level, norm, and project value.

## Status of Previous Blind Spots

### 1. Normative Status of the Parts of the Complete Edition

Closed by `kc-0318`. The introduction, conceptual foundation, normative core,
rules for architectural forms, Profile, and map of Legislation received express
functions. The research corpus is separated by `kc-0317`.

### 2. Universal Revision and Adopted Project Constitution

Closed by `kc-0319`–`kc-0320`. The universal and project editorial lines are
distinguished; an update of the universal text does not automatically change a
project; incorporation proceeds under Article V. P04 and `kc-0299` preserve the
source and adopted versions.

### 3. Canonical Source and Generated Assemblies

Closed at the normative level by `kc-0321`–`kc-0322` and `kc-0332`. The corpus
distinguishes the canonical source, generated assembly, and informational
representation. A failed assembly preserves the last certified revision. An
edit to a generated fragment enters the source after reverse assembly and
checking.

### 4. Stable Identifiers

Closed. Every provision has an ID from `kc-0001` through `kc-0334`, and every
question has the linked ID from `q-kc-0001` through `q-kc-0334`. Namespaces and
provenance are regulated by `kc-0330`–`kc-0331`.

### 5. Typed Founding Profile Schema

Closed at the normative level by `kc-0323`–`kc-0324`. Every field requires a
type, cardinality, required status, meaning of blankness, reference format,
dependencies, and validation rule. Profile validation precedes ratification.

### 6. Relations Between Acts of Legislation

Closed by `kc-0325`–`kc-0326`. The act registry stores the basis, competence,
scope, revision, dependencies, priority, replacement, and termination; a
conflict is resolved under VI.3.

### 7. De Facto Power Before Institution of a Duty

Closed by `kc-0327`–`kc-0329`. An aware holder acquires a temporary protective
duty; the competent function registers the power and brings it into the
established regime; the temporary duty neither legitimizes the power nor
replaces the procedure for personal responsibility.

## New Blind Spots and Their Resolution

### 1. Identifier Collision When Branches Diverge

The sequential `kc-NNNN` format created a risk of identical new IDs in the
universal and project lines. `kc-0330` established the universal `kc-NNNN`
namespace and a separate namespace for project provisions.

### 2. Loss of Provenance After Splitting or Merging a Proposition

Prohibiting number reuse preserved history only partially. `kc-0331` introduced
machine-readable links between predecessors, successors, and retired
identifiers.

### 3. Competing Edits to the Mother Document and Fragments

Bidirectional assembly permitted two editable states to arise. `kc-0332`
established one canonical state and classified simultaneous divergence as an
editorial conflict.

### 4. Profile Without a Generated Term Map

Profile fields established values, but the procedure for substituting them
remained implicit. `kc-0333` requires the project term map to appear before the
body of the adopted Constitution, while `kc-0334` links a project-specific name
to the canonical term, ID, type, and scope. Typed addressable specification
replaces global text substitution.

### 5. Normative Status of the Question Map

The purpose statement of every localized Map expressly establishes that it is a
generated navigation representation. If it diverges, the linked source text
governs.

## Boundary of the Next Stage

The substantive review of the universal Constitution was complete at the time
of this audit. Before engineering implementation, the repository was required
to apply the established order to its own work:

1. Prepare and ratify the repository Founding Profile, Development Regulation,
   and portable Terminology Glossary.
2. Describe a machine-readable P01–P18 schema based on the actual completed
   Profile.
3. Construct a manifest of IDs, namespaces, predecessors, successors, and
   retired provisions.
4. Allocate provisions among the Constitution, Founding Profile, Legislation,
   and research corpus.
5. Approve the scheme of canonical sources and generated representations.
6. Implement splitting of the mother document and reverse assembly under
   predetermined rules.
7. Check round-trip identity, links, hashes, tables, Question Maps, and
   editorial conflicts.

The first item instituted rules for work on future programs, including
formatting, linting, technology boundaries, and mandatory terminology. The
subsequent items concerned source architecture and reproducible assembly. They
did not constitute remaining substantive gaps in the universal Constitution.

## Result

Repeated inversion confirmed the addressability of every provision. Previous
substantive tensions were resolved, ten recurring nodes were unified, and seven
old and five new blind spots received solutions. The resulting revision was
ready for self-application in the repository, after which the Profile schema,
source allocation, and reproducible assembly would receive an already
established normative basis.
