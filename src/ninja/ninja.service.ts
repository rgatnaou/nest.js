import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjaService {
    private ninjas = [
        {id: 0, name: 'ninja1', weapon: 'stars'},
        {id: 1, name: 'ninja2', weapon: 'nunchucks'},
    ];

    getNinjas(weapon?: 'start' | 'nunchucks'){
        if(weapon){
            return this.ninjas.filter((ninja)=>ninja.weapon === weapon);
        }
        return this.ninjas;
    }
    getNinja(id:number){
        const ninja = this.ninjas.find((ninja) => ninja.id === id);
        if (!ninja){
            throw new Error("ninja not found");
        }
        return ninja;
    }
    createNinja(createNinja :CreateNinjaDto){
        const ninja ={
            weapon: "stars",
            id: Date.now(),
            ...createNinja,
        };
        this.ninjas.push(ninja);
        return ninja;
    }
    updateNinja(id: number, updateNinja :UpdateNinjaDto){
        this.ninjas = this.ninjas.map((ninja)=>{
            if (ninja.id === id )
                return {...ninja,...updateNinja}
            return ninja;
        })
        return this.getNinja(id);
    }
    removeNinja(id: number){
        const ninja = this.getNinja(id);
       this.ninjas = this.ninjas.filter((ninja)=> (ninja.id !== id))
       return ninja;
    }
}
