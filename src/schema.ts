import { createSchema } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const schema = createSchema({
  typeDefs: `
  type Query {
      conversations: [Conversation!]!
      conversation(id: Int!): Conversation
      users: [User!]!
      user(id: Int!): User
      messages(conversationId: Int!): [Message!]!
      roles: [Role!]!
    }

    type Mutation {
      createConversation(name: String, isGroup: Boolean): Conversation!
      createMessage(conversationId: Int!, userId: Int!, content: String!): Message!
      createUser(username: String!, email: String!): User!
      updateUserStatus(userId: Int!, isOnline: Boolean!): User!
    }

    type Conversation {
      conversationId: Int!
      name: String
      isGroup: Boolean
      createdAt: String
      members: [ConversationMember!]!
      messages: [Message!]!
    }

    type ConversationMember {
      conversationMemberId: Int!
      conversationId: Int!
      userId: Int!
      roleId: Int!
      joinedAt: String
      conversation: Conversation!
      role: Role!
      user: User!
    }

    type Message {
      messageId: Int!
      conversationId: Int!
      userId: Int!
      content: String!
      status: MessageStatus
      sentAt: String
      conversation: Conversation!
      user: User!
    }

    type Role {
      roleId: Int!
      name: String!
      description: String
      members: [ConversationMember!]!
    }

    type User {
      userId: Int!
      username: String!
      email: String!
      nickname: String
      biography: String
      avatarUrl: String
      lastSeen: String
      isOnline: Boolean
      createdAt: String
      updatedAt: String
      contacts: [UserContact!]!
    }

    type UserContact {
      userContactId: Int!
      ownerUserId: Int!
      contactUserId: Int!
      alias: String!
      createdAt: String
      updatedAt: String
      owner: User!
      contact: User!
    }

    enum MessageStatus {
      pending
      delivered
      read
    }

    type Error {
      message: String!
    }
  `,
  resolvers: {
    Query: {
      conversations: () => prisma.conversation.findMany(),
      conversation: (_: unknown, { id }: { id: number }) =>
        prisma.conversation.findUnique({ where: { conversation_id: id } }),
      users: () => prisma.user.findMany(),
      user: (_: unknown, { id }: { id: number }) =>
        prisma.user.findUnique({ where: { user_id: id } }),
      messages: (_: unknown, { conversationId }: { conversationId: number }) =>
        prisma.message.findMany({ where: { conversation_id: conversationId } }),
      roles: () => prisma.role.findMany(),
    },
    Mutation: {
      createConversation: (_: unknown, { name, isGroup }: { name?: string; isGroup?: boolean }) =>
        prisma.conversation.create({ data: { name, is_group: isGroup } }),
      createMessage: (
        _: unknown,
        { conversationId, userId, content }: { conversationId: number; userId: number; content: string }
      ) => prisma.message.create({ data: { conversation_id: conversationId, user_id: userId, content } }),
      createUser: async (_: unknown, { username, email }: { username: string; email: string }) => {
        try {
          const existingUser = await prisma.user.findUnique({ where: { username } })
          if (existingUser) {
            throw new Error("Username is already taken.")
          }

          const newUser = await prisma.user.create({
            data: { username, email },
          })

          return {
            userId: newUser.user_id,
            username: newUser.username,
            email: newUser.email,
            nickname: newUser.nickname,
            biography: newUser.biography,
            avatarUrl: newUser.avatar_url,
            lastSeen: newUser.last_seen?.toISOString(),
            isOnline: newUser.is_online,
            createdAt: newUser.created_at?.toISOString(),
            updatedAt: newUser.updated_at?.toISOString(),
          }
        } catch (error) {
          console.error(error)
          throw new Error("Failed to create user: " + error.message)
        }
      },
      updateUserStatus: (_: unknown, { userId, isOnline }: { userId: number; isOnline: boolean }) =>
        prisma.user.update({ where: { user_id: userId }, data: { is_online: isOnline } }),
    },
    Conversation: {
      members: (parent: any) => prisma.conversation_member.findMany({ where: { conversation_id: parent.conversation_id } }),
      messages: (parent: any) => prisma.message.findMany({ where: { conversation_id: parent.conversation_id } }),
    },
    ConversationMember: {
      conversation: (parent: any) => prisma.conversation.findUnique({ where: { conversation_id: parent.conversation_id } }),
      role: (parent: any) => prisma.role.findUnique({ where: { role_id: parent.role_id } }),
      user: (parent: any) => prisma.user.findUnique({ where: { user_id: parent.user_id } }),
    },
    Message: {
      conversation: (parent: any) => prisma.conversation.findUnique({ where: { conversation_id: parent.conversation_id } }),
      user: (parent: any) => prisma.user.findUnique({ where: { user_id: parent.user_id } }),
    },
    User: {
      contacts: (parent: any) => prisma.user_contact.findMany({ where: { owner_user_id: parent.user_id } }),
    },
    UserContact: {
      owner: (parent: any) => prisma.user.findUnique({ where: { user_id: parent.owner_user_id } }),
      contact: (parent: any) => prisma.user.findUnique({ where: { user_id: parent.contact_user_id } }),
    },
  },
})
