import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ActividadesService } from './actividades.service';

@Controller('actividades')
export class ActividadesController {
  constructor(private readonly actividadesService: ActividadesService) {}

  @Get()
  findAll() {
    return this.actividadesService.findAll();
  }

  @Post()
  create(@Body() body: { nombre: string; prioridad: string }) {
    return this.actividadesService.create(body);
  }

  @Patch(':id/completar')
  completar(@Param('id') id: string) {
    return this.actividadesService.completar(Number(id));
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.actividadesService.eliminar(Number(id));
  }
}
