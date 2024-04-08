import productSchema from '../schemas/productSchema';

export const getProductsService = async (_req: any, res: any) => {
    try {
        const products = await productSchema.find({ $or: [{ inStock: true }, { stock: true }] });
        res.json(products);
    } catch (error) {
        handleError(res, error, 'Error in get Products');
    }
};

export const ProductPriceService = async (req: any, res: any) => {
    try {
        const product = (await productSchema.find({})).find(item => item._id == req.params.user_id && item.name == req.params.product_name);
        res.json(product || {});
    } catch (error) {
        handleError(res, error, 'Error in Price Products');
    }
};

export const handleError = (res: any, error: any, message: any) => {
    console.error(message, error);
    res.status(500).json({ error: message });
};
