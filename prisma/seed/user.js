import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@mail.com",
      password: "admin123",
      role: "ADMIN",
    },
  });

  console.log("User created:", user.email);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
