-- CreateTable
CREATE TABLE "verification_token" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATE NOT NULL
);

-- CreateTable
CREATE TABLE "session" (
    "sess_id" BIGSERIAL NOT NULL,
    "sess_user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exp_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("sess_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_token_key" ON "verification_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "session_sess_id_user_key" ON "session"("sess_user_id");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_sess_id_user_fkey" FOREIGN KEY ("sess_user_id") REFERENCES "user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
