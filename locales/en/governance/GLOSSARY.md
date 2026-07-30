# Software Terminology Glossary

## Draft Portable Act

Act identifier: `kcr-glossary-001`.

Revision: `0.3.0-draft`.

Legislation class: Z11.

The Glossary establishes the working meanings of terms in the Code Constitution
repository and provides a portable core for other projects. A definition states
the recognizable function of a concept. A scope clarification states the
conditions under which a word retains that meaning.

Another project may copy the portable core, identify the source revision, use
its own ID namespace, and record local deviations. A term acquires binding force
only within the scope of the act that adopted the Glossary.

## 1. Usage

A technical name in code uses the English form. Documentation uses the primary
form of its locale and may state the English equivalent at the first material
occurrence. The Russian, Ukrainian, and English revisions preserve the same term
IDs. If their meanings diverge, the normative Russian revision governs.
Synonyms are permitted in ordinary prose when they do not obscure a difference
in duties.

The words `module`, `component`, `service`, `layer`, `adapter`, `contract`,
`parser`, `validator`, `transformer`, `serializer`, `source`, and `build` are
used in names, comments, decisions, and change descriptions according to this
Glossary. The same rule applies to `code stanza`, `semantic name`,
`composition root`, `local rule`, and `waiver`.

## 2. Portable Core

### G001. Project

A project represents a coordinated scope of intentions, participants,
decisions, work, and results. One project may encompass several repositories,
products, and environments.

### G002. Repository

A repository represents a versioned body of files together with its change
history and established access rules. The repository boundary states the
technical scope of storage and collaboration.

### G003. Source

A source represents a canonically editable record from which other
representations or executable artifacts are obtained. Source status follows
from the official corpus and procedure, not from a file extension.

### G004. Generated Representation

A generated representation is created by a reproducible operation from an
identified source. It retains its provenance, the version of the generation
rules, and its own status. A manual edit acquires force after the established
return to the canonical source.

### G005. Artifact

An artifact represents a fixed result of a build, check, or publication. An
archive, package, PDF, executable file, and CI report are different kinds of
artifacts.

### G006. Module

A module represents a cohesive unit of source code with an explicit public
contract and a hidden internal implementation. A file, directory, or package
acquires module status through this organizational function.

### G007. Component

A component represents a separately buildable, deliverable, or replaceable
part of a system with declared dependencies and interfaces. A component
boundary is material to release and execution.

### G008. Subsystem

A subsystem represents a large, cohesive scope of capabilities, state, and
rules with its own internal structure and a defined boundary of responsibility.
A subsystem may include several components and modules.

### G009. Layer

A layer groups elements by policy level and direction of permitted
dependencies. The meaning of a layer includes the rule for interaction with
adjacent levels and the cost of violating the boundary.

### G010. Boundary

A boundary represents a place where responsibility, data model, authority,
lifecycle, or mode of change differs. A boundary is crossed through a defined
contract.

### G011. Contract

A contract establishes observable obligations between interacting parties:
permitted input, result, errors, states, compatibility, and conditions of
change. A type or signature expresses the technical part of a contract.

### G012. Interface

An interface represents the technical surface of interaction: a set of
operations, messages, types, or access points. Its full meaning is determined
by the associated contract and behavioral semantics.

### G013. Adapter

An adapter converts an external interface, format, or protocol into a contract
understood by the internal part of the system and performs the reverse
conversion. Domain policy remains within the appropriate normative or
application module.

### G014. Port

A port represents an internal contract through which application policy
requests an external capability or provides a capability to an external
participant. An adapter implements or invokes a port at the technology
boundary.

### G015. Service

A service provides a defined capability through a stable contract and has a
distinct operational lifecycle. An internal class receives this name only when
it performs that role in the established architecture.

### G016. Dependency

A dependency represents a relation in which the correctness, build, execution,
or change of one element relies on the contract of another. Documentation
states the kind of dependency and its permitted direction.

### G017. Domain Policy

Domain policy establishes permitted decisions and results within the subject
domain. Its source is linked to a recognized intention, obligation, or
derivative norm. Architecture locates and protects the policy; code expresses
and executes it.

### G018. Architectural Rule

An architectural rule constrains system structure, boundaries, dependencies,
state ownership, modes of interaction, or the cost of change. It acquires force
from a competent decision and is checked by a proportionate mechanism.

### G019. Infrastructure

Infrastructure provides technical means for storage, communication, execution,
observation, and delivery. Application policy interacts with it through
established boundaries.

### G020. Parser

A parser converts a sequence of characters or bytes into a structured
representation according to a grammar. It reports syntax errors and preserves
the element-position information required by subsequent operations.

### G021. Validator

A validator checks a representation against rules and returns a structured
conformance result. It does not alter the value being checked.

### G022. Transformer

A transformer creates a new representation from accepted input according to an
explicit transformation rule. The result is linked to the source value and the
rule version.

### G023. Serializer

A serializer converts an internal representation into a byte sequence in a
specified format. A deterministic serializer returns the same bytes for the
same value and configuration.

### G024. Schema

A schema formally describes the permitted data structure, types, required
fields, constraints, and relations between fields. The schema version forms
part of the validation evidence.

### G025. Manifest

A manifest represents a structured record of the composition, identity,
provenance, and relationships of artifacts or provisions. It is intended for
machine checking and human audit.

### G026. Formatter

A formatter mechanically converts a record to one canonical form within the
supported syntax. Successful formatting confirms form; it does not confirm
correct behavior.

### G027. Linter

A linter analyzes a record against a set of rules and reports potential
defects, dangerous constructs, and violations of an adopted standard. Some
rules may propose or perform a safe correction.

### G028. Compiler

A compiler translates a program from a source language into another
representation and checks the constraints defined by the language. Type
checking forms part of compilation analysis and retains its own function
alongside linting and tests.

### G029. Test

A test represents an executable assertion about behavior under specified
conditions. A test suite provides finite evidence for the listed cases and
program revision.

### G030. Fixture

A fixture represents fixed input, an environment, or an expected result used
for a reproducible check. Its provenance and purpose are documented alongside
the test.

### G031. Code Stanza

A code stanza represents a continuous group of expressions serving one local
sub-intention. A blank line marks the boundary between semantic phases where
such a boundary exists.

### G032. Semantic Name

A semantic name states the subject or responsibility of an element and links it
to a consistent project term. It makes it possible to determine the purpose of
a directory, file, module, type, function, or variable without first reading
the entire implementation.

### G033. Composition Root

A composition root represents the narrow place in an executable program where
concrete adapters are connected to application scenarios. Knowledge of
implementations is confined to that point and does not automatically extend to
the entire CLI directory or infrastructure layer.

### G034. Local Rule

A local rule specifies a portable rule in advance for a particular project,
technology, or scope. It retains its link to the portable basis and changes
through the ordinary normative procedure.

### G035. Waiver

A waiver represents permission, limited in scope and time, to depart from an
applicable rule with an identified risk, compensating check, owner, and
termination condition. The rule remains in force outside the stated scope.

## 3. Local Code Constitution Extension

### K001. Mother Document

A mother document represents the complete canonical Markdown source of the
universal corpus from which thematic and normative representations are
obtained.

### K002. Provision

A provision represents an addressable semantic block with one stable ID. An
editorial change preserves its identity while the normative proposition remains
the same.

### K003. Stable ID

A stable ID represents the machine address of a provision and is preserved
through editorial amendment and relocation. A split, merger, replacement, and
retirement are recorded through provenance relations.

### K004. Fragment

A fragment represents an exact range of the canonical source or a working
revision of such a range, linked to a list of provisions and a place in the
assembly order.

### K005. Split

A split classifies the structure of the mother document and extracts fragments
without changing their source bytes. The result includes a manifest of order,
composition, and hashes.

### K006. Assemble

Assembly joins permitted fragments into a mother-document candidate according
to the manifest. The candidate acquires canonical status after the change is
checked and adopted.

### K007. Round Trip

A round trip represents the sequence of splitting and assembly. For unchanged
parts, its invariant is byte-for-byte identity between the result and the
source.

### K008. Question Map

A question map represents a generated navigation index linking a plain-language
question to a stable ID and the reader address of a provision. If they diverge,
the canonical provision text governs.

### K009. Project Term Map

A project term map links a constitutional term and stable ID to a real role,
body, registry, jurisdiction, or other project-specific meaning within a
defined scope.

### K010. Provenance Registry

A provenance registry stores namespaces, ID statuses, predecessors, successors,
reasons for transformation, and the revisions in which a change occurred.

### K011. Certified Revision

A certified revision represents an exact canonical state linked to the adoption
result, Git SHA, hashes of mandatory files, the version of assembly rules, and
the moment it took effect.

### K012. Editorial Conflict

An editorial conflict arises when the canonical source and a working generated
fragment diverge simultaneously without a provable common basis. Resolution
selects one source state, carries changes over explicitly, and repeats the full
check.

## 4. Rule for Adding a Term

A new term is added when existing definitions do not precisely name a distinct
duty, boundary, or state. The entry contains:

- a stable ID;
- Russian, Ukrainian, and English forms;
- a positive definition;
- its scope of use;
- its relation to adjacent terms;
- an example in which the distinction is practically material;
- the revision in which it was introduced.

A local meaning of a generally accepted word is stated expressly. The portable
core changes after its effect on every project that references it has been
checked. A local extension changes within its own project.

## 5. Revision History

| Revision | Date | Change |
| --- | --- | --- |
| `0.1.0-draft` | 2026-07-25 | Initial portable core and Code Constitution extension |
| `0.2.0-draft` | 2026-07-27 | Added terms for stanza style, semantic naming, composition, and deviations |
| `0.3.0-draft` | 2026-07-30 | Established synchronization of the Russian, Ukrainian, and English locales |
