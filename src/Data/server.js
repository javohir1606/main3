export const category = async () => {
  try {
    const res = await fetch(`https://product-feedback-data.vercel.app/category`);
    const data = res.json();

    return data;
  } catch (error) {
    return error.message;
  }
}


export const categoryData = async (item) => {
  
  try {
    const res = await fetch(`https://product-feedback-data.vercel.app/${item || 'all'}`);
    const data = res.json();

    return data;
  } catch (error) {
    return error.message;
  }
}