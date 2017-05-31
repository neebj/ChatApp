CREATE TABLE IF NOT EXISTS "organizations"(
  "id"                              SERIAL            PRIMARY KEY  NOT NULL,
  "name"                            VARCHAR(100)      NOT NULL,
  "createdAt"                       TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"                       TIMESTAMP         NOT NULL DEFAULT CURRENT_TIMESTAMP
);
