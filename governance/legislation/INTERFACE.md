# Interface Typography and Presentation

## Draft Portable Act

Act identifier: `kcr-act-interface-001`.

Revision: `0.1.0-draft`.

Legislation classes: Z09, Z11. Constitutional basis: `kc-0034`, `kc-0047`, `kc-0125`, `kc-0218`.

This act defines the portable BASE-UI profile for projects with a visual interface. A project adopts an exact revision through its own Profile and Legislation, names its interface scope and verification owner, and records local parameters and deviations. Adoption of a new universal edition leaves existing project revisions in force until their own amendment procedure is completed.

The project profile owns typefaces, palette, domain vocabulary, supported writing systems and delivery conditions. The common profile owns declared text roles, readable access to material information, attributable font assets and observable verification. A terminal, game HUD, spatial label and production web panel receive separate local parameters appropriate to their tasks.

### BASE-UI01. One source for text roles and tokens

Declare body, control, heading, metadata and code roles as applicable. Record font families, fallback stacks, size scale, line height and the source of the tokens in one identified project source. Components consume those roles; a local exception names its reason, scope and owner.

Verification: inspect the token source and representative new components; compare computed styles with the declared roles. Token presence alone does not establish readability.

### BASE-UI02. Readable information and hierarchy

Choose sizes by semantic role and provide a clear hierarchy. Material actions, errors and state remain identifiable through ordinary reading. Small metadata, decorative text or colour alone must not be the sole means of discovering an important action or error. The local profile records its baseline size, relative units and any context-specific limit.

For a production web panel, an initial profile may use a browser root of 100%, body text 1rem, controls .875–1rem, metadata .75rem or greater, and body line height around 1.5–1.65 at the default 16px browser size. These are selectable panel defaults; games, terminals and spatial interfaces document equivalent readability with their own constraints.

Verification: examine computed styles and complete important user tasks on real screens; record clipping, overlap, missing actions and the human readability decision.

### BASE-UI03. Scaling, languages and fallback

Respect the declared user font settings and zoom conditions. Test supported languages, long translations and required writing systems. Essential information and actions remain available with the declared fallback font and when the preferred font fails to load. Record material display limitations and their remedy.

Verification: exercise actual zoom and browser font settings, long localized content, required glyphs and blocked preferred-font delivery. Inspect the resulting interface and its usable navigation.

### BASE-UI04. Font provenance, rights and delivery

Record the provenance, applicable licence, delivery method and owner of every distributed font asset. A system font reference permits selection of an installed family; it grants no right to copy or distribute that family's binary files. External font delivery follows the project's declared dependency and data-handling rules.

Verification: compare font files and external requests with the asset/dependency register and licensing notices. Verify fallbacks and absence of unlicensed bundled binaries.

### BASE-UI05. Meaningful names, labels and badges

Names, labels and badges identify the object, action or actual state. Decorative wording preserves the visibility of operational meaning. A displayed state or promise is backed by the underlying behaviour and available evidence. Domain terminology remains a local project decision under the shared semantic contract.

Verification: review real screens and representative tasks; compare labels and displayed states with the operations and outcomes they describe.

### BASE-UI06. Shared roles with local identity

A declared family of interfaces shares the meaning and contracts of its common text roles. Each project retains its palette, domain vocabulary and context-specific parameters. Shared-token changes identify affected consumers and include a migration diff; borrowing an approach from another project creates no authority to modify that project.

Verification: compare common roles, local overrides and the migration diff for each affected consumer. Preserve pinned versions and prior evidence until the consumer adopts its update.

### BASE-UI07. A declared visual verification matrix

Before accepting a visual change, declare the affected viewport sizes, themes, locales, font/fallback conditions and input methods. Run the applicable local browser checks and inspect rendered results, including narrow layouts, keyboard operation and declared zoom conditions. Record expected and observed behaviour, unavailable cases and the responsible human reviewer.

Automation establishes only the conditions it actually checks. Human review determines whether hierarchy, wording and readability support the real task. This profile makes no claim of legal accessibility certification.

Verification: retain the matrix and actual results through the project's ordinary evidence procedure. A check of one interface does not certify another interface.

## Adoption and transition

The local adoption identifies this act and revision, interface scope, parameter source, verification owner and explicit waivers. Existing products keep their accepted profile until they adopt a bounded change. Recheck the affected matrix and preserve the previous source, pins and evidence needed for restoration. A material change follows the applicable normative change procedure.
