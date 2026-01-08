const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@gmail.com",
      password: "admin123",
      role: "ADMIN",
    },
  });

  console.log("User created: admin@gmail.com");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
