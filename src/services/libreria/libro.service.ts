import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LibroDto } from 'src/models/libro/libro.dto';
import { LibroEntity } from 'src/modules/libreria/entity/libro-entity./libro-entity.';
import { Repository } from 'typeorm';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(LibroEntity)
    private readonly libroRp: Repository<LibroEntity>,
  ) {}

  async saveLibro(libroDto: LibroDto) {
    await this.libroRp.insert(libroDto);
    return libroDto;
  }

  async updateLibro(id: number, libroDto: LibroDto) {
    await this.libroRp.update(id, libroDto);
  }

  async findAll() {
    return await this.libroRp.find();
  }

  async findOnLibro(id: number) {
    return await this.libroRp.findOneBy({ id: id });
  }

  async deleteLibro(id: number) {
    return await this.libroRp.delete(id);
  }
}
