import { GraphQLError } from 'graphql';
import { PrismaClient } from '@prisma/client';
import { createSchema } from 'graphql-yoga';

const prisma = new PrismaClient()

// Core interfaces
interface Context {
  prisma: PrismaClient;
}

interface Parent {
  [key: string]: any;
}

interface ConversationParent extends Parent {
  conversation_id: number;
}

interface MessageParent extends Parent {
  conversation_id: number;
  user_id: number;
}

interface UserContactParent extends Parent {
  owner_user_id: number;
  contact_user_id: number;
}

interface ConversationMemberParent extends Parent {
  conversation_id: number;
  role_id: number;
  user_id: number;
}

// Subscription types
interface Message {
  messageId: number;
  conversationId: number;
  content: string;
  userId: number;
}

interface UserStatus {
  userId: number;
  isOnline: boolean;
}

const typeDefs = `#graphql
  type Query {
    conversations: [Conversation!]!
    conversation(id: Int!): Conversation
    users: [User!]!
    user(id: Int!): User
    messages(conversationId: Int!): [Message!]!
    roles: [Role!]!
    userContacts(userId: Int!): [UserContact!]!
    hello: String
  }

  type Mutation {
    createConversation(name: String, isGroup: Boolean): Conversation!
    createMessage(conversationId: Int!, userId: Int!, content: String!): Message!
    createUser(username: String!, email: String!, nickname: String, biography: String): User!
    updateUserStatus(userId: Int!, isOnline: Boolean!): User!
    updateUser(userId: Int!, nickname: String, biography: String, avatarUrl: String): User!
    addUserContact(ownerUserId: Int!, contactUserId: Int!, alias: String!): UserContact!
    deleteUserContact(userContactId: Int!): Boolean!
  }

  type Conversation {
    conversationId: Int!
    name: String
    isGroup: Boolean
    createdAt: String
    members: [ConversationMember!]!
    messages: [Message!]!
    membersCount: Int!
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

  type Subscription {
      newMessage(conversationId: Int!): Message!
      userStatusChanged(userId: Int!): User!
    }
  `;

const resolvers = {
  Query: {
    conversations: (_: unknown, __: unknown, { prisma }: Context) =>
      prisma.conversation.findMany(),

    conversation: async (_: unknown, { id }: { id: number }, { prisma }: Context) => {
      const conversation = await prisma.conversation.findUnique({
        where: { conversation_id: id }
      });
      if (!conversation) throw new GraphQLError('Conversation not found');
      return conversation;
    },

    users: (_: unknown, __: unknown, { prisma }: Context) =>
      prisma.user.findMany(),

    user: async (_: unknown, { id }: { id: number }, { prisma }: Context) => {
      const user = await prisma.user.findUnique({ where: { user_id: id } });
      if (!user) throw new GraphQLError('User not found');
      return user;
    },

    messages: (_: unknown, { conversationId }: { conversationId: number }, { prisma }: Context) =>
      prisma.message.findMany({
        where: { conversation_id: conversationId },
        orderBy: { sent_at: 'desc' }
      }),

    roles: (_: unknown, __: unknown, { prisma }: Context) =>
      prisma.role.findMany(),

    userContacts: (_: unknown, { userId }: { userId: number }, { prisma }: Context) =>
      prisma.user_contact.findMany({ where: { owner_user_id: userId } }),

    hello: () => "Hello World!",
  },

  Mutation: {
    createConversation: async (
      _: unknown,
      { name, isGroup }: { name?: string; isGroup?: boolean },
      { prisma }: Context
    ) => prisma.conversation.create({
      data: { name, is_group: isGroup || false }
    }),

    createMessage: async (
      _: unknown,
      { conversationId, userId, content }: { conversationId: number; userId: number; content: string },
      { prisma }: Context
    ) => {
      const [conversation, user] = await Promise.all([
        prisma.conversation.findUnique({ where: { conversation_id: conversationId } }),
        prisma.user.findUnique({ where: { user_id: userId } })
      ]);

      if (!conversation) throw new GraphQLError('Conversation not found');
      if (!user) throw new GraphQLError('User not found');

      return prisma.message.create({
        data: {
          conversation_id: conversationId,
          user_id: userId,
          content,
          status: 'pending'
        }
      });
    },

    createUser: async (
      _: unknown,
      { username, email, nickname, biography }: {
        username: string;
        email: string;
        nickname?: string;
        biography?: string
      },
      { prisma }: Context
    ) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) throw new GraphQLError("Invalid email format");

      const existingUser = await prisma.user.findFirst({
        where: { OR: [{ username }, { email }] }
      });

      if (existingUser) {
        throw new GraphQLError(
          existingUser.username === username
            ? "Username is already taken"
            : "Email is already taken"
        );
      }

      return prisma.user.create({
        data: { username, email, nickname, biography, is_online: false }
      });
    },

    updateUserStatus: async (
      _: unknown,
      { userId, isOnline }: { userId: number; isOnline: boolean },
      { prisma }: Context
    ) => {
      const user = await prisma.user.findUnique({ where: { user_id: userId } });
      if (!user) throw new GraphQLError('User not found');

      return prisma.user.update({
        where: { user_id: userId },
        data: {
          is_online: isOnline,
          last_seen: new Date()
        }
      });
    }
  },

  Conversation: {
    members: (parent: ConversationParent, _: unknown, { prisma }: Context) =>
      prisma.conversation_member.findMany({
        where: { conversation_id: parent.conversation_id }
      }),

    messages: (parent: ConversationParent, _: unknown, { prisma }: Context) =>
      prisma.message.findMany({
        where: { conversation_id: parent.conversation_id },
        orderBy: { sent_at: 'desc' }
      }),

    membersCount: (parent: ConversationParent, _: unknown, { prisma }: Context) =>
      prisma.conversation_member.count({
        where: { conversation_id: parent.conversation_id }
      })
  },

  ConversationMember: {
    conversation: async (parent: ConversationMemberParent, _: unknown, { prisma }: Context) => {
      const conversation = await prisma.conversation.findUnique({
        where: { conversation_id: parent.conversation_id }
      });
      if (!conversation) throw new GraphQLError('Conversation not found');
      return conversation;
    },

    role: async (parent: ConversationMemberParent, _: unknown, { prisma }: Context) => {
      const role = await prisma.role.findUnique({
        where: { role_id: parent.role_id }
      });
      if (!role) throw new GraphQLError('Role not found');
      return role;
    },

    user: async (parent: ConversationMemberParent, _: unknown, { prisma }: Context) => {
      const user = await prisma.user.findUnique({
        where: { user_id: parent.user_id }
      });
      if (!user) throw new GraphQLError('User not found');
      return user;
    }
  },

  Message: {
    conversation: async (parent: MessageParent, _: unknown, { prisma }: Context) => {
      const conversation = await prisma.conversation.findUnique({
        where: { conversation_id: parent.conversation_id }
      });
      if (!conversation) throw new GraphQLError('Conversation not found');
      return conversation;
    },

    user: async (parent: MessageParent, _: unknown, { prisma }: Context) => {
      const user = await prisma.user.findUnique({
        where: { user_id: parent.user_id }
      });
      if (!user) throw new GraphQLError('User not found');
      return user;
    }
  },

  Subscription: {
    newMessage: {
      subscribe: async function* (_: unknown, { conversationId }: { conversationId: number }) {
        while (true) {
          const message: Message = await new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                messageId: Date.now(),
                conversationId,
                content: 'Test message',
                userId: 1 // Mock user ID
              });
            }, 1000);
          });
          yield { newMessage: message };
        }
      }
    },

    userStatusChanged: {
      subscribe: async function* (_: unknown, { userId }: { userId: number }) {
        while (true) {
          const updatedUser: UserStatus = await new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                userId,
                isOnline: true
              });
            }, 1000);
          });
          yield { userStatusChanged: updatedUser };
        }
      }
    }
  }
};

export const schema = createSchema({
  typeDefs,
  resolvers
});
