import * as productService from '../services/productsService';

export const getProducts = async (_req: any, res: any) => {
    return await productService.getProductsService(_req, res);
};

export const ProductPrice = async (_req: any, res: any) => {
    return await productService.ProductPriceService(_req, res);
};
