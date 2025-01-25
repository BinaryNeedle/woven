import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create roles
    const adminRole = await prisma.role.create({
        data: {
            name: 'Admin',
            description: 'Administrator role',
        },
    });

    const userRole = await prisma.role.create({
        data: {
            name: 'User',
            description: 'Regular user role',
        },
    });

    // Create users
    const user1 = await prisma.user.create({
        data: {
            username: 'jtnqr',
            email: 'user1@example.com',
            nickname: 'Julius',
            biography: 'Bio of user one',
            avatar_url: 'http://example.com/avatar1.png',
            is_online: true,
        },
    });

    const user2 = await prisma.user.create({
        data: {
            username: 'MRaihanZ',
            email: 'user2@example.com',
            nickname: 'Raihan',
            biography: 'Bio of user two',
            avatar_url: 'http://example.com/avatar2.png',
            is_online: false,
        },
    });

    const user3 = await prisma.user.create({
        data: {
            username: 'ahmadzkh',
            email: 'user3@example.com',
            nickname: 'Zaky',
            biography: 'Bio of user three',
            avatar_url: 'http://example.com/avatar3.png',
            is_online: true,
        },
    });

    // Create conversations
    const conversation1 = await prisma.conversation.create({
        data: {
            name: 'General Chat',
            is_group: true,
            conversation_member: {
                create: [
                    { user_id: user1.userId, role_id: adminRole.role_id },
                    { user_id: user2.userId, role_id: userRole.role_id },
                ],
            },
        },
    });

    const conversation2 = await prisma.conversation.create({
        data: {
            name: 'Private Chat',
            is_group: false,
            conversation_member: {
                create: [
                    { user_id: user1.userId, role_id: userRole.role_id },
                    { user_id: user3.userId, role_id: userRole.role_id },
                ],
            },
        },
    });

    // Create messages
    await prisma.message.create({
        data: {
            conversation_id: conversation1.conversation_id,
            user_id: user1.userId,
            content: 'Hello everyone!',
            status: 'delivered',
        },
    });

    await prisma.message.create({
        data: {
            conversation_id: conversation1.conversation_id,
            user_id: user2.userId,
            content: 'Hi there!',
            status: 'delivered',
        },
    });

    await prisma.message.create({
        data: {
            conversation_id: conversation2.conversation_id,
            user_id: user1.userId,
            content: 'Hey, how are you?',
            status: 'delivered',
        },
    });

    await prisma.message.create({
        data: {
            conversation_id: conversation2.conversation_id,
            user_id: user3.userId,
            content: 'I am good, thanks!',
            status: 'delivered',
        },
    });

    // Create user contacts
    await prisma.user_contact.create({
        data: {
            owner_user_id: user1.userId,
            contact_user_id: user2.userId,
            alias: 'User Two',
        },
    });

    await prisma.user_contact.create({
        data: {
            owner_user_id: user1.userId,
            contact_user_id: user3.userId,
            alias: 'User Three',
        },
    });

    await prisma.user_contact.create({
        data: {
            owner_user_id: user2.userId,
            contact_user_id: user3.userId,
            alias: 'User Three',
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
