# Data Models

## Format of dates

Dates are always formatted as `YYYY-MM-DD`.

## Organisation

An organisation is in most cases a school or a similar relevant organisation in
an educational context.

Attribute | Description
--- | ---
id | ID of the organisation. Provided by the server and unique.
kennung | Optional alternative ID of an organisation (in most cases, this will be a national or regional school ID). It needs to be unique within the organisation type.
name | Official name of the organisation.
namensergaenzung | Addition to the organisation name (such as a previous name or a suffix that is not part of the name).
kuerzel | Short name of the organisation.
anschrift | Address of an organisation.
typ | Organisation type. See code list *Organisationstyp*.
traegerschaft | Owner type of the organisation. See code list *Trägerschaft*.

## Person

Attribute | Description
--- | ---
id | ID of the person. Provided by the server and unique.
referrer | The ID that the local client system uses.  It is used to map the ID provided by the registry server to the data stored in the local school management software.
mandant | ID of the organisation the person is attached to. This is mainly a legal relationship, in the sense that this is the controller responsible for maintaining the data for that person as described in DSGVO Art. 4 Nr. 7. Persons can be attached contextually to other organisations with the `Personenkontext`.
stammorganisation | A person can belong administratively to one organisation, but might be delegated to another organisation. The `stammorganisation` (home organisation)  is the ID of the organisation the person primarily belongs to.
name | Name entity.
name.familienname | Surname(s) of the person.
name.vorname | Given name(s) of the person.
name.initialenfamilienname | Initial or initials of the surname.
name.initialenvorname  | Initial or initials of the given names.
name.rufname | Name the person is commonly called by.
name.titel | Title of the person.
name.anrede | List of forms of address (e.g. Mr.).
name.namenssuffix | List of name suffixes.
name.sortierindex | Sort index, denoting the index of the letter of the last name by which a name is to be sorted. The index is zero-based, so a `0` denotes sorting by the first letter of the last name.
geburt | Birth information entity.
geburt.datum | Date of birth.
geburt.geburtsort | Place of birth, usually town and country. If no country is provided, Germany is assumed.
geschlecht | Sex of person. Refers to code list *Geschlecht*.
lokalisierung | Localisation based on RFC5646. If none is provided `de` is assumed.
vertrauensstufe | Describes the level of trust in the data provided. Refers to code list *Vertrauensstufe*.
auskunftssperre | Blocked information. Is set to `Ja` (yes) if access to information of this person is blocked. Refers to code list *Boolean*.
revision | Revision number of the information. This is mainly used to check on updates and deletes of data sets, whether there have been any changes to the data since it was retrieved by the client system.

## Personenkontext

The person context describes the role of a person within an organisation.

A person can have multiple person contexts. These can be in the same organisation the person
is attached to, but also in different organisations. However, it is not permitted to have
the same person context (same role in the same organisation) twice.

Attribute | Description
--- | ---
id | ID of the person context. Provided by the server and unique.
referrer | The ID that the local client system uses. It is used to map the ID provided by the registry server to the data stored in the local school management software.
mandant | ID of the organisation the person context is attached to.
organisation | Organisation the person has a role in. See *Organisation*.
rolle | Role the person has in the organisation. Refers to code list *Rolle*.
personenstatus | Status the person has in relation to a role. See code list *Personenstatus*.
jahrgangsstufe | School grade or form a person is currently in or associated with. Refers to code list *Jahrgangsstufe*.
sichtfreigabe | Boolean value that denotes whether the data is only visible due to another organisation providing read access.
loeschung.zeitpunkt | Date and time when the person context is to be deleted.
revision | Revision number of the information. This is mainly used to check on updates and deletes of data sets, whether there has been any changes to the data since it was retrieved by the client system.

## Personendatensatz

A „Personendatensatz“ is essentially a wrapper object containing data about a person and
the associated person contexts of that person.

Attribute | Description
--- | ---
person | Person. (See [Personen](../datenmodell/person.md)).
personenkontexte | Array of person contexts (see [Personenkontext](../datenmodell/personenkontext.md)).

## Gruppe

A group (Gruppe) allows it to handle a number of persons as a group. In most cases
this is a school class or similar organisational structure.

Attribute | Description
--- | ---
id | ID of the group. Provided by the server and unique.
mandant | ID of the organisation that owns the group dataset.
orgid | ID of the organisation that the group is attached to. Often the same as `mandant`, but not always so.
referrer | Referrer is the ID that the local client system uses.  It is used to map the ID provided by the registry server to the data stored in the local school management software.
bezeichnung | Describes the group.
thema | Keywords describing the theme of the group, short text, ideally less than 35 characters.
beschreibung | Additional optional description of the purpose of the group.
typ | Type of the group. Refers to code list *Gruppentyp*.
Bereich | Additional group qualifyer (mandatory, optional, basic, advanced...). Refers to code list *Gruppenbereich*.
Optionen | Additional group options. Usually referring to language used (bilingual, native language). Refers to code list *Gruppenoption*.
differenzierung | Specific differentiation in some educational branches. Refers to code list *Gruppendifferenzierung*.
bildungsziele | Educational branch. Refers to code list *Bildungsziel*.
jahrgangsstufen | Form or course level. Refers to code list *Jahrgangsstufe*.
faecher | Array to list the topics covered in the group.
faecher.kennung | Topic covered. Refers to code list *Fächerkanon*.
faecher.bezeichnung | Name of a topic if it is not in the code list *Fächerkanon*.
referenzgruppen | Array of reference groups for this group. Allows the association of members in one or more other groups to this group. The aim is to simplify the handling of courses and school classes by allowing, for example, to attach a whole class to a course, without the need to assign every student individually.
referenzgruppen.grupid | ID of the reference group.
referenzgruppe.rollen | Roles in the reference group („Gruppenrollen”) to be selected for the group. If no roles are specified, all persons are selected. (The main purpose for this filter is that a class might contain a teacher and students, but only the students from this reference group participate in another group.)
laufzeit | Defines the start and end date of a group. Both dates can be either defined by directly specifying a date or, alternatively, by associating a teaching period (like a year or a semester) with the group.
laufzeit.von | Start date of the group as a date.
laufzeit.vonlernperiode | Start date of the group as a reference to a teaching period. Refers to code list *Lernperiode*.
laufzeit.bis | End date of the group as a date.
laufzeit.bislernperiode | End date of the group as a reference to a teaching period. Refers to code list *Lernperiode*.
revision | Revision number of the information. This is mainly used to check on updates and deletes of data sets, whether there have been any changes to the data since it was retrieved by the client system.

## Gruppenzugehörigkeit

The group membership connects a person context to a group. In addition to the role a person
has in an organisation, an additional role in the group needs to be provided.

Attribute | Description
--- | ---
id | ID of the group membership. Provided by the server and unique.
mandant | ID of the organisation that owns the group dataset.
referrer | Referrer is the ID that the local client system uses. It is used to map the ID provided by the registry server to the data stored in the local school management software.
ktid | ID of the person context associated with the group.
rollen | Role of a person within the group. Refers to code list *Gruppenrolle*.
von | Begin of the group membership.
bis | End of the group membership.
revision | Revision number of the information. This is mainly used to check on updates and deletes of data sets, whether there have been any changes to the data since it was retrieved by the client system.

## Gruppendatensatz

The „group data set” is a wrapper object to link a group to a number of group memberships.

Attribute | Description
--- | ---
gruppe | Group (See [Gruppe](../datenmodell/gruppe.md)).
gruppenzugehoerigkeiten | Array of group memberships (See [Gruppenzugehörigkeit](../datenmodell/gruppenzugehörigkeit.md)).

## Sichtfreigabe

This data model allows organisations to make information about a person context
available to another organisation. Information provided as read-only. (The word
„Sichtfreigabe“ means „permission for viewing.“)

Attribute | Description
--- | ---
id | ID of the viewing permission.
orgid | ID of the organisation that is allowed to view this.
von	 | Date when access starts.
bis | Date when access ends.
revision | Revision number of the information. This is used to check on updates and deletes, whether there have been any changes to the data since it was retrieved by the client system.

## Lernperiode

A teaching period („Lernperiode”) is a time period in which organisations can offer groups.
In most cases these periods are school years or semesters.

Teaching periods are not modifiable via APIs, they are provided in the same manner as code lists.
However, as they are not simple lists, but structured objects, their structure is described here.

Attribute | Description
--- | ---
code | Code of the teaching period.
bezeichnung | Description of teaching period, for example `"Schuljahr 2023/2024"`.
typ | Type of the teaching period. Refers to codelist *Lernperiodentyp*.
beginn | Beginning date of teaching period.
ende | Ending date of teaching period.

## Beziehung

This describes a relationship between two persons (like one person being the legal guardian,
carer or tutor of another). The relation connects to person contexts.

Relationsships are of the „has a” kind. If a person context of person A has a relationship
of `SchB` with a person context (`ktid`) of person B, then A has B as a „Schulbegleiter”.

Attribute | Description
--- | ---
id | ID of the relation.
ktid | ID of the person context to the person who has the relationship. For example, if the relation is „legal guardian”, then the person with the current person context is the person with the legal guardian, while the person with the person context with the `ktid` is the legal guardian.
beziehung | Relations. Refers to code list *Beziehungen*.
revision | Revision number of the information. This is mainly used to check on updates and deletes of data sets, whether there have been any changes to the data since it was retrieved by the client system.

## Anschrift

This is the address (physical location) of, for example, an organisation.

Attribute | Description
--- | ---
postleitzahl | ZIP Code.
ort | Town name.
ortsteil | Urban district, if a more specific location than town name is required.

## Organisationsbeziehung

Describes the relationship of two organisations.

Attribute | Description
--- | ---
orgid | ID of the organisation the current organisation has a „has as“ relation.
organisationsbeziehung | Type of relation between the organisations.
