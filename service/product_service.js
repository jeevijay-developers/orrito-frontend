import apiClient from "./axiosInstance";

export const getAllProducts = async (data) => {
    try {
        const res = await apiClient.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/all-products`, data);
        console.log('Featured products data: ', res.data);
        if( !res || !res.data){
            console.error('No data found for featured products');
            return [];
        }
        return res.data;
    } catch (error) {
        console.error('Error fetching featured products: ', error);
        return [];
    }
}

export const getProductBySlug = async (slug) => {
    try {
        const res = await apiClient.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/product/by-slug/${slug}`);
        console.log('Product data by slug: ', res.data);
        if (!res || !res.data) {
            console.error('No data found for product by slug');
            return null;
        }
        return res.data;
    } catch (error) {
        console.error('Error fetching product by slug: ', error);
        return null;
    }
}