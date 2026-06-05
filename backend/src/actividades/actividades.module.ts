import { Module } from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { ActividadesController } from './actividades.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ActividadesController],
  providers: [ActividadesService, PrismaService],
})
export class ActividadesModule {}
