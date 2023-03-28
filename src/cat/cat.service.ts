import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './cat.schema';
import { CatInputType, CatType } from './cat.dto';

@Injectable()
export class CatService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().populate({ path: 'owner', select: 'name cats' }).exec();
    }
    async create(createCatDto: CatInputType): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }
    async update(id: string, updateCatDto: CatInputType): Promise<Cat> {
        return this.catModel.findByIdAndUpdate(id, updateCatDto);
    }
    async delete(id: string): Promise<Cat> {
        return this.catModel.findByIdAndDelete(id);
    }
}