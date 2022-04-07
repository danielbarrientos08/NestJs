import { Injectable } from '@nestjs/common';
import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private idCounter = 3;
  private products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur vero aperiam laudantium tenetur, doloribus distinctio, quidem eius amet, sit ex. Possimus recusandae culpa consequatur rem tenetur officiis soluta ea.',
      price: 134,
      image: '',
      stock: 12,
    },
    {
      id: 2,
      name: 'Producto 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur vero aperiam laudantium tenetur, doloribus distinctio, quidem eius amet, sit ex. Possimus recusandae culpa consequatur rem tenetur officiis soluta ea.',
      price: 134,
      image: '',
      stock: 12,
    },
    {
      id: 3,
      name: 'Producto 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur vero aperiam laudantium tenetur, doloribus distinctio, quidem eius amet, sit ex. Possimus recusandae culpa consequatur rem tenetur officiis soluta ea.',
      price: 134,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.idCounter = this.idCounter + 1;
    const newProduct = {
      id: this.idCounter,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}
