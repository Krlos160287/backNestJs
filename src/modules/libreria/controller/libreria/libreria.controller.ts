/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Libro } from 'src/models/libro/libro.interface';
import { LibroService } from 'src/services/libreria/libro.service';

@Controller('libreria')
export class LibreriaController {
    constructor(
        private libroService: LibroService
    ) {}

    @Post('savelibros')
    addLibro(@Body() libro: Libro): any{
        return this.libroService.saveLibro(libro);
    }

    @Get('getlibros')
    getLibros(): any {
        return this.libroService.findAll();
    }

    @Get('getlibro:id')
    getOneLibro(@Param() params): any {
        return this.libroService.findOnLibro(params.id);
    }

    @Put('updatelibro/:id')
    updateLibro(@Body() libro: Libro, @Param() params): any {
        return this.libroService.updateLibro(params.id, libro);
    }

    @Delete('deletelibro/:id')
    deleteLibro(@Param() params): any {
        return this.libroService.deleteLibro(params.id);
    }
}
