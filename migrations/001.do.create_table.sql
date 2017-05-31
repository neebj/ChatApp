CREATE TABLE IF NOT EXISTS "companies"(
  "id"                              SERIAL            PRIMARY KEY  NOT NULL,
  "name"                            VARCHAR(100)      NOT NULL,
  "createdAt"                       TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"                       TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP
);
