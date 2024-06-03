# Code Lists

The API uses a number of code lists for many of the attributes, to ensure that attribute values
are consistent and that implementations do not use different representations for the same data.

All codes in code lists are considered case-insensitive, so „SCHULE”, „schule”, „Schule” and
„ScHuLe” are considered equivalent and valid.

As most of the codes map to meanings that are reflected in the GUI of software used in schools,
translating the meaning of the individual codes will likely not to be of much use. For providing
the GUI of a tool used in schools, it will be necessary to work with someone who has a good
understanding of the German language.

However, it is not necessary to understand the meaning of the individual codes to be able
to use the API itself.  To provide some basic idea of the purpose of the individual code lists,
a short description of all lists is provided, though a translation of the individual codes is not given.

Code list name | Description
--- | ---
Personenstatus | This is used to describe whether the dataset for a person is currently active.
Geschlecht  | Options for the sex of a person (male/female/divers/not-given).
Rolle | The role within an organisation, such as student, teacher or administrator.
Vertrauensstufe | Verification level of the owner of a (digital access) key, from untrusted or unknown to fully trusted.
Organisationstyp | Type of an organisation. Usually a school, but can be an external provider of educational content.
Jahrgangsstufe | Describes which form or level a student is in and for which a course is suitable for.
Boolean | Defines what terms are used for boolean values („ja” for true and „nein” for false).
Trägerschaft | The „ownership” of an organisation. Describes whether it is owned by the state, the county, the church or privately owned.
Lokalisierung | Provides localisation information. Usually „de-DE“ to denote German language content.
Gruppenbereich | Denotes whether participation in a group is optional („Wahl”), mandatory („Pflicht”) or a combination of both for its members.
Gruppendifferenzierung | An attribute to specify a specific level of a course. Conceptually similar to denoting courses in the UK education system as „A-Level” or „O-Level“ courses.
Gruppenoption | Currently there are only two options available, one being „bilingual” and the other „taught in (students’s) native language”.
Gruppentyp | Classification of a group as „class”, „course“ or „other”. Classes are generally mandatory, while courses are often optional.
Gruppenrolle | Similar to „Rolle”, but as this refers to roles in a group and not in an organisation, the options differ slightly. For example, groups cannot have system administrator, while organisations don't have group leaders.
Lernperiode | A teaching period, usually a year or a semester (trimesters are rare in Germany). A more specific description of the structure of codes from this list is given in 13.1.9 Lernperiode.
Lernperiodentyp | Type (essentially the length) of a teaching period Year or half-year
Fächerkanon | Subjects that can be taught in a class or course. Such as biology, French or natural sciences.
Bildungsziel | Type of school, based on likely qualification level upon leaving.
Erreichbarkeitstyp | Type of a channel that can be used to contact a person or organisation.
Beziehungen | Relations that can exist between two people, such as legal guardian, tutor or carer.
Organisationsbeziehungen | Relations between organisations, often between a school and its supervising authority.
