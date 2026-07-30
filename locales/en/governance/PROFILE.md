# Founding Profile of the “Code Constitution” Repository

## Draft Pending Ratification

Document identifier: `kcr-profile-001`.

Revision: `0.5.0-draft`.

Draft date: 2026-07-30.

Basis: the “Code Constitution” revision with SHA-256
`864bf72a9072d394d77d09de40089f8f0f3ecc0ff8f77c41ef173f0852adf2ee`.

This Profile specifies the Constitution for the repository in which the
universal corpus of the “Code Constitution,” its draft Legislation, and means
of reproducible document processing are published. The Profile acquires
binding force after the designated founding values are completed and it is
attested under P10. Until that moment, it serves as a verifiable draft for
establishing the repository.

The `kcr-*` namespace belongs to the repository’s project revision line. The
`kc-*` namespace remains reserved for the universal corpus of the Constitution.

## P01. Identity and Scope

The project is named “Code Constitution.” Its subject consists of the universal
normative corpus, Founding Profile, derivative Legislation, glossaries, data
schemas, manifests, splitting, assembly, and verification programs, test
fixtures, automated-check configuration, and attested release results.

The designated official address is
`https://github.com/FOP-Oksana-Dubinetska/code-constitution`. The repository is
owned by the GitHub organisation `FOP-Oksana-Dubinetska`, with immutable GitHub
ID `220367896`. Until the repository and its first canonical commit are
created, this address has the status of the approved place of establishment
rather than that of the official corpus in force.

The scope encompasses:

- the canonical state of files in the official Git repository;
- local development and mandatory checks;
- CI and the protected main branch;
- repository releases;
- derivative documents and their manifests.

The repository is not deposited in Zenodo, receives no DOI of its own, and is
not treated as an archival appendix to a Zenodo record. A separate related
publication contains the article, research notes, and other expressly listed
materials; its authors are stated as Sam Starling and Oksana Dubinetska. The
DOI of that publication may appear in the repository only as the identifier of
a related work and is not used as the identifier of the repository, software,
or normative corpus.

## P02. External Order

Organisational publication, management of the official repository, and actions
of FOP Oksana Dubinetska concerning the project are carried out within the law
of Ukraine. Licensing permissions are determined by the texts of the
applicable public licences. Mandatory rules of law applicable to an author,
participant, user, or particular action, together with GitHub’s terms and the
terms of the platform hosting the separate scientific publication, retain
force within their own scope. This Profile establishes no exclusive judicial
jurisdiction.

The repository’s textual materials are distributed under `CC-BY-SA-4.0`.
Programs, scripts, tests, fixtures, schemas, configuration, and reusable
software templates are distributed under `MIT`. Names, logos, and other visual
identity receive no permission for use through these licences. Third-party
materials retain their own licences and notices.

The licensing map follows FOP Oksana Dubinetska policy
`https://github.com/FOP-Oksana-Dubinetska/repository-licensing-policy` version
`1.0.0`, connected as the Git submodule `.licensing-policy/` and pinned to
commit `6e4c2627717c079827ed4aa9044a5346b3ea3ddb`. This source establishes the
general policy, templates, and order of conflict resolution. The root
`LICENSE.md` applies the map directly to the contents of this repository.

A project departure from the general policy is recorded in a separate
`LICENSING-OVERRIDES.md` with its exact scope, basis, and relation to the pinned
policy revision. In the absence of an adopted departure, that file remains
absent. Material created or changed with LLM participation is classified by
its actual type, provenance, and applicable rights under the same licensing
map. Publication of material in an open repository does not by itself confer
additional permission for its reuse.

## P03. Sources of Intent

The primary source of intent is the project author, who formulates the subject,
theoretical model, and editorial direction of the “Code Constitution.”
Additional recognised sources are:

- readers who require a clear and addressable presentation;
- developers applying the Constitution in their own projects;
- repository participants who report defects and propose changes;
- traceability requirements of the related scientific publication;
- the binding external order under P02.

A proposal from any source acquires force through the established procedure. A
conflict of goals is resolved in the following order: a binding external limit,
the ratified Constitution and Profile, protected provisions under P12,
Legislation in force, and an attested editorial decision. Among compatible
options, preference is given to semantic accuracy, reproducibility,
portability, and comprehensibility for the reader.

## P04. Official Corpus

One attestable Git commit of the official repository constitutes the canonical
state. It may include several canonical files and always names one consistent
revision of each.

The proposed structure of canonical sources is:

- `/locales/ru/CONSTITUTION_CODE.md` — the complete Russian Markdown corpus of
  the universal document;
- `/locales/ru/governance/PROFILE.md` — the completed repository Profile;
- `/locales/ru/governance/GLOSSARY.md` — the portable glossary and local
  extension;
- `/governance/legislation/DEVELOPMENT.md` — the English-language development
  regulation;
- `/locales/locales.json` and the `LOCALE.json` files — the set of locales,
  their status, provenance, translation authorship, reviewer, and conformance
  to the source revision;
- `/governance/acts.json` — the registry of acts in force;
- `/schema/` — schemas of machine-readable data;
- `/manifest/` — provision provenance and composition of attested revisions;
- `/LICENSE.md` — the project licensing map;
- `/.licensing-policy/` — the pinned source of the general licensing policy;
- `/LICENSING-OVERRIDES.md` — adopted project departures only, where they
  exist.

The `/dist/` directory contains derivative representations only. Split parts,
HTML, PDF, and verification reports state their source, production rules, and
exact revision. Localised Question Maps reside in their respective
`/locales/{code}/QUESTION_MAP.md` paths, have the status of informative
editorial representations, and preserve stable-ID parity with the source
Constitution. Manual editing of a derivative representation does not alter the
canonical corpus. Reassembly from permitted working fragments first creates a
candidate canonical state, which then undergoes full verification and the
ordinary change procedure.

The repository establishes the `ru`, `uk`, and `en` locales; their codes follow
BCP 47. Russian is the normative locale of the Constitution, Profile, and
Glossary. The English and Ukrainian locales proceed through the `planned`,
`candidate`, and `informative` states. `candidate` means that a complete,
machine-verified translation exists and awaits substantive human review.
`informative` is assigned following that review, with the translator, reviewer,
source revision, and date of comparison recorded in the locale manifest. A
discrepancy is resolved in favour of the normative Russian source until another
language model is separately ratified.

English is the repository’s default language for root navigation, programs,
machine-readable data, single-language acts, technical instructions, and
editorial reports. The sole English revision of an independent act remains its
canonical text where the acts registry expressly identifies that path. The
normative priority of the localised Russian corpus and the language of a
particular single-language act are therefore declared expressly and are not
inferred from file location.

The root README expands the English description by default; Ukrainian and
Russian versions appear in collapsible sections. The README serves as an entry
point and does not replace the normative source. A derivative revision that
changes the text of the Constitution replaces in the README its own project
identity, official repository, holders of authority, and status statement,
states the source revision and nature of the changes, and preserves the
attribution of the original text required by the licence.

A revision is identified by a Git SHA, release tag, SHA-256 of every included
file, and the version of the build rules.

## P05. Founding Roles

Sam Starling, ORCID `0009-0009-2621-6372`, is the original author of the Russian
normative corpus, editor, `founding_holder`, norm-maker, ratifier, attesting
subject, and maintainer of the first revision.

FOP Oksana Dubinetska is the organisational subject of publication and owner
of the official repository. Oksana Dubinetska, ORCID
`0009-0003-8777-8412`, holds organisational access, is responsible for
preparing the English and Ukrainian locales, and conducts human review of
translations. The actual authorship, translation, and review of each locale
are recorded in its manifest after the corresponding contribution has been
performed.

Organisational ownership, custody of access, translation, and translation
review do not by themselves confer norm-making authority or alter authorship
of the Russian source text. Co-authorship of Sam Starling and Oksana Dubinetska
in the separate scientific publication relates to that publication and does
not replace role attribution in the repository.

An expert provides an opinion and acquires independent founding authority only
after express appointment in the Profile. A repository participant acquires
authority to the extent of an accepted role. An LLM, CI, linter, generator, and
other automation execute established rules and do not act as founding
subjects.

## P06. Norm-Making

Until several human holders are established, the holder of the
`founding_holder` role is the norm-maker. That mandate remains until transfer,
limitation, or revocation through an amendment to the Profile.

A proposed norm is submitted as a separate change stating:

- the source of intent;
- the constitutional basis;
- affected provisions and acts;
- expected consequences;
- checks and transition;
- objections and the outcome of their consideration.

Ordinary Legislation is adopted by one express consent of the norm-maker in
office after the mandatory checks succeed. The Constitution, Profile, and
protected provisions are amended under P11. A reasoned objection is submitted
in the issue or change discussion before attestation. The norm-maker answers
the objection in the decision record.

When the sole norm-maker is unavailable, no new authority arises. The
repository preserves the latest attested revision until the prescribed
re-establishment.

## P07. Execution

The executive role in the first revision is held by Sam Starling as repository
maintainer. He may:

- maintain branches and changes;
- run checks;
- merge approved changes;
- form a release candidate;
- publish an attested release;
- apply a documented rollback.

CI executes checks on behalf of the maintainer and acts as a means of technical
enforcement. Authority to alter the protected main branch, dispose of
repository secrets, and publish Git releases is recorded separately from
organisational ownership. Preparation and publication of the related work in
Zenodo do not constitute a repository release and are governed as a separate
publication act of its authors. Transfer and revocation of the executive role
proceed through an attested amendment to the Profile.

## P08. Dispute Resolution

A claim is submitted through a separate issue and contains the challenged
action, basis, evidence, required remedy, and information about urgency. The
repository maintainer is the first instance.

A dispute concerning the maintainer’s own action is considered by an appointed
expert where such an expert exists. In the absence of an independent instance,
the dispute remains open, the disputed irreversible action is suspended, and
the latest attested revision continues in force. The founder may issue a
reasoned final decision while expressly recording the combination of
functions.

Remedies are correction of a record, a new revision, reversal of a change,
return to the latest attested state, repeated verification, and publication of
a defect notice. The history of the dispute is preserved.

## P09. Jurisdictions

The repository initially forms one project jurisdiction. Within it, the
following subordinate domains are distinguished:

- the normative and research corpus;
- the Profile and Legislation;
- the Glossary;
- schemas and manifests;
- processing programs;
- tests and fixtures;
- CI and release.

These domains may have different change owners, but their decisions are
subject to the common contracts of identifiers, canonical source, assembly,
evidence, and release. Autonomous jurisdictions and independent jurisdictions
of the common order are initially absent. Establishing them requires an
amendment to P09 stating their subjects, common resources, and procedure for
joint change.

## P10. Initial Ratification

The unit of consent is the `founding_holder`; its weight is `1`, quorum is `1`,
and the threshold for adoption is `1`. Abstention means absence of
ratification. Consent may be withdrawn before attestation and becomes a
historical fact after the Profile enters into force.

Ratification encompasses one frozen revision of the Constitution, this
Profile, and precisely enumerated mandatory acts. Conflicts of interest and
combined roles are disclosed in the attestation record.

The moment of acquiring force is the time when the attestation record is
created. That record contains the Git SHA, hashes of all included acts, the
result of consent, and a signed or otherwise verifiably attributable tag.
Merely merging files into the main branch is insufficient for ratification.

## P11. Amendment

The founder, maintainer, or any participant through a public proposal may
initiate an amendment. An amendment to the Constitution, Profile, or a
protected provision receives the separate designation `constitutional-change`,
a map of affected IDs, comparative text, a consequence assessment, a
transition plan, and a new attestation record.

At the initial stage, the ratifying unit, weight, quorum, and threshold are the
same as in P10. The ordinary period of open consideration is seven calendar
days. The founder may conclude consideration earlier when correcting an
obvious editorial defect, while preserving reasons for the classification of
the change.

An amendment acquires force after successful checks and attestation of the new
revision. The amendment itself establishes the transition period. The reserve
path upon loss of the sole founding subject is express re-establishment by a
new subject, preserving provenance and the relation to the previous revision.

## P12. Protected Provisions

The following conditions are protected:

- one unambiguous canonical status for every revision;
- preservation of stable identifiers and prohibition of their reissue;
- machine-readable history of the splitting, merging, and retirement of
  provisions;
- distinction between the canonical source and derivative representations;
- prohibition of covert alteration of normative text by a processing program;
- identity of an unchanged round trip;
- preservation of the latest attested revision upon a build defect;
- priority of the binding external order;
- human attribution of every authority exercised by automation.

Changing a protected condition requires separate enumeration of every affected
provision, express consent of all ratifying units in office, and a new
attestation record. The emergency order may temporarily suspend execution and
preserves the text of the condition.

## P13. Resources and Obligations

Common resources are the official repository, protected branch, Git history,
project domain names when they appear, signing keys, CI secrets, package
registry, and attested release archives.

Protected actions include transfer or deletion of the repository, rewriting
published history, changing the licence, deleting a release, rotating a
trusted key, and granting administrative access. Transfer or deletion of the
repository and alteration of the licensing map require separate consents of
Sam Starling and Oksana Dubinetska, a current backup, and verification of the
exact target object. The maintainer independently publishes an ordinary Git
release of a revision already ratified.

No financial obligations are initially established. Their appearance requires
the budget, authorised role, threshold, and obligations registry to be stated.

## P14. Emergency Order

Grounds for an emergency measure are compromise of an account or secret,
publication of a damaged or substituted release, risk of losing the canonical
source, execution of a program with destructive consequences, and a detected
violation of the binding external order.

The maintainer may suspend a release, disable the relevant CI job, revoke a
secret, close access, return the main branch to the latest attested state, and
publish a warning. The measure is limited to the affected domain and remains
in force for no more than 72 hours without a reasoned extension. Within seven
days, an incident record, subsequent review, and ordinary decision on
restoration or amendment of the norm are created.

Evidence consists of hosting and CI logs, hashes, file differences, release
identifiers, and an attributable record of the action. The safe state is the
latest locally preserved and attested commit with publication of new artifacts
prohibited.

## P15. Evidence and Registries

Official evidence consists of:

- Git history and attested tags;
- issues, change proposals, outcomes of consideration, and objections;
- the registry of acts and revisions;
- the manifest of IDs, predecessors, successors, and retired provisions;
- normative-translation records;
- language-translation manifests, their source revisions, and the results of
  structural and substantive review;
- the registry of technical regulators, their bases, scopes, and owners;
- results of tests, linting, type checking, and builds;
- hashes of sources, fragments, and releases;
- the log of roles, authorities, exceptions, emergencies, and customs;
- records of Git-release publication and links to separate scientific
  publications.

Normative history, the ID registry, attestation records, and release manifests
are retained permanently. Temporary CI logs may be retained under the
provider’s rules, while every release includes a sufficient final report for
independent repeated verification.

## P16. Technical Enforcement

The main branch accepts a change after one full-check command. It encompasses:

- formatting checks for TypeScript, JavaScript, CSS, and structured files;
- ESLint, TypeScript checking, and Stylelint where CSS exists;
- unit, contract, integration, architecture, and negative tests;
- Markdown linting without mechanical reflow of prose;
- validation of the Profile and manifest schemas;
- completeness and resolvability of the technical-regulator registry;
- uniqueness and resolvability of IDs and links;
- identity of an unchanged round trip;
- conformance of hashes and provenance;
- conformance of the licensing declaration and the `.licensing-policy/` SHA;
- absence of unrecorded changes to derivative files.

The exact configuration and exception regime are established by act
`kcr-act-development-001`. CI operates in check mode and does not correct
canonical files. Local automated correction is permitted for operations
expressly recognised as safe by the act.

## P17. Transition and Restoration

Transition to the order in force proceeds through the following sequence:

1. adopt the Profile, Development Regulation, and Glossary;
2. connect `.licensing-policy/` at the adopted commit and form the root
   `LICENSE.md`;
3. describe the machine-readable schema of P01–P18;
4. prepare a manifest of IDs, namespaces, predecessors, successors, and
   retired provisions;
5. allocate provisions among the Constitution, Founding Profile, Legislation,
   and research corpus;
6. create manifests for the `ru`, `uk`, and `en` locales, place the normative
   Russian corpus and candidate English and Ukrainian translations;
7. adopt the model of canonical sources and derivative representations;
8. implement splitting of the mother document and reassembly;
9. introduce checks of the round trip, links, hashes, tables, Question Map,
   and editorial conflicts;
10. attest the first working revision and form a Git release.

The initial state is the current corpus with the SHA-256 stated in the
introduction. Until step 8 is complete, manual editing occurs only in declared
canonical sources. Until step 9 is complete, derivative documents receive no
status as an attested build.

Failure of transition preserves the current corpus and adopted normative files
in the latest verified commit. An incomplete program is not used for
publication and does not alter the release in force.

## P18. Unwritten Order

Relevant participants are the founder, maintainers, and authors of adopted
changes. Repeated practice is considered as evidence of possible custom in
matters of editorial procedure and local interaction among tools.

The Profile establishes a presumption that no binding unwritten norm exists. A
custom is recognised after a public record of its scope, established practice,
participants, competing formulations, response to violation, and a reasoned
decision of the norm-maker. A high-risk expectation, limitation of authority,
exception from a check, and release rule are subject to written codification
before application.

The threshold for beginning codification is three repetitions of one practice,
a dispute concerning its content, or its first material consequence. The
customs registry preserves both recognised formulations and refusals of
recognition.

## Registry of Derivative Legislation

| Act ID | Classes | Name | Status |
| --- | --- | --- | --- |
| `kcr-act-development-001` | Z01, Z02, Z07, Z08, Z09, Z11 | Development and source-processing regulation | Draft `0.5.0-draft` |
| `kcr-glossary-001` | Z11 | Software terminology glossary | Draft `0.3.0-draft` |

P03, P08, P13, P14, and P18 establish minimum rules for the subjects of Z03,
Z04, Z05, and Z10 until independent acts become necessary. Classes Z06 and Z12
are not initially established. Their appearance proceeds through ordinary
norm-making within the Constitution.

## Project Specification Map

| Canonical term | Project-specific name | Scope |
| --- | --- | --- |
| Founding subject | Sam Starling (`founding_holder`) | Initial ratification and amendment |
| Original author and norm-maker | Sam Starling | Russian corpus and derivative Legislation |
| Organisational subject of publication | FOP Oksana Dubinetska | Official repository |
| Custodian and translation lead | Oksana Dubinetska | Access, `uk` and `en` locales, translation review |
| Executive role | Sam Starling as maintainer | Change, CI, and release |
| Official corpus | Attested Git commit | All canonical sources |
| Canonical source | Russian Constitution, Profile, and Glossary in `/locales/ru`; English Development Regulation in `/governance/legislation`; language-independent registries and schemas in `/governance`, `/schema`, and `/manifest` | Editable state |
| Derivative build | Contents of `/dist` and release artifacts | Publication and navigation |
| Dispute instance | Maintainer or appointed expert | Claims under P08 |
| Common ID namespace | `kc-*` | Universal corpus |
| Project ID namespace | `kcr-*` | Profile, acts, and local provisions |

## Remaining Conditions of Ratification

The founding values for the official address, owner, external order, licences,
and named roles are established. The Profile retains pre-ratification status
until the designated repository is created, a coherent revision of the
normative package is completed, and mandatory checks are implemented.

The attestation record must name the exact revisions of the Constitution and
acts, Git SHA, hashes, normative language, state of every locale, ratification
result, moment of force, and state of transition.

## Revision History

| Revision | Date | Change |
| --- | --- | --- |
| `0.1.0-draft` | 2026-07-25 | Initial draft of the repository Profile and establishment sequence |
| `0.2.0-draft` | 2026-07-27 | Address, roles, licences, and locales established; repository separated from the related Zenodo publication |
| `0.3.0-draft` | 2026-07-27 | Licensing hierarchy, technical enforcement, and transition to implementation refined |
| `0.4.0-draft` | 2026-07-30 | Normative-translation evidence and the technical-regulator registry established |
| `0.5.0-draft` | 2026-07-30 | Candidate English and Ukrainian locales, English as the repository default, and the single-language English Development Regulation established |
