-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('Male', 'Female', 'None');

-- CreateEnum
CREATE TYPE "AccountRole" AS ENUM ('Public', 'Administrator');

-- CreateEnum
CREATE TYPE "ActorRole" AS ENUM ('Member', 'Owner');

-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('OwnerOnly', 'MemoryOnly', 'TimelineOnly', 'ChatOnly');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "vk_id" TEXT,
    "vk_avatar" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "passkey" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "birthday" DATE,
    "sex" "Sex" NOT NULL DEFAULT 'None',
    "roles" "AccountRole"[],
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upload" (
    "id" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT,
    "ext" TEXT,
    "permissions" "Permission"[],
    "avatar_id" TEXT,
    "owner_id" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "Upload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avatar" (
    "id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "owner_id" TEXT,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageTarget" (
    "id" TEXT NOT NULL,
    "message_id" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "readed_at" DATE,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "MessageTarget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Actor" (
    "id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "role" "ActorRole" NOT NULL,
    "started" TIMESTAMP(3) NOT NULL,
    "completed" TIMESTAMP(3),
    "timeline_id" TEXT,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "Actor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeline" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "is_root" BOOLEAN NOT NULL DEFAULT false,
    "started" TIMESTAMP(3) NOT NULL,
    "completed" TIMESTAMP(3),
    "chat_id" TEXT,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Memory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "short_name" TEXT,
    "description" TEXT NOT NULL,
    "chat_id" TEXT,
    "owner_id" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "Memory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "memory_id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChatMember" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MessageUploads" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MemberActors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MemoryUploads" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CommentUploads" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_vk_id_key" ON "Account"("vk_id");

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Avatar_owner_id_key" ON "Avatar"("owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "Timeline_chat_id_key" ON "Timeline"("chat_id");

-- CreateIndex
CREATE UNIQUE INDEX "Memory_chat_id_key" ON "Memory"("chat_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ChatMember_AB_unique" ON "_ChatMember"("A", "B");

-- CreateIndex
CREATE INDEX "_ChatMember_B_index" ON "_ChatMember"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MessageUploads_AB_unique" ON "_MessageUploads"("A", "B");

-- CreateIndex
CREATE INDEX "_MessageUploads_B_index" ON "_MessageUploads"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MemberActors_AB_unique" ON "_MemberActors"("A", "B");

-- CreateIndex
CREATE INDEX "_MemberActors_B_index" ON "_MemberActors"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MemoryUploads_AB_unique" ON "_MemoryUploads"("A", "B");

-- CreateIndex
CREATE INDEX "_MemoryUploads_B_index" ON "_MemoryUploads"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CommentUploads_AB_unique" ON "_CommentUploads"("A", "B");

-- CreateIndex
CREATE INDEX "_CommentUploads_B_index" ON "_CommentUploads"("B");

-- AddForeignKey
ALTER TABLE "Upload" ADD CONSTRAINT "Upload_avatar_id_fkey" FOREIGN KEY ("avatar_id") REFERENCES "Avatar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upload" ADD CONSTRAINT "Upload_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTarget" ADD CONSTRAINT "MessageTarget_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageTarget" ADD CONSTRAINT "MessageTarget_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actor" ADD CONSTRAINT "Actor_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actor" ADD CONSTRAINT "Actor_timeline_id_fkey" FOREIGN KEY ("timeline_id") REFERENCES "Timeline"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timeline" ADD CONSTRAINT "Timeline_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Memory" ADD CONSTRAINT "Memory_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Memory" ADD CONSTRAINT "Memory_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_memory_id_fkey" FOREIGN KEY ("memory_id") REFERENCES "Memory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatMember" ADD CONSTRAINT "_ChatMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChatMember" ADD CONSTRAINT "_ChatMember_B_fkey" FOREIGN KEY ("B") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MessageUploads" ADD CONSTRAINT "_MessageUploads_A_fkey" FOREIGN KEY ("A") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MessageUploads" ADD CONSTRAINT "_MessageUploads_B_fkey" FOREIGN KEY ("B") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberActors" ADD CONSTRAINT "_MemberActors_A_fkey" FOREIGN KEY ("A") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberActors" ADD CONSTRAINT "_MemberActors_B_fkey" FOREIGN KEY ("B") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemoryUploads" ADD CONSTRAINT "_MemoryUploads_A_fkey" FOREIGN KEY ("A") REFERENCES "Memory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemoryUploads" ADD CONSTRAINT "_MemoryUploads_B_fkey" FOREIGN KEY ("B") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommentUploads" ADD CONSTRAINT "_CommentUploads_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CommentUploads" ADD CONSTRAINT "_CommentUploads_B_fkey" FOREIGN KEY ("B") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;
