# Normative Translation of the Later Seven-Work Corpus

Change identifier: `kcr-change-2026-07-30-seven-works`.

Status: candidate for normative consideration.

Basis: consecutive study of works by Lawrence Lessig, Joel Reidenberg, James
Grimmelmann, Primavera De Filippi and Samer Hassan, Pedro Antonino and
co-authors, Srinivas Rao Marri, and Aristidis Vasilopoulos.

## Classification Result

- new constitutional provisions: `0`;
- clarified provisions: `2` — `kc-0034`, `kc-0047`;
- new Question Map questions: `0`;
- clarified Question Map questions: `2` — `q-kc-0034`, `q-kc-0047`;
- new Legislation rules: `2` — `BASE-C03`, `BASE-C04`;
- external integration layers: `1` — the Prompt-Literate Workflow adapter.

## Translation into `kc-0034`

### Source Function

De Filippi and Hassan identify the loss of flexibility and ambiguity when
normative text is translated into executable form. Antonino and co-authors
separate a trusted specification from its implementation and check the second
transition automatically.

### Preserved Substance

- normative translation constitutes an independent subject of review;
- preserved, narrowed, and excluded conditions receive an express record;
- defaults and residual human discretion form part of the checked result;
- the `norm → specification` transition is checked separately from the
  `specification → implementation` transition.

### Boundary of Translation

A formal specification does not acquire independent superior force. Its force
follows from a recognized basis, competence, and the procedure of the operative
order. Ethereum-specific features and the irreversibility of a smart contract
remain subject-matter characteristics of the source studies.

## Translation into `kc-0047`

### Source Function

Lessig, Reidenberg, and Grimmelmann show that architecture, interfaces,
standards, configurations, defaults, and software execution shape available
actions and de facto constraints.

### Preserved Substance

- technical regulation encompasses permission, prescription, impediment,
  default action, and exclusion;
- a technical regulator receives an exact normative basis, revision, scope,
  affected participants, and owner;
- observed effect, contestation, and update form part of the human procedure
  governing the mechanism.

### Boundary of Translation

A de facto regulatory effect does not automatically institute authority. An
unregistered mechanism is treated as a material practice and control defect
while preserving the requirement of safe transition.

## Translation into Legislation

`BASE-C03` establishes a mandatory normative-translation record. `BASE-C04`
institutes the technical-regulator registry. For the Code Constitution
repository, the registry receives the path
`manifest/technical-regulators.json`, its own JSON Schema, and a check that its
bases resolve.

The word “materially” in `BASE-C04` preserves human discretion. The criteria are
a change to an available action, mandatory value, or the ability to deliver,
access, release, observe, or restore. A disputed classification is referred
under P08.

## Translation into the LLM Process

Marri and Vasilopoulos support versioned constitutional context, traceability to
specifications, and organization of agent-process memory. These functions are
implemented by the external Prompt-Literate Workflow adapter:

- both source revisions are fixed by complete Git SHAs;
- the Constitution, Profile, and Legislation govern authority and adoption;
- the human-authored PLW plan governs the intention and boundaries of a
  particular operation;
- contract, scenario, candidate, check, and TRACE preserve separate functions;
- conflict or absence of authority stops the run;
- an LLM neither adopts nor ratifies its own result.

The integration adapter remains outside the universal normative Code
Constitution corpus. The root README contains only a link and a brief
explanation of its status.

## Verification

- `334` unique `kc-*` identifiers after clarification;
- `334` unique `q-kc-*` identifiers with exact equality of the sets;
- new Constitution SHA-256:
  `864bf72a9072d394d77d09de40089f8f0f3ecc0ff8f77c41ef173f0852adf2ee`;
- a separate technical check of `41` Legislation rules, including the
  previously unregistered `BASE-CSS-N01`;
- a separate schema and check for the technical-regulator registry;
- a full `npm ci` and `npm run check` pass after engineering integration.
