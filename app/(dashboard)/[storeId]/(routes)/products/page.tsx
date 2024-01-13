import prismadb from "@/lib/prismadb";
import ProductClient from "./components/client";
import { ProductColumns } from "./components/columns";
import { format } from "date-fns";
import { formatter } from "@/lib/utils";

const ProductsPage = async ({
  params,
}: {
  params: {
    storeId: string;
  };
}) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      Category: true,
      Size: true,
      Color: true,
    },
  });

  const formattedProducts: ProductColumns[] = products.map((product) => ({
    //TODO: change type
    id: product.id,
    name: product.name,
    isFeatured: product.isFeatured,
    isArchived: product.isArchived,
    price: formatter.format(product.price.toNumber()),
    category: product.Category.name,
    size: product.Size.name,
    color: product.Color.name,
    createdAt: format(product.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
