const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@mail.com",
      password: "admin123",
      role: "ADMIN",
    },
  });

  console.log("User created: admin@mail.com");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
