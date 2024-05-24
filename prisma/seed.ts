const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

async function main() {
  // Créer des catégories de base
  const category1 = await prisma.category.create({
    data: {
      name: "Electronics",
      description: "Devices and gadgets",
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: "Books",
      description: "Various books",
    },
  });

  // Créer des produits
  const product1 = await prisma.products.create({
    data: {
      name: "GP11 Shooter USB Gamepad",
      price: 660.99,
      description: "Latest model with advanced features",
      couverture: fs.readFileSync(
        path.join(__dirname, "images", "GP11_PRD3.png")
      ),
      color: "Black",
      size: "6.1 inches",
      categoryId: category1.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const product2 = await prisma.products.create({
    data: {
      name: "ASUS FHD Gaming Laptop",
      price: 1299.99,
      description: "High performance laptop",
      couverture: fs.readFileSync(
        path.join(__dirname, "images", "ideapad-gaming-3i-01-500x500.png")
      ),
      color: "Silver",
      size: "15 inches",
      categoryId: category1.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Ajouter des images aux produits
  await prisma.images.create({
    data: {
      images: [
        fs.readFileSync(path.join(__dirname, "images", "GP11_PRD3.png")),
      ],
      productId: product1.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.images.create({
    data: {
      images: [
        fs.readFileSync(
          path.join(__dirname, "images", "ideapad-gaming-3i-01-500x500.png")
        ),
      ],
      productId: product2.id,
      createdAt: new Date(),
      updatedAt: new Date(),
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
