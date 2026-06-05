import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ActividadesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.tarea.findMany();
  }

  create(data: { nombre: string; prioridad: string }) {
    return this.prisma.tarea.create({
      data: { ...data, completado: false },
    });
  }

  completar(id: number) {
    return this.prisma.tarea.update({
      where: { id },
      data: { completado: true },
    });
  }

  eliminar(id: number) {
    return this.prisma.tarea.delete({ where: { id } });
  }
}
