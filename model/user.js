import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioModel {
  async findAll() {
    return await prisma.user.findMany();
  }

  async findById(id) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data) {
    return await prisma.user.create({
      data,
    });
  }

  async update(id, data) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}

export default new UsuarioModel();
