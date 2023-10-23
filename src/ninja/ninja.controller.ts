import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjaService } from './ninja.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
@UseGuards(BeltGuard)
export class NinjaController {
  constructor(private readonly ninjaService: NinjaService){}
      // GET /ninjas --> []
  @Get()
  getNinjas(@Query('type') weapon : 'start' | 'nunchucks'){
    return this.ninjaService.getNinjas(weapon)
  }

  //Get /ninjas/:id --> {...}
  @Get(":id")
  getOneNinjas(@Param('id',ParseIntPipe ) id: number){
    try{
      return this.ninjaService.getNinja(id);
    } catch(err) {
      throw new NotFoundException("the ninja not found");
    }
  }

    //Delete /ninjas/:id --> {...}
    @Delete(":id")
    DeleteOneNinjas(@Param('id',ParseIntPipe ) id: number){
      try{
        return this.ninjaService.removeNinja(id);
      } catch(err) {
        throw new NotFoundException("the ninja not found");
      }
    }
  

    //post /ninjas 
    @Post()
    createNinjas(@Body(new ValidationPipe()) createNinjasDto :CreateNinjaDto){
      return this.ninjaService.createNinja(createNinjasDto);
    }

    @Put(':id')
    updateNinja(@Param('id',ParseIntPipe ) id: number , @Body(new ValidationPipe()) updateNinjaDto :UpdateNinjaDto)
    {
      return this.ninjaService.updateNinja(id,updateNinjaDto)
    }
}
