import prismadb from "@/lib/prismadb";
import { CategoriesColumns } from "./components/columns";
import { format } from "date-fns";
import CategoriesClient from "./components/client";

const BillboardsPage = async ({
  params,
}: {
  params: {
    storeId: string;
  };
}) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      Billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoriesColumns[] = categories.map(
    (category) => ({
      id: category.id,
      name: category.name,
      billboardLabel: category.Billboard.label,
      createdAt: format(category.createdAt, "MMMM do, yyyy"),
    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default BillboardsPage;
