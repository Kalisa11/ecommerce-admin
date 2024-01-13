"use client";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumns, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

const ProductClient = ({ data }: { data: ProductColumns[] }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data?.length})`}
          description="Manage store products"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 w-4 h-4" />
          New Product
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API Reference" description="API calls for products" />
      <Separator />
      <ApiList entityIdName="productId" entityName="products" />
    </>
  );
};

export default ProductClient;
