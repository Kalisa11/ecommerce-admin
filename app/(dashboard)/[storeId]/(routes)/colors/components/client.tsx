"use client";

import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ColorColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

const ColorClient = ({ data }: { data: ColorColumn[] }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data?.length})`}
          description="Manage store colors"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/colors/new`)}
        >
          <Plus className="mr-2 w-4 h-4" />
          New Color
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API Reference" description="API calls for colors" />
      <Separator />
      <ApiList entityIdName="sizeId" entityName="colors" />
    </>
  );
};

export default ColorClient;
