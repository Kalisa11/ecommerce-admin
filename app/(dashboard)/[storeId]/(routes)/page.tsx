import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage = async ({ params }: DashboardPageProps) => {
  const { storeId } = params;

  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
    },
  });
  return (
    <div className="p-4">
      DashboardPage
      <div>Active store is : {store?.name}</div>
    </div>
  );
};

export default DashboardPage;
